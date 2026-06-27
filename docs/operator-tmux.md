# Operator Tmux

Grayhaven Systems LLC operator tmux themes should use the core brand palette
with a small tmux-specific environment indicator palette.

## Table Of Contents

- [Theme Palette](#theme-palette)
- [Environment Indicator Colors](#environment-indicator-colors)

## Theme Palette

Use these colors for the standard operator tmux theme:

| Name | Tmux Usage | Color |
| --- | --- | --- |
| Deep Graphite | Status bar background; inactive window title background | `#1C1F24` |
| Gunmetal | Current window title background; environment indicator background | `#2A2F36` |
| Slate Grey | Inactive window index background; right status segment background | `#353B44` |
| Soft White | Main status text; active pane text; current window title text | `#E6EAF0` |
| Cool Grey | Inactive pane text; inactive window title text | `#AAB2BF` |
| Primary Accent | Active window index background; session segment background; active pane border | `#58ACE0` |
| Elevated Hover | Hostname text; active pane number; inactive window activity text | `#74C3EC` |
| Pale Steel | Time text; inactive window index text | `#BBC7D3` |
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
