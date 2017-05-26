---
published: true
layout: post

title: So I built this amazing NetOps Platform
subtitle: ...website, and something occurred to me when I launched it.
author: cdukes
tags: [NetOps, Platform, Security, Syslog, SNMP, NetFlow, Log Analyzer]
summary: Goodby legacy, lazy, over-bloated, marketecture software. It's time for the next generation..
headline-bg: /assets/images/background/network-visibility-banner.jpg

---




# Why did I do it?
Just like every other legacy software we compete with, our old website sucked.
It was bloated, confusing for users and broke every time anyone tried to do something as benign as a simple blog post.
Seriously, how difficult should it be for a sales person post an article? With our new website, they write a simple text file using Markdown and drop it 
Into a direct and, like magic, it become a perfectly laid out, beautiful looking HTML article just like this one.


# Clunk...
The original website we had was built around the  MVC-based structure just like these 
"framework" CRMs such as Drupal, Wordpress, etc. It was clunky, confusing for anyone trying to use it, and contained **way** too 
much code which was completely bloated because it had that "boil the ocean" approach in order to try and get as many
users as they could,...claiming to be able to do everything for every customer. Hmm, what word rhymes with clunk?...

# Claiming to to everything great means you do nothing useful.
Our competitors have fantastic sales teams and amazing marketing. But just like those old Certs(tm) commercials (now with [retsyn](http://hsionline.com/2005/03/24/what-the-heck-is-retsyn/)!), their marketing is 99% BS and 1% something an engineer told them.

They claim to do everything you need, but they fail to mention that it's a framework and not a truly usable product.

Once you purchase their software, you then have to purchase their Professional Services and send your employees to train for two weeks.
Wait, what? I just paid you `$1m dollars` and now I have to pay **you** again to learn it? The other problem is that because they are "frameworks", you have just received an engine without the accompanying automobile.

You'll now spend the next year paying someone to build the actual product you wanted.

# Focus
I built the original catalyst for LogZilla back in 2004 (then called php-syslog-ng). But I did it because **I needed a solution** to manage my datacenter, not because it's what I thought someone else wanted. Not long after that, I went to work for Cisco Systems, Inc.(r) and found, much to my surprise, that many of their Fortune 500 customer were using my open source software. Mind...blown. Over my ~9 year stint at Cisco, I received many requests from their customers begging me to build what I kept telling them they should have in order to properly manage their network. So I did.

I left Cisco about 3 years ago to run LogZilla full-time so that we could focus on two simple goals:

* Ease of use
* Scale

# Ease of use
* I believe that Network Management software should be purchased because it's supposed to solve your pain, not create more.
* The solution I purchase should allow me to be a user of that software and not a full-time admin of it.
* I should be able to intuitively understand how to use it within minutes of installing it.
* I don't want a search bar that requires me to type SQL commands. SQL commands are for Admins, not users.

# Scale
While at Cisco, their customers asked me many times over the years to make it faster. As networks continued to grow and with the advent of IoT, 
The volume of data needing to be managed became insane. When I talk about scale, I don't mean what the other vendors do when their marketing teams actually tout their scale, bragging about being able to index 20k events per second (EPS) is a joke. Moreover, that is just a "marketecture" (BS marketing architecture) claim, not a real one.
I have witnessed time and time again that almost every other solution out there `chokes around 10k EPS` - and that's on a very large, expensive, server.

## No, I said scale!
So we did it right. When LogZilla v5 was releases, we re-defined scale. I can ingest and index 50-80k EPS on my "test" server...spoiler alert, it's a `$1.5k PC`.

**Most people think I'm lying when I say that, so here's your proof**

![50keps](/assets/images/blog/post_images/so-i-built-this-amazing-netops-platform/50k-eps-on-a-pc.png){: .img-responsive .img-fullscreen }

	System | Shuttle Inc.; SH67H; vV1.0 (Desktop)
	Architecture | CPU = 64-bit, OS = 64-bit
	Processors | physical = 1, cores = 4
	Models | 8xIntel(R) Core(TM) i7-2700K CPU @ 3.50GHz
	Mem Total | 31.32G
	Mem Free | 21.55G

>This performance snapshot was taken from a desktop-class PC to show LogZilla's extreme indexing capabilities. Naturally, Enterprise customers are advised to use server class hardware.

# But wait, there's more!
So much of my personal experience between being a consumer of Network Management software and feedback from Fortune 500 users is built into LogZilla, that it actually means that your purchase will become that front-line management platform you always wanted.
LogZilla allows you to remove the chaff from the top and see only what you actually need to see. Why must these legacy tools show you the same benign events every day? Why not build in a methodology that asks two simple questions:

* Have I seen this event before?
* Is it actionable?

With that very simple concept, you are now able to see the 10, 20, 100, etc. events that are actually useful.

# Don't stop there!
Ok, so when something is actionable, do I need to do it over and over again? Let's take a simple example of duplicate IP addresses.
When that happens, it causes engineers to spend precious time tracking down the offending IP and removing it. IN more complex networks, this takes way too much time.
Why can't I automate that? 


# Automatic network healing you say?
If you can type, click, read, write it, we can automate it. LogZilla provides a mechanism to **easily** build in automations for actionable events. Remember I said that I don't want to pay Professional Services? Well, you don't have to. Automation is LogZilla is as simple as dropping in a script/program, etc. to do the work for you. [Take a look here](https://github.com/logzilla/extras) for some examples.

# Now let's make it smart
Ok, so now you can automate, but can you make it smart? Why not go and gather every single bit of knowledge about the affected device before opening that trouble ticket?
Do you have to go and find out where the device is located, who owns it, what the [SLAs](https://en.wikipedia.org/wiki/Service-level_agreement) are on it?, Performance history such as CPU utilization, Bandwidth saturation, etc., Last N logins, Last time the configuration was changed...yadda...yadda...yadda.

# Time is money
And downtime is a **ton** of money...an average of $7.9k **per minute**. Why not have LogZilla go and fetch all of that related information for you and automatically open a trouble ticket so that your staff can begin to **solve the problem** within seconds instead of running around like crazy people trying to gather intelligence on it?

# Goodbye
Goodby legacy, lazy, over-bloated, marketecture software. It's time for the next generation of an actual solution in NetOps platforms. What are you waiting for? [Get it now!](/download.html) 



