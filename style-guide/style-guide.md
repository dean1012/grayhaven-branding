# Web Style Guide

[Return to README](../README.md)

This guide defines current web styling rules for Grayhaven Systems LLC
websites, web previews, and web-based interfaces.

## Table of Contents

- [Base Page](#base-page)
- [Background](#background)
- [Layout Shell](#layout-shell)
- [Surfaces](#surfaces)
- [Headings](#headings)
- [Body Text](#body-text)
- [Links](#links)
- [Link Buttons](#link-buttons)
- [Interactive Preview](#interactive-preview)

## Base Page

Use these base styles for dark web pages:

```css
* {
  box-sizing: border-box;
}

html {
  min-height: 100%;
  color-scheme: dark;
  background: #1C1F24;
}

body {
  min-height: 100vh;
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
  color: #E6EAF0;
}
```

[Back to top](#web-style-guide)

## Background

The preferred dark web background uses a Deep Graphite base with a restrained
blue radial lift and dark aluminum gradient:

```css
body {
  background:
    radial-gradient(circle at 50% 12%, rgba(88, 172, 224, 0.14), transparent 34rem),
    linear-gradient(145deg, #1C1F24 0%, #22262C 48%, #191C21 100%);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
```

Use this treatment for dark website pages and interactive previews when it
supports the content. Keep the effect subtle; it should feel like dark aluminum
depth, not a decorative glow.

[Back to top](#web-style-guide)

## Layout Shell

Use this layout for centered single-panel pages:

```css
.site-shell {
  position: relative;
  display: grid;
  min-height: 100vh;
  place-items: center;
  padding: 2rem;
  overflow: hidden;
}

@media (max-width: 40rem) {
  .site-shell {
    padding: 1rem;
  }
}
```

[Back to top](#web-style-guide)

## Surfaces

Content panels use a dark aluminum surface with a subtle vertical gradient:

```css
.content-panel {
  background:
    linear-gradient(180deg, rgba(42, 47, 54, 0.94), rgba(34, 38, 44, 0.90)),
    #2A2F36;
  border: 1px solid rgba(68, 76, 86, 0.72);
  border-radius: 8px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
}
```

Use this treatment for focused content cards and centered placeholder panels.

Use this HTML structure for a content panel:

```html
<main class="content-panel">
  <h1>Heading 1</h1>
  <p>Panel content goes here.</p>
</main>
```

[Back to top](#web-style-guide)

## Headings

Use the heading palette consistently:

| Element | Color |
| --- | --- |
| H1 / Major Display | `#74C3EC` |
| H2 / Section Heading | `#BBC7D3` |
| H3 / Subheading | `#AAB2BF` |

Use:

```css
h1 {
  margin: 0 0 2.4rem;
  color: #74C3EC;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  line-height: 1;
  letter-spacing: 0;
}

h2 {
  margin-top: 1.8rem;
  color: #BBC7D3;
  font-size: clamp(1.7rem, 4vw, 2.4rem);
  line-height: 1.1;
  letter-spacing: 0;
}

h3 {
  margin-top: 1.3rem;
  color: #AAB2BF;
  font-size: clamp(1.15rem, 3vw, 1.45rem);
  line-height: 1.2;
  letter-spacing: 0;
}
```

[Back to top](#web-style-guide)

## Body Text

Body text uses Cool Grey for comfortable reading on dark surfaces:

```css
p {
  margin: 1.1rem 0 0;
  color: #AAB2BF;
  font-size: 1.05rem;
  line-height: 1.7;
  letter-spacing: 0;
}
```

[Back to top](#web-style-guide)

## Links

Links should not be underlined.

Use:

- Normal link: `#58ACE0`
- Hover/focus link: `#65B7E6`
- Preferred hover background: `rgba(101, 183, 230, 0.10)`

Hover states should be subtle and refined, not bright or neon. The soft hover
background is preferred for web interfaces.

```css
a {
  color: #58ACE0;
  padding: 0.08rem 0.16rem;
  text-decoration: none;
  border-radius: 4px;
  transition:
    color 160ms ease,
    background-color 160ms ease;
}

a:hover,
a:focus-visible {
  color: #65B7E6;
  background: rgba(101, 183, 230, 0.10);
}
```

A text-color-only hover is also appropriate where a background treatment would
feel too heavy.

```css
a:hover,
a:focus-visible {
  color: #65B7E6;
}
```

[Back to top](#web-style-guide)

## Link Buttons

Link buttons are used for compact action links such as email, GitHub, and
LinkedIn.

```css
.link-button {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  padding: 0.68rem 0.9rem;
  color: #E6EAF0;
  background: rgba(28, 31, 36, 0.34);
  border: 1px solid rgba(68, 76, 86, 0.90);
  border-radius: 8px;
}
```

Link buttons may include icons:

```css
.link-button-icon {
  width: 1.1rem;
  height: 1.1rem;
  margin-right: 0.52rem;
  fill: currentColor;
  flex: 0 0 auto;
}
```

Link buttons should respond appropriately to hover events:

```css
.link-button:hover,
.link-button:focus-visible {
  color: #E6EAF0;
  background: rgba(101, 183, 230, 0.12);
  border-color: rgba(101, 183, 230, 0.62);
}
```

Use this HTML structure for a link button without an icon:

```html
<a class="link-button" href="https://example.com">Website</a>
```

Use this HTML structure for a link button with an icon:

```html
<a class="link-button" href="mailto:hello@example.com">
  <svg class="link-button-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="..." />
  </svg>
  Email
</a>
```

[Back to top](#web-style-guide)

## Interactive Preview

[Click here](index.html) to view a rendered preview of this style guide.

[Back to top](#web-style-guide)
