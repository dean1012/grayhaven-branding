# Discord Notifications

[Return to README](../README.md)

Automation tools should use a consistent Discord notification structure for
operational events.

## Embed Titles

Current Ansible notification titles:

- `ℹ️ Ansible Configuration Started`
- `✅ Ansible Configuration Completed`
- `⚠️ Ansible Configuration Completed - Reboot Required`
- `❌ Ansible Configuration Failed - Please Investigate`

Future automation tools should follow the same pattern:

```text
<icon> <System> <Action> <State>
```

## Embed Body

The embed body should include the target, environment, and localized timestamp:

```text
<target>

Environment: prod
YYYY-MM-DD H:MM AM/PM
```

Example:

```text
grayhaven-sec-prod-bastion-01.grayhavensystems.com

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
