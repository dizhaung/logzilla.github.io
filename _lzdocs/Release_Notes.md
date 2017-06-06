---
cid: 05
chapter: Software Notes
did: 02
title: Release Notes
---



Release Notes - LogZilla 5 - Version 5.73
-----

* Task
 - API: Add a UI option to register evaluation license

* Bug
 - API: CPP filters - fix exclude operator (NE)
 - Fixed QueryUpdateModule WARNING queries_live_update_events
 - Modifying dashboards widgets should check dashboard owner 

Release Notes - LogZilla 5 - Version 5.72
-----

* Feature
 - Ability to import and export Dashboards
 - Implemented multiple pre-built dashboards

* Task
 - Improvements on lz5query command

* Bug
 - Add widget modal had duplicated widget types in some browsers

Release Notes - LogZilla 5 - Version 5.71
-----
* Feature
 - Added tag rules for Windows-based events
 - Added autoarchive and retention options to the UI
 - Added pre-built triggers for Cisco and Windows

* Bug
 - Autoarchive was not updating storage counters post-archive
 - "Save To Dashboard" from search results was not saving to dashboard.
 - Modifying HH:MM:SS on search query bar was causing a search to start prior to actually clicking search.


Release Notes - LogZilla 5 - Version 5.70
-----
* Feature
 - Added ability to search data using prefix wildcards
 - Added ability to change the min word indexing length
 - Added ability to set custom time ranges for Seconds value
 - Added ability to configure LogZilla not to use any auth methods

* Task
 - API: Add simple cache for chunk counters
 - API: Add a cache for influx dictionaries

* Bug
 - set `LOG_INTERNAL_COUNTERS` default value to False
 - UI: Demo license is blank with only an exclamation
 - Creation of new users or triggers would not show until after a browser refresh
 - 

Release Notes - LogZilla 5 - Version 5.69
-----
* Task
 - Query progress bar improvements
 - Better in-progress reporting for search queries
 - freeze_time option for queries
 - Remove time zone option from UI Settings page
 - Add EULA_ACCEPTED to settings

* Bug
 - Check for and remove rest_framework_swagger
 - Mnemonic right-click fails if it contains a %
 - [API] Fix indexer crash bug
 - [API] license EPD exceeded bug
 - [API] StorageStats query return null results for today preset



Release Notes - LogZilla 5 - Version 5.68
-----

* Task
  - [LZ5-526] - Create new trigger destination for Webhooks
  - [LZ5-656] - Improve TopN performance
  - [LZ5-661] - Added retention policy to rusage db

* Bug
  - [LZ5-648] - Fix query processing for relative past time range
  - [LZ5-654] - [API] Allow users to format outgoing webhooks
  - [LZ5-703] - [API] Query update memory crash 



Release Notes - LogZilla 5 - Version 5.67
-----

* Task
 - [LZ5-636] - Added storage sync writes for performance improvement
 - [LZ5-679] - Fix diskfree-alert in deb package

* Bug
 - [LZ5-657] - Query initial values for some time zones were invalid
 - [LZ5-560] - Fixed query updates on new events during initialization

Release Notes - LogZilla 5 - Version 5.66
-----

* Task
 - [LZ5-644] - Remove duplicate trigger notifications 
 - [LZ5-663] - Timerange validator Improvements
 - [LZ5-679] - Fix diskfree-alert in deb package



Release Notes - LogZilla 5 - Version 5.65
-----

* Bug
 - [LZ5-637] - Filter corruption when new tag contains empty value


Release Notes - LogZilla 5 - Version 5.64
-----


* Task
 - [LZ5-307] - Add ability to run 'or' boolean queries (Part 1 of 3)
 - [LZ5-534] - Display Widget selected time ranges in widget title bar


Release Notes - LogZilla 5 - Version 5.63
-----


* Task
 - [LZ5-443] - Added command line `lz5dashboards` command for import and export of custom dashboards. - [LZ5-532] - Removed references to deprecated Graphite/Carbon/Whisper
 - [LZ5-534] - Added Author and Author Email to Trigger environment variables
 - [LZ5-542] - Disk IOPS widget now uses negative scale similar to Bandwidth Utilization
* Bug
 - [LZ5-438] - Widget gauges do not show up until turned off and on again
 - [LZ5-463] - Pie slices not clickable on some of the slices
 - [LZ5-516] - Unable to expand message text when it is displayed in a widget
 - [LZ5-522] - Network Widget should show Bps/Kbps/Mbps/Gbps and not be stacked
 - [LZ5-525] - Creating a new user with the same name as a deleted one fails with no error
 - [LZ5-543] - Add New Dashboard failing for some browsers
 - [LZ5-563] - Dedup settings update causes spinner on some browsers
 - [LZ5-573] - Dashboard time change not working in some browsers


Release Notes - LogZilla 5 - Version 5.62
-----

* Task
 - [LZ5-504] - Create separated queues for tasks

* Bug
 - [LZ5-511] - lz5manage and lz5setup should check for dependency connections and wait (with timeout)
 - [LZ5-531] - Search results caching causes incorrect count of matches

