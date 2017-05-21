---
published: true
layout: post

title: Syslog Essentials
subtitle: A short primer on the use of syslog in NetOps
author: markwheat1
author-name: "Mark Wheat"
tags: [NetOps, Syslog]
summary: Most of us cannot remember a time before there was syslog.  I was introduced to Sun Solaris in 1998 while I was working...

img-position: left
img: /assets/images/blog/hieroglyphics.jpg

---

![LogZilla Query Bar](/assets/images/blog/post_images/syslog-essentials/lz-searchbar.png)

 Most of us cannot remember a time before there was syslog.  I was introduced to Sun Solaris in 1998 while I was working for a internet software company.  If I had a nickel for every time I used `tail -f` on log files, I would be, well, writing this from a beach instead of my desk… 

Syslog is the standard logging facility for pretty much everything today and the information being pumped through it is generally what is used to identify and resolve most mission critical problems. The information in this post is primarily geared to network and systems management, but is applicable to any device that generates a syslog message. The image above is the LogZilla search bar. After you finish reading this post, you will realize how amazing it is for log analysis!

**Why Syslog and not just SNMP?**

 Valid question, as there are a lot of network management tools that use Simple Network Management Protocol (SNMP). SNMP has a polling component that queries devices to get Object Identifier (OID) information and feed it back into a centralized tool, usually for performance-based metrics.  SNMP can also send TRAPS which are defined alert thresholds within the OID values.  All good stuff, but did you know that Cisco's IOS has only 90 defined SNMP TRAPs but more than 35,000 possible syslog messages? 

 When there is a problem, the first place most *good* engineers and admins go to is the logs.  This is because there is more, and better, information there and usually something that will tell you what has happened, who did what, or why you're having a problem.  Some examples of data that you can get from syslog on networking devices includes things like:

*   Port Duplex Mismatch
*   BGP, OSPF, MPLS or any other routing protocol status
*   Authentication
*   Connectivity and link data
*   and thousands more

 One of the primary reasons that logging is not the front line management tool today is due to the sheer number of messages being processed.  Until recently, there was just too much log data to effectively use and the processing requirements necessary to search across terabytes of log data was not very accommodating. That is no longer the case (if you use LogZilla!) and this treasure trove of data is now available in real-time, to help you become more proactive and solve issues more quickly.

#The Syslog Protocol

Syslog was originally developed in the 80’s by Eric Allman as part of the Sendmail project and is now standardized within the syslog working group of the IETF
Syslog messages (RFC 3164) can be sent via UDP (514) and/or TCP. The data is typically sent in clear text (but there are ways to encrypt)
Syslog has a sender and a receiver.  The syslog sender sends a small (less than 1KB) text message to the syslog receiver. The receiver is commonly called "syslogd", "syslog daemon" or "syslog server"
The format of the syslog message should contain five distinct fields with the following information:

*   Facility
*   Severity
*   Hostname
*   Timestamp
*   Message

**Syslog Message Facility**

*   Syslog messages are broadly categorized on the basis of the sources that generated them such as OS, process or application and are represented as integers ranging from 0-23, Cisco devices use the local facility ranges 16-23 (local0 – local7)
*   Most Cisco networking gear uses facility local 7 and Cisco firewalls usually use local4

**Syslog Message Severity**

*   The log source (such as a router) which generates the syslog message also specifies the severity of the message using single-digit integers 0–7.  Most networking devices will use log levels 0-6 with level 7 used for console troubleshooting. The codes are generally defined as:

![](/assets/images/blog/post_images/syslog-essentials/syslog-severities.png)

**Syslog Message Hostname**

*   The hostname field consists of the host name (as configured on the host itself) or the IP address
*   In devices such as routers or firewalls, which use multiple interfaces, syslog uses the IP address of the interface from which the message is transmitted (unless otherwise configured using the `logging source` command)
*   Some people get confused by `host name` and `hostname`. `Hostname` is typically associated with a DNS lookup. If the syslog message contains a `host name`, it may be (and often is) different than the actual DNS hostname of the device

**Syslog Message Timestamp**

*   The local time, in `MMM DD HH:MM:SS` format, of the device when the message was generated

> Note: `*` and `.` characters preceding a Cisco syslog message are indicators of a problem with NTP. The `*` means that time is not authoritative: the software clock is not in sync or has never been set and `.` means that time is authoritative, but NTP is not synchronized: the software clock was in sync, but has since lost contact with all configured NTP servers

**Syslog Message Text**

*   This is the text of the syslog message, along with some additional information about the process that generated it
*   Messages generated by Cisco IOS devices begin with a percent sign (%) and use the following format: `FACILITY-SEVERITY-MNEMONIC: Message-text`

The mnemonic is a device-specific code that uniquely identifies the message such as *up*, *down*, *changed*, *config*, etc. The `Facility` in Cisco Mnemonics are not the same as the IETF definition of `facility` (such as local7). Cisco Facility Mnemonics are a free-form method of identifying the source message type such as `SYS`, `IP`, `LDP`, `L2`, `MEM`, `FILESYS`, `DOT11`, `LINEPROTO`, etc. (the list is very large)

 This should be enough information to help you understand those somewhat cryptic log messages now. Hopefully, you can see how important it is to have search options like the first image displayed in this post, to quickly and easily get the most out of your log data. Having a LogZilla NetOps management platform will provide you with incredible visibility and insight, in real-time, to what is happening in your environment, right now. If you would like to learn more about how LogZilla can make your team more proactive and how you can look like a Network Hero, reach out to me and we will be happy to get you started!

