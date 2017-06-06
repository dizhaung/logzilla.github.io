---
cid: 03
chapter: Alerts
did: 04
title: Outgoing Webhooks
---


# Outgoing Webhooks

The Webhook option in the trigger menu allows users to send a `GET` or `POST` webhook command to a northbound server such as [slack.com](http://www.slack.com)

The example below shows a trigger set to match on `rejected` messages from Postfix. When the trigger matches, it will post to a Slack channel automatically.

Webhook Post to Slack
-----
![Slack Notification Webhook](/assets/images/docs/images/outgoing_webhooks.png)

Alert Shown in Slack Channel
-----
![Slack Alert](/assets/images/docs/images/slack_alert.png)


# Post Data Used
The Trigger above uses the following JSON:

    {
      "channel": "#logzilla-alerts",
      "attachments": [
        {
          "color": "#9C1A22",
          "title": "Alert from {% raw %}{{event:host}}{% endraw %}",
          "text": "```{% raw %}{{event:message}}{% endraw %}```",
          "thumb_url": "http://www.logzilla.net/images/icon_warning_25x25.png",
          "fallback": "Alert from {% raw %}{{event:host}}{% endraw %}",
          "author_icon": "http://www.logzilla.net/images/log_file_icon_25x25.png",
          "pretext": "LogZilla Triggered an alert on {% raw %}{{event:host}}{% endraw %}",
          "author_link": "mailto:support@logzilla.net",
          "fields": [
            {
              "value": "{% raw %}{{event:program}}{% endraw %}",
              "title": "Program",
              "short": "true"
            },
            {
              "value": "{% raw %}{{event:severity}}{% endraw %}",
              "short": "true",
              "title": "Severity"
            }
          ],
          "mrkdwn_in": [
            "text",
            "fields"
          ],
          "author_name": "LogZillaBot"
        }
      ],
      "username": "logzilla-bot",
      "icon_url": "http://www.logzilla.net/images/logo_orange_png_cropped_40x40.png"
    }
