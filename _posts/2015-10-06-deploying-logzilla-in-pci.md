---
published: true
layout: post

title: Deploying LogZilla in a PCI Environment
subtitle: LogZilla is slim and fast, and an easy installation with simple administration.  
author: tomd
tags: [PCI,Case Study]
headline-bg: /assets/images/blog/post_images/deploy-logzilla-pci/pci-top-banner.jpg
summary: LogZilla is slim and fast. An easy installation and the simple administration is a plus...

---

# Customer Story: Deploying LogZilla in a PCI Environment

Over the past several years our IT infrastructure has undergone many PCI-DSS (Payment Card Industry Data Security Standard) driven changes. Mainframe and Mini Computers are being replaced more and more by Linux-based systems. System Logging (syslog) and the procedure of archiving every system/application based transaction log is shifting from a localized diminutive archive process to a centralized global client server topology.

* Single Host With Individual Services Running
* All Data Collected On The Local Server
* Decentralized Management Consoles
 
 b2ap3_thumbnail_Picture1.png

The first step for us in centralized logging was to standardize on a common core of Operating Systems. All Linux systems for Production and Infrastructure have been converted to two standard distributions, Debian and Centos. All administrative and operational functions have been documented and combined in an Installation Guide.

All System installations follow strict guidelines, including the use of Balabit’s syslog-ng on every system. Logging activity is started on the standard ports udp/514 as well as tcp/514. All local system logs are sent to a centrally located, primary logging server. This central server has a larger storage capacity than the local syslog-ng clients and holds up to 15 months of archived syslog information.

* All Hosts Running Syslog-ng As A Client
* All Data Sent To A Remote Server
* One Centralized Management Console

 b2ap3_thumbnail_Picture2.png

PCI Compliance requires that these data structures be secured and that all access violations be recorded and reported. As a result of this PCI-DSS requirement, security and the hardening of the centralized syslog-ng server is a must. Security Guidelines are also a central part of the Installation Guidelines and shall be followed to keep the overall setup integrity. Archived syslog data is also the main source for finding problems and forensic investigations. The system and security administrator must have access to this data to ensure adequate and secure data security standards.

The best way to satisfy the need to access this secure data is to setup and secondary syslog-ng server. This method provides a mirrored copy of all data generated from subordinate systems. Syslog-ng has an option in its configuration which allows the mirrored data to appear to come from the originating host allowing analysis on that data to be performed as though it were local to the systems generating the event. Additionally, the filtering tools available in syslog-ng may be used to split or merge this large amount of data (a.k.a. “Big Data”), depending on your needs.
* 
* All Hosts Running Syslog-ng As A Client
* All Data Sent To A Remote Secure Server
* Remote Secure Server Forwards Mirrored Copy of All Data to Syslog Analyzer

 b2ap3_thumbnail_Picture3.png

Open Source is a vital part of our overall topology. Our server operating systems, administrative tools and production applications all utilize open source technologies in order to offset Operating Expenses. PCI Compliance also mandates that we monitor our data in real-time. Our monitoring and operational staff relies on these tools to spot warnings, alerts and critical messages from all devices in the company’s global infrastructure.

Monitoring helps prevent and reduce the overall downtime of all production services. Syslog-ng by itself has no reasonable end-user friendly solution to allow this real-time monitoring. We tested several Open Source based tools such as “Octopussy” and found that these tools are serving their purpose, but were hard to install, maintain and to use. In addition none of these utilities could keep up with a high degree of traffic that was being generated for a sustainable time.

Going back a view years I was working as a consultant for the State of New York and the City of New York. Back then we used an open source tool called “php-syslog-ng”. At that time, php-syslog-ng was just starting out and had the same problem of being too difficult to install and use. Today, however, “php-syslog-ng” (now known as LogZilla) is a mature application and the only one able to fulfill our needs for both usability and scalability.

* Centralized Secure Primary Server with LogZilla Server
 
 b2ap3_thumbnail_Picture4.png

After a preliminary test phase, we discovered that LogZilla was the only utility that has all of the bells and whistles we needed to accomplish our PCI Compliance and monitoring needs in a “Big Data” environment.

LogZilla runs on Ubuntu LTS and uses syslog-ng on the back end which suited our requirements, but adds a PHP, MySQL and jQuery based UI at the application layer to deliver an easy-to-use view into all of our data. Using filtering techniques based on regular expressions, along with a super-fast frontend to retrieve and monitor data in real-time, LogZilla has givin us the right access point to monitor, respond and administer “Big Data” effectively in our organization. LogZilla lets you setup a central alert system using email or SMS notifications so that we can avoid system by system based notifications and an uncontrollable flood of useless information.

## Summary

LogZilla is slim and fast. An easy installation and the simple administration is a plus. The use of filtering based upon regular expressions is not always the easiest task, but after using these filters for some time, our user’s learning curve has eased and made it an extremely powerful tool for production use. Menus are easy to understand and quick to find. Administration of LogZilla is integrated within these menus and after a quick how-to using the online documentation, admin is quiet an easy task. Technical support is one of the best we have encountered, they are quick to respond to all customer needs. LogZilla requires a License in order to be used beyond the initial testing phase. You can fine tune your needs using a demo version free of charge. This way you can make use of filtering and only monitoring your important data, lowering the overall License cost. Even if the cost can be an issue, the LogZilla utility is well worth this cost and is money well spent.
