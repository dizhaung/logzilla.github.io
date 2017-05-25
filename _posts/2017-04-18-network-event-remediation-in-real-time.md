---
published: true
layout: post

title: Network Event Remediation in real-time
subtitle: How to save 60 hours of skilled network engineering time
author: markwheat1
author-name: "Mark Wheat"
tags: [NetOps, Automation]
summary: ...They spend a lot of engineering time on network issues with problem identification and resolution and provided us with...


img: /assets/images/background/robot-handshake.png

---

Sometimes there are things that are just too cool not to share. We were working with a (future) customer earlier in the week and they were telling us that they have a large and complex environment that was always changing. They spend a lot of engineering time on network issues with problem identification and resolution and provided us with a use case where the engineer had to look for the problems, identify the source, login to a switch to make a configuration change then document what had happened.

 One of their most senior engineers can work through the process in about 30 minutes; it takes the junior guys anywhere between 3 hours and 1 day. The example event they gave us happens about 5 times a month, or 60 times a year. That is up to **60 days of problem identification and remediation for a skilled network engineer**. Here is a review of what they were doing:

* Config change or new device added to the network causes problems
* Problem identification
* Research to find the offending switch
* Login to switch and make configuration change
* Document incident

LogZilla to the rescue! In a few minutes, we were able to craft a trigger for them that would automatically identify the Cisco event that indicates a problem, login to the offending switch, run a command to parse the output and POST it in a Slack channel. The entire process from identification to post in the Slack channel **took less than 1 second**. 

 I [recorded the demo](https://youtu.be/eibkn8DN6Tg) so you can see how cool it is. This is not the end solution but it shows the an example of each step of the process required to automate the remediation of one of their problems. LogZilla will save them up to 60 engineering days per year, and doing this in real-time removes the downtime that accumulates while the problem is in the environment. The intangible benefits could be even larger than the engineering savings. 

This is a great example of moving from reactive to proactive, solving a problem and automating the tribal knowledge of your best people. LogZilla has a proven methodology for reducing the events to only those that are actionable, then automating their remediation. 

We would love to help you become more proactive. To find out more, feel free to [contact me](http://twitter.com/{{ page.author }})
