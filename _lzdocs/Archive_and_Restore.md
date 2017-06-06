---
cid: 04
chapter: Backend Administration
did: 03
title: Archive and Restore
---



LogZilla provides the ability to archive old data and later re-import that data should users need to access and search it later on. This helps users with smaller systems or low disk space to keep historical logs without the need to index all of them at all times.

Archival is particularly useful in environments where users need to be able to search and run reports on events within the last week or month, but may only periodically need to access events from a year ago.

## Archiving Old Logs
To archive LogZilla data, your system admin may use a script provided in the logzilla user's src/bin directory. Syntax is provided using the `-h` option, for example:


    logzilla@myserver:~$ /home/logzilla/src/bin/lz5archive -h
        usage: lz5archive [-h] [-q] [-d] [-n] {archive,restore} ...

        LogZilla archive/restore tool

        positional arguments:
          {archive,restore}
            archive          Archive
            restore          Restore

        optional arguments:
          -h, --help         show this help message and exit
          -q, --quiet        Notify only on warnings and errors (be quiet).
          -d, --debug        Debug mode
          -n, --dry-run      Dry run

#### Sample Archive Run

To archive all events older than 3 days (the minimum), simply type:
> Note: Be sure that the destination directory exists and is owned by the `logzilla` user.

`/home/logzilla/src/bin/lz5archive archive -O /mnt/archives/logzilla -E 3`

Which would archive all events older than 3 days to the /mnt/archives/logzilla directory

## Verifying Archives

To verify an archive, run the following command:

`/home/logzilla/src/bin/lz5arclist -i /mnt/archives/myfile.zip`
> Replace `myfile.zip` with the name of your actual archive file.


## Restoring Archives

To restore an old archive, type the following command:

`/home/logzilla/src/bin/lz5archive restore -i /mnt/archives/myfile.zip`
> Note that very large archives may take some time to re-index.


## Automating Archives via Cron

The following script may be used to auto-generate a cron file which will archive all data older than 7 days and keep all archives for 1 year:

***Step 1***

Change `archive_days` and `purge_days` below to suit your needs (paste this into a terminal as the `root` user):
  
    export  archive_days=7
    export  purge_days=365

***Step 2***  
Paste the following into the same terminal from above:

    cat << EOF > /etc/cron.d/lz5archive
    # Run archive tool (as the logzilla user) every day at midnight.
    # This will archive all data older than ${archive_days} days
    # Be sure that /var/logzilla/archives/ exists and is owned by the "logzilla" user!
    0 0 * * * logzilla /home/logzilla/src/bin/lz5archive archive -O /var/logzilla/archives/ -E ${archive_days} >> /var/log/logzilla/archive.log  2>&1
    
    # The default is to keep archives for 365 days
    0 0 * * * logzilla find /var/logzilla/archives/ -mtime +${purge_days} -exec rm '{}' ';' >> /var/log/logzilla/archive.log  2>&1
    EOF
    mkdir -p /var/logzilla/archives/
    chown -R logzilla:logzilla /var/logzilla


CentOS/RHEL
-----
Note for CentOS/RHEL Users - you must precede the command above with the python virtual environment, for example:

    0 0 * * * logzilla (source /opt/venv/lz5/bin/activate; /home/logzilla/src/bin/lz5archive archive -O /var/logzilla/archives/ -E ${archive_days} >> /var/log/logzilla/archive.log)

<span style="color:orange">***Initial Archive of Large Datasets***</span>
-----
After implementing the cron method above, the first archive may be extremely large if you have many more days of data than what was set for `${archive_days}`. For example, if the server has 90 days worth of data and `${archive_days}` is set for 7 days, the first run will contain a single archive of 83 days, which may result in a single archive file that is TB's in size and would take a very long time to run.

A more preferential option is to manually run an initial archive prior to implementing the cron method above so that each day greater than `${archive_days}` is in a single file per day. This also makes restoring archives much easier (and faster) later on. 

The following commands will reduce the initial large dataset archive time by *hours* or even *days*.
>Note: This only needs to be done once. The cron file above will archive a single day at a time after this.

    # All commands below should be done as the root user.
    # The example below assumes an archival of all data older than 90 days.
    # keeping only 7 days of data "online" and archiving the rest.
    ~logzilla/src/bin/lz5manage --stop
    service influxdb stop
    cd /var/lib/influxdb
    mkdir -p tmp-delete-me/data
    mkdir tmp-delete-me/wal
    mv data/lz5* tmp-delete-me/data
    mv wal/lz5* tmp-delete-me/wal
    service influxdb start
    curl -POST http://localhost:8086/query --data-urlencode "q=CREATE DATABASE lz5results" >/dev/null 2>&1
    curl -POST http://localhost:8086/query --data-urlencode "q=CREATE DATABASE lz5aggregates" >/dev/null 2>&1
    curl -POST http://localhost:8086/query --data-urlencode "q=CREATE DATABASE lz5rusage" >/dev/null 2>&1
    curl -POST http://localhost:8086/query --data-urlencode "q=CREATE DATABASE lz5localhost" >/dev/null 2>&1
    ~logzilla/src/bin/lz5manage --start
    for i in {90..7..1};  do echo "Archiving data > than ${i} days"; /home/logzilla/src/bin/lz5archive archive -O /var/logzilla/archives/ -E ${i}  >> /var/log/logzilla/archive.log  2>&1; done
    ~logzilla/src/bin/lz5aggregates -F $(date -d "7 days ago" +"%Y-%m-%d") && ~logzilla/src/bin/lz5manage --restart
>note: You may see `lz5.aggregates CRITICAL updating counter` in the output, this notification is harmless and should be ignored.

  
You can follow the archival process in a separate window using:

    tail -f /var/log/logzilla/archive.log
