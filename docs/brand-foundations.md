# Brand Foundations

Grayhaven Systems LLC uses a modern dark professional
infrastructure/devops aesthetic.

The intended tone is premium, restrained, technical, approachable, and
enterprise-capable. The design language is inspired by dark developer tooling
and space-gray/macOS dark aluminum surfaces.

Avoid pure black, neon/cyberpunk styling, flashy glow effects, loud gradients,
and overly corporate SaaS blue.

## Typography

Primary typeface:

- Inter

Fallback stack for web contexts:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

## Core Palette

| Role | Color |
| --- | --- |
| Deep Graphite | `#1C1F24` |
| Gunmetal | `#2A2F36` |
| Slate Grey | `#353B44` |
| Soft White | `#E6EAF0` |
| Cool Grey | `#AAB2BF` |
| Primary Accent | `#58ACE0` |
| Standard Hover | `#65B7E6` |
| Elevated Hover or CTA | `#74C3EC` |
| Muted Deep Accent | `#2E8BC0` |
| Charcoal Border | `#444C56` |
| Dark Logo Charcoal | `#2B333B` |
| Muted Emerald | `#3FB68B` |

## Heading Palette

| Role | Color |
| --- | --- |
| H1 / Major Display | `#74C3EC` |
| H2 / Section Heading | `#65B7E6` |
| H3 / Subheading | `#AAB2BF` |
| Body Text | `#AAB2BF` |
| Primary Link | `#58ACE0` |
| Link Hover | `#65B7E6` |

H3 and body text may share color when typography, size, and weight provide the
hierarchy. This keeps the brand restrained and avoids turning every heading
level into a separate accent.

## Alert Palette

Use these colors for operational alert surfaces, including Discord alerts and
future website alert components.

| State | Color |
| --- | --- |
| Info / Started | `#58ACE0` |
| Success / Completed | `#3FB68B` |
| Attention / Reboot Required | `#C9973A` |
| Failure / Investigate | `#D64545` |

## Current Decisions

- Dark-mode contexts are primary.
- Links should not be underlined by default.
- Hover states should be subtle, using color shifts and low-opacity surfaces.
- Interface surfaces should feel calm and readable over long sessions.
- Logo variants should be chosen based on background, not recolored ad hoc.
