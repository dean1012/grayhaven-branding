# Discord Notifications

[Return to README](../README.md)

Automation tools should use a consistent Discord notification structure for
operational events.

## Embed Titles

Example notification titles:

- `ℹ️ Ansible Configuration Started`
- `✅ Ansible Configuration Completed`
- `⚠️ Ansible Configuration Completed - Reboot Required`
- `❌ Ansible Configuration Failed - Please Investigate`

Other automation tools should follow the same pattern.

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

## Colors

| State | Color |
| --- | --- |
| Info | `#58ACE0` |
| Success | `#3FB68B` |
| Warning | `#C9973A` |
| Error | `#D64545` |

Discord displays embed colors as a side bar, not as the message background.
