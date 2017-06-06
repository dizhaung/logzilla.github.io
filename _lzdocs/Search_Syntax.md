---
cid: 01
chapter: Using The Dashboard
did: 05
title: Search Syntax
---


LogZilla provides standard boolean-type search syntax much like you would expect when using Google.

All searches must contain at least 4 characters at a minimum.

* Correct search
hello*
worl*

* Incorrect search
hel*
wor*

 - The 4 character minimum is set in a config file at the OS level which administrators can opt to change at the cost of using more memory for indexing. Customers are welcome to contact us for guidance if this is desired.


***Correct Boolean Examples***
* Phrase search
"hello world"`

* Operator AND
<pre>hello and world</pre>

* Operator NOT
<pre>hello -world</pre>
<pre>hello !world</pre>

***Boolean Mode Enhancements***

Many Network and Systems logs will include names such as GigabitEthernet1/0/0, etc.
The wildcard enhancement allows users to specify a search term when they may not know the trailing characters. For example:
<pre>gigabitethernet1*</pre>


***Incorrect Boolean Examples***
The following search types are `not` currently implemented

* Searches containing OR and NOT operator's combined:
<pre>hello | -world</pre>

* Mixed
<pre>"hello world" -world2</pre>
<pre>"hello world" world</pre>

* Negative searching without a preceding positive search
<pre>!hello</pre>
>This would be analogous to searching Google for every word on the internet that does `NOT` contain the word hello. Which, of course, would not be very useful.
