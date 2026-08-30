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

## Text-like fields and messages

This base covers text, email, password, number, date/time, search, URL, and
telephone inputs, plus `select` and `textarea`. Use native input types and
appropriate autocomplete values.

### Text-like fields and messages HTML

```html
<section class="panel form-panel narrow-content">
  <form class="form-stack">
    <label>
      <span>Display name <span class="optional">Optional</span></span>
      <input type="text" name="display_name" autocomplete="name">
    </label>
    <div class="form-actions">
      <button class="button button-secondary" type="reset">Cancel</button>
      <button class="button button-primary" type="submit">Save</button>
    </div>
  </form>
</section>

<label>
  Display name
  <input type="text" name="display_name" autocomplete="name">
</label>

<label>
  Notes
  <textarea name="notes" rows="4" placeholder="Add an optional note"></textarea>
  <small class="field-help">Help text explains format or purpose.</small>
</label>

<label>
  Reference value
  <input
    type="text"
    name="reference"
    aria-invalid="true"
    aria-describedby="reference-error"
  >
  <small class="field-error" id="reference-error">
    Explain how to correct the value.
  </small>
</label>

<label>
  Read-only input
  <input type="text" value="Read-only value" readonly>
</label>

<label>
  Disabled input
  <input type="text" value="Disabled value" disabled>
</label>
```

### Text-like fields and messages CSS

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

textarea {
  min-height: 7rem;
  resize: vertical;
}

:where(
    input:not([type="checkbox"], [type="radio"]),
    select,
    textarea
  ):focus-visible {
  border-color: var(--primary-accent);
  outline: none;
}

:where(
    input:not([type="checkbox"], [type="radio"]),
    select,
    textarea
  )[aria-invalid="true"] {
  border-color: var(--alert-error);
}

:where(
    input:not([type="checkbox"], [type="radio"]),
    select,
    textarea
  ):disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

input[readonly],
textarea[readonly] {
  color: var(--cool-grey);
  background: color-mix(in srgb, var(--deep-graphite) 55%, transparent);
}

input::placeholder,
textarea::placeholder {
  color: var(--slate-grey);
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
  color: var(--alert-error);
}

.narrow-content {
  max-width: 720px;
  margin: 0 auto;
}

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

.optional {
  color: var(--cool-grey);
  font-size: 0.75rem;
  font-weight: var(--font-weight-regular);
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

Every focused field changes only its existing one-pixel border to Primary
Accent. Compound wrappers use the same one-pixel treatment through
`:focus-within`.

## Compound fields

### Compound fields HTML

```html
<label>
  Named value
  <span class="input-with-icon">
    <i class="fa-solid fa-building" aria-hidden="true"></i>
    <input type="text" name="record_name">
  </span>
</label>

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

<label>
  Amount
  <span class="money-input">
    <span class="money-prefix" aria-hidden="true">$</span>
    <input type="number" name="amount" min="0" step="0.01">
    <span class="money-suffix">per unit</span>
  </span>
</label>

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

<label>
  Generated value
  <output class="readonly-value">Example value</output>
</label>

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

### Compound fields CSS

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

.readonly-value {
  display: block;
  min-height: 42px;
  padding: 0.65rem 0.75rem;
  color: var(--cool-grey);
  background: color-mix(in srgb, var(--deep-graphite) 55%, transparent);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
}

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

### Compound fields JavaScript

The date/time convenience button requires the canonical
[`shared-components.js`](../web/shared-components.js). It uses the input's
`data-timezone`, includes seconds, and dispatches `change` after assignment.

## Checkboxes, radios, and switches

### Checkboxes, radios, and switches HTML

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
  <label class="choice-control">
    <input type="checkbox" name="second_option">
    <span class="choice-control-copy">Unselected option</span>
  </label>
</fieldset>

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

<label class="switch-control">
  <input type="checkbox" name="updates" role="switch" checked>
  <span class="switch-track" aria-hidden="true"></span>
  <span>Enable updates</span>
</label>
```

### Checkboxes, radios, and switches CSS

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
```

## Native form and disclosure controls

### Native form and disclosure controls HTML

```html
<label>
  File input
  <input type="file" name="attachment">
</label>

<div class="form-field">
  <label for="level">Range input</label>
  <input id="level" type="range" name="level" min="0" max="100" value="60">
  <output for="level">60%</output>
</div>

<label>
  Input with datalist
  <input type="text" name="category" list="category-options">
  <datalist id="category-options">
    <option value="First option"></option>
    <option value="Second option"></option>
  </datalist>
</label>

<label>
  Progress
  <progress class="progress-control" max="100" value="64">64%</progress>
</label>

<label>
  Meter
  <meter
    class="meter-control"
    min="0"
    max="100"
    low="35"
    high="75"
    optimum="90"
    value="82"
  >82%</meter>
</label>

<details class="disclosure">
  <summary>Disclosure label</summary>
  <div class="disclosure-content">
    <p>Disclosure content.</p>
  </div>
</details>

<button
  class="button button-primary"
  type="button"
  data-dialog-open="#example-dialog"
>
  Open dialog
</button>
<dialog
  class="dialog"
  id="example-dialog"
  aria-labelledby="example-dialog-title"
>
  <form class="dialog-content" method="dialog">
    <div>
      <p class="eyebrow">DIALOG</p>
      <h2 id="example-dialog-title">Confirm action</h2>
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

### Native form and disclosure controls CSS

```css
input[type="file"] {
  padding: 0.35rem;
}

input[type="file"]::file-selector-button {
  min-height: 32px;
  margin-right: 0.75rem;
  padding: 0.35rem 0.65rem;
  color: var(--soft-white);
  background: color-mix(in srgb, var(--deep-graphite) 34%, transparent);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius-sm);
  font: inherit;
  font-size: 0.78rem;
  font-weight: var(--font-weight-semibold);
  cursor: pointer;
  transition:
    background var(--transition-fast),
    border-color var(--transition-fast);
}

input[type="file"]::file-selector-button:hover {
  background: var(--light-surface-accent);
  border-color: var(--primary-accent);
}

input[type="range"] {
  width: 100%;
  min-height: 42px;
  padding: 0;
  accent-color: var(--primary-accent);
  background: transparent;
  border: 0;
}

.progress-control,
.meter-control {
  width: 100%;
  height: 0.8rem;
  accent-color: var(--primary-accent);
}

.progress-control {
  color: var(--primary-accent);
}

.progress-control::-webkit-progress-bar,
.meter-control::-webkit-meter-bar {
  background: var(--deep-graphite);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--pill-radius);
}

.progress-control::-webkit-progress-value {
  background: var(--primary-accent);
  border-radius: var(--pill-radius);
}

.meter-control::-webkit-meter-optimum-value {
  background: var(--alert-success);
  border-radius: var(--pill-radius);
}

.meter-control::-webkit-meter-suboptimum-value {
  background: var(--alert-warning);
  border-radius: var(--pill-radius);
}

.meter-control::-webkit-meter-even-less-good-value {
  background: var(--alert-error);
  border-radius: var(--pill-radius);
}

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

.dialog {
  width: min(32rem, calc(100% - 2rem));
  max-height: calc(100dvh - 2rem);
  padding: 0;
  color: var(--cool-grey);
  background: linear-gradient(
    180deg,
    var(--panel-bg-top),
    var(--panel-bg-bottom)
  );
  border: 1px solid var(--panel-border);
  border-radius: var(--border-radius);
  box-shadow: var(--popover-shadow);
  overflow: auto;
}

.dialog::backdrop {
  background: rgb(0 0 0 / 68%);
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

### Native form and disclosure controls JavaScript

```javascript
document.querySelectorAll('[data-dialog-open]').forEach(function (button) {
  button.addEventListener('click', function () {
    const dialog = document.querySelector(button.dataset.dialogOpen || '');
    if (dialog instanceof HTMLDialogElement) dialog.showModal();
  });
});
```

`datalist`, `progress`, `meter`, and `details` are native and require no
JavaScript. Range output updates are product logic; update the paired `output`
only when the displayed value must track user input.

## Verification code

### Verification code HTML

```html
<fieldset class="verification-code">
  <legend>
    <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
    One-time code
  </legend>
  <div class="verification-code-fields" data-verification-code>
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
</fieldset>
```

### Verification code CSS

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
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(0.35rem, 1.5vw, 0.65rem);
  width: 100%;
}

.verification-code-fields input {
  min-width: 0;
  min-height: 0;
  aspect-ratio: 1;
  padding: 0;
  border-radius: var(--circle-radius);
  font-size: 1.35rem;
  font-weight: var(--font-weight-semibold);
  text-align: center;
  caret-color: var(--primary-accent);
}
```

### Verification code JavaScript

Use the canonical [`shared-components.js`](../web/shared-components.js). The
enhancement distributes a pasted code, advances after a digit, and supports
Backspace and Left/Right arrow movement. The individual fields remain usable
without JavaScript.

## Status and feedback

### Status and feedback HTML

```html
<span class="status-pill status-success">Success</span>
<span class="status-pill status-danger">Danger</span>
<span class="status-pill status-warning">Warning</span>
<span class="status-pill status-neutral">Neutral</span>
<span class="status-pill status-running">
  <i class="fa-solid fa-circle" aria-hidden="true"></i>
  Running
</span>

<div class="alert-stack">
  <div class="alert alert-info" role="status">Information message</div>
  <div class="alert alert-success" role="status">Success message</div>
  <div class="alert alert-warning alert-with-icon" role="status">
    <i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>
    Warning message
  </div>
  <div class="alert alert-error" role="alert">Error message</div>
</div>

<span class="live-status" data-state="live">
  <span class="running-dot" aria-hidden="true"></span>
  <span class="live-label">Live</span>
</span>
```

Add `data-auto-dismiss` to an alert only when the canonical script should
remove it after 4.5 seconds. Persistent errors omit it.

### Status and feedback CSS

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
  color: var(--alert-error);
}

.live-status[data-state="ended"] .running-dot {
  background: var(--alert-error);
  box-shadow: 0 0 0 3px
    color-mix(in srgb, var(--alert-error) 12%, transparent);
  animation: none;
}
```

## Summaries, empty states, and copyable values

### Summaries, empty states, and copyable values HTML

```html
<section class="summary-grid panel" aria-label="Summary">
  <div class="summary-card"><span>First value</span><strong>128</strong></div>
  <div class="summary-card"><span>Second value</span><strong>84%</strong></div>
  <div class="summary-card"><span>Third value</span><strong>42</strong></div>
</section>

<section class="panel empty-state">
  <i class="fa-solid fa-inbox" aria-hidden="true"></i>
  <h2>No items</h2>
  <p class="muted">Explain what is missing and the next useful action.</p>
  <button class="button button-primary" type="button">Create item</button>
</section>

<div
  class="secret-value copy-value"
  id="copyable-value"
  data-copy-value="example-copy-value"
>
  <span class="copy-value-text">example-copy-value</span>
  <button
    class="icon-button"
    type="button"
    data-copy-target="#copyable-value"
    aria-label="Copy example value"
    title="Copy example value"
  >
    <i class="fa-solid fa-copy" aria-hidden="true"></i>
  </button>
</div>
```

### Summaries, empty states, and copyable values CSS

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

.empty-state {
  padding: 4rem;
  text-align: center;
}

.empty-state i {
  margin-bottom: 1rem;
  color: var(--light-surface-accent);
  font-size: 2rem;
}

.empty-state h2,
.empty-state h3 {
  margin-bottom: 0.3rem;
}

.secret-value {
  margin: 1.5rem 0;
  padding: 1rem;
  color: var(--soft-white);
  background: var(--deep-graphite);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
  font-family: ui-monospace, monospace;
  font-size: 1.1rem;
  letter-spacing: 0.08em;
  overflow-wrap: anywhere;
}

.copy-value {
  display: flex;
  align-items: center;
  gap: 0.65rem;
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

@media (width <=575px) {
  .summary-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (width <=400px) {
  .summary-card strong {
    font-size: 1.4rem;
  }

  .secret-value {
    font-size: 0.88rem;
    letter-spacing: 0.04em;
  }
}
```

### Summaries, empty states, and copyable values JavaScript

Copying requires the canonical
[`shared-components.js`](../web/shared-components.js). The control uses the
Clipboard API when available, retains a safe fallback, briefly changes to a
check icon, and restores its original accessible name and title.

