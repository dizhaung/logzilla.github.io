---
published: true
layout: post

title: Open Source Solutions are Not Free
subtitle: Opensource is not Free.
author: markwheat1
author-name: "Mark Wheat"
tags: [NetOps, Scalability, Opensource, TCO, Not Free]
summary: There is a lot of discussions around open source logging software recently.  Its not free.
---

# Current open source logging considerations

### By: Mark Wheat on April 11, 2017

There have been several discussions around here about open source logging software recently.  We love open source and LogZilla actually started out as an open source project called PHP-Syslog-NG many years ago.  We talk to people every week that are still using this tool and are ready to move to the next level.  We have been on both sides of the field with this and there is a place for open source, but people need to realize that it is not like a free pass to an all you can eat buffet.  We took a few minutes to look at the total cost of ownership of some or the open source tools and what we found was that licensing is only a minuscule portion of the total solution.   

If you are a DIY type of person and have the time available, coding and admin skills and want to take on ownership of your own solution, open source can be a good fit.  There can be cost savings from licensing and labor as you are doing all of the work, but there is opportunity cost.  Based on the research we have done, most of the solutions require external support and lots of add-ons to provide functionality required to solve problems.  The kicker about the add-ons is that they are usually offered by companies that want licensing, maintenance and support for their efforts.  There will be numerous expenses that could not be planned for in advance.  This will have budgetary impact as it is impossible to budget for what you dont know will exist later. Larger deployments will be more expensive as well.  If you will be managing anything with high messaging rates, infrastructure expense for compute instances and storage will be higher and as a bonus, you are now managing a whole rack of servers.  

If you are looking at an open-source logging solution make sure to consider the following:

* Software license cost generally are a small component of the overall cost of a solution
* There are internal cost associated to architecure, deployment and management of the solution.  This will involve determining the scale of the deployment, tools for managing performance and the resources required to effectively show value from the solution.  
* 
Tools like LogZilla are made to save customers money.  When compared to open source tools, generally:
	* Average of 10-20  open source servers for each LogZilla server
	* Approximately 60% more storage cost per day with open source
	* There is increased complexity with the administration and management of large open-source deployments
* In cloud environments, spinning up a compute instance is NOT free.  In fact you might spend more money on cloud instances than using a managed service.  Consider the following for a 5TB per day logging solution:
* LogZilla cost savings

* Open source is a DIY engagement, or you pay for support and services.  You will be allocating your internal resources going forward, just like software developent companies.  Extensive resources are required, especially with larger deployments and more complex architecture
* Will the open source solution be easy for end users to learn?  Will there be cost associated with getting users trained and taking them out of their roles to train on usage.  LogZilla can be learned in about 30 minutes of use.  
* Will the open source solution require any special programming language in order to query data?  Many open source tools require learning SQL like syntax for even simple queries.  LogZilla uses a simple Google like search.
* Open source support is either through the community or via a paid engagement.  Running a high available solution generally requires support level agreements, which are not cheap.  With LogZilla, all support and maintenance are included with the subscription.
* Data confidentiality with open source solutions is a gray area.  The community is very active with support but there are no security or IP protections when sharing an issue.  Anyone posting data for support might be violating corporate data agreements.  Research on security and compliance requirements as well as processes on enforcement need to be considered.  

* LogZilla has operated a secure support infrastructure for years.
* Performance of open source tools is usually a running issue.  Many open source tools are built with Java and other memory ineffiecient tools.  Larger processing loads require more dedicated resources, which has a direct relationship with cost.  LogZilla was built to be the most scalable log management solution available and resource utilization is a fraction of what other tools require.  Hardware, storage, management and administration savings help to reduce the overall total cost of ownership of an enterprise-level technology.

LogZilla has a very high perfromance engine which allows for cost reductions in compute instances, storage and system administration, it:

* Parses unstructured data at rates considered impossible
* Is orders of magnitude more efficient then every other competitor
* Reduces Capital cost on computing resources by 75%
* Reduces Operating cost by up to 40%
* Does not use a storage based licensing model
* Can be complimentary solution to competitive solutions by offering a “pre-processing” unit, saving the customer 40-90% on current licensing
* Open source software licensing might be free, but ther are actually cost associated.

If your interested in learning more, send me an email at [mwheat@logzilla.net]().  Hope to hear from you soon!

 

Mark
