## WannaCry: Instantly Visibility

 If you are in the free speaking world and have access to news outlets, you've no doubt heard about the WannaCry ransomware attack targeting systems all over the world.  The estimates are that over a quarter of a million computers have been compromised spanning more than 150 countries.  If you have anything to do with the operations and engineering of your company's infrastructure, you probably started wondering if WannaCry had made it’s way into your piece of the universe. 

 An easy way to get visibility into the WannaCry malware in your environment is to install LogZilla and use the pre-built rules from our [LogZilla Extras GitHub](http://bit.ly/2qumD4C) repository.
 
 Next, point your network and server telemetry to your LogZilla server and, wWithin seconds, you'll be able to select `IoC-WannaCry` or `IoC-IP_Blacklist` from the Program dropdown to see if your company has been infected. 

##### WannaCry Dashboard
Here is a screenshot of one of our dashboards filtered on these programs:

![WannaCry](http://i.imgur.com/Rtx52os.png)

##### WannaCry Alerts
Now that you have the data in LogZilla, alerts and automatic remediation are just as easy.  Here is an example trigger that will send a Slack message with information about the newly found malware infected host:

![Trigger](http://i.imgur.com/Qe6HXUy.png)

##### Slack.com Alert

Here is what the Slack message looks like when we receive it from LogZilla:

![Imgur](http://i.imgur.com/9EAXQ9s.png)

**It is that easy** to identify and be alerted when malware like this manifests in your organization. 

Having a LogZilla NetOps management platform will provide you with incredible visibility and insight, in real-time, to what's happening in your environment, right now. If you would like to learn more about how LogZilla can make your team more proactive and how you can look like a Network Hero, reach out to me at mwheat@logzilla.net and we'll tell you how to install LogZilla in just a few minutes!

Mark
