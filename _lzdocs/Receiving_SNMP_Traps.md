---
cid: 07
chapter: Receiving Data
did: 01
title: Receiving SNMP Traps
---


> Please note that the MIBS provided are done so as a courtesy only and come with no guarantee of compatibility or lack conflict with any other SNMP MIBs being used on your server. Conflicting MIBs will show errors, but should not affect system use.

### Install the necessary programs

    apt-get -y install snmp snmpd snmp-mibs-downloader

Assuming you have the default config, paste this:

    perl -i -pe 's/AUTOLOAD="rfc ianarfc iana"/AUTOLOAD="rfc ianarfc iana logzilla"/g' /etc/snmp-mibs-downloader/snmp-mibs-downloader.conf

If you didn't run the perl command above, edit `/etc/snmp-mibs-downloader/snmp-mibs-downloader.conf` and add the `logzilla` statement:
 
Before: `AUTOLOAD="rfc ianarfc iana"`
 
After: `AUTOLOAD="rfc ianarfc iana logzilla"`


### Copy/paste the following

    cat << 'EOF' > /etc/snmp-mibs-downloader/logzilla.conf
    HOST=http://repo.logzilla.net
    CONF=logzillalist
    DEST=logzilla
    ARCHIVE=mibs.tgz
    ARCHTYPE=tgz
    EOF

    mv /etc/snmp/snmptrapd.conf /etc/snmp/snmptrapd.conf.$(date +%s)

    cat << 'EOF' >  /etc/snmp/snmptrapd.conf
    disableAuthorization yes
    doNotRetainNotificationLogs yes
    snmpTrapdAddr udp:162
    authCommunity execute public
    outputOption Q
    format1 %A,Enterprise OID: %N Trap Type: %W  Trap Sub-Type: %q  Uptime: %T  Description: %W  PDU Attribute/Value Pair Array:%v\n
    format2 %A,Enterprise OID: %N Trap Type: %W  Trap Sub-Type: %q  Uptime: %T  Description: %W  PDU Attribute/Value Pair Array:%v\n'
    EOF

    perl -i -pe 's/TRAPDRUN=no/TRAPDRUN=yes/g' /etc/default/snmpd

    perl -i -pe 's/^SNMPDOPTS/#SNMPDOPTS/g' /etc/default/snmpd

    perl -i -pe 's/^TRAPDOPTS/#TRAPDOPTS/g' /etc/default/snmpd

    echo "SNMPDOPTS='-Lsd -Lf /dev/null -u snmp -g snmp -I -smux,mteTrigger,mteTriggerConf -p /var/run/snmpd.pid'" >> /etc/default/snmpd

    echo "TRAPDOPTS='-p /var/run/snmptrapd.pid -Lf /var/log/logzilla/trapd.log -Ls 0 -m ALL -M /var/lib/mibs/logzilla'" >> /etc/default/snmpd


### Grab the list

    wget -O /etc/snmp-mibs-downloader/logzillalist http://repo.logzilla.net/mibs/logzillalist

### Run the downloader

    download-mibs

### Restart snmpd

    service snmpd restart

### Check the trapd.log

    tail -f /var/log/logzilla/trapd.log
