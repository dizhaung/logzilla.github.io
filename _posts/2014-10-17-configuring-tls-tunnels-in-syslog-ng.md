---
published: true
layout: post

title: How to send TLS encrypted logs using syslog-ng
subtitle: Short primer on TLS with syslog
author: tdamon
author-name: "Tom Damon"
tags: [NetOps, Scalability, TLS, Tunnels, RemoteConnectivity]
summary: There's a ton of information in your log files that can be used to compromise or secure your network...
headline-bg: /assets/images/blog/post_images/message-storm/storm-banner.jpg

---

# Configuring TLS Tunnels

 If your server is receiving messages from through a public network, it's vulnerable to snooping attempts by hackers. There's a ton of information in your log files that can be used to compromise your network. 

 Fortunately, there's an easy solution: Transport Layer Security. TLS uses X.509 certificates to provide a configurable level of security. 

 In this example, I'm using 2048 bit keys, which are the current minimum for medium-high security. The best part is that configuring TLS tunnels is not a time consuming process.

  I'll assume that your server already has openssh installed, since you need that for remote connectivity. First, we need to create the keys on the server.

>Note:  In this example, we've used port 1999, you can use any port you'd like.

### Server SSL Key Creation
We'll store the keys in `/etc/syslog-ng/ssl`.  
You'll be prompted for a passphrase during this process, but it will only be
used to create the keys. Once the keys are created, the passphrase will be removed.
You'll also be asked questions about the server name, location, and contact information.

The server name *must* match the entry in your `/etc/hostname` file.

        cd /etc/syslog-ng
        mkdir ssl
        cd ssl
        openssl genrsa -des3 -out logserver.key 2048
        openssl req -new -key logserver.key -out logserver.csr

Remove the passphrase from the key:

        cp logserver.key logserver.key.org
        openssl rsa -in logserver key.org -out logserver.key

Next, generate a self-signed certificate:

        openssl x509 -req -days 365 -in logserver.csr -signkey logserver.key -out logserver.crt

### Configure syslog-ng
Create a file named `tls.conf` in the `/etc/syslog-ng/conf.d` directory with the following:

        source s_tls {
                tcp(port(1999)
                tls( key_file("/etc/syslog-ng/ssl/logserver.key")
                        cert_file("/etc/syslog-ng/ssl/logserver.crt")
                peer_verify(optional-untrusted))
                flags(no-multi-line)
                );
        };
Next, add the `s_tls` to your defined `source` in `/etc/syslog-ng/conf.d/`

Restart syslog-ng by typing `service syslog-ng restart`.

### Configure Client System

Connect to the Client and `mkdir -p /etc/syslog-ng/ssl`.
Download/Upload the `/etc/syslog-ng/ssl/logserver.crt` (which was created earlier on the *Server*) to the *Client* system and put the file in `/etc/syslog-ng/ssl` on the *Client*.

Find the hash for your key by running `openssl x509 -noout -hash -in /etc/syslog-ng/ssl/logserver.crt`

The result (for example `84d92a45`) is a series of alphanumeric characters based on the Distinguished Name of the certificate.

Next, create a symbolic link to the certificate that uses the hash returned by the previous command, with an added `.0` suffix.

        ln -s /etc/syslog-ng/ssl/logserver.crt /etc/syslog-ng/ssl/84d92a45.0                

### Configure syslog-ng on the Client

Create a new file named `/etc/syslog-ng/conf.d/client-to-server.conf` and add the following,
> Replace `SERVER` with the DNS Name or IP Address of your LogZilla Server.
> You may also need to replace `s_src` with your locally configured source name which is defined in the main `/etc/syslog-ng/syslog-ng.conf` file.

      destination d_tls {
          tcp("SERVER" port(1999)
          tls( ca_dir("/etc/syslog-ng/ssl/")) );
      };

      log {
          source(s_src);
          destination(d_tls);
      };

Restart syslog-ng on the Client system by typing `service syslog-ng restart`

Check your **server** to verify that events are now being received by this **client**.

