---
published: true
layout: post

title: Feeling TRAPped?
subtitle: SNMP has many parts.  Logzilla makes it easy.
author: cdukes
author-name: "Clayton Dukes"
tags: [NetOps, Scalability, SNMP, Trap]
summary:There’s a lot more to SNMP, but the main thing to point out is that LogZilla allows users to receive SNMP Traps by way of net-snmp’s snmptrapd translator.
---

# Feeling TRAPped?

### By: Clayton Dukes on October 06, 2015

Only using SNMP Traps for event management? If you aren’t using syslog, it’s very likely that your event manager is missing 1000’s of events indicating potential problems.

Which one was the mission critical one that you missed?

I’d like to take a few minutes to talk a little bit about Simple Network Management Protocol (SNMP).

SNMP is anything but “simple”. In fact, the protocol and the parts that define it tend to confuse people quite a bit, especially in comparison to Syslog.

SNMP is a bi-directional protocol, so there are logically TWO separate parts; SNMP Trap and SNMP Poll.

SNMP Trap is an event that is sent from the device/host to a listening station (or Network Management System/Trap Receiver). These events are sent as ASN.1 Encoded messages using Basic Encoding Rules (BER). Unlike syslog events which are sent in plain text, SNMP Traps are sent in binary so a decoder is needed, such as the SNMPTRAPD daemon provided by **net-snmp** that runs on *nix systems. For this reason as well as the complexity involved in translating Traps to text, syslog is normally the choice of many vendors for sending events to a receiver. In fact, Cisco Systems’ Internetwork Operating System (IOS) only contains about 100 possible SNMP Traps, but over 9000 possible syslog messages…which one would you rely on for a robust event management system that would not miss an important event notification?

SNMP Poll is the opposite direction where the NMS would go to the device/host and ask it a specific question or series of questions such as “What is your current CPU utilization”, which the NMS uses to plot the resulting metric on a chart to analyze over time. The NMS systems that are used for SNMP Polling are generally associated with Performance Management, not Event Management.

SNMP has many parts including that define its Management Information Base (MIB) such as Object ID’s (OIDs) which specify a tree-like structure of numbers that are assigned values. These values appear in the form on n.n.n.n.n.n.n (sort of like an IP address) and map to various settings provided by the MIB (a text-based translation file). An example of this would be the Host Resources MIB **(RFC 1514)** which provides definitions to poll a standard set of system resources such as CPU, Disk, Memory, or even running processes on the host.

There’s a lot more to SNMP, but the main thing to point out is that LogZilla allows users to receive SNMP Traps by way of net-snmp’s snmptrapd translator. **LogZilla’s documentation** provides the configuration files which will help you set up trap-to-text translations and LogZilla even includes a set of MIBs you can use to translate the OIDs to text.
