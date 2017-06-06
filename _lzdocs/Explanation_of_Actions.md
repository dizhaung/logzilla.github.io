---
cid: 02
chapter: Creating Triggers
did: 02
title: Explanation of Actions
---


### Mark As

This allows users to mark incoming events as Actionable or Non-actionable. This simplifies future searches when using these options from the 'Type' drop down in the search bar.

![Query Bar](/assets/images/docs/images/query-bar.png)

The value of this is that everyday events that administrators don't need cluttering search results can be marked as Non-actionable, while events like 'low disk space', 'fan failure', or 'cpu over-utilization' can be marked as Actionable.

When searching, events that are not marked with either can be found by selecting the 'Unknown' type.

### Send E-mail

For high priority events, administrators may need immediate notification of occurrence. Selecting this option allows you to enter the address of the person or team responsible.

![Send e-mail](/assets/images/docs/images/send-email.png)

Users can also add a Subject and message content for this trigger. Variables that can be used are:

* `{% raw %}{{event:host}}{% endraw %}`
* `{% raw %}{{event:severity}}{% endraw %}`
* `{% raw %}{{event:facility}}{% endraw %}`
* `{% raw %}{{event:first_occurrence}}{% endraw %}`
* `{% raw %}{{event:last_occurrence}}{% endraw %}`
* `{% raw %}{{event:program}}{% endraw %}`
* `{% raw %}{{event:cisco_mnemonic}}{% endraw %}`
* `{% raw %}{{event:snareid}}{% endraw %}`
* `{% raw %}{{event:message}}{% endraw %}`

See the Settings sections of the documentation for information on setting your SMTP options for email alerts.

### Add note

When an event occurs, other users may need to be given more information to reduce duplication of effort.

![Add note](/assets/images/docs/images/add-note.png)

### Issue Notification

Selecting this option will produce a notification that will increment in the page header, and show up on the notifications page.

![Issue Notification](/assets/images/docs/images/issue-notification.png)

From the notifications page, users can Search, View, Edit, and Delete notifications. More information on this can be found in the Notifications section of the documentation.

### Execute Script

This option is one of LogZilla's most powerful features. Users can write and execute their own scripts and trigger them whenever an event occurs. Just enter the name of the script to run in the box, and it will run whenever the event recurs.

![Execute Script](/assets/images/docs/images/execute-script.png)

### Trigger Settings

Default Trigger settings can be changed in the Setting menu under System Settings, then Triggers.

![System settings](/assets/images/docs/images/system-settings.png)
