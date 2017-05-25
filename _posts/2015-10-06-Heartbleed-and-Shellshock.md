---
published: true
layout: post

title: Heartbleed and Shellshock: The Importance of Updating Your Software
subtitle: When installing LogZilla, the first step is to always update the operating sytem.
author: tdamon
author-name: "Tom Damon"
tags: [NetOps, Scalability, Update, Upgrade, Patch, vulnerabilities]
summary: We constantly see systems that are so far behind in updates that they have known vulnerabilities...
---

# Heartbleed and Shellshock: The Importance of Updating Your Software

###By: Thomas Damon on October 06, 2015

Update:  A further bash patch was released on September 29th, after this post was written.  I've updated the command output for testing a system for the Shellshock vulnerability.

In our documentation for installing or upgrading Logzilla, the first step is always to update the operating system. We constantly see systems that are so far behind in updates that they have known vulnerabilities that have been patched months ago. Let's take a look at a few items that have been popping up in the news lately to give an idea of how widespread these preventable compromises are becoming.

## Heartbleed
CVE-2012-1823 [https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-1823
]()

This is a bug "in PHP before 5.3.12 and 5.4.x before 5.4.2, when configured as a CGI script (aka php-cgi), does not properly handle query strings that lack an = (equals sign) character, which allows remote attackers to execute arbitrary code by placing command-line options in the query string, related to lack of skipping a certain php_getopt for the 'd' case."

This particular vulnerability was reported in May of 2012, yet over the last few months, hundreds of servers have been compromised using it.

## Shellshock
CVE-2014-6271 [http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6271]()

GNU Bash through 4.3 processes trailing strings after function definitions in the values of environment variables, which allows remote attackers to execute arbitrary code via a crafted environment, as demonstrated by vectors involving the ForceCommand feature in OpenSSH sshd, the mod_cgi and mod_cgid modules in the Apache HTTP Server, scripts executed by unspecified DHCP clients, and other situations in which setting the environment occurs across a privilege boundary from Bash execution.

This vulnerability was reported Sept 24, 2014 (yesterday at the time of this article). This demonstrates that serious new vulnerabilities are being discovered on a regular basis. It has the potential to affect hundreds of thousands of servers. You can test your server by running the following command.

```
env x='() { :;}; echo vulnerable' bash -c "echo this is a test"
```
If your server is vulnerable, you'll see the following output.

```
root@host:/home/ubuntu# env x='() { :;}; echo vulnerable' bash -c "echo this is a test" 
vulnerable 
this is a test
```

On a server with the first patch that was released, you'll see this -

```
root@host:/home/ubuntu# env x='() { :;}; echo vulnerable' bash -c "echo this is a test" 
bash: warning: x: ignoring function definition attempt 
bash: error importing function definition for `x' 
this is a test
```

On a server with the newest patch, you'll see the following -

```
root@host:/home/ubuntu# env x='() { :;}; echo vulnerable' bash -c "echo this is a test"
this is a test
```

To patch both of these, you'll need to run an update and the bash install.

```
apt-get update && apt-get -y update 
apt-get install -y bash
```

For future updates, I've implemented the Ubuntu auto-update package.

```
apt-get -y install unattended-upgrades
```

To configure unattended-upgrades, edit /etc/apt/apt.conf.d/50unattended-upgrades and adjust the following to fit your needs:

```
Unattended-Upgrade::Allowed-Origins { 
    "${distro_id}:${distro_codename}-security"; 
    // "${distro_id}:${distro_codename}-updates"; 
    // "${distro_id}:${distro_codename}-proposed"; 
    // "${distro_id}:${distro_codename}-backports"; 
};
```

For update notifications on your system, you can install apticron.

```
apt-get install apticron
```

Once the package is installed edit the /etc/apticron/apticron.conf, to set the email address and other options.

The bottom line is, there is no excuse for letting your servers get compromised when security patches have been released.

Protect your systems by keeping them up to date!
