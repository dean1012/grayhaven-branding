# Web and Document Style Guide

This guide records current style decisions for web pages, infrastructure
documentation, operational alerts, and documents such as Word files.

It is intentionally practical rather than exhaustive. It should be updated as
the actual Grayhaven websites mature.

## Headings

Use the heading palette consistently:

| Element | Color |
| --- | --- |
| H1 / Major Display | `#74C3EC` |
| H2 / Section Heading | `#65B7E6` |
| H3 / Subheading | `#AAB2BF` |
| Body Text | `#AAB2BF` |

For documents where colored headings are appropriate, map Word/Docs heading
styles to the same color intent:

- Heading 1: elevated blue accent
- Heading 2: standard blue accent
- Heading 3: cool grey or restrained supporting heading color

If a formal document needs a more conservative look, use Soft White or near
black text depending on document background, while preserving the hierarchy.

## Links

Links should not be underlined by default.

Use:

- Normal link: `#58ACE0`
- Hover/focus link: `#65B7E6`
- Optional hover background: `rgba(101, 183, 230, 0.10)`

Hover states should be subtle and refined, not bright or neon.

## Logo Backgrounds

Use the light-background wordmark only on light surfaces.

Use the dark-background wordmark on Deep Graphite, Gunmetal, Slate Grey, or
similar dark/space-gray surfaces.

Use the monogram/profile logo as a self-contained avatar or compact brand mark
on both light and dark surfaces.

## Alerts

Operational alerts should follow the shared alert palette:

| State | Color |
| --- | --- |
| Info | `#58ACE0` |
| Success | `#3FB68B` |
| Attention | `#C9973A` |
| Failure | `#D64545` |

Discord alert titles currently use:

- `ℹ️ Ansible Configuration Started`
- `✅ Ansible Configuration Completed`
- `⚠️ Ansible Configuration Completed - Reboot Required`
- `❌ Ansible Configuration Failed - Please Investigate`

Alert bodies should include target, environment, and localized timestamp:

```text
<fqdn>

Environment: prod
YYYY-MM-DD H:MM AM/PM
```

## Interactive Preview

Use [index.html](index.html) to view current web heading, link, button, logo,
and alert treatments.
