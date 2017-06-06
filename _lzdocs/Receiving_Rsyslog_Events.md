---
cid: 07
chapter: Receiving Data
did: 03
title: Receiving Rsyslog Events
---


>This document is provided only as a helpful guide. LogZilla Corporation does not provide support for products outside of our own software.

# Sending RFC5424 Syslog Events from Rsyslog

Rsyslog provides two methods for sending RFC5242 formatted messages.

Using the `(o)` option:

    *.*(o)@@logzilla.mydomain.com:601;RSYSLOG_SyslogProtocol23Format

If you see messages such as `invalid frame header` in the debug log - by enabling df_debug in your LogZilla syslog-ng templates - or by starting syslog-ng in debug mode using `syslog-ng -Fdve`, then you need to remove the `(o)` from your rsyslog sending servers config entry (usually located on that server under `/etc/rsyslog.d/somefilename.conf`):

    *.*@@logzilla.mydomain.com:601;RSYSLOG_SyslogProtocol23Format
