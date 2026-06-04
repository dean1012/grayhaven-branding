# Web and Document Style Guide

[Return to README](../README.md)

This guide is intended for use with websites, letterheads, documentation, and
other print or electronic media.

## Web Backgrounds

The preferred dark web background uses a Deep Graphite base with a restrained
blue radial lift and dark aluminum gradient:

```css
background:
  radial-gradient(circle at 50% 12%, rgba(88, 172, 224, 0.14), transparent 34rem),
  linear-gradient(145deg, #1C1F24 0%, #22262C 48%, #191C21 100%);
```

Use this treatment for dark website pages and interactive previews when it
supports the content. Keep the effect subtle; it should feel like space-gray
depth, not a decorative glow.

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
- Preferred hover background: `rgba(101, 183, 230, 0.10)`

Hover states should be subtle and refined, not bright or neon. The soft hover
background is preferred for web interfaces, but a text-color-only hover is also
appropriate where a background treatment would feel too heavy.

## Interactive Preview

Use [index.html](index.html) to view current web heading, link, button, logo,
and alert treatments.
