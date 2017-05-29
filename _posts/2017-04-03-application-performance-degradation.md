---
published: true
layout: post

title: Application Performance Degradation?
subtitle: How to ensure your solution doesn't die along with the network
author: mwheat
tags: [NetOps, Scalability, Performance]
headline-bg: /assets/images/blog/post_images/application-performance-degradation/sorry-no-internet-today.png
redirect_from:
 - /articles/application-performance-degradation-from-duplex-mismatch-solved

---

I sit in on many of the data analysis reviews we do with our customers and even being a sales guy, there is a good chance I can find issues that they never knew existed. Occasionally I will ask one of our architects what an event means, or lookup a Cisco Mnemonic, but with LogZilla, even this "noob" is able to show experienced networking teams things they had no idea about.

In the past two weeks I was able to drill into duplex mismatches, teardrop attacks and subnet mismatches just to name a few. Some of the things we find are easy fixes but **how can you fix what you don’t know is broken**? Take the duplex mismatch problem for instance; your customers are complaining about performance and there is a lot of finger pointing with the server, app, security and network teams all pointing at each other. Engineering is able to ping the other devices so it does not appear to be a connectivity problem. Generally the only way you would have been able to pinpoint this would be to log into each device and start reading logs. Most people would rather go to the dentist than do this so the problem stays unnoticed. Traditionally log reading is the last step in the triage process, which is strange as there is more and better data in the logs. 

One of the ways that LogZilla provides visibility into problems like these is to build a simple network dashboard. It literally takes **less than 10 minutes** and will give you visibility into every log into your network. In addition to showing all the events, it shows the velocity of logs and normalizes the messages so that you don’t have to look at 10k log messages that say the exact same thing. 

Interested in knowing what is really going on in your network? [contact me](http://twitter.com/{{ site.data.authors[page.author].twitter }}) and we'll tell you how to install LogZilla in just a few minutes!

