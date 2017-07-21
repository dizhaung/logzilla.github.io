---
published: true
layout: post

title: Did you hear the one about the definition of insanity?
subtitle: When good networks go bad....
author: mwheat
tags: [NetOps, Security]
summary: Are you still using the same process for managing your network that you did 5 years ago?
headline-bg: /assets/images/background/rationalization.jpg

---

# If You Ignore It...
It will not go away.

Today's network engineering and operations teams are busy. You're busier than ever before with expanded roles in NetOps, SDN, Network Virtualization, DevOps, IoT, Security, etc. The days of simple route and switch configuration are forever gone. 
Your environment may have some level of visibility which provides just enough information to feed a false sense of security that everything is working as it should be. I say *false sense of security* because many software vendors will just give you a tiny portion of the information you need to understand the issues that are happening at any point in time in your environment. Consider that Cisco's Internetwork Operating System has about 90 possible SNMP TRAPs defined, but over 40,000 possible log messages. 
**Are you only using SNMP TRAPs to manage your network?**
There's far more visibility with log telemetry than with just SNMP TRAP alone. If you're not looking at all the data available, you're only seeing a small part of the picture.

# Inefficient Work Flows
Think about how your incident resolution process currently operates for a minute. Can you justify all the steps that it takes to resolve issues with only a portion of the data that your current solution provides? The general process most companies use is very reactive:

![Reactive Workflow](/assets/images/blog/post_images/What-you-dont-know/reactive-work-flow.png){: .img-responsive .img-fullscreen }

Does this look familiar? Does your workflow begin with your user or customer telling **you** something is broken? It should be you notifying the end user that, "we saw a problem, but it's already fixed". 

Until recently, technology could not keep up with the deluge of messages being generated. You were stuck with limited information that covered a fraction of the actual environment. This paradigm is what happens in steps 1-3 in the diagram above. It's common to have a problem affect an end user forcing them to open a trouble ticket to start the process.

The help desk will do a preliminary assessment with the data available, but many companies don't allow tier 1 support staff to log in to end devices and get the detailed information required for properly assessing the situation. Because of this lack of visibility, tier 1 support will escalate the ticket up to higher levels for investigation (steps 4-6 above). At this point, it's now up to a senior level engineer or architect who must assess the situation before they can even begin the triage process. The good ones will start by connecting to the affected devices and reading logs, looking for anything that might be an indication of the problem. Unless, of course, they already have that information in front of them...ahem!


# The Smart Play
Imagine having a NetOps platform that automatically identifies the **Top 1000 Cisco Network** issues and visually notifies you of the occurrence without waiting for users to call in. What if that same solution could automatically repair the affected device, network, server, etc.? In the image below, Notice the widget titled, "*Cisco: Top Service Impacting Events*" which looks across your entire infrastructure for anything matching these top 1000 pre-identified problems, then gives you the top 10. If anything shows up in this widget, there is a problem and someone needs to investigate. Easy Peasy.

![Top 1000 Cisco Errors](/assets/images/blog/post_images/What-you-dont-know/cisco-network-dashboard.png){: .img-responsive .img-fullscreen }

Why stop there though? Let's continue to be smart and automate the remediation steps, triggered within seconds of occurrence, to repair the problem and notify you of the problem, the steps taken and the resulting resolution.

# The Tao Of Self-Healing
We demo this all the time with a very commonly seen event in networks known as "Duplex Mismatch". Duplex Mismatches are almost always caused by someone improperly configuring the ports on connected hosts, switches or routers and is easy to fix, but can be difficult to track down in larger networks. 

When Duplex is not matched on both sides, it means that the link between the two devices is only operating at half of the available bandwidth. For example, a 100Mbps link would peak out at 50Mbps. 

When this occurs, **LogZilla sees it within 1 second**, triggers an automation (user configurable), tracks down the source of the problem, logs in to the source, fixes the configuration, then sends a notification to Slack, Cisco Spark, Email, Text, Webhook, External API, or any other system. When we do this automation, we also show the original device configuration, the new configuration, and a link to Cisco's website with any important information about the generated event.

*Slack Alert with Duplex Self-Healing Report:*

![Duplex to Slack](/assets/images/blog/post_images/What-you-dont-know/slack-alert-duplex-mismatch.png){: .img-responsive .img-fullscreen }

Our CEO did a short demo of this process a little while back which you can see [here.](https://youtu.be/eibkn8DN6Tg){:target="_blank"}

# What If I Don't Want You "fixing" My Network?
Sometimes, you may not want (or trust) an automation to make the right decisions, but it is imperative that you know as much about the affected device as possible so that you can make an informed decision as soon as possible in order to restore service. For example, Spanning Tree Root Bridge elections may occur, but that change may have been purposely done by an engineer, or it could have simply been someone plugging in their own personal switch to your switch and causing mayhem. That's bad...right? 

![Spanning Tree to Slack](/assets/images/blog/post_images/What-you-dont-know/spanning-tree-root.png){: .img-responsive .img-fullscreen }

But why stop there? Why not automate the entire process of what **you** would do to gather information and collect **everything there is to know about this switch and all other devices it may have affected**. You can do this in seconds and cut out 90 minutes of research time normally spent by a human before actually starting on the fix!

Instead of going down the same old road with your current workflow, you used a proper NetOps Platform to auto detect and remediate issues which would have affected your end users. You didn't have to wait for an incident/trouble ticket to be opened to start the archaic process or manual research, there were fewer people involved, resolution was instant, and the end user was never impacted. 

![Even Morpheus Gets It](/assets/images/blog/post_images/What-you-dont-know/morpheus.png){: .img-responsive }

What if I told you that this capability is available today? How valuable is this visibility? How much time is wasted every day on mundane tasks that you could have easily automated? Do you want to be more proactive and relieve your engineers from doing break-fix all day long? 


# Keep It Simple...

One of the things I hated most with enterprise tools, was that you would get trained on all of the features of the product but it was left up to you to figure out how to use it. 

LogZilla has 4 core concepts. Once you learn them, you know the product. Ease of use was one of the top requirements when building this platform; no training class required. 

The 4 simple rules:

1. Reduce the events that you must deal with
2. Provide easy to use interface for visibility and escalation
3. Automate repetitive tasks 
4. Provide extensibility into other tools


### Eliminate The Noise

LogZilla has a patent on our event reduction which not only reduces the number of events that the platform handles, but more importantly, it reduces the compute resources required for processing, the backend storage by up to 90%, and a lot less of the things you don't want to see. 

LogZilla also includes method of identifying actionable and non-actionable events. There are a lot of informational type events that are processed by networks and servers. By tagging the events that are not important as non-actionable, one can filter dashboard widgets by type to dramatically reduce the information on the screen. Now you are beginning to focus on the information that requires attention with the noise removed. 

### This UI is Amazing!

Easily creating views to display the data **you need** in order to make decisions is paramount. Other tools require development resources to generate custom views and are static in nature. Being able to create a dashboard for the devices going into change control, adding filter capability to those views and add custom widgets takes only minutes. As an example, we built a Cisco Networking Dashboard in just ten minutes to show how easy the interface is to use. You can view that screencast here: 

*How To Build a Cisco Dashboard In Ten Minutes:*

[![Cisco Dashboard Build](/assets/images/blog/post_images/What-you-dont-know/mwheat-youtube.png)](https://www.youtube.com/watch?v=jcSGTSNUYs0){:target="_blank"}

### If I had a nickel for every time I had to type the same thing...

LogZilla also provides a "trigger" mechanism which allows it to automatically act when specified criteria have been met. The trigger actions can send to Slack, Cisco Spark, Webhooks, Email, Text, External APIs and even execute scripts to automate everything imaginable. A good rule of thumb is anything that you do repeatedly to resolve an issue should be defined as an automation trigger. 

### Make It Interactive!

LogZilla also provides a full REST API which can be used to interface with other systems. In fact, the UI is completely decoupled from the API so that every facet of the LogZilla engine can be accessed directly through API calls. (Spoiler Alert: did someone say Slackbot?)


# All Together Now...

Pulling all of this together; Building dashboards, Actionable Events, Triggers, and Automations provides an extraordinary amount of efficiency within your organization. Not only are you being proactive, you're doing more with less and making your life a whole lot easier.
All you need to do now is spend a few minutes a day reviewing results instead of the entire day running around putting out fires.

Seeing things that you never knew were happening and automatically resolving problems are what you can expect from the LogZilla NetOps Platform. If any of this resonated with you, reach out to me at [mwheat@logzilla.net](mailto:mwheat@logzilla.net?subject=LogZilla%20info%20requested) for more information. I hope to hear from you soon!

LogZilla is built By NetOps, For NetOps. 

