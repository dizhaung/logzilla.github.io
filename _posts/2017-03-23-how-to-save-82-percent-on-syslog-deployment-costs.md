---
published: true
layout: post

title: How to Save 82% on Log Management Costs
subtitle: LogZilla's architecture and capabilities will save customers significantly.
author: rmpiot
tags: [Scalability, TCO, Syslog, Centralize, Analyzer, Deployment, Costs]
summary: LogZilla will save you money over any competitive solution.
headline-bg: /assets/images/blog/post_images/save-82-percent-on-deployment-costs/server-datacenter-racks.jpg

---

LogZilla's market defining and patented software allows companies to save up to 90% on deployment and maintenance costs over competitive solutions, while getting the fastest unstructured data management platform in the world.

Cisco Systems® published a reference design for a Splunk implementation to index "up to 2 TB/day".  This reference design requires `14 UCS servers` and will cost `$482,000 USD` in server and networking hardware.

[Cisco UCS Integrated Infrastructure for Big Data with Splunk Enterprise deployment](http://www.cisco.com/c/dam/en/us/td/docs/unified_computing/ucs/UCS_CVDs/Cisco_UCS_Integrated_Infrastructure_for_Big_Data_with_Splunk.pdf){:target="_blank"}

That architecture translates to about `50k` Events Per Second (EPS) spread out over `14 servers`. That comes to about `~3500` EPS per server.  The cost of software licensing, professional services, training, support, and any add-ons are extra. 

![](/assets/images/blog/post_images/save-82-percent-on-deployment-costs/clunk-architecture.png){: .img-responsive .img-fullscreen }

**LogZilla easily indexes the same amount of data on a single server**
 ![](/assets/images/blog/post_images/save-82-percent-on-deployment-costs/dedup.png){: .img-responsive .img-fullscreen }

You just saved your company $482,000 USD
---
...and you haven't even received their quote for the software, licensing, and other "hidden" costs such as professional service, support, training and any add-on packages

LogZilla replaces several full racks of equipment
---
Considering the cost of an Enterprise-class server that can handle these volumes, it’s easy to see how your savings on hardware costs alone can quickly contribute to LogZilla’s ROI.

## How much will storage cost?

Consider an environment logging 2TB/day of data, with a 30-day retention.

PIC 3: ELK Storage MATCH PIC

![](/assets/images/blog/post_images/save-82-percent-on-deployment-costs/2tb-day-arch.png){: .img-responsive .img-fullscreen }

At the time this document was written, the average cost of enterprise-class storage was approximately $275 for 6TB of storage. These systems will also use RAID10 for redundancy, which means giving up half the storage capacity to raid. Thus, for 30 days of storage, it would take up **120TB for a competitive solution**.

Using LogZilla's patented log aggregation algorithm, storage needs for your data is **decreased from 120TB to 12TB** to store that same data with no message loss. Without LogZilla, your cost for disks alone comes to $5,500 per month.

With LogZilla, storing the same amount of data takes a mere $550.

## How much will power cost?

What about the power needed to cool all the hardware? What's the cost of HVAC for those servers?

       
| Competitor's Hardware Needs 	| Average (kWh/Yr) 	| Kilowatt/Hr (¢/kWh) 	| Estimated Annual HVAC Cost 	| Comparative Cost when using LogZilla 	|
|-----------------------------	|------------------	|---------------------	|----------------------------	|--------------------------------------	|
| 14                          	| 25,620           	| $0.983              	| $25,184                    	| $1475                                	|

>Note: ¢/kWh Cost based on http://www.eia.gov/electricity/monthly/pdf/epm.pdf

The picture of true deployment cost now becomes clear; not only are you saving considerable cost on monthly storage and compute resources, but you are saving even more on Rack Space and Cooling for these systems.

Total Estimated Costs of Deployment to Index up to 2TB of data per day. 
> Hardware, Software, Professional Services, Training, Support

| Whole Package | &nbsp;&nbsp;&nbsp;&nbsp;HVAC         | &nbsp;&nbsp;&nbsp;Total      | &nbsp;&nbsp;&nbsp;&nbsp;Training        |
|---------------|--------------|------------|-----------------|
| Competitor    | &nbsp;&nbsp;&nbsp;&nbsp;$700,000 USD | &nbsp;&nbsp;&nbsp;&nbsp;$25,184.46 | &nbsp;&nbsp;&nbsp;&nbsp;$725,184.46 USD |
| LogZilla      | &nbsp;&nbsp;&nbsp;&nbsp;$130,000     | &nbsp;&nbsp;&nbsp;&nbsp;$1,474.50  | &nbsp;&nbsp;&nbsp;&nbsp;$131,474.5 USD  |

82 Percent Savings
---
This represents a savings of 82% percent over the major competition. The bottom line is that LogZilla will save you money when comparing TCO, while providing the world’s best performance where all data is available in the server in real-time.
