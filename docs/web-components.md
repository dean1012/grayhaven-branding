# Web Components

[Back to Web Style Guide](../web/style-guide/style-guide.md)

This is the component-level companion to [Web Standards](web-standards.md).
`grayhaven-branding` is the visual source of truth for Grayhaven Systems LLC
web interfaces. These examples use generic sample content and demonstrate
reusable structure, styling, and behavior rather than a particular website.
Asset paths such as `assets/example-wordmark.svg` are illustrative and must be
replaced with valid local assets in an implementation.

The snippets assume the design tokens defined in the web standards document.
Use the existing class vocabulary where possible; do not create a near-duplicate
component for a small content variation.

## Table of Contents

- [Shared page structure](#shared-page-structure)
- [Navigation](#navigation)
- [Hero](#hero)
- [Section titles and subtitles](#section-titles-and-subtitles)
- [Panel surfaces](#panel-surfaces)
- [Links and buttons](#links-and-buttons)
- [Summary service cards](#summary-service-cards)
- [Expanded content section](#expanded-content-section)
- [Technology badges](#technology-badges)
- [CTA panel](#cta-panel)
- [Project/repository cards](#projectrepository-cards)
- [Alerts and callouts](#alerts-and-callouts)
- [Footer](#footer)
- [Responsive and accessibility states](#responsive-and-accessibility-states)

## Shared page structure

Use semantic landmarks for a complete page. A smaller interface may omit
sections, but should preserve the same hierarchy.

### Shared page structure HTML example

```html
<header class="site-header">
  <div class="navbar">
    <!-- Navigation component -->
  </div>
</header>

<main>
  <section class="hero" id="top">...</section>
  <section class="section-spacing" id="section-id">...</section>
</main>

<footer class="site-footer">...</footer>
```

### Shared page structure CSS example

```css
.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-padding);
}

.section-spacing {
  padding-block: var(--space-2xl);
}
```

[Back to top](#web-components)

## Navigation

Navigation provides site orientation, a root link, section links, and an
optional contact action. Use one horizontal desktop navigation and one compact
mobile behavior: an icon-only native `details` menu with a 44 by 44 CSS pixel
trigger and an accessible name. Breakpoint policy belongs in
[Web Standards](web-standards.md), not in the component markup. JavaScript may
add active tracking, `aria-current`, and automatic menu closing, but the menu
and links must remain usable without it.

The approved general-site presentation is the Grayhaven public-site treatment:
an opaque Deep Graphite bar, a subtle Charcoal border, the full logo, subdued
links with Primary Accent interaction states, and a compact contact action.
Preserve that solid visual treatment when adopting the standardized native
mobile interaction; do not add transparency, blur, or glass effects.

### Navigation HTML example

```html
<header class="site-header">
  <div class="navbar">
    <div class="navbar-brand">
      <a href="./index.html" aria-label="Grayhaven Systems LLC home">
        <img
          class="navbar-logo"
          src="assets/example-wordmark.svg"
          alt="Grayhaven Systems LLC">
      </a>
    </div>

    <nav class="navbar-links navbar-links-desktop" aria-label="Desktop navigation">
      <a href="./index.html" aria-current="page">Home</a>
      <a href="#section-id">Section</a>
    </nav>

    <details class="navbar-menu-mobile">
      <summary class="navbar-toggle" aria-label="Navigation menu">
        <i class="fa-solid fa-bars" aria-hidden="true"></i>
      </summary>
      <nav class="navbar-links navbar-links-mobile" aria-label="Mobile navigation">
        <a href="./index.html" aria-current="page">Home</a>
        <a href="#section-id">Section</a>
      </nav>
    </details>

    <a
      class="link-button navbar-contact"
      href="https://example.invalid/consultation"
      target="_blank"
      rel="noopener noreferrer">
      <i class="fa-solid fa-calendar" aria-hidden="true"></i>
      <span>Compact Button</span>
    </a>
  </div>
</header>
```

### Navigation CSS example

```css
.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--navbar-bg);
  border-bottom: 1px solid var(--charcoal-border);
}

.navbar {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  height: var(--navbar-height);
  padding-inline: var(--container-padding);
}

.navbar-brand {
  min-width: 0;
  margin-right: auto;
}

.navbar-logo {
  display: block;
  width: auto;
  height: 3rem;
}

.navbar-links {
  gap: var(--space-md);
  align-items: center;
}

.navbar-links-desktop {
  display: none;
}

.navbar-menu-mobile {
  position: relative;
  margin-left: auto;
}

.navbar-menu-mobile > summary {
  list-style: none;
}

.navbar-menu-mobile > summary::-webkit-details-marker {
  display: none;
}

.navbar-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  color: var(--soft-white);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius-sm);
}

.navbar-links-mobile {
  position: absolute;
  top: calc(100% + var(--space-xs));
  right: 0;
  display: grid;
  min-width: 13rem;
  padding: var(--space-xs);
  background: var(--navbar-bg);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
  box-shadow: var(--panel-shadow);
}

.navbar-links a {
  color: var(--cool-grey);
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
  white-space: nowrap;
}

.navbar-links a:hover,
.navbar-links a:focus-visible,
.navbar-links a.is-active {
  color: var(--primary-accent);
}
```

[Back to top](#web-components)

## Hero

The hero introduces the page with a wordmark, headline, optional accent
ampersand, and supporting copy. Keep it calm and readable; avoid rotating
content and decorative animation.

### Hero HTML example

```html
<section class="hero" id="top" aria-labelledby="hero-title">
  <div class="hero-content">
    <img
      class="hero-logo"
      src="assets/example-wordmark.svg"
      alt="Grayhaven Systems LLC">
    <h1 class="hero-headline" id="hero-title">
      <span class="hero-headline-line">Example headline</span>
      <span class="hero-headline-line hero-headline-ampersand">&amp;</span>
      <span class="hero-headline-line">Supporting statement</span>
    </h1>
    <p class="hero-subtext">A concise supporting statement goes here.</p>
  </div>
</section>
```

### Hero CSS example

```css
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 4.5rem 3.5rem;
  text-align: center;
}

.hero-content {
  max-width: 1000px;
  padding-inline: var(--container-padding);
}

.hero-logo {
  display: block;
  width: auto;
  height: 6rem;
  margin-inline: auto;
  margin-bottom: var(--space-lg);
}

.hero-headline {
  max-width: 940px;
  margin: 0 auto 2rem;
  color: var(--soft-white);
  font-size: clamp(1.75rem, 4vw, 3rem);
  font-weight: var(--font-weight-extrabold);
  line-height: 1.2;
}

.hero-headline-line {
  display: block;
}

.hero-headline-ampersand {
  color: var(--primary-accent);
}

.hero-subtext {
  max-width: 720px;
  margin-inline: auto;
  color: var(--cool-grey);
  font-size: clamp(1rem, 2.25vw, 1.2rem);
  line-height: 1.6;
}
```

[Back to top](#web-components)

## Section titles and subtitles

Use these classes for centered section introductions. Expanded sections use
their own title and description classes when a more editorial layout is needed.

### Section titles and subtitles HTML example

```html
<section class="section-spacing" aria-labelledby="section-title">
  <div class="container">
    <h2 class="section-title" id="section-title">Section title</h2>
    <p class="section-subtitle">A short explanation of this section.</p>
  </div>
</section>
```

### Section titles and subtitles CSS example

```css
.section-title {
  margin-bottom: var(--space-sm);
  color: var(--soft-white);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: var(--font-weight-bold);
  text-align: center;
}

.section-subtitle {
  margin-bottom: var(--space-xl);
  color: var(--cool-grey);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  text-align: center;
}
```

[Back to top](#web-components)

## Panel surfaces

Panels may use either a dark aluminum surface or a light neutral surface. The
text, icon, border, and supporting content colors must change with the surface;
never place light text on the light variant or dark text on the dark variant.
The generic `panel-light` and `panel-dark` classes describe the surface pattern;
service-card variants may use their own component classes, such as
`service-card light`, while following the same color rules.

### Panel surfaces HTML example

```html
<div class="panel-grid">
  <article class="panel panel-light">
    <h3>Light panel</h3>
    <p>Use dark graphite text and muted dark accents.</p>
  </article>

  <article class="panel panel-dark">
    <h3>Dark panel</h3>
    <p>Use soft white headings and cool grey body text.</p>
  </article>
</div>
```

### Panel surfaces CSS example

```css
.panel {
  padding: var(--space-lg);
  border: 1px solid var(--panel-border);
  border-radius: var(--border-radius);
  box-shadow: var(--panel-shadow);
}

.panel-light {
  color: var(--deep-graphite);
  background: linear-gradient(180deg, #f5f7fa, #dce2ea);
  border-color: var(--cool-grey);
}

.panel-light h3,
.panel-light p {
  color: var(--deep-graphite);
}

.panel-light a {
  color: var(--light-surface-accent);
}

.panel-light a:hover,
.panel-light a:focus-visible {
  color: var(--deep-graphite);
  background: rgb(31 95 135 / 10%);
}

.panel-light .scroll-link:hover {
  color: var(--deep-graphite);
  background: transparent;
}

.panel-dark {
  color: var(--cool-grey);
  background: linear-gradient(180deg, var(--panel-bg-top), var(--panel-bg-bottom));
}

.panel-dark h3 { color: var(--soft-white); }
.panel-dark p { color: var(--cool-grey); }
```

[Back to top](#web-components)

## Links and buttons

Use links for navigation and buttons for actions. The standard bordered link
button is compact; the large variant is reserved for a primary CTA. External
and in-page links use the corresponding helper classes.

The live preview uses inert buttons styled with these classes for sample actions
that intentionally have no destination. In an implementation, use a real
`<a>` element for navigation or an external destination, and use a `<button>`
only for an action performed in the current page.

### Links and buttons HTML example

```html
<a class="link-button" href="#">
  <i class="fa-solid fa-calendar" aria-hidden="true"></i>
  Compact Button
</a>

<a class="link-button link-button-large" href="#">
  <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
  Large CTA Button
</a>

<a class="link-button" href="#">Text-only Button</a>

<a
  class="external-link"
  href="https://example.invalid/"
  target="_blank"
  rel="noopener noreferrer">
  <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
  External link
</a>

<a class="scroll-link" href="#section-id">
  <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
  View details
</a>

<a
  class="external-link"
  href="https://example.invalid/"
  target="_blank"
  rel="noopener noreferrer">
  Text-only external link
</a>
```

### Links and buttons CSS example

```css
.link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 2.75rem;
  padding: 0.68rem 0.9rem;
  color: var(--soft-white);
  background: var(--link-btn-bg);
  border: 1px solid var(--link-btn-border);
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
}

.link-button-large {
  min-height: 3.25rem;
  padding: 0.85rem 1.5rem;
  font-size: 1.05rem;
}

.link-button:hover,
.link-button:focus-visible {
  color: var(--soft-white);
  background: rgb(88 172 224 / 10%);
  border-color: var(--primary-accent);
}

.external-link,
.scroll-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: var(--font-weight-medium);
}

.external-link { color: var(--primary-accent); }
.scroll-link { color: var(--cool-grey); }
```

[Back to top](#web-components)

## Summary service cards

Service cards summarize a capability with an icon, title, description,
capability list, and optional actions. Keep the copy concise and avoid claims
that are too implementation-specific for the component’s purpose.

### Summary service cards HTML example

```html
<div class="service-grid">
  <article class="service-card">
    <div class="service-card-icon">
      <i class="fa-solid fa-gear" aria-hidden="true"></i>
    </div>
    <h3 class="service-card-title">Service card title</h3>
    <p class="service-card-desc">Short sample description.</p>
    <ul class="capability-list">
      <li>
        <i class="fa-solid fa-check" aria-hidden="true"></i>
        Example item
      </li>
      <li>
        <i class="fa-solid fa-check" aria-hidden="true"></i>
        Example item
      </li>
    </ul>
    <div class="service-card-actions">
      <a class="scroll-link" href="#section-id">View details</a>
      <a
        class="external-link"
        href="https://example.invalid/project"
        target="_blank"
        rel="noopener noreferrer">
        External link
      </a>
    </div>
  </article>
</div>
```

### Summary service cards CSS example

```css
.service-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}

.service-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-lg);
  background: linear-gradient(180deg, var(--panel-bg-top), var(--panel-bg-bottom));
  border: 1px solid var(--panel-border);
  border-radius: var(--border-radius);
  box-shadow: var(--panel-shadow);
}

.service-card-icon {
  margin-bottom: var(--space-sm);
  color: var(--primary-accent);
  font-size: 2rem;
}

.service-card-title {
  margin-bottom: var(--space-xs);
  color: var(--soft-white);
  font-size: 1.25rem;
}

.service-card-desc {
  flex-grow: 1;
  margin-bottom: var(--space-md);
  color: var(--cool-grey);
  font-size: 0.9rem;
  line-height: 1.6;
}

.capability-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
}

.capability-list li {
  display: flex;
  gap: 0.5rem;
  color: var(--cool-grey);
  font-size: 0.85rem;
}

.capability-list li i { color: var(--muted-emerald); }

.service-card-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: var(--space-sm);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--charcoal-border);
}
```

[Back to top](#web-components)

## Expanded content section

Use expanded sections for detailed content. The standard pattern combines an
icon, editorial description, two-column checklist, technology badges, and an
optional external link.

### Expanded content section HTML example

```html
<section class="expanded-section section-spacing" id="section-id">
  <div class="container">
    <div class="expanded-section-icon">
      <i class="fa-solid fa-cloud" aria-hidden="true"></i>
    </div>
    <h2 class="expanded-section-title">Expanded content section</h2>
    <p class="expanded-section-desc">Sample editorial description.</p>
    <div class="capability-grid">
      <ul class="capability-checklist">
        <li>
          <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
          Checklist item
        </li>
      </ul>
      <ul class="capability-checklist">
        <li>
          <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
          Checklist item
        </li>
      </ul>
    </div>
    <div class="expanded-section-tech">
      <span class="tech-badge">Technology badge</span>
      <a
        class="external-link expanded-section-repo-link"
        href="https://example.invalid/project"
        target="_blank"
        rel="noopener noreferrer">
        External link
      </a>
    </div>
  </div>
</section>
```

### Expanded content section CSS example

```css
.expanded-section { padding-block: var(--space-3xl); }

.expanded-section-icon {
  margin-bottom: var(--space-md);
  color: var(--primary-accent);
  font-size: 2.5rem;
}

.expanded-section-title {
  margin-bottom: var(--space-md);
  color: var(--soft-white);
  font-size: clamp(1.5rem, 4vw, 2.25rem);
}

.expanded-section-desc {
  max-width: 900px;
  margin-bottom: var(--space-xl);
  color: var(--cool-grey);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  line-height: 1.8;
}

.capability-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);
}

.capability-checklist {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.capability-checklist li {
  display: flex;
  gap: 0.6rem;
  color: var(--soft-white);
}

.capability-checklist li i { color: var(--muted-emerald); }

.expanded-section-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  padding-top: var(--space-md);
  border-top: 1px solid var(--charcoal-border);
}

.expanded-section-repo-link { margin-left: auto; }
```

[Back to top](#web-components)

## Technology badges

Badges provide supporting metadata. They are not buttons unless they navigate
somewhere, and they should wrap without forcing the layout wider than the
viewport.

### Technology badges HTML example

```html
<div class="expanded-section-tech">
  <span class="tech-badge">Technology badge</span>
  <span class="tech-badge">Category badge</span>
</div>
```

### Technology badges CSS example

```css
.tech-badge {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  color: var(--primary-accent);
  background: rgb(88 172 224 / 8%);
  border: 1px solid rgb(88 172 224 / 25%);
  border-radius: var(--border-radius-sm);
  font-size: 0.78rem;
  font-weight: var(--font-weight-medium);
}
```

[Back to top](#web-components)

## CTA panel

Use one clear CTA panel when the user has a defined next action. The copy and
button should describe the action honestly; do not imply an instant chat when
the destination is a booking or request form.

### CTA panel HTML example

```html
<section class="cta-panel section-spacing" aria-labelledby="cta-title">
  <div class="container cta-panel-inner">
    <h2 class="cta-panel-headline" id="cta-title">Primary action headline</h2>
    <p>Short supporting explanation.</p>
    <a class="link-button link-button-large" href="#">
      <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
      Primary action
    </a>
  </div>
</section>
```

### CTA panel CSS example

```css
.cta-panel {
  background: linear-gradient(180deg, rgb(88 172 224 / 6%), transparent),
    var(--gunmetal);
  border-block: 1px solid var(--charcoal-border);
}

.cta-panel-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  padding-block: var(--space-xl);
  text-align: center;
}

.cta-panel-headline {
  color: var(--elevated-hover);
  font-size: clamp(1.5rem, 4vw, 2.25rem);
}
```

[Back to top](#web-components)

## Project/repository cards

Use repository cards for selected examples of work. Keep sample or production
descriptions accurate, short, and distinct from the compact footer index.

### Project/repository cards HTML example

```html
<div class="repo-grid">
  <article class="repo-card">
    <div class="repo-card-icon">
      <i class="fa-solid fa-cube" aria-hidden="true"></i>
    </div>
    <h3 class="repo-card-title">Project card title</h3>
    <p class="repo-card-desc">Short project description.</p>
    <a
      class="external-link repo-card-link"
      href="https://example.invalid/project"
      target="_blank"
      rel="noopener noreferrer">
      External link
    </a>
  </article>
</div>
<div class="examples-section-more">
  <a
    class="external-link"
    href="https://example.invalid/projects"
    target="_blank"
    rel="noopener noreferrer">
    More examples link
  </a>
</div>
```

### Project/repository cards CSS example

```css
.repo-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-md);
}

.repo-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-lg);
  background: linear-gradient(180deg, var(--panel-bg-top), var(--panel-bg-bottom));
  border: 1px solid var(--panel-border);
  border-radius: var(--border-radius);
  box-shadow: var(--panel-shadow);
}

.repo-card-icon {
  margin-bottom: var(--space-sm);
  color: var(--primary-accent);
  font-size: 1.75rem;
}

.repo-card-title {
  margin-bottom: var(--space-xs);
  color: var(--soft-white);
  font-size: 1.15rem;
}

.repo-card-desc {
  flex-grow: 1;
  margin-bottom: var(--space-md);
  color: var(--cool-grey);
}

.examples-section-more {
  margin-top: var(--space-xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--charcoal-border);
  text-align: center;
}
```

[Back to top](#web-components)

## Alerts and callouts

Alerts communicate one of four supported states: Info, Warning, Success, or
Error. Use consistent state names, supporting text, and an accessible icon; do
not rely on emoji or color alone.

### Alerts and callouts HTML example

```html
<article class="alert-card info">
  <h3>
    <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
    Info
  </h3>
  <p>Neutral guidance or contextual information.</p>
</article>

<article class="alert-card warning">
  <h3>
    <i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
    Warning
  </h3>
  <p>Attention is required, but the operation can continue.</p>
</article>

<article class="alert-card success">
  <h3>
    <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
    Success
  </h3>
  <p>An operation completed successfully.</p>
</article>

<article class="alert-card error">
  <h3>
    <i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>
    Error
  </h3>
  <p>An operation failed or requires immediate attention.</p>
</article>
```

### Alerts and callouts CSS example

```css
.alert-card {
  padding: var(--space-md);
  background: rgb(28 31 36 / 38%);
  border: 1px solid var(--charcoal-border);
  border-left: 5px solid var(--alert-info);
  border-radius: var(--border-radius-sm);
}

.alert-card.info { border-left-color: var(--alert-info); }
.alert-card.warning { border-left-color: var(--alert-warning); }
.alert-card.success { border-left-color: var(--alert-success); }
.alert-card.error { border-left-color: var(--alert-error); }
```

[Back to top](#web-components)

## Footer

The footer combines a brand area, compact repository index, and icon-only
community or contact links. Icon-only links require an accessible name.

### Footer HTML example

```html
<footer class="site-footer">
  <div class="container">
    <div class="site-footer-main">
      <div class="site-footer-brand">
        <img
          class="site-footer-logo"
          src="assets/example-wordmark.svg"
          alt="Grayhaven Systems LLC">
        <p class="site-footer-tagline">Footer tagline example.</p>
      </div>
      <div class="site-footer-repos">
        <h4 class="site-footer-heading">Repository links</h4>
        <div class="footer-repo-grid">
          <a
            class="footer-repo-card"
            href="https://example.invalid/project"
            target="_blank"
            rel="noopener noreferrer">
            <i class="fa-solid fa-cube" aria-hidden="true"></i>
            <span>Repository example</span>
          </a>
        </div>
      </div>
    </div>
    <div class="site-footer-bottom">
      <p class="site-footer-copyright">Copyright notice</p>
      <div class="site-footer-social">
        <a
          class="site-footer-social-link"
          href="https://example.invalid/community"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Community link example">
          <i class="fa-brands fa-discord" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</footer>
```

### Footer CSS example

```css
.site-footer {
  padding-block: var(--space-xl) var(--space-lg);
  background: var(--deep-graphite);
  border-top: 1px solid var(--charcoal-border);
}

.site-footer-main {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
}

.footer-repo-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-xs);
}

.footer-repo-card,
.site-footer-social-link {
  color: var(--cool-grey);
  background: rgb(42 47 54 / 60%);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius-sm);
}

.footer-repo-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  padding: 0.5rem 0.75rem;
}

.footer-repo-card span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.site-footer-social {
  display: flex;
  gap: var(--space-sm);
}

.site-footer-social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.25rem;
}
```

[Back to top](#web-components)

## Responsive and accessibility states

Every component must retain readable content and usable controls at narrow
widths. Add a visible `:focus-visible` state, preserve the no-JavaScript
fallback, and honor reduced-motion preferences.

### Responsive and accessibility states CSS example

```css
:focus-visible {
  outline: 2px solid var(--primary-accent);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

The live preview demonstrates these components with sample content. It also
demonstrates active navigation, a CSS/native fallback when JavaScript is
disabled, and a mobile menu that remains operable without JavaScript.

[Back to top](#web-components)
