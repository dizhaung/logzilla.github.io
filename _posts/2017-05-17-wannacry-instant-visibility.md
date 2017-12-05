---
published: true
layout: post
title: WannaCry?
subtitle: How to detect the WannaCry Malware in seconds
author: cdukes
tags: [Malware, AlienVault, Security, OTX, Open Threat Exchange]
summary: LogZilla's Malware Detection capability is so easy that it will make you wannacry...
headline-bg: /assets/images/figures/ransomware.jpg
redirect_from:
 - /articles/wannacry-visibility-and-identification-easy

---

 If you are in the free speaking world and have access to news outlets, you've no doubt heard about the WannaCry ransomware attack targeting systems all over the world.  The estimates are that over a quarter of a million computers have been compromised spanning more than 150 countries.  If you have anything to do with the operations and engineering of your company's infrastructure, you probably started wondering if WannaCry had made it’s way into your piece of the universe. 

 An easy way to get visibility into the WannaCry malware in your environment is to install LogZilla and use the pre-built rules from our [LogZilla Extras GitHub](http://bit.ly/2qumD4C) repository.
 
 Next, point your network and server telemetry to your LogZilla server and, within seconds, you'll be able to select `IoC-WannaCry` or `IoC-IP_Blacklist` from the Program dropdown to see if your company has been infected. 

##### WannaCry Dashboard
Here is a screenshot of one of our dashboards filtered on these programs:

**WannaCry Dashboard**
![WannaCry](/assets/images/blog/post_images/wannacry/wannacry-dashboard.png){: .img-responsive .img-fullscreen }

**Editing widgets for this data is equally as easy**
![WannaCry](/assets/images/blog/post_images/wannacry/wannacry-widget-edit.png){: .img-responsive .img-fullscreen }

##### WannaCry Alerts
Now that you have the data in LogZilla, alerts and automatic remediation are just as easy.  Here is an example trigger that will send a Slack message with information about the newly found malware infected host:

**WannaCry Trigger**
![Trigger](/assets/images/blog/post_images/wannacry/wannacry-trigger-config.png){: .img-responsive .img-fullscreen }

##### Slack.com Alert

Here is what the Slack message looks like when we receive it from LogZilla:

**WannaCry Slack Message**
![WannaCry Slack Alert](/assets/images/blog/post_images/wannacry/wannacry-slack.png){: .img-responsive .img-fullscreen }

**It is that easy** to identify and be alerted when malware like this manifests in your organization. 

Having a LogZilla NetOps management platform will provide you with incredible visibility and insight, in real-time, to what's happening in your environment, right now. If you would like to learn more about how LogZilla can make your team more proactive and how you can look like a Network Hero, [contact me](http://twitter.com/{{ site.data.authors[page.author].twitter }}) and we'll tell you how to install LogZilla in just a few minutes!

Mark
