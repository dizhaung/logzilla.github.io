---
published: false
layout: post

title: Network rationalization, harden and repair your network.
subtitle: Your methodology and tools are causing more work...
author: mwheat
tags: [NetOps, Platform, Technology, Cisco, DevOps, Analytics]
summary: Are you still using the same paradigm for hardening your network that you used 5 years ago?
headline-bg: /assets/images/background/rationalization.jpg

---

# IT'S THE THINGS YOU DON’T SEE
that always seem to bite you in the rear. Today's network engineering and operations teams are busy. More busy than ever before with things like SDN, network virtualization, DevOps and the list goes on... The days of simple route and switch configuration are forever gone. 
Your shop probably has some level of visibility that will provide just enough information to feed your false sense of security that everything is working as it should be. I say false sense of security because many tools will just give you a tiny portion of the information one needs to understand the issues that are actually happening at any point in time in your environment. Consider that Cisco has about 90 SNMP traps defined within their IOS and a possible 40,000 log messages. There is myopic detail within the log telemetry that provides maximum visibility into the status of your environment. If you are not looking at all of the data available, you are only seeing a small part of the picture.

# INEFFICIENT WORK FLOWS
Think about how your incident resolution process currently operate for a minute. Can you justify all the steps that it takes to resolve NetOps issues with a portion of the data that your current tools provide? A general process most companies use is very reactive:

![Reactive Workflow] (http://mailer.logzilla.net/uploads/1499896475.png)

Waiting until there is a problem to start a process is a terrible way to operate. You do this because you lack visibility into your NetOps environment, and this is the way that it has been done for years. Have you ever pondered why it was done this way? Until recently, technology could not keep up with the deluge of messages that were generated. You were stuck with limited information that covers a fraction of the actual environment. This paradigm is what happens in steps 1-3 in the diagram above. It is common to have a problem affect an end user, forcing them to open a trouble ticket and starting the process. The help desk will do preliminary triage with the data available. Most shops do not allow the help desk access to login to end devices to get the detailed information required to properly start the resolution process. They will escalate the ticket up to higher levels to continue, steps 4-6 above. At this point, it is up to the engineer or architect to begin the triage process which has a lot to do with tribal knowledge and experience. This is where they start logging into individual devices and reading logs, looking for anything that might be an indication of the problem source. 

# A BETTER WAY
Imagine having a NetOps platform that would automatically identify the top 1000 Cisco network issues and visually notify you of the occurrence, without having to wait for a service affecting issue to start the resolution process. In the image below, LogZilla has a widget titled "Cisco Top 10 Service impacting events," it is actually looking across all of your telemetry for any event that match the top 1000 identified problems and list the top 10. If anything shows up in this widget, there is a problem and someone needs to investigate. Easy Peasy.

![Top 1000 Cisco Errors] (http://mailer.logzilla.net/uploads/1500063600.png)

Take it a step further and imagine automatic event remediation, triggered within seconds of occurrence to repair the problem and notify that the action had happened? We demo this all the time with a duplex mismatch scenario. Something or someone makes a configuration change and duplex is configured incorrectly. As soon as the log message from the change hits the NetOps system, a trigger executes, logs into the source device-changes the config and sends a notification to Slack, email or any other system showing the old config, new config and reporting the change had happened. See a quick example of this functionality [here.](https://youtu.be/eibkn8DN6Tg)

Some issues are too complex to auto remediate, how about gathering all the information required to solve the problem and include in the notification to the team responsible for the fix? You just cut out 90% of the research time required to resolve the incident.
Instead of going down the same path with your current workflow, you used a NetOps platform to auto detect and remediate issues that would affect your end users. You did not have to wait for an incident and a trouble ticket to be opened to start the archaic process, there were fewer people involved, resolution was faster and the end user was never impacted. 
What if I told you that this capability is available today, I mean right now with LogZilla?
How valuable is myopic visibility into your network to you? How badly do you want to be more proactive and relieve your best engineers from doing break-fix all day long? There is more...

# THE METHODOLOGY

One of the things I hated most with enterprise tools, was that you could get trained on all of the features of the product but it was left up to you to figure out how to use it. LogZilla has 4 general screens, when you learn them, you know the product. Ease of use was one of the top requirements when building this NetOps platform; no training class required. 

There is a methodology surrounding the platform. It is based on several concepts:

1) Reduce the events that you have to deal with
2) Provide easy to use interface for visibility and escalation
3) Automate repetitive tasks 
4) Provide extensibility into other tools

LogZilla has a patent on event reduction which not only reduces the number of events that the platform has to deal with but it also reduces the number of compute resources required for processing and reduces the backend storage by up to 60%. LogZilla also has the concept of actionable and non-actionable events. There are a lot of informational type logs that are processed with any telemetry tool. By tagging the events that are not important as non-actionable, and the events that mean something as actionable, one can filter the dashboard widgets by type to dramatically reduce the information on the screen. Now you are beginning to focus on the information that requires attention with the noise removed. 

Creating the views that display the data required to make decisions is paramount. Other tools require development resources to generate custom views and are static in nature. Being able to create a dashboard for the devices going into change control, adding filter capability to those views and add custom widgets takes only minutes. We built a Cisco networking dashboard in ten minutes to show how easy the interface is to use and show some of the capability of the platform. You can view that screencast [here.](https://youtu.be/jcSGTSNUYs0)

LogZilla has a trigger capability that provides an easy to configure means to take action when a criteria has been met. The trigger action can send webhooks, email and even execute scripts to automate anything one can imagine. A good rule of thumb is anything that you have to do repeatedly to resolve an issue should be defined as an automation within a trigger. 

LogZilla publishes a REST API that can be used to interface with other systems and interfaces. Every facet of the LogZilla interface can be accessed through the API.

Pulling all of this together: building dashboards, tagging events as actionable and non-actionable, creating triggers and automating the repeatable processes will provide an extraordinary amount of efficiency within your organization. Not only are you being proactive, you are doing more with less and hardening your network environment.
Now, once this is setup, come in every morning and spend a few minutes looking at the information LogZilla provides and there are your marching orders. Fix the problems you did not know you had, before they happen. Be the hero. When things happen throughout the day, use the search capability and widgets to quickly triage and solve issues in a fraction of the time it once took.


#FINAL THOUGHTS

Myopic visibility into your environment, seeing things that you never knew were happening and automatically identifying the problem events are what you can expect when you invest in a LogZilla NetOps platform. If any of this resonated with you, reach out to me at [mwheat@logzilla.net](mailto:mwheat@logzilla.net?subject=LogZilla%20info%20requested) for more information. I hope to hear from you soon!

LogZilla is built by NetOps, for NetOps. 
