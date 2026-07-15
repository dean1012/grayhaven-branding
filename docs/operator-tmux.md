# Operator Tmux

[Back to README](../README.md)

Grayhaven Systems LLC operator tmux themes should use the core brand palette
with a small tmux-specific environment indicator palette.

## Table Of Contents

- [Theme Palette](#theme-palette)
- [Environment Indicator Colors](#environment-indicator-colors)

## Theme Palette

Use these colors for the standard operator tmux theme:

| Name | Tmux Usage | Color |
| --- | --- | --- |
| Deep Graphite | Status bar and inactive window title backgrounds | `#1C1F24` |
| Gunmetal | Current window and environment indicator backgrounds | `#2A2F36` |
| Slate Grey | Inactive index and right status backgrounds | `#77818E` |
| Soft White | Main status, active pane, and title text | `#E6EAF0` |
| Cool Grey | Inactive pane and inactive window title text | `#AAB2BF` |
| Primary Accent | Active index, session segment, and pane border | `#58ACE0` |
| Elevated Hover | Hostname, active pane number, and activity text | `#74C3EC` |
| Pale Steel | Time and inactive window index text | `#BBC7D3` |
| Charcoal Border | Inactive pane border | `#444C56` |

[Back to top](#operator-tmux)

## Environment Indicator Colors

Use these colors for the tmux environment indicator in the status line:

| Environment | Color |
| --- | --- |
| Production | `#B88A36` |
| Non-production | `#6FB7B7` |

The production color is intentionally warm and restrained so it stands apart
from the standard blue interface accents without reading as an error state.
The non-production color is intentionally quieter and cooler so staging and
test sessions remain visible without competing with production.

[Back to top](#operator-tmux)
