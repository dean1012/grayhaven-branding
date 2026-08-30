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

