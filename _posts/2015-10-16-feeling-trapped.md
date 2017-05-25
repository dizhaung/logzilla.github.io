---
published: true
layout: post

title: Feeling TRAPped?
subtitle: Only using SNMP Traps for event management?
author: cdukes
author-name: "Clayton Dukes"
tags: [NetOps, SNMP, Syslog]
summary: If you aren’t using syslog, it’s very likely that your event manager is missing 1000’s of...
headline-bg: /assets/images/blog/post_images/feeling-trapped/feeling-trapped.jpg

---

# SNMP Without Syslog

...is like [Harold Melvin without the Blue Notes](https://genius.com/Snoop-dogg-doggy-dogg-world-lyrics)!

 If you aren’t using syslog, it’s very likely that your event manager is missing 1000’s of events indicating potential problems.

Which one was the mission critical one that you missed?

# What Is SNMP?

 SNMP is anything but "simple". In fact, the protocol and the parts that define it tend to confuse people quite a bit, especially in comparison to syslog.

 SNMP is a bi-directional protocol, so there are logically TWO separate parts; SNMP **Trap** and SNMP **Poll**.

 SNMP **Trap** is an event that is sent from a device (or host) to a listening station (or Network Management System/Trap Receiver). These events are sent as ASN.1 Encoded messages using Basic Encoding Rules (BER). 

 Unlike syslog events which are sent in plain text, SNMP Traps are sent in binary so a decoder is needed, such as the `snmptrapd daemon` provided by net-snmp which runs on `*nix` systems. 

 For this reason as well as the complexity involved in translating Traps to text, syslog is normally the choice of many vendors for sending events to a receiver. In fact, Cisco Systems's *Internetwork Operating System* (IOS) only contains about 90 possible SNMP Traps, but over **35000** possible syslog messages...which one would you rely on for a robust event management system that would not miss an important notification?

 SNMP Poll is the opposite direction where the NMS would go to the device/host and ask it a specific question or series of questions such as "What is your current CPU utilization", which the NMS uses to plot the resulting metric on a chart to analyze over time. The NMS systems that are used for SNMP Polling are generally associated with Performance Management, not Event Management.

 SNMP has many parts including its Management Information Base (MIB) which contains Object ID’s (OIDs) to specify a tree-like structure of numbers that are assigned values. These values appear in the form of `n.n.n.n.n.n.n` (sort of like an IP address) and map to various values provided by the MIB (a text-based translation file). An example of this would be the Host Resources MIB, **(RFC 1514)**, which provides definitions to poll a standard set of system resources such as CPU, Disk, Memory, or even running processes on the host.

 LogZilla allows users to receive SNMP Traps, but you'll never get 100% of your Network's problems by using SNMP without Syslog.
