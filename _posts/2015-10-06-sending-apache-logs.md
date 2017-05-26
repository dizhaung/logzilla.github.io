---
published: true
layout: post

title: Sending Apache Logs to LogZilla
subtitle: How to send apache logs to syslog-ng
author: tomd
tags: [Apache, Syslog, LogZilla, syslog-ng]
summary: This method is not limited to Apache...
headline-bg: /assets/images/blog/post_images/sending-apache-logs-to-logzilla/apache-chopper.jpg

---

This method is not limited to Apache, but will work for any Common Log Format log. Each line in a file stored in the Common Log Format has the following syntax:

	host ident authuser date request status bytes

The first step is to add a new source to your syslog-ng configuration. In the /etc/syslog-ng/conf.d directory, we'll create a file and name it apache.conf.


	cd /etc/syslog-ng/conf.d 
	 vi apache.conf


Once the file is open in the editor, we'll first add the source.

	source s_apache {
	 file("/var/log/apache2/access.log");
	 file("/var/log/apache2/error.log");
	 };
 
You can also add the ssl-access.log if you have enabled that on your web server. In the same file, we'll need to add a destination.

	log { source(s_apache);
	 destination(d_tls);
	 };

In this example, the destination is a TLS tunnel created in a previous tutorial. Save the file and quit, then restart syslog-ng.


	service syslog-ng restart

You should now be receiving apache events on your Logzilla server, but they'll look a little off. That's because they haven't been formatted yet. To do that, we'll need to edit the apache configuration.  This step will only work for Apache.  For other Common Log Format sources, each will have it's own solution for formatting.


	cd /etc/apache2
	 vi apache2.conf


In that file, you'll find a line like this:


	LogFormat "%h %l %u %t \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\" %v" combined

It will need a bit added to it (it will ignore the pre-set date).


	LogFormat "Jan 12 12:12:12 %v apache[666]: %h %l %u %t \"%r\" %>s %O \"%{Referer}i\" \"%{User-Agent}i\" %v" combined

Save the file and restart Apache, and your logs should look like this:


	0 www user notice apache None 97.76.75.78 - - [07/Nov/2013:15:14:41 -0500] "GET /highslide/highslide.css HTTP/1.1" 304 209 
	"http://www.yourserver.com/" "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0; EIE10;ENUSMSN)" 
	www.yourserver.com

You can create custom reports to make further use of this data, or just [contact us](/contact.html) us to give you a hand with it.
