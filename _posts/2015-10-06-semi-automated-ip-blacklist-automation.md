---
published: false
layout: post

title: Semi-Automated IP Blacklist Automation
subtitle: Just add a list of URLs ot the Router.....
author: cdukes
author-name: "Clayton Dukes"
tags: [NetOps, Scalability]
summary: Just want to be able to add a list of URLs to the router Automatically...
headline-bg: /assets/images/blog/post_images/message-storm/storm-banner.jpg

---



# Semi-Automated IP Blacklist Automation

### By: Clayton Dukes on October 06, 2015

Since I'm not much of a painter...

Han Solo watches Bob Ross

I recently had surgery and was more or less confined to a bed or couch for a week.

As most good geeks will tell you, our brains don't do "idle" very well - that's when we start breaking things just to see if they can be broken!

I decided to start poking around in my home network and, after playing a bit with **Cisco EEM**, I thought, "Gee, wouldn't it be really nice if I could just have something that would automatically update my inbound and outbound access lists with IP's and ranges from the myriad of blocklist providers available?"

Sadly after a day or so of posting in forums and consulting "The Goog", I was unable to find a solution. I was actually a bit surprised by this, it seemed to me that someone should have already done this by now.

Ideally, I wanted to just be able to add a list of URLs to the router and have EEM automatically go out and download the list, convert it to an ACL and apply it.
What I had to settle for was writing this Perl script, but that now means I have multiple "things" to manage since now I have to store the perl script on a Linux box running tftp. It would be much nicer to have only 1 management source (the router).

## Just gimme the script already!

```
/usr/bin/perl

Written by Clayton Dukes <cdukes@cdukes.com
//<!--
document.getElementById('cloak58349')[removed] = '';
var prefix = 'ma' + 'il' + 'to';
var path = 'hr' + 'ef' + '=';
var addy58349 = 'cdukes' + '@';
addy58349 = addy58349 + 'cdukes' + '.' + 'com';
document.getElementById('cloak58349')[removed] += '' +addy58349+'<\/a>';
//-->
>

This script is provided as-is without warranty of any kind.
If you blow up your network, don't come cryin' to me :-)
You can find the original script at http://go.logzil.la/blocklist2acl
If you modify the code or use it, please keep this information in here and let me know.

use strict;
use warnings;
use Cisco::ACL;
use Getopt::Long;
use Log::Fast;
use File::Basename;
use LWP::UserAgent;
use Regexp::Common qw/net/;
use Set::Object qw(set);
use POSIX qw/strftime/;
use File::Sort qw(sort_file);
use Data::Dumper;
my $log = Log::Fast->global();
my $browser = LWP::UserAgent->new;
my @ns_headers = (
'User-Agent' => 'Mozilla/4.76 [en] (Win98; U)',
'Accept' => 'image/gif, image/x-xbitmap, image/jpeg, image/pjpeg, image/png, */*',
'Accept-Charset' => 'iso-8859-1,*,utf-8',
'Accept-Language' => 'en-US',
'timeout' => 5,
);
Command line options my $opti
debug       => 0,
verbose     => 0,
logfile     => basename( $0, '.pl' ) . '.log',
outaclname  => 'BlocklistACL_OUT',
inaclname   => 'BlocklistACL_IN',
help        => 0,
};
sub usage_and_exit {
my ($exit_code) = @_;
my $myname = $0;
$myname =~ s{.*/}{};    # leave just program name without path
print STDERR <<END;
This program is used to fetch IP Blocklists from various sources on the web and convert the lists to Cisco Access Lists
This program requires setting at least one of the following command line options:
-intin 
-intout 
Usage: $myname -intin gi0/0 intout gi0/1 [-option -option]
-h          : this (help) message
-d          : debug level (0-5) (0 = disabled [default])
-v          : Also print results to STDERR
-l          : log file (default: $options->{logfile})
-add        : Manually include a blocklist, e.g.: -add MyList,http://www.foo.bar/iplist.txt
-list       : List all default Blocklists
-skip       : Skip a default Blocklist name
-skipall    : Skip all default lists included in this script. Meant to be used with -add to only use your own list(s)
-only       : Only run against the specified list
-out        : Output resulting commmands to file instead of STDOUT
-outaclname : Prepend the given Outbound Access list name to the output (e.g.: -outaclname MyACLname)
-inaclname  : Prepend the given Inbound Access list name to the output (e.g.: -inaclname MyACLname)
-acllog     : Append the "log" option to ACL entries
-intin      : Interface name to apply the ACL INBOUND
-intout     : Interface name to apply the ACL OUTBOUND
-wrmem      : Append write mem to output
Example     : $myname -l /var/log/foo.log -v -add mysource,http://www.logzilla.net/index.php -skip bogon -skip dshield -skip emerging_threats
Example2 (list sources) : $myname -v -list
Example3 (Run All)      : $myname -l /var/log/foo.log -v
Special     : If a file named "private.list" is present in the current directory, then entries from that list will be used instead of the default lists included in this script.
the private list should be in the format "name,url", for example:
Anti-Infringement,http://list.iblocklist.com/?list=srzondksmjuwsvmgdbhi&fileformat=cidr&archiveformat=&username=xxx&pin=123
Spammers,http://list.iblocklist.com/?list=rynxmrknfjysesjtjlxy&fileformat=cidr&archiveformat=&username=xxx&pin=123
END
exit($exit_code);
}
my (@skip, @onlys, @target_sources, @sources, @addsources);
GetOptions(
'debug|d=i'     => \$options->{debug},
'help|h!'       => \$options->{help},
'verbose|v!'    => \$options->{verbose},
'logfile|l=s'   => \$options->{logfile},
'list'          => \$options->{list},
'out=s'         => \$options->{out},
'outaclname=s'  => \$options->{outaclname},
'inaclname=s'   => \$options->{inaclname},
'acllog'        => \$options->{acllog},
'intin=s'       => \$options->{intin},
'intout=s'      => \$options->{intout},
'wrmem'         => \$options->{wrmem},
'skipall'       => \$options->{skipall},
'add|a=s'       => \@addsources,
'skip=s'        => \@skip, ' => \@onlys,
) or usage_and_exit(1);    # got some invalid options
usage_and_exit(0) if ( $options->{help} );
If this file is found, we'll use it as the default list instead of the ones defined in the @sources array.
my $fn = './private.list';
if (-e $fn) {
open my $handle, '<', $fn;
chomp(@sources = <$handle>);
close $handle;
} else {
Default sources
@sources = (
'dshield,http://www.dshield.org/block.txt',
'bogon,http://list.iblocklist.com/?list=gihxqmhyunbxhbmgqrla&fileformat=cidr&archiveformat=&username=cdukes&pin=398091',
'emerging_threats,http://rules.emergingthreats.net/fwrules/emerging-PIX-CC.rules',
'spamhaus_drop,http://www.spamhaus.org/drop/drop.txt',
'spamhaus_edrop,http://www.spamhaus.org/drop/edrop.txt',
);
splice @sources if ( $options->{skipall});
}
push (@sources, @addsources) if (scalar(@addsources) > 0);
if ( $options->{list} ) {
print "-" x 140,"\n";
printf("%-30s %-2s %-60s\n", "NAME", "|", "URL");
print "-" x 140,"\n";
foreach my $listsource (@sources) {
my ($name,$url) = split( /,/, $listsource, 2 );
next if not $name or not $url; # Skip poorly formatted command line options
printf("%-30s %-2s %-60s\n", "$name", "|", "$url");
}
print "-" x 140,"\n";
exit;
}
sub setup_log {
if ( !$options->{logfile} ) {
$options->{logfile} = "./" . basename( $0, '.pl' ) . '.log';
} my $log_opti};
Set up output to file or both file and stderr
if ( $options->{verbose} ) {
make multiplexer FH sending data both to file and STDERR
open( my $fh, '>>:tee', $options->{logfile}, \*STDERR )
or croak("$options->{logfile}: $!");
$fh->autoflush(1);
$log_options->{fh} = $fh;
} else {
open( my $fh, '>>', $options->{logfile} ) or croak("$options->{logfile}: $!");
$log_options->{fh} = $fh;
}
Setup extra information to put in every log line, depending on debug level
if ( $options->{debug} > 1 ) {
$log_options->{prefix} = "%D %T %S [%L] ";
}
else {
$log_options->{prefix} = "%D %T [%L] ";
}
$log_options->{level} = $options->{debug} > 0 ? 'DEBUG' : 'INFO';
$log->config($log_options);
$SIG{__WARN__} = sub {
my $msg = shift;
$msg =~ s/\n//;
$log->WARN($msg);
};
$log->INFO("Starting logging to $options->{logfile} with pid $$");
}
sub DEBUG {
my ( $level, @log_args ) = @_;
if ( $options->{debug} >= $level ) {
$log->DEBUG(@log_args);
}
}
##############################################################################
Reconfigure log to use log_file
set proper level and output based on $options{verbose} and $options{debug}
setup_log();
##############################################################################
##############################################################################
Do the needful
my $
my $skip_set = Set::Object->new(@skip);
for my $src (@sources) {
my($name, $url) = split(/,/, $src, 2);
if( @onlys && !$onlys_set->has($name)) {
next;
}
if( @skip && $skip_set->has($name)) {
next;
}
push @target_sources, $src;
}
$log->INFO("Processing %s Blocklists", scalar(@target_sources));
Open a new tmp file for storing all the ip ranges, we'll sort/uniq this at the end
my $ipFile = "/tmp/iplist.tmp";
open(my $fhl, '>', $ipFile) or die "Could not open file '$ipFile' $!";
for (my $i = 0; $i < scalar(@target_sources); $i++) {
my ($name,$url) = split( /,/, $target_sources[$i], 2 );
$log->INFO("List source %s/%s: Name=%s, URL=%s", $i+1, scalar(@target_sources), $name, $url); my $resp @ns_headers);
die "Error at $url\n ", $response->status_line, "\n Aborting" unless $response->is_success; my $c
for my $line (split /\n/, $content) {
DEBUG(2, "LINE: $line");
next if $line =~ /^$|#/; # Skip blanks and comments
my $mask = "";
$mask = $1 if ($line =~ /(\/\d{1,2})/); # Some lists include a subnet mask, e.g.: /24
my @ips = $line =~ m/($RE{net}{IPv4})/g;
if (scalar(@ips) > 0) {
If more than 1 ip is listed on the line, assume it is a range and join it by a "-"
TODO: This will no doubt break if we encounter a line with > 2 IP ranges.
my $range = join("-",@ips);
print $fhl "$range$mask\n";
}
}
}
close($fhl);
sort_file({u => 1, I => "$ipFile", o => "$ipFile"});
Pull all the sorted IP's into an array
open(FL,$ipFile) || die "cant open: $!";
my @iparr =;
close(FL);
open( my $outfile, '>', $options->{out} ) || die "$options->{out}: $!" if ( $options->{out});
Create acl conversion from IP's to ACL Statements
my $acl = Cisco::ACL->new( permit   => 0, src_addr => \@iparr, protocol => "ip",);
makeACL("$options->{inaclname}", "$options->{intin}", "in") if ( $options->{intin});
$acl = Cisco::ACL->new( permit   => 0, dst_addr => \@iparr, protocol => "ip",);
makeACL("$options->{outaclname}", "$options->{intout}", "out") if ( $options->{intout});
if ( $options->{out} ) {
print $outfile "service compress-config\n";
print $outfile "end\n";
print $outfile "write memory\n" if ( $options->{wrmem});
} else {
print "service compress-config\n";
print "end\n";
print "write memory\n" if ( $options->{wrmem});
}
sub header {
my $aclname = shift;
my $int = shift; my $directi
Header
if ( $outfile ) {
print $outfile "interface $int\nno ip access-group $aclname $direction\n";
print $outfile "no ip access-list extended $aclname\n";
print $outfile "ip access-list extended $aclname\n";
printf $outfile ("remark [%s] - $aclname is an auto-generated list from Clayton's blocklist2acl.pl Script\n", strftime('%Y-%m-%d',localtime));
} else {
print "interface $int\nno ip access-group $aclname $direction\n";
print "no ip access-list extended $aclname\n";
print "ip access-list extended $aclname\n";
printf ("remark [%s] - $aclname is an auto-generated list from Clayton's blocklist2acl.pl Script\n", strftime('%Y-%m-%d',localtime));
}
}
sub footer {
my $aclname = shift;
my $int = shift; my $directi
footer
if ( $outfile ) {
print $outfile "permit ip any any\n";
print $outfile "interface $int\nip access-group $aclname $direction\n";
} else {
print "permit ip any any\n";
print "interface $int\nip access-group $aclname $direction\n";
}
}
sub makeACL {
my $aclnam
