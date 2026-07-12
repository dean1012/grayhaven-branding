# Discord Notifications

[Back to README](../README.md)

Automation tools should use a consistent Discord notification structure for
operational events.

## Table Of Contents

- [Discord Setup](#discord-setup)
- [Embed Titles](#embed-titles)
- [Embed Body](#embed-body)
- [Colors](#colors)

## Discord Setup

Discord notification webhooks should use the name `Automation` and the
[Discord webhook profile icon](../icons/png/discord-webhook-icon.png).

[Back to top](#discord-notifications)

## Embed Titles

Example notification titles:

- `ℹ️ Ansible Configuration Started`
- `✅ Ansible Configuration Completed`
- `⚠️ Ansible Configuration Completed - Reboot Required`
- `❌ Ansible Configuration Failed - Please Investigate`

Other automation tools should follow the same pattern.

[Back to top](#discord-notifications)

## Embed Body

The embed body should include the message, environment, and localized timestamp:

```text
<message>

Environment: <environment>
YYYY-MM-DD H:MM AM/PM
```

Example:

```text
example-host-01.internal

Environment: prod
2026-06-04 2:08 PM
```

[Back to top](#discord-notifications)

## Colors

| State | Color |
| --- | --- |
| Info | `#58ACE0` |
| Success | `#3FB68B` |
| Warning | `#C9973A` |
| Error | `#D64545` |

Discord displays embed colors as a side bar, not as the message background.

[Back to top](#discord-notifications)
