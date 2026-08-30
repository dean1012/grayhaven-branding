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
- [Layout, headings, and utilities](#layout-headings-and-utilities)
- [Panels and content cards](#panels-and-content-cards)
- [Lists, badges, and resource links](#lists-badges-and-resource-links)
- [Breadcrumbs](#breadcrumbs)
- [Text-like fields and messages](#text-like-fields-and-messages)
- [Compound fields](#compound-fields)
- [Checkboxes, radios, and switches](#checkboxes-radios-and-switches)
- [Native form and disclosure controls](#native-form-and-disclosure-controls)
- [Verification code](#verification-code)
- [Status and feedback](#status-and-feedback)
- [Summaries, empty states, and copyable values](#summaries-empty-states-and-copyable-values)
- [Responsive table](#responsive-table)
- [Hierarchical records and inline edit](#hierarchical-records-and-inline-edit)

## Buttons

Use `.button` for standard actions and links. Add one intent, optional size, and
optional `.button-icon`. Icon-only controls require an `aria-label`.

### Buttons HTML

```html
<button class="button button-primary" type="button">Primary</button>
<button class="button button-primary" type="button">
  <i class="fa-solid fa-check" aria-hidden="true"></i>
  Primary
</button>
<button
  class="button button-primary button-icon"
  type="button"
  aria-label="Primary action"
>
  <i class="fa-solid fa-check" aria-hidden="true"></i>
</button>

<button class="button button-secondary" type="button">Cancel</button>
<button class="button button-success" type="button">Confirm</button>
<button class="button button-danger" type="button">Delete</button>
<button class="button button-stop" type="button">Stop</button>

<button class="button button-primary button-compact" type="button">
  Compact
</button>
<button class="button button-primary button-large" type="button">
  Large
</button>
<button class="button button-primary" type="button" disabled>
  Disabled
</button>
<a class="button button-primary" href="/destination">Link action</a>

<button class="icon-button" type="button" aria-label="View">
  <i class="fa-solid fa-eye" aria-hidden="true"></i>
</button>
<button class="icon-button accent" type="button" aria-label="Edit">
  <i class="fa-solid fa-pen" aria-hidden="true"></i>
</button>
<button class="icon-button stop" type="button" aria-label="Stop">
  <i class="fa-solid fa-stop" aria-hidden="true"></i>
</button>
<button class="icon-button danger" type="button" aria-label="Delete">
  <i class="fa-solid fa-trash" aria-hidden="true"></i>
</button>
```

### Buttons CSS

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

.button:disabled,
.button[aria-disabled="true"],
.icon-button:disabled,
.icon-button[aria-disabled="true"] {
  opacity: 0.42;
  cursor: not-allowed;
}

.button:focus-visible,
.icon-button:focus-visible,
.text-link:focus-visible {
  outline: 2px solid var(--primary-accent);
  outline-offset: 3px;
}

.button-primary {
  color: var(--deep-graphite);
  background: var(--primary-accent);
  border-color: var(--primary-accent);
}

.button-primary:hover {
  color: var(--deep-graphite);
  background: var(--elevated-hover);
  border-color: var(--elevated-hover);
}

.button-secondary {
  color: var(--soft-white);
  background: color-mix(in srgb, var(--deep-graphite) 34%, transparent);
}

.button-secondary:hover {
  color: var(--soft-white);
  background: var(--light-surface-accent);
  border-color: var(--primary-accent);
}

.button-success {
  color: var(--deep-graphite);
  background: var(--muted-emerald);
  border-color: var(--muted-emerald);
}

.button-success:hover {
  color: var(--deep-graphite);
  background: var(--alert-success);
  border-color: var(--alert-success);
}

.button-danger {
  color: var(--soft-white);
  background: var(--alert-error);
  border-color: var(--alert-error);
}

.button-danger:hover {
  color: var(--soft-white);
  background: color-mix(in srgb, var(--alert-error) 82%, var(--soft-white));
  border-color: color-mix(in srgb, var(--alert-error) 82%, var(--soft-white));
}

.button-stop {
  color: var(--soft-white);
  background: color-mix(in srgb, var(--alert-error) 14%, transparent);
  border-color: color-mix(in srgb, var(--alert-error) 60%, transparent);
}

.button-stop:hover {
  background: color-mix(in srgb, var(--alert-error) 25%, transparent);
  border-color: var(--alert-error);
}

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

.button-icon {
  width: 42px;
  min-width: 42px;
  padding: 0;
}

.button-icon.button-compact {
  width: 34px;
  min-width: 34px;
}

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

.icon-button:hover {
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

.icon-button.danger:hover {
  color: var(--alert-error);
}
```

Intent mapping is fixed: primary uses Primary Accent, cancel/secondary uses the
quiet outlined surface, success/confirm uses Muted Emerald, destructive/danger
uses Alert Error, and stop uses the quieter Alert Error treatment.

## Links

### Links HTML

```html
<a
  class="external-link"
  href="https://example.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
  External link
</a>
<a class="scroll-link" href="#section">
  <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
  Scroll link
</a>
<a class="back-link" href="/previous">
  <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
  Back link
</a>
<button class="text-link" type="button">Text action</button>
```

### Links CSS

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
  padding: 0;
  color: var(--primary-accent);
  background: none;
  border: 0;
  font-size: 0.86rem;
}

.text-link:hover {
  color: var(--standard-hover);
}

:where(
    .external-link,
    .back-link,
    .text-link[href],
    .breadcrumbs a
  ):hover,
:where(
    .external-link,
    .back-link,
    .text-link[href],
    .breadcrumbs a
  ):focus-visible {
  color: var(--standard-hover);
  background: color-mix(in srgb, var(--standard-hover) 10%, transparent);
  border-radius: var(--border-radius-sm);
}
```

## Layout, headings, and utilities

### Layout, headings, and utilities HTML

```html
<section class="container section-spacing">
  <h2 class="section-title">Section title</h2>
  <p class="section-subtitle">A concise supporting statement.</p>

  <div class="page-heading compact">
    <div>
      <p class="eyebrow">EXAMPLE</p>
      <h3 class="truncate-text" title="Page heading">Page heading</h3>
      <p class="muted">Supporting context.</p>
    </div>
    <div class="heading-actions">
      <button class="button button-primary" type="button">Action</button>
    </div>
  </div>

  <div class="narrow-content">Narrow reading-width content.</div>
  <span class="visually-hidden">Screen-reader-only context.</span>
</section>
```

### Layout, headings, and utilities CSS

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

.truncate-text,
.breadcrumb-label {
  display: block;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

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

.narrow-content {
  max-width: 720px;
  margin: 0 auto;
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

## Panels and content cards

### Panels and content cards HTML

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

<div class="content-grid content-grid-two">
  <article class="content-card">
    <div class="content-card-icon">
      <i class="fa-solid fa-cube" aria-hidden="true"></i>
    </div>
    <h2 class="content-card-title">Content card</h2>
    <p class="content-card-description">A concise description.</p>
    <div class="content-card-actions">
      <a class="scroll-link" href="#details">Details</a>
    </div>
  </article>

  <article class="content-card content-card-compact">
    <div class="content-card-icon">
      <i class="fa-solid fa-cube" aria-hidden="true"></i>
    </div>
    <h2 class="content-card-title">Compact content card</h2>
    <p class="content-card-description">The same structure with quieter type.</p>
  </article>
</div>
```

Use `.content-grid-two` or `.content-grid-three` to select the wide-screen
column count. Both stack at the shared mobile breakpoint.

### Panels and content cards CSS

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

.content-card-compact .content-card-icon {
  font-size: 1.75rem;
}

.content-card-compact .content-card-title {
  font-size: 1.15rem;
}

.content-card-compact .content-card-description {
  font-size: 0.85rem;
}

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

### Lists, badges, and resource links HTML

```html
<ul class="check-list">
  <li><i class="fa-solid fa-circle-check" aria-hidden="true"></i>First item</li>
  <li><i class="fa-solid fa-circle-check" aria-hidden="true"></i>Second item</li>
</ul>

<ul class="action-list">
  <li>
    <strong>Action-list item</strong>
    <span class="muted">Supporting information.</span>
    <button class="button button-secondary" type="button">Action</button>
  </li>
</ul>

<span class="badge">Category</span>

<a class="resource-link-card" href="/reference">
  <i class="fa-solid fa-book" aria-hidden="true"></i>
  <span>Reference link with truncation support</span>
</a>
```

### Lists, badges, and resource links CSS

```css
.capability-list,
.check-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
  padding: 0;
  list-style: none;
}

.capability-list li,
.check-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--cool-grey);
  font-size: 0.85rem;
}

.capability-list li i,
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

## Breadcrumbs

### Breadcrumbs HTML

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

### Breadcrumbs CSS

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

