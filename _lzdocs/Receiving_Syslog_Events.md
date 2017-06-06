---
cid: 04
chapter: Backend Administration
did: 01
title: Receiving Syslog Events
---



LogZilla's Syslog-ng Configuration
-----

LogZilla includes some pre-configured rules to help users get the most our of their incoming event information.
All of LogZilla's rules are store in the `/etc/syslog-ng/conf.d` directory. For Ubuntu servers, the files are separated for readability, on CentOS/RHEL, these files are concatenated into a single file due to limitations of the RPM build process.

Each file name is separated by a `.` indicating its role, such as a `filter` or `rewrite rule`.

For example:

    001.logzilla.global.conf
    002.logzilla.sources.conf
    003.logzilla.rewrites.cisco.conf
    003.logzilla.rewrites.hp-procurve.conf
    003.logzilla.rewrites.ip.conf
    003.logzilla.rewrites.junk-programs.conf
    003.logzilla.rewrites.netscreen.conf
    003.logzilla.rewrites.openam.conf
    003.logzilla.rewrites.pfsense.conf
    003.logzilla.rewrites.program-basename.conf
    003.logzilla.rewrites.snare.conf
    003.logzilla.rewrites.snmptraps.conf
    004.logzilla.templates.conf
    005.logzilla.destinations.conf
    006.logzilla.log-outputs.conf



## Negative filters in syslog-ng
In most cases, users should not need to modify any of these files unless a special case is needed, such as implementing a `not filter` statement.
For example, suppose you want to exclude a host from logging to LogZilla, but still let it log to a file.

    # filter(f_log_to_disk_only);
    filter f_log_to_disk_only {
      not host("host1") and not host("host2");
    };

Save that file in `/etc/syslog-ng/conf.d/myrule.conf`.

The filter then needs to be added to LogZilla's `log{}` statement.
>Note: The LogZilla templates may be overwritten in future updates so be sure that any customized changes made to our template files are still in place after upgrading.

`vi /home/logzilla/src/templates/syslog-ng/006.logzilla.log-outputs.conf`

The default looks like this:

    log {
      source(s_logzilla);
      # disable s_src if you don't want local server events
      source(s_src);
      #rewrite(r_snmptrapd);
      rewrite(rw_pfSense_DHCP);
      rewrite(rw_pfSense_DHCP_INFORM);
      rewrite(rw_pfSense_filterlog);
      rewrite(rw_hp_program);
      rewrite(rw_cisco_prg);
      rewrite(rw_program);
      rewrite(rw_basename);
      rewrite(r_snare);
      rewrite(r_from_pipes);
      rewrite(r_pipes);
      rewrite(rw_openam);
      rewrite(rw_netscreen);
      destination(d_logzilla);
      # Enable below for debug/testing of incoming events
      # destination(df_debug);
      flags(flow-control);
    };
    # Enable below for debug/testing of raw (unformatted) events
    #log {
      #source(s_logzilla);
      #destination(df_raw);
    #};

Your custom filter should be added to the `filter` section, for example:

    log {
      source(s_logzilla);
      # disable s_src if you don't want local server events
      source(s_src);
      #rewrite(r_snmptrapd);
      rewrite(rw_pfSense_DHCP);
      rewrite(rw_pfSense_DHCP_INFORM);
      rewrite(rw_pfSense_filterlog);
      rewrite(rw_hp_program);
      rewrite(rw_cisco_prg);
      rewrite(rw_program);
      rewrite(rw_basename);
      rewrite(r_snare);
      rewrite(r_from_pipes);
      rewrite(r_pipes);
      rewrite(rw_openam);
      rewrite(rw_netscreen);

      # START "My Filter":
      filter(f_log_to_disk_only);
      # END "My Filter":

      destination(d_logzilla);
      # Enable below for debug/testing of incoming events
      # destination(df_debug);
      flags(flow-control);
    };
    # Enable below for debug/testing of raw (unformatted) events
    #log {
      #source(s_logzilla);
      #destination(df_raw);
    #};

Once the file is saved, use `syslog-ng -s` to verify that the configuration syntax is correct.
If there are no errors are found, the command will return nothing.

After the configuration check has passed, use `service syslog-ng restart` reload and re-read all configuration files.
