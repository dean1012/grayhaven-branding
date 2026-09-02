# Web Components

[Back to README](../README.md) ·
[Live preview](../web/components/index.html) ·
[Web standards](web-standards.md)

Shared dark-surface components for Grayhaven Systems LLC websites and web
applications. Copy the shared stylesheet once, copy the optional script when a
selected component names it, then copy the component markup.

## Setup

```html
<link rel="stylesheet" href="fonts.css">
<link rel="stylesheet" href="fontawesome.min.css">
<link rel="stylesheet" href="shared-components.css">
<script src="shared-components.js" defer></script>
```

- CSS: [`web/shared-components.css`](../web/shared-components.css)
- Optional JavaScript: [`web/shared-components.js`](../web/shared-components.js)
- Visual catalog: [`web/components/index.html`](../web/components/index.html)

The CSS snippets below are exact excerpts from the shared stylesheet. They
assume its `:root` tokens and global focus rules are present. Do not restyle a
shared component in a website or application stylesheet. Add or change the
shared component here first.

## Component index

- [Buttons](#buttons)
- [Links](#links)
- [Layout and accessibility utilities](#layout-and-accessibility-utilities)
- [Panels and content cards](#panels-and-content-cards)
- [Lists, badges, and resource links](#lists-badges-and-resource-links)
- [Breadcrumbs](#breadcrumbs)
- [Text-like fields and messages](#text-like-fields-and-messages)
- [Field with copy control](#field-with-copy-control)
- [Form validation](#form-validation)
- [Compound fields](#compound-fields)
- [Checkboxes, radios, and switches](#checkboxes-radios-and-switches)
- [Native form and disclosure controls](#native-form-and-disclosure-controls)
- [Verification code](#verification-code)
- [Status and feedback](#status-and-feedback)
- [Summaries](#summaries)
- [Responsive table](#responsive-table)
- [Hierarchical records](#hierarchical-records)

## Buttons

Buttons start with `.button`. Add only the color, size, or icon option the
action needs.

### Shared button CSS

Copy the base rule once. Every standard button option below builds on it.

```css
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 42px;
  padding: 0.65rem 1rem;
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
  font-size: 0.87rem;
  font-weight: var(--font-weight-semibold);
  transition:
    color var(--transition-fast),
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.button:focus-visible,
.icon-button:focus-visible,
.text-link:focus-visible {
  outline: 2px solid var(--primary-accent);
  outline-offset: 3px;
}
```

### Text-only button

Use the base class plus one color class.

```html
<button class="button button-primary" type="button">Primary</button>
```

No additional CSS is required beyond the base and selected color rule.

### Button colors

Add exactly one supported color class:

- `.button-primary` for the main action.
- `.button-secondary` for cancel or a quiet secondary action.
- `.button-success` for confirm or success.
- `.button-danger` for a destructive action.
- `.button-stop` for a quieter stop action.

This example uses the success option:

```html
<button class="button button-success" type="button">Confirm</button>
```

The following CSS defines every supported color and its hover state. Hover
changes stay intentionally faint: each intent receives a ten-percent tint
adjustment rather than a pronounced replacement fill.

```css
.button-primary {
  color: var(--deep-graphite);
  background: var(--primary-accent);
  border-color: var(--primary-accent);
}

.button-primary:not(:disabled, [aria-disabled="true"]):hover {
  color: var(--deep-graphite);
  background: color-mix(
    in srgb,
    var(--soft-white) 10%,
    var(--primary-accent)
  );
  border-color: color-mix(
    in srgb,
    var(--soft-white) 10%,
    var(--primary-accent)
  );
}

.button-secondary {
  color: var(--soft-white);
  background: color-mix(in srgb, var(--deep-graphite) 34%, transparent);
}

.button-secondary:not(:disabled, [aria-disabled="true"]):hover {
  color: var(--soft-white);
  background: color-mix(in srgb, var(--primary-accent) 10%, transparent);
  border-color: var(--primary-accent);
}

.button-success {
  color: var(--deep-graphite);
  background: var(--muted-emerald);
  border-color: var(--muted-emerald);
}

.button-success:not(:disabled, [aria-disabled="true"]):hover {
  color: var(--deep-graphite);
  background: color-mix(
    in srgb,
    var(--soft-white) 10%,
    var(--muted-emerald)
  );
  border-color: color-mix(
    in srgb,
    var(--soft-white) 10%,
    var(--muted-emerald)
  );
}

.button-danger {
  color: var(--soft-white);
  background: color-mix(in srgb, var(--alert-error) 82%, var(--deep-graphite));
  border-color: color-mix(in srgb, var(--alert-error) 82%, var(--deep-graphite));
}

.button-danger:not(:disabled, [aria-disabled="true"]):hover {
  color: var(--soft-white);
  background: color-mix(
    in srgb,
    var(--deep-graphite) 10%,
    color-mix(in srgb, var(--alert-error) 82%, var(--deep-graphite))
  );
  border-color: color-mix(
    in srgb,
    var(--deep-graphite) 10%,
    color-mix(in srgb, var(--alert-error) 82%, var(--deep-graphite))
  );
}

.button-stop {
  color: var(--soft-white);
  background: color-mix(in srgb, var(--alert-error) 14%, transparent);
  border-color: color-mix(in srgb, var(--alert-error) 60%, transparent);
}

.button-stop:not(:disabled, [aria-disabled="true"]):hover {
  background: color-mix(
    in srgb,
    var(--alert-error) 10%,
    color-mix(in srgb, var(--alert-error) 14%, transparent)
  );
  border-color: var(--alert-error);
}
```

### Button with an icon

Place the decorative icon before the text. The base button gap supplies the
spacing.

```html
<button class="button button-primary" type="button">
  <i class="fa-solid fa-check" aria-hidden="true"></i>
  Primary
</button>
```

No additional CSS is required.

### Icon-only button

Use `.button-icon` when a standard button contains only an icon. Always give
the button an accessible name.

```html
<button
  class="button button-primary button-icon"
  type="button"
  aria-label="Primary action"
>
  <i class="fa-solid fa-check" aria-hidden="true"></i>
</button>
```

```css
.button-icon {
  width: 42px;
  min-width: 42px;
  padding: 0;
}

.button-icon.button-compact {
  width: 34px;
  min-width: 34px;
}
```

### Button sizes

Standard size needs no extra class. Add `.button-compact` or `.button-large`
only when the layout requires it.

```html
<button class="button button-primary button-compact" type="button">
  Compact
</button>
<button class="button button-primary button-large" type="button">
  Large
</button>
```

```css
.button-compact {
  min-height: 34px;
  padding: 0.35rem 0.65rem;
  font-size: 0.78rem;
}

.button-large {
  min-height: 3.25rem;
  padding: 0.85rem 1.5rem;
  font-size: 1.05rem;
}
```

### Disabled button

Use the native `disabled` attribute whenever the action is unavailable. A
disabled button does not show a hand cursor or hover feedback.

```html
<button class="button button-primary" type="button" disabled>
  Disabled
</button>
```

```css
.button:disabled,
.button[aria-disabled="true"],
.icon-button:disabled,
.icon-button[aria-disabled="true"] {
  opacity: 0.42;
  cursor: not-allowed;
}
```

The color hover selectors use
`:not(:disabled, [aria-disabled="true"])`, so disabled buttons do not react
to hover.

### Link styled as a button

Use an anchor only when the action has a real destination.

```html
<a class="button button-primary" href="/destination">Link action</a>
```

No additional CSS is required.

### Compact icon controls

Use `.icon-button` for a compact row or utility control. Change the accessible
name and Font Awesome icon to match the action. Choose one visual option:

- No additional class for a neutral control.
- `.accent` for a positive or edit control.
- `.stop` for a stop control.
- `.danger` for a destructive control.

```html
<button class="icon-button" type="button" aria-label="View">
  <i class="fa-solid fa-eye" aria-hidden="true"></i>
</button>
```

```css
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  color: var(--cool-grey);
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--border-radius-sm);
  font-size: 1rem;
  line-height: 1;
  vertical-align: middle;
}

.icon-button:not(:disabled, [aria-disabled="true"]):hover {
  color: var(--primary-accent);
  background: color-mix(in srgb, var(--primary-accent) 10%, transparent);
  border-color: var(--charcoal-border);
}

.icon-button.accent {
  color: var(--muted-emerald);
}

.icon-button.stop {
  color: var(--alert-error);
}

.icon-button.danger:not(:disabled, [aria-disabled="true"]):hover {
  color: var(--alert-error);
}
```

## Links

Links use one of four shared treatments. Choose the one that describes the
destination or action.

### Shared link CSS

Copy these shared link rules once.

```css
.external-link,
.scroll-link,
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: var(--font-weight-medium);
}

.external-link,
.back-link {
  color: var(--primary-accent);
}

.scroll-link {
  color: var(--cool-grey);
}

.scroll-link:hover {
  color: var(--primary-accent);
}

.text-link {
  margin: -0.15rem -0.25rem;
  padding: 0.15rem 0.25rem;
  color: var(--primary-accent);
  background: none;
  border: 0;
  font-size: 0.86rem;
  transition:
    color var(--transition-fast),
    background var(--transition-fast);
}

:where(
    .external-link,
    .back-link,
    .text-link,
    .breadcrumbs a
  ):hover,
:where(
    .external-link,
    .back-link,
    .text-link,
    .breadcrumbs a
  ):focus-visible {
  color: var(--standard-hover);
  background: color-mix(in srgb, var(--standard-hover) 10%, transparent);
  border-radius: var(--border-radius-sm);
}
```

### External link

Use an external link for a destination outside the current website or
application. Keep the external-link icon after the text.

```html
<a
  class="external-link"
  href="https://example.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  External link
  <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
</a>
```

### Scroll link

Use a scroll link for another section on the same page.

```html
<a class="scroll-link" href="#section">
  Scroll link
  <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
</a>
```

### Back link

Keep the back arrow before the text.

```html
<a class="back-link" href="/previous">
  <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
  Back link
</a>
```

### Text action

Use a button when text triggers an action instead of navigating.

```html
<button class="text-link" type="button">Text action</button>
```

## Layout and accessibility utilities

These low-level helpers support component composition. They do not form a
separate composed component in the live catalog; the source examples below are
the authoritative reference.

### Shared layout CSS

These rules establish the standard page width, section spacing, and narrow
reading width.

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

.narrow-content {
  max-width: 720px;
  margin: 0 auto;
}
```

```html
<section class="container section-spacing">
  <div class="narrow-content">Narrow reading-width content.</div>
</section>
```

### Section heading

Use a centered section title with one concise supporting statement.

```html
<h2 class="section-title">Section title</h2>
<p class="section-subtitle">A concise supporting statement.</p>
```

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

### Page heading

Use `.page-heading` for a title and optional action row. Add `.compact` when
the heading should align to the top instead of the text baseline.

```html
<div class="page-heading compact">
  <div>
    <p class="eyebrow">EXAMPLE</p>
    <h2>Page heading</h2>
    <p class="muted">Supporting context.</p>
  </div>
  <div class="heading-actions">
    <button class="button button-primary" type="button">Action</button>
  </div>
</div>
```

```css
.page-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2.4rem;
}

.page-heading > :first-child {
  min-width: 0;
}

.page-heading.compact {
  align-items: start;
}

.heading-actions,
.panel-heading,
.form-actions,
.row-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

@media (width <768px) {
  .page-heading,
  .panel-heading {
    align-items: stretch;
    flex-direction: column;
  }

  .page-heading {
    margin-bottom: 1.7rem;
  }

  .heading-actions {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}
```

### Eyebrow and muted text

Use `.eyebrow` for a short category label and `.muted` for supporting copy.

```html
<p class="eyebrow">EXAMPLE</p>
<p class="muted">Supporting context.</p>
```

```css
.eyebrow {
  margin-bottom: 0.65rem;
  color: var(--primary-accent);
  font-size: 0.72rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.16em;
}

.muted {
  color: var(--cool-grey);
}
```

### Truncated text

Use `.truncate-text` when one line must remain inside a constrained layout.
Keep the full value in `title` when truncation can hide meaningful text.

```html
<span class="truncate-text" title="Complete value">Complete value</span>
```

```css
.truncate-text,
.breadcrumb-label {
  display: block;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### Visually hidden text

Use `.visually-hidden` for context needed by assistive technology but not the
visual layout.

```html
<span class="visually-hidden">Screen-reader-only context.</span>
```

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
```

## Panels and content cards

Panels group application content. Content cards add a reusable title,
description, optional icon, and optional action area.

### Shared panel and card-grid CSS

Copy the panel surface and one-column card-grid foundation once.

```css
.panel {
  background: linear-gradient(
    180deg,
    var(--panel-bg-top),
    var(--panel-bg-bottom)
  );
  border: 1px solid var(--panel-border);
  border-radius: var(--border-radius);
  box-shadow: var(--panel-shadow);
}

.panel-heading {
  margin-bottom: var(--space-sm);
}

.content-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-md);
}
```

### Panel

Use a panel for a bounded group of related content.

```html
<article class="panel">
  <div class="panel-heading">
    <div>
      <p class="eyebrow">PANEL</p>
      <h2>Panel heading</h2>
    </div>
    <span class="status-pill status-neutral">Example</span>
  </div>
  <p class="muted">Related content.</p>
</article>
```

No additional panel CSS is required.

### Content card

Keep the icon optional. Omit the action area when the card has no destination
or action.

```html
<article class="content-card">
  <div class="content-card-icon">
    <i class="fa-solid fa-cube" aria-hidden="true"></i>
  </div>
  <h2 class="content-card-title">Content card</h2>
  <p class="content-card-description">A concise description.</p>
  <div class="content-card-actions">
    <a class="scroll-link" href="#details">
      Details
      <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
    </a>
  </div>
</article>
```

```css
.content-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-lg);
  background:
    linear-gradient(180deg, var(--panel-bg-top), var(--panel-bg-bottom)),
    var(--gunmetal);
  border: 1px solid var(--panel-border);
  border-radius: var(--border-radius);
  box-shadow: var(--panel-shadow);
  transition:
    border-color var(--transition-base),
    transform var(--transition-base);
}

.content-card:hover {
  border-color: var(--primary-accent);
  transform: translateY(-2px);
}

.content-card-icon {
  margin-bottom: var(--space-sm);
  color: var(--primary-accent);
  font-size: 2rem;
}

.content-card-title {
  margin-bottom: var(--space-xs);
  color: var(--soft-white);
  font-size: 1.25rem;
  font-weight: var(--font-weight-semibold);
}

.content-card-description {
  flex-grow: 1;
  margin-bottom: var(--space-md);
  color: var(--cool-grey);
  font-size: 0.9rem;
  line-height: 1.6;
}

.content-card-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding-top: var(--space-sm);
  border-top: 1px solid var(--charcoal-border);
}
```

### Compact content card

Add `.content-card-compact` when the same card needs quieter icon and text
sizes. Its structure does not otherwise change.

```html
<article class="content-card content-card-compact">
  <div class="content-card-icon">
    <i class="fa-solid fa-cube" aria-hidden="true"></i>
  </div>
  <h2 class="content-card-title">Compact content card</h2>
  <p class="content-card-description">A concise description.</p>
</article>
```

```css
.content-card-compact .content-card-icon {
  font-size: 1.75rem;
}

.content-card-compact .content-card-title {
  font-size: 1.15rem;
}

.content-card-compact .content-card-description {
  font-size: 0.85rem;
}
```

### Card-grid columns

Wrap cards in `.content-grid`. Add `.content-grid-two` or
`.content-grid-three` for the wide-screen column count. Both options stack to
one column on small screens.

```html
<div class="content-grid content-grid-two">
  <article class="content-card">First card</article>
  <article class="content-card">Second card</article>
</div>
```

```css
@media (width <768px) {
  .content-grid-two,
  .content-grid-three {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (width <=575px) {
  .content-grid-two,
  .content-grid-three {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (width >=768px) {
  .content-grid-two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .content-grid-three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

## Lists, badges, and resource links

Use a checklist for short facts, an action list for records with one action, a
badge for a compact category, and a resource link card for a bounded
destination.

### Shared checklist CSS

Both checklist options share one structure. `.check-list-quiet` is the quieter
option; `.check-list` uses larger, brighter items.

```css
.check-list-quiet,
.check-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
  padding: 0;
  list-style: none;
}

.check-list-quiet li,
.check-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--cool-grey);
  font-size: 0.85rem;
}

.check-list-quiet li i,
.check-list li i {
  flex-shrink: 0;
  color: var(--muted-emerald);
  font-size: 0.8rem;
}

.check-list {
  gap: var(--space-sm);
}

.check-list li {
  gap: 0.6rem;
  color: var(--soft-white);
  font-size: 0.9rem;
}

.check-list li i {
  font-size: 1rem;
}
```

### Checklist

Use `.check-list-quiet` with a check icon for the quiet option. Substitute
`.check-list` and `fa-circle-check` for the more prominent sibling option.

```html
<ul class="check-list-quiet">
  <li><i class="fa-solid fa-check" aria-hidden="true"></i>First item</li>
  <li><i class="fa-solid fa-check" aria-hidden="true"></i>Second item</li>
</ul>
```

### Action list

Each item contains a primary label, optional supporting text, and one action.

```html
<ul class="action-list">
  <li>
    <strong>Action-list item</strong>
    <span class="muted">Supporting information.</span>
    <button class="button button-secondary" type="button">Action</button>
  </li>
</ul>
```

```css
.action-list {
  display: grid;
  gap: 0.75rem;
  margin: 1rem 0 0;
  padding: 0;
  list-style: none;
}

.action-list li {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 0.2rem 1rem;
  padding: 1rem;
  background: color-mix(in srgb, var(--background-mid) 65%, transparent);
  border: 1px solid
    color-mix(in srgb, var(--charcoal-border) 65%, transparent);
  border-radius: var(--border-radius-sm);
}

.action-list strong {
  grid-column: 1;
  color: var(--soft-white);
  overflow-wrap: anywhere;
}

.action-list .muted {
  grid-column: 1;
  font-size: 0.85rem;
  overflow-wrap: anywhere;
}

.action-list .button {
  grid-row: 1 / span 2;
  grid-column: 2;
}

@media (width <=575px) {
  .action-list li {
    grid-template-columns: minmax(0, 1fr);
  }

  .action-list .button {
    grid-row: auto;
    grid-column: 1;
    width: 100%;
    margin-top: 0.5rem;
  }
}
```

### Badge

Use a badge for a short category or technology label, not a sentence.
Badges identify categories, not success or severity. Keep the category in the
accessible text; a consumer-specific category class may remain as a nonvisual
selection hook but must not redefine the shared badge presentation.

```html
<span class="badge">Category</span>
```

```css
.badge {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  color: var(--primary-accent);
  background: color-mix(in srgb, var(--primary-accent) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--primary-accent) 25%, transparent);
  border-radius: var(--border-radius-sm);
  font-size: 0.78rem;
  font-weight: var(--font-weight-medium);
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.badge:hover {
  background: color-mix(in srgb, var(--primary-accent) 15%, transparent);
  border-color: var(--primary-accent);
}
```

### Resource link card

Keep the icon first and wrap the label in a `span` so long text truncates
cleanly.

```html
<a class="resource-link-card" href="/reference">
  <i class="fa-solid fa-book" aria-hidden="true"></i>
  <span>Reference link with truncation support</span>
</a>
```

```css
.resource-link-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  padding: 0.5rem 0.75rem;
  color: var(--cool-grey);
  background: color-mix(in srgb, var(--gunmetal) 60%, transparent);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.resource-link-card i {
  flex-shrink: 0;
  color: var(--primary-accent);
}

.resource-link-card span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.resource-link-card:hover {
  color: var(--soft-white);
  border-color: var(--primary-accent);
}
```

## Breadcrumbs

Breadcrumbs show the current location from broadest to most specific. The last
item is text, not a link.

### Shared breadcrumb CSS

```css
.breadcrumbs {
  font-size: 0.84rem;
}

.breadcrumbs ol {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
}

.breadcrumbs li {
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  min-width: 0;
  color: var(--soft-white);
  font-weight: var(--font-weight-medium);
}

.breadcrumbs li:last-child {
  flex: 1 1 auto;
}

.breadcrumbs li::before {
  margin-right: 0.5rem;
  color: var(--cool-grey);
  content: "›";
}

.breadcrumbs a {
  color: var(--primary-accent);
}
```

### Breadcrumb trail

Keep `aria-current="page"` on the final list item. Use `.breadcrumb-label` on
every label so long values truncate consistently.

```html
<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><a class="breadcrumb-label" href="/">Example</a></li>
    <li><a class="breadcrumb-label" href="/records">Records</a></li>
    <li aria-current="page">
      <span class="breadcrumb-label">Current item</span>
    </li>
  </ol>
</nav>
```

## Text-like fields and messages

This base covers text, email, password, number, date/time, search, URL, and
telephone inputs, plus `select` and `textarea`. Use native input types and
appropriate autocomplete values. Do not copy `autocomplete="off"` onto
credential fields; use `username`, `current-password`, `new-password`, or
`one-time-code` as appropriate.

### Shared field CSS

Copy the base field, focus, label, and wrapper rules once.

```css
:where(input:not([type="checkbox"], [type="radio"]), select, textarea) {
  width: 100%;
  min-height: 42px;
  padding: 0.65rem 0.75rem;
  color: var(--soft-white);
  background: var(--deep-graphite);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
}

select {
  padding-right: 2.25rem;
}

:where(
    input:not([type="checkbox"], [type="radio"], [readonly]),
    select,
    textarea:not([readonly])
  ):focus-visible:not(:disabled) {
  border-color: var(--primary-accent);
  outline: none;
}

label {
  display: grid;
  gap: 0.45rem;
  color: var(--soft-white);
  font-size: 0.86rem;
  font-weight: var(--font-weight-medium);
}

.form-field {
  display: grid;
  gap: 0.45rem;
  min-width: 0;
}
```

Every focused editable field changes only its existing one-pixel border to
Primary Accent. Compound wrappers use the same one-pixel treatment through
`:focus-within`.

### Text input

Choose the native input type and autocomplete value that match the data.

```html
<label>
  Text input
  <input type="text" name="example_text" autocomplete="off">
</label>
```

No additional CSS is required.

### Textarea

Use a textarea for multi-line text. It grows vertically but not horizontally.

```html
<label>
  Notes
  <textarea name="notes" rows="4"></textarea>
</label>
```

```css
textarea {
  min-height: 7rem;
  resize: vertical;
}
```

### Invalid field

Native validation uses `:user-invalid`. Use `aria-invalid="true"` when
application validation determines the state.

```html
<label>
  Email address
  <input type="email" name="email" aria-invalid="true">
</label>
```

```css
:where(
    input:not([type="checkbox"], [type="radio"]),
    select,
    textarea
  ):user-invalid,
:where(
    input:not([type="checkbox"], [type="radio"]),
    select,
    textarea
  )[aria-invalid="true"] {
  border-color: var(--alert-error);
}
```

### Disabled field

Use the native `disabled` attribute. Disabled fields do not show a hand cursor.

```html
<label>
  Disabled input
  <input type="text" value="Disabled value" disabled>
</label>
```

```css
:where(
    input:not([type="checkbox"], [type="radio"]),
    select,
    textarea
  ):disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
```

### Read-only field

Use `readonly` when the value must remain focusable and selectable but cannot
be edited. Its resting border does not change on focus.

```html
<label>
  Read-only input
  <input type="text" value="Read-only value" readonly>
</label>
```

```css
input[readonly],
textarea[readonly] {
  color: var(--cool-grey);
  background: color-mix(in srgb, var(--deep-graphite) 55%, transparent);
  cursor: default;
}

:where(input[readonly], textarea[readonly]):focus-visible {
  border-color: var(--charcoal-border);
  outline: 2px solid var(--primary-accent);
  outline-offset: 2px;
}
```

### Placeholder

Use a placeholder only as an example or hint, never as the field label.

```html
<label>
  Search
  <input type="search" name="search" placeholder="Search records">
</label>
```

```css
input::placeholder,
textarea::placeholder {
  color: var(--cool-grey);
}
```

### Help and error messages

Place one concise message immediately after its field. Choose `.field-help` or
`.field-error` according to the message state.

```html
<div class="form-field">
  <label for="account-name">Account name</label>
  <input
    id="account-name"
    type="text"
    name="account_name"
    aria-describedby="account-name-help"
  >
  <small class="field-help" id="account-name-help">
    Use the name shown on the account.
  </small>
</div>

<div class="form-field">
  <label for="contact-email">Contact email</label>
  <input
    id="contact-email"
    type="email"
    name="contact_email"
    aria-invalid="true"
    aria-describedby="contact-email-error"
  >
  <small class="field-error" id="contact-email-error">
    Enter a valid email address.
  </small>
</div>
```

```css
small {
  color: var(--cool-grey);
  font-weight: var(--font-weight-regular);
}

.field-help,
.field-error {
  display: block;
  font-size: 0.78rem;
  font-weight: var(--font-weight-regular);
}

.field-help {
  color: var(--cool-grey);
}

.field-error {
  color: var(--alert-error-foreground);
}
```

### Form panel and action layout

Use `.form-panel` inside the `.narrow-content` layout documented above,
`.form-stack` for vertical field rhythm, and `.form-actions` for the final
action row.

```html
<div class="narrow-content">
  <form class="panel form-panel form-stack">
    <label>
      Display name
      <input type="text" name="display_name">
    </label>
    <div class="form-actions">
      <button class="button button-secondary" type="button">Cancel</button>
      <button class="button button-primary" type="submit">Save</button>
    </div>
  </form>
</div>
```

```css
.form-panel {
  padding: 2.2rem;
}

.narrow-content > .form-panel + .form-panel {
  margin-top: 1.5rem;
}

.form-stack {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.form-actions {
  justify-content: flex-end;
  margin-top: 0.4rem;
}

@media (width <=575px) {
  .form-actions {
    align-items: stretch;
    flex-direction: column-reverse;
  }

  .form-actions .button {
    width: 100%;
  }
}
```

## Field with copy control

Use a copy control when a field value should remain visible while providing a
single explicit copy action. Set `data-copy-value` to the exact value that the
button should copy.

### Shared copy-field CSS

Copy these rules once.

```css
.copy-value {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 42px;
  padding: 0.3rem 0.4rem 0.3rem 0.75rem;
  color: var(--soft-white);
  background: var(--deep-graphite);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
  font-family: ui-monospace, monospace;
  font-size: 1rem;
  letter-spacing: 0.06em;
}

.copy-value:focus-within {
  border-color: var(--primary-accent);
}

.copy-value-text {
  flex: 1;
  min-width: 0;
  overflow-wrap: anywhere;
}

.clipboard-fallback {
  position: fixed;
  inset: 0 auto auto 0;
  opacity: 0;
  pointer-events: none;
}

@media (width <=400px) {
  .copy-value {
    font-size: 0.88rem;
    letter-spacing: 0.04em;
  }
}
```

### Copyable field

The output and copy button share one bordered field wrapper.

```html
<div class="form-field">
  <label for="copy-value-output">Field with copy control</label>
  <div
    class="copy-value"
    id="copy-value"
    data-copy-value="example-copy-value"
  >
    <output id="copy-value-output" class="copy-value-text">
      example-copy-value
    </output>
    <button
      class="icon-button"
      type="button"
      data-copy-target="#copy-value"
      aria-label="Copy example value"
      title="Copy example value"
    >
      <i class="fa-solid fa-copy" aria-hidden="true"></i>
    </button>
  </div>
</div>
```

### Copy behavior

Copying requires the canonical
[`shared-components.js`](../web/shared-components.js). The control uses the
Clipboard API when available, retains a safe fallback, briefly changes to a
check icon, and restores its original accessible name and title.

## Form validation

Use a real form with native input constraints. This validation-only example
calls `reportValidity()` without submitting data; ordinary submission forms do
not need `data-validate-form`.

### Shared validation styling

No new CSS is required. Use the shared field, select, form-action, and button
rules shown above.

### Validation-only form

```html
<form class="form-stack" data-validate-form>
  <label>
    Required text input
    <input type="text" name="required_text" required>
  </label>
  <label>
    Optional email input
    <input type="email" name="optional_email">
  </label>
  <label>
    Required selection
    <span class="select-control">
      <select name="required_selection" required>
        <option value="">Choose an option</option>
        <option value="first">First option</option>
        <option value="second">Second option</option>
      </select>
      <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
    </span>
  </label>
  <div class="form-actions">
    <button
      class="button button-primary"
      type="submit"
    >
      Validate Form
    </button>
  </div>
</form>
```

### Validation behavior

```javascript
document.querySelectorAll('form[data-validate-form]').forEach(function (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.reportValidity();
  });
});
```

## Compound fields

Compound fields combine a native field with one meaningful prefix, suffix,
icon, or action.

### Shared compound-field CSS

Compound fields inherit the shared field height, colors, border, radius, and
one-pixel focus treatment. There is no extra rule common to every compound
option; copy only the option-specific CSS below.

### Input with an icon

The icon is decorative and stays inside the field's left edge.

```html
<label>
  Named value
  <span class="input-with-icon">
    <i class="fa-solid fa-building" aria-hidden="true"></i>
    <input type="text" name="record_name">
  </span>
</label>
```

```css
.input-with-icon {
  position: relative;
  display: block;
}

.input-with-icon > i {
  position: absolute;
  top: 50%;
  left: 0.85rem;
  z-index: 1;
  color: var(--slate-grey);
  transform: translateY(-50%);
  pointer-events: none;
  transition: color var(--transition-fast);
}

.input-with-icon > input {
  padding-left: 2.65rem;
}

.input-with-icon:focus-within > i {
  color: var(--primary-accent);
}
```

### Select with a custom arrow

Keep the native select element and hide only its platform arrow.

```html
<label>
  Category
  <span class="select-control">
    <select name="category">
      <option>First option</option>
      <option>Second option</option>
    </select>
    <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
  </span>
</label>
```

```css
.select-control {
  position: relative;
  display: block;
}

.select-control select {
  width: 100%;
  padding-right: 3rem;
  appearance: none;
}

.select-control i {
  position: absolute;
  top: 50%;
  right: 1.5rem;
  color: var(--soft-white);
  font-size: 0.78rem;
  transform: translateY(-50%);
  pointer-events: none;
}
```

### Money input

The prefix and suffix stay inside one focused field boundary.

```html
<label>
  Amount
  <span class="money-input">
    <span class="money-prefix" aria-hidden="true">$</span>
    <input type="number" name="amount" min="0" step="0.01">
    <span class="money-suffix">per unit</span>
  </span>
</label>
```

```css
.money-input {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  min-height: 42px;
  color: var(--soft-white);
  background: var(--deep-graphite);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.money-input:focus-within {
  border-color: var(--primary-accent);
  outline: none;
}

.money-prefix,
.money-suffix {
  color: var(--cool-grey);
}

.money-prefix {
  padding-left: 0.75rem;
}

.money-suffix {
  padding-right: 0.9rem;
  white-space: nowrap;
}

.money-input input {
  min-width: 0;
  padding: 0.65rem 0.35rem;
  border: 0;
  border-radius: 0;
  outline: 0;
}

.money-input input[type="number"] {
  appearance: textfield;
}

.money-input input[type="number"]::-webkit-inner-spin-button,
.money-input input[type="number"]::-webkit-outer-spin-button {
  margin: 0;
  appearance: none;
}
```

### Date and time with a Set now control

Use the input's `data-timezone` to choose the assignment timezone.

```html
<div class="form-field">
  <label for="scheduled-at">Scheduled date and time</label>
  <span class="datetime-control">
    <input
      id="scheduled-at"
      type="datetime-local"
      name="scheduled_at"
      step="1"
      data-timezone="UTC"
    >
    <button
      class="icon-button"
      type="button"
      data-set-now-for="#scheduled-at"
      aria-label="Set date and time to now"
      title="Set date and time to now"
    >
      <i class="fa-solid fa-clock" aria-hidden="true"></i>
    </button>
  </span>
</div>
```

```css
.datetime-control {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 32px;
  align-items: center;
  gap: 0.5rem;
}

.datetime-control .icon-button {
  width: 32px;
  height: 32px;
}
```

The convenience button requires the canonical
[`shared-components.js`](../web/shared-components.js). It includes seconds and
dispatches `change` after assignment.

### Read-only output

Use an output when the application generates a value that is not editable.

```html
<label>
  Generated value
  <output class="readonly-value">Example value</output>
</label>
```

```css
.readonly-value {
  display: block;
  min-height: 42px;
  padding: 0.65rem 0.75rem;
  color: var(--cool-grey);
  background: color-mix(in srgb, var(--deep-graphite) 55%, transparent);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
}
```

### Inline form

Use an inline form for one short value and one compact submit action.

```html
<form class="inline-form">
  <input
    type="text"
    name="new_item"
    placeholder="New item"
    aria-label="New item"
    required
  >
  <button class="icon-button accent" type="submit" aria-label="Add item">
    <i class="fa-solid fa-plus" aria-hidden="true"></i>
  </button>
</form>
```

```css
.inline-form {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.inline-form input {
  width: 250px;
}

@media (width <768px) {
  .inline-form {
    width: 100%;
  }

  .inline-form input {
    width: auto;
    min-width: 0;
    flex: 1;
  }
}
```

## Checkboxes, radios, and switches

Checkboxes allow multiple selections, radio buttons allow one selection in a
named group, and switches represent an immediate on/off setting.

### Shared choice-control CSS

Checkbox and radio options share these group, label, state, and supporting-text
rules.

```css
.choice-group {
  display: grid;
  gap: 0.75rem;
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

.choice-group legend {
  padding: 0;
  margin-bottom: 0.65rem;
  color: var(--soft-white);
  font-size: 0.86rem;
  font-weight: var(--font-weight-medium);
}

.choice-control {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  color: var(--soft-white);
  cursor: pointer;
}

.choice-control:has(input:disabled),
.choice-control input:disabled {
  cursor: not-allowed;
}

.choice-control input[type="checkbox"],
.choice-control input[type="radio"] {
  width: 1.1rem;
  height: 1.1rem;
  flex: 0 0 auto;
  margin: 0.2rem 0 0;
  accent-color: var(--primary-accent);
}

.choice-control-copy {
  display: grid;
  gap: 0.1rem;
  min-width: 0;
}

.choice-control-copy small {
  line-height: 1.45;
}
```

### Checkbox

Use one label per option. Add `checked` for the initial selected state or
`disabled` when the option is unavailable. Supporting text is optional.

```html
<fieldset class="choice-group">
  <legend>Checkbox options</legend>
  <label class="choice-control">
    <input type="checkbox" name="first_option" checked>
    <span class="choice-control-copy">
      Selected option
      <small>Optional supporting text.</small>
    </span>
  </label>
</fieldset>
```

### Radio buttons

Radio buttons in one set share the same `name`. Show enough options for a real
choice; add `disabled` only to an unavailable option.

```html
<fieldset class="choice-group">
  <legend>Radio options</legend>
  <label class="choice-control">
    <input type="radio" name="choice" value="first" checked>
    <span class="choice-control-copy">First choice</span>
  </label>
  <label class="choice-control">
    <input type="radio" name="choice" value="second">
    <span class="choice-control-copy">Second choice</span>
  </label>
</fieldset>
```

### Switch

Use a checkbox with `role="switch"`; the adjacent track is decorative.

```html
<label class="switch-control">
  <input type="checkbox" name="updates" role="switch" checked>
  <span class="switch-track" aria-hidden="true"></span>
  <span>Enable updates</span>
</label>
```

```css
.switch-control {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--soft-white);
  cursor: pointer;
}

.switch-control input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.switch-track {
  position: relative;
  width: 2.5rem;
  height: 1.4rem;
  flex: 0 0 auto;
  background: var(--deep-graphite);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--pill-radius);
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.switch-track::after {
  position: absolute;
  top: 0.18rem;
  left: 0.18rem;
  width: 0.9rem;
  height: 0.9rem;
  background: var(--cool-grey);
  border-radius: var(--circle-radius);
  transition:
    background var(--transition-fast),
    transform var(--transition-fast);
  content: "";
}

.switch-control input:checked + .switch-track {
  background: color-mix(in srgb, var(--primary-accent) 24%, transparent);
  border-color: var(--primary-accent);
}

.switch-control input:checked + .switch-track::after {
  background: var(--primary-accent);
  transform: translateX(1.08rem);
}

.switch-control input:focus-visible + .switch-track {
  outline: 2px solid var(--primary-accent);
  outline-offset: 3px;
}

.switch-control:has(input:disabled) {
  opacity: 0.55;
  cursor: not-allowed;
}
```

### Disabled switch

Add the native `disabled` attribute when the setting is unavailable. The
entire label becomes visibly disabled and does not show a hand cursor.

```html
<label class="switch-control">
  <input type="checkbox" name="updates" role="switch" disabled>
  <span class="switch-track" aria-hidden="true"></span>
  <span>Enable updates</span>
</label>
```

## Native form and disclosure controls

This section covers the native controls that need a small shared presentation
or behavior layer.

### Shared output-row CSS

Range and progress controls share a value column to their right.

```css
.control-with-output {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 3.5rem;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.control-with-output > output {
  color: var(--cool-grey);
  font-size: 0.86rem;
  font-weight: var(--font-weight-medium);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
```

### File input

The attachment button opens the native file chooser. The text beside it shows
the selected file names.

```html
<div class="form-field">
  <label for="attachment">File input</label>
  <div class="file-control">
    <input
      class="file-control-input"
      id="attachment"
      type="file"
      name="attachment"
      data-file-input
    >
    <label
      class="icon-button accent file-control-button"
      for="attachment"
      title="Choose file"
      aria-label="Choose file"
    >
      <i class="fa-solid fa-paperclip" aria-hidden="true"></i>
    </label>
    <span class="file-control-name" data-file-name>No file selected</span>
  </div>
</div>
```

```css
.file-control {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-height: 42px;
  padding: 0.35rem;
  color: var(--soft-white);
  background: var(--deep-graphite);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
}

.file-control-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip-path: inset(50%);
  overflow: hidden;
  white-space: nowrap;
}

.file-control-input:focus-visible + .file-control-button {
  outline: 2px solid var(--primary-accent);
  outline-offset: 2px;
}

.file-control-name {
  min-width: 0;
  color: var(--cool-grey);
  font-size: 0.86rem;
  font-weight: var(--font-weight-regular);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```

```javascript
document.querySelectorAll('[data-file-input]').forEach(function (input) {
  const control = input.closest('.file-control');
  const name = control && control.querySelector('[data-file-name]');
  if (!(input instanceof HTMLInputElement) || !(name instanceof HTMLElement)) {
    return;
  }

  input.addEventListener('change', function () {
    const files = input.files ? Array.from(input.files) : [];
    name.textContent = files.length
      ? files.map(function (file) { return file.name; }).join(', ')
      : 'No file selected';
  });
});
```

### Range input

Keep the live percentage in the output to the right of the slider.

```html
<div class="form-field">
  <label for="level">Range input</label>
  <div class="control-with-output" data-range-percentage>
    <input
      id="level"
      type="range"
      name="level"
      min="0"
      max="100"
      value="60"
    >
    <output for="level">60%</output>
  </div>
</div>
```

```css
input[type="range"] {
  width: 100%;
  min-height: 42px;
  padding: 0;
  accent-color: var(--primary-accent);
  background: transparent;
  border: 0;
}

input[type="range"]:focus-visible {
  outline: 2px solid var(--primary-accent);
  outline-offset: 3px;
}
```

```javascript
document.querySelectorAll('[data-range-percentage]').forEach(
  function (control) {
    const input = control.querySelector('input[type="range"]');
    const output = control.querySelector('output');
    if (!(input instanceof HTMLInputElement) ||
        !(output instanceof HTMLOutputElement)) return;

    function updatePercentage() {
      const minimum = Number(input.min || 0);
      const maximum = Number(input.max || 100);
      const value = Number(input.value);
      const percentage = maximum > minimum
        ? Math.round(((value - minimum) / (maximum - minimum)) * 100)
        : 0;
      output.value = percentage + '%';
    }

    input.addEventListener('input', updatePercentage);
    updatePercentage();
  }
);
```

### Progress bar

Use a progress bar for completion toward a known maximum. Keep the visible
percentage synchronized with its value. Choose one color option:

- No additional class for Primary Accent.
- `.progress-success` for success.
- `.progress-warning` for warning.
- `.progress-danger` for danger.

```html
<div class="form-field">
  <label for="progress-accent">Accent progress</label>
  <div class="control-with-output">
    <progress
      class="progress-control"
      id="progress-accent"
      max="100"
      value="25"
    >25%</progress>
    <output for="progress-accent">25%</output>
  </div>
</div>
```

```css
.progress-control {
  --progress-color: var(--primary-accent);

  width: 100%;
  height: 0.8rem;
  color: var(--progress-color);
  accent-color: var(--progress-color);
  appearance: none;
  background: var(--deep-graphite);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--pill-radius);
  cursor: default;
  overflow: hidden;
  pointer-events: none;
}

.progress-success {
  --progress-color: var(--alert-success);
}

.progress-warning {
  --progress-color: var(--alert-warning);
}

.progress-danger {
  --progress-color: var(--alert-error);
}

.progress-control::-webkit-progress-bar {
  background: transparent;
}

.progress-control::-webkit-progress-value {
  background: var(--progress-color);
  border-radius: var(--pill-radius);
}

.progress-control::-moz-progress-bar {
  background: var(--progress-color);
  border-radius: var(--pill-radius);
}
```

Progress is native and requires no JavaScript.

### Disclosure

A disclosure starts collapsed. Add `open` when its initial state should be
expanded. An icon is optional; when used, keep it inside `.disclosure-label`
and retain a text label.

```html
<details class="disclosure">
  <summary>Collapsed disclosure</summary>
  <div class="disclosure-content">
    <p>Disclosure content.</p>
  </div>
</details>
```

```css
.disclosure {
  background: color-mix(in srgb, var(--deep-graphite) 42%, transparent);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
}

.disclosure > summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  padding: var(--space-sm);
  color: var(--soft-white);
  font-weight: var(--font-weight-semibold);
  list-style: none;
  cursor: pointer;
}

.disclosure > summary::-webkit-details-marker {
  display: none;
}

.disclosure > summary::after {
  color: var(--primary-accent);
  content: "+";
}

.disclosure-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.disclosure-label i {
  color: var(--primary-accent);
}

.disclosure[open] > summary::after {
  content: "−";
}

.disclosure-content {
  padding: 0 var(--space-sm) var(--space-sm);
  border-top: 1px solid
    color-mix(in srgb, var(--charcoal-border) 65%, transparent);
}

.disclosure-content > :first-child {
  margin-top: var(--space-sm);
}

.disclosure-content > :last-child {
  margin-bottom: 0;
}
```

Disclosures are native and require no JavaScript.

### Dialog

Both options use the same opaque dialog panel and `closedby="none"`. A modal
makes the page inert until a defined dialog control closes it.

```html
<button
  class="button button-primary"
  type="button"
  data-dialog-open="#modal-dialog"
  data-dialog-mode="modal"
>
  Open modal dialog
</button>
<dialog
  class="dialog"
  id="modal-dialog"
  aria-labelledby="modal-dialog-title"
  closedby="none"
>
  <form class="dialog-content" method="dialog">
    <div>
      <p class="eyebrow">DIALOG</p>
      <h2 id="modal-dialog-title">Confirm action</h2>
      <p class="muted">Brief supporting copy.</p>
    </div>
    <div class="form-actions">
      <button class="button button-secondary" type="submit" value="cancel">
        Cancel
      </button>
      <button class="button button-primary" type="submit" value="confirm">
        Confirm
      </button>
    </div>
  </form>
</dialog>
```

### Non-modal dialog

The non-modal option adds `.dialog-nonmodal` and uses
`data-dialog-mode="nonmodal"`. The page remains interactive, the lighter scrim
does not block it, and a pointer press outside the panel closes the dialog.

```html
<button
  class="button button-secondary"
  type="button"
  data-dialog-open="#nonmodal-dialog"
  data-dialog-mode="nonmodal"
>
  Open non-modal dialog
</button>
<dialog
  class="dialog dialog-nonmodal"
  id="nonmodal-dialog"
  aria-labelledby="nonmodal-dialog-title"
  closedby="none"
>
  <form class="dialog-content" method="dialog">
    <div>
      <p class="eyebrow">DIALOG</p>
      <h2 id="nonmodal-dialog-title">Review details</h2>
      <p class="muted">Brief supporting copy.</p>
    </div>
    <div class="form-actions">
      <button class="button button-secondary" type="submit" value="cancel">
        Cancel
      </button>
      <button class="button button-primary" type="submit" value="confirm">
        Confirm
      </button>
    </div>
  </form>
</dialog>
```

```css
.dialog {
  width: min(32rem, calc(100% - 2rem));
  max-height: calc(100dvh - 2rem);
  padding: 0;
  color: var(--cool-grey);
  background: linear-gradient(180deg, var(--gunmetal), var(--background-mid));
  border: 1px solid var(--panel-border);
  border-radius: var(--border-radius);
  box-shadow: var(--popover-shadow);
  overflow: auto;
}

.dialog::backdrop {
  background: rgb(0 0 0 / 68%);
}

body:has(.dialog-nonmodal[open])::after {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgb(0 0 0 / 38%);
  pointer-events: none;
  content: "";
}

.dialog-nonmodal[open] {
  position: fixed;
  inset: 50% auto auto 50%;
  z-index: 1000;
  margin: 0;
  transform: translate(-50%, -50%);
}

.dialog-content {
  display: grid;
  gap: var(--space-md);
  padding: var(--space-lg);
}

.dialog-content > :last-child {
  margin-bottom: 0;
}
```

```javascript
document.querySelectorAll('[data-dialog-open]').forEach(function (button) {
  button.addEventListener('click', function () {
    const dialog = document.querySelector(button.dataset.dialogOpen || '');
    if (!(dialog instanceof HTMLDialogElement) || dialog.open) return;
    if (button.dataset.dialogMode === 'nonmodal') dialog.show();
    else dialog.showModal();
  });
});

document.addEventListener('pointerdown', function (event) {
  document.querySelectorAll('dialog.dialog-nonmodal[open]').forEach(
    function (dialog) {
      if (!dialog.contains(event.target)) dialog.close('dismiss');
    }
  );
});
```

## Verification code

Verification fields use six compact, left-aligned inputs in two groups. The
first input accepts a complete pasted code.

### Shared verification-code CSS

Copy these layout and field-size rules once.

```css
.verification-code {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

.verification-code legend {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  margin-bottom: 0.65rem;
  color: var(--soft-white);
  font-size: 0.86rem;
  font-weight: var(--font-weight-medium);
}

.verification-code legend i {
  color: var(--primary-accent);
}

.verification-code-fields {
  display: flex;
  gap: 1.25rem;
  width: fit-content;
  max-width: 100%;
}

.verification-code-group {
  display: flex;
  gap: 0.625rem;
  min-width: 0;
}

.verification-code-fields input {
  flex: 0 1 2.5rem;
  width: 2.5rem;
  min-width: 0;
  height: 2.75rem;
  min-height: 42px;
  padding: 0;
  font-size: 1.35rem;
  font-weight: var(--font-weight-semibold);
  text-align: center;
  caret-color: var(--primary-accent);
}
```

### Six-digit verification code

```html
<fieldset class="verification-code">
  <legend>
    <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
    One-time code
  </legend>
  <div class="verification-code-fields" data-verification-code>
    <div class="verification-code-group">
      <input
        type="text"
        name="code_digit_1"
        inputmode="numeric"
        pattern="[0-9]*"
        maxlength="6"
        autocomplete="one-time-code"
        aria-label="One-time code digit 1"
      >
      <input type="text" name="code_digit_2" inputmode="numeric"
        pattern="[0-9]*" maxlength="1" autocomplete="off"
        aria-label="One-time code digit 2">
      <input type="text" name="code_digit_3" inputmode="numeric"
        pattern="[0-9]*" maxlength="1" autocomplete="off"
        aria-label="One-time code digit 3">
    </div>
    <div class="verification-code-group">
      <input type="text" name="code_digit_4" inputmode="numeric"
        pattern="[0-9]*" maxlength="1" autocomplete="off"
        aria-label="One-time code digit 4">
      <input type="text" name="code_digit_5" inputmode="numeric"
        pattern="[0-9]*" maxlength="1" autocomplete="off"
        aria-label="One-time code digit 5">
      <input type="text" name="code_digit_6" inputmode="numeric"
        pattern="[0-9]*" maxlength="1" autocomplete="off"
        aria-label="One-time code digit 6">
    </div>
  </div>
</fieldset>
```

### Verification-code behavior

Use the canonical [`shared-components.js`](../web/shared-components.js). The
enhancement distributes a pasted code, advances after a digit, and supports
Backspace and Left/Right arrow movement. The individual fields remain usable
without JavaScript.

## Status and feedback

Use status pills for compact state labels, alerts for messages that remain in
the content flow, notifications for temporary full-width feedback, and live
status for a changing connection or process state.

### Shared status and feedback CSS

Copy these shared rules once before selecting the examples below.

```css
.status-pill,
.live-label {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-start;
  justify-self: start;
  inline-size: fit-content;
  max-inline-size: 100%;
  text-align: left;
  overflow-wrap: anywhere;
}

.status-pill {
  padding: 0.2rem 0.55rem;
  color: var(--soft-white);
  border-radius: var(--pill-radius);
  font-size: 0.72rem;
  font-weight: var(--font-weight-semibold);
}

.status-success {
  background: color-mix(in srgb, var(--alert-success) 15%, transparent);
}

.status-danger {
  background: color-mix(in srgb, var(--alert-error) 15%, transparent);
}

.status-neutral {
  color: var(--cool-grey);
  background: color-mix(in srgb, var(--cool-grey) 12%, transparent);
}

.status-warning {
  background: color-mix(in srgb, var(--alert-warning) 15%, transparent);
}

.status-running {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: color-mix(in srgb, var(--alert-success) 15%, transparent);
}

.status-running i {
  font-size: 0.42rem;
}

.alert-stack {
  display: grid;
  gap: 0.65rem;
  margin-bottom: 1.5rem;
}

.notification-launcher {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: end;
  gap: 0.65rem;
  max-width: 36rem;
}

.notification-region {
  display: grid;
  gap: 0.65rem;
  width: 100%;
}

.notification-region:empty {
  display: none;
}

.notification-region .alert {
  width: 100%;
}

.alert {
  padding: 0.8rem 1rem;
  color: var(--soft-white);
  border: 1px solid;
  border-radius: var(--border-radius);
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 300ms ease,
    transform 300ms ease;
}

.alert-with-icon {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.alert-message {
  flex: 1 1 auto;
  min-width: 0;
}

.alert-dismiss {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: -0.35rem -0.5rem -0.35rem 0;
  padding: 0;
  color: inherit;
  background: transparent;
  border: 1px solid transparent;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

.alert-dismiss:hover {
  background: rgb(255 255 255 / 10%);
  border-color: rgb(255 255 255 / 18%);
}

.alert-dismiss:focus-visible {
  outline: 2px solid currentcolor;
  outline-offset: 2px;
}

.alert.is-dismissing {
  opacity: 0;
  transform: translateY(-0.5rem);
}

.alert-info {
  background: color-mix(in srgb, var(--alert-info) 14%, transparent);
  border-color: color-mix(in srgb, var(--alert-info) 50%, transparent);
}

.alert-success {
  background: color-mix(in srgb, var(--alert-success) 14%, transparent);
  border-color: color-mix(in srgb, var(--alert-success) 50%, transparent);
}

.alert-warning {
  background: color-mix(in srgb, var(--alert-warning) 14%, transparent);
  border-color: color-mix(in srgb, var(--alert-warning) 50%, transparent);
}

.alert-error {
  background: color-mix(in srgb, var(--alert-error) 14%, transparent);
  border-color: color-mix(in srgb, var(--alert-error) 50%, transparent);
}

.running-dot {
  width: 10px;
  height: 10px;
  flex: 0 0 auto;
  background: var(--alert-success);
  border-radius: var(--circle-radius);
  box-shadow: 0 0 0 5px
    color-mix(in srgb, var(--alert-success) 12%, transparent);
  animation: running-pulse 2s ease-in-out infinite;
}

.live-status {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.45rem;
  color: var(--alert-success);
}

.live-status .running-dot {
  width: 7px;
  height: 7px;
  box-shadow: 0 0 0 3px
    color-mix(in srgb, var(--alert-success) 12%, transparent);
}

.live-status[data-state="reconnecting"] {
  color: var(--alert-warning);
}

.live-status[data-state="reconnecting"] .running-dot {
  background: var(--alert-warning);
  box-shadow: 0 0 0 3px
    color-mix(in srgb, var(--alert-warning) 12%, transparent);
}

.live-status[data-state="ended"] {
  color: var(--alert-error-foreground);
}

.live-status[data-state="ended"] .running-dot {
  background: var(--alert-error);
  box-shadow: 0 0 0 3px
    color-mix(in srgb, var(--alert-error) 12%, transparent);
  animation: none;
}

@keyframes running-pulse {
  0%,
  100% {
    opacity: 0.65;
    transform: scale(0.9);
  }

  50% {
    opacity: 1;
    transform: scale(1.08);
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto;
    transition-duration: 1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
  }
}

@media (width <=575px) {
  .notification-launcher {
    grid-template-columns: minmax(0, 1fr);
  }

  .notification-launcher .button {
    width: 100%;
  }
}
```

### Status pill

Use one tone class with `.status-pill`:

- `.status-success` for success or ready.
- `.status-danger` for an error or failed state.
- `.status-warning` for an attention state.
- `.status-neutral` for an inactive or informational state.
- `.status-running` with a circle icon for active work.

```html
<span class="status-pill status-success">Ready</span>
```

### Inline alert

Choose the tone, icon, and role together:

- `.alert-info`, `fa-circle-info`, and `role="status"`.
- `.alert-success`, `fa-circle-check`, and `role="status"`.
- `.alert-warning`, `fa-triangle-exclamation`, and `role="status"`.
- `.alert-error`, `fa-circle-xmark`, and `role="alert"`.

```html
<div class="alert alert-info alert-with-icon" role="status">
  <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
  <span class="alert-message">Information message</span>
</div>
```

Persistent alerts require no JavaScript. Add `data-auto-dismiss` to dismiss an
alert after 4.5 seconds. Add a `.alert-dismiss` button with
`data-alert-dismiss` when the user may close it early. Both behaviors require
the canonical [`shared-components.js`](../web/shared-components.js).

### Full-width notification

The launcher combines one select with one trigger. It supports `info`,
`success`, `warning`, and `error`; the selected option supplies the message.

```html
<div class="notification-launcher" data-notification-launcher>
  <label>
    Notification type
    <span class="select-control">
      <select data-notification-tone>
        <option
          value="info"
          data-notification-message="Information notification"
        >
          Information
        </option>
        <option
          value="success"
          data-notification-message="Success notification"
        >
          Success
        </option>
        <option
          value="warning"
          data-notification-message="Warning notification"
        >
          Warning
        </option>
        <option
          value="error"
          data-notification-message="Error notification"
        >
          Error
        </option>
      </select>
      <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
    </span>
  </label>
  <button
    class="button button-primary"
    type="button"
    data-notification-trigger
    data-notification-target="#notification-region"
  >
    Show notification
  </button>
</div>
<div
  class="notification-region"
  id="notification-region"
  aria-live="polite"
></div>
```

The canonical [`shared-components.js`](../web/shared-components.js) generates
the selected full-width alert, includes its accessible close button, and
removes it automatically after 4.5 seconds.

### Live status

Use `data-state="live"` for the normal green state. The same structure supports
`reconnecting` and `ended`; update the visible label when changing state.

```html
<span class="live-status" data-state="live" aria-live="polite">
  <span class="running-dot" aria-hidden="true"></span>
  <span class="live-label">Live</span>
</span>
```

## Summaries

Use a summary grid for a small set of comparable headline values.

### Shared summary CSS

```css
.summary-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  overflow: hidden;
}

.summary-card {
  padding: 1.5rem;
  background: color-mix(in srgb, var(--deep-graphite) 48%, transparent);
}

.summary-card span {
  display: block;
  margin-bottom: 0.4rem;
  color: var(--cool-grey);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.summary-card strong {
  color: var(--soft-white);
  font-size: 1.7rem;
}

@media (width <=575px) {
  .summary-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (width <=400px) {
  .summary-card strong {
    font-size: 1.4rem;
  }
}
```

### Summary grid

Each `.summary-card` contains one short label and one prominent value. Add or
remove cards as needed; keep the set concise enough to scan as one group. The
default is three columns. Add the existing `.content-grid-two` layout option to
`.summary-grid` when the group contains two cards.

```html
<section class="summary-grid panel" aria-label="Summary">
  <div class="summary-card"><span>First value</span><strong>128</strong></div>
  <div class="summary-card"><span>Second value</span><strong>84%</strong></div>
  <div class="summary-card"><span>Third value</span><strong>42</strong></div>
</section>
```

## Responsive table

Tables remain tables on wide screens and become labeled stacked records below
`1440px`; horizontal table scrolling is not an approved behavior. Every cell
requires `data-label`. Mark the primary and status cells so their mobile order
remains intentional.

### Shared responsive-table CSS

```css
.table-container {
  max-width: 100%;
  overflow: visible;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.86rem;
}

.data-table th,
.data-table td {
  padding: 0.85rem 0.7rem;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid
    color-mix(in srgb, var(--charcoal-border) 65%, transparent);
}

.data-table th {
  color: var(--primary-accent);
  font-size: 0.73rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.data-table td {
  min-width: 0;
  overflow-wrap: anywhere;
}

.data-table .cell-numeric {
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.table-summary,
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  color: var(--cool-grey);
  font-size: 0.82rem;
}

.table-summary {
  padding: 0.8rem 0;
}

.pagination {
  margin-top: 1.25rem;
}

@media (width <1440px) {
  .responsive-table {
    display: block;
  }

  .responsive-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }

  .responsive-table tbody {
    display: grid;
    gap: 1rem;
  }

  .responsive-table tbody > tr {
    display: grid;
    min-width: 0;
    padding: 0.3rem 0.9rem;
    background: color-mix(in srgb, var(--deep-graphite) 38%, transparent);
    border: 1px solid
      color-mix(in srgb, var(--charcoal-border) 75%, transparent);
    border-radius: var(--border-radius);
  }

  .responsive-table tbody > tr > td {
    display: grid;
    grid-template-columns: minmax(6.5rem, 30%) minmax(0, 1fr);
    align-items: start;
    gap: 0.75rem;
    width: 100%;
    min-width: 0;
    padding: 0.65rem 0;
  }

  .responsive-table tbody > tr > td::before {
    color: var(--primary-accent);
    font-size: 0.68rem;
    font-weight: var(--font-weight-semibold);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    content: attr(data-label);
  }

  .responsive-table tbody > tr > .cell-primary {
    order: -2;
  }

  .responsive-table tbody > tr > .cell-status {
    order: -1;
  }

  .responsive-table tbody > tr > .cell-numeric {
    text-align: left;
  }

  .responsive-table .cell-actions .row-actions {
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .responsive-table .truncate-text {
    max-width: 100%;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .responsive-table .empty-table-row {
    display: block;
    padding: 0;
  }

  .responsive-table .empty-table-row > td {
    display: block;
    padding: 1rem;
    border: 0;
  }

  .responsive-table .empty-table-row > td::before {
    content: none;
  }
}
```

### Table with data

```html
<div class="table-container">
  <table class="data-table responsive-table">
    <caption class="visually-hidden">Example records</caption>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th class="cell-numeric" scope="col">Count</th>
        <th scope="col">Status</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="cell-primary" data-label="Name">First record</td>
        <td data-label="Category">General</td>
        <td class="cell-numeric" data-label="Count">3</td>
        <td class="cell-status" data-label="Status">
          <span class="status-pill status-success">Ready</span>
        </td>
        <td class="cell-actions" data-label="Actions">
          <div class="row-actions">
            <button
              class="icon-button accent"
              type="button"
              aria-label="Edit first record"
            >
              <i class="fa-solid fa-pen" aria-hidden="true"></i>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="table-summary"><span>1 record</span><span>Page 1 of 1</span></div>
<nav class="pagination" aria-label="Record pages">
  <span>Page 1 of 1</span>
  <span>
    <button
      class="button button-secondary button-compact"
      type="button"
      disabled
    >
      Previous
    </button>
    <button
      class="button button-secondary button-compact"
      type="button"
      disabled
    >
      Next
    </button>
  </span>
</nav>
```

The summary and pagination are optional. Omit either when the complete result
set already fits on the page.

### Empty table

Keep the same table headers and replace the body with one spanning empty-state
cell. Set `colspan` to the table's column count.

```html
<div class="table-container">
  <table class="data-table responsive-table">
    <caption class="visually-hidden">Empty records example</caption>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="empty-table-row">
        <td colspan="2">No records match the selected filters.</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Hierarchical records

Use the hierarchy only when a parent/child relationship must remain visible.
The child name is vertically centered with its leading and action controls.
When a child has no leading icon, retain an empty `.hierarchy-child-leading`
element so its spacing and divider remain consistent. Preview action buttons
are inert; their application behavior is outside this structural component.

### Shared hierarchy CSS

```css
.hierarchy-panel {
  padding: 1.8rem;
}

.hierarchy-item {
  margin-top: 1.5rem;
  padding: 1.2rem;
  background: color-mix(in srgb, var(--deep-graphite) 42%, transparent);
  border: 1px solid color-mix(in srgb, var(--charcoal-border) 78%, transparent);
  border-radius: var(--border-radius);
}

.hierarchy-item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.hierarchy-item-header strong {
  color: var(--soft-white);
  font-size: 1rem;
}

.hierarchy-item-name {
  display: flex;
  align-items: center;
  min-width: 0;
  overflow-wrap: anywhere;
}

.hierarchy-item-name strong {
  min-width: 0;
}

.hierarchy-item-icon {
  margin-right: 0.65rem;
  color: var(--primary-accent);
}

.hierarchy-children {
  margin-left: 1.65rem;
}

.hierarchy-child {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) auto;
  align-items: center;
  column-gap: 0.65rem;
  min-height: 44px;
  padding: 0.35rem 0;
}

.hierarchy-child-leading {
  display: flex;
  grid-column: 1;
  align-items: center;
  min-height: 32px;
  padding-right: 0.65rem;
  border-right: 1px solid var(--charcoal-border);
}

.hierarchy-child-name {
  display: flex;
  grid-column: 2;
  align-items: center;
  gap: 0.7rem;
  min-width: 0;
  color: var(--soft-white);
  font-size: 0.9rem;
}

.hierarchy-child-name span {
  min-width: 0;
  overflow-wrap: anywhere;
}

.hierarchy-child .row-actions {
  grid-column: 3;
}

@media (width <768px) {
  .hierarchy-panel {
    padding: 1.25rem;
  }

  .hierarchy-children {
    margin-left: 0.35rem;
  }

  .hierarchy-child .row-actions {
    justify-self: end;
  }
}

@media (width <=400px) {
  .hierarchy-panel,
  .form-panel {
    padding: 1rem;
  }
}
```

### Parent and child records

```html
<article class="panel hierarchy-panel">
  <div class="panel-heading">
    <div><p class="eyebrow">HIERARCHY</p><h2>Parent and child records</h2></div>
    <button class="icon-button accent" type="button" aria-label="Add parent item">
      <i class="fa-solid fa-plus" aria-hidden="true"></i>
    </button>
  </div>
  <div class="hierarchy-item">
    <div class="hierarchy-item-header">
      <div class="hierarchy-item-name">
        <i
          class="fa-solid fa-layer-group hierarchy-item-icon"
          aria-hidden="true"
        ></i>
        <strong>Parent item</strong>
      </div>
      <div class="row-actions">
        <button
          class="icon-button"
          type="button"
          aria-label="Edit parent item"
          title="Edit parent item"
        >
          <i class="fa-solid fa-pen" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="hierarchy-children">
      <div class="hierarchy-child">
        <div class="hierarchy-child-leading">
          <button
            class="icon-button accent"
            type="button"
            aria-label="Open child item"
          >
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
        <div class="hierarchy-child-name"><span>Child item</span></div>
        <div class="row-actions">
          <button class="icon-button" type="button" aria-label="Edit child item">
            <i class="fa-solid fa-pen" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</article>
```

### Child without a leading icon

Keep the leading column and divider when the child has no icon or control.
Replace only the leading element from the example above:

```html
<div class="hierarchy-child-leading" aria-hidden="true"></div>
```

## Shared responsive and motion rules

The component stylesheet owns component breakpoints. Website and application
stylesheets may choose shell breakpoints but must not override shared component
behavior. Preserve the canonical `prefers-reduced-motion` rule.

## Optional component JavaScript

Use the canonical [`shared-components.js`](../web/shared-components.js) when
the selected components need progressive enhancement. The relevant component
sections above document their required `data-*` hooks and include focused
JavaScript excerpts when the behavior is not self-explanatory.

The shared file provides copy controls, date/time convenience, verification-code
distribution, transient alert dismissal, notification launchers, range
percentages, file labels, validation helpers, and modal/non-modal dialog
behavior. Components without those behaviors do not require it.
