---
published: true
layout: post

title: Log Spikes and Message Storms
subtitle: How well does your event manager handle traffic spikes?
author: mwheat
tags: [NetOps, Scalability]
summary: Earlier this week one of our customers had a log storm due to a problem with a production server. They were...
headline-bg: /assets/images/blog/post_images/message-storm/storm-banner.jpg
redirect_from:
 - /articles/why-scale-and-visibility-are-important-in-logging

---


Earlier this week one of our customers had a log storm due to a problem with a production server. They were able to quickly identify there was anomalistic behavior by looking at the event rate widget and easily identified what the source of the problem was through the top hosts widget. I took a screen shot of their LogZilla dashboard:

**Dashboard showing spikes**

![Event Storm Spikes](/assets/images/blog/post_images/message-storm/dashboard-event-storm.png){: .img-responsive .img-fullscreen }

 You can adjust the rate widgets to get more myopic or macro based on the time series you prefer but when you see something spike above the norm, it is an indication that there are issues in your environment. Looking at the top host logging during that time will also help pinpoint the source of the issue, this was the actual problem graphic:

![Top Hosts Widget](/assets/images/blog/post_images/message-storm/top-hosts-message-storm.png){: .img-responsive .img-fullscreen }

 The interesting thing with this particular scenario was that the logging rate bumped from about **2,000** messages per second to **well over 25,000 messages per second** and sustained that rate for almost a day. 
 
 Most other logging tools start to fail over with anything more than 7,000 events per second per server, where LogZilla's patented engine can accommodate well over **80,000** events per second on one server. If the customer has another solution, it would have required (4) four servers to handle the spike. In this case, the customer received a licensing warning, called us, and we provided a temporary increase to figure out what was going on. 
 
 Our single server handled the load without even breaking a sweat, never dropped a message, and had no performance degradation while the event storm was happening. 
 
 What if you were using a less scalable tool and you had the same scenario, but now, in addition to figuring out what is wrong in your production environment, also have to repair your logging server? With other solutions, when you need them the most, they just can't keep up!

LogZilla also provides automation that could have automatically alerted the team responsible and even resolved the issue with no physical intervention. We are taking the lowest level indicator of health and performance and making it a front line management tool. 

If you're interested in learning more about LogZilla, feel free to [contact me](http://twitter.com/{{ site.data.authors[page.author].twitter }})

