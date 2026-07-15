# Web Application Style Guide

[Return to Web Style Guide](../style-guide/style-guide.md)

This guide extends the general Grayhaven Systems LLC web standards for
authenticated applications, administrative interfaces, operational dashboards,
and browser-based reports. It builds upon, and does not replace,
[Web Standards](web-standards.md) or [Web Components](web-components.md).

Use the general component whenever it satisfies the application need. Use the
patterns below only for application-specific structure, density, state, and
interaction. The [live preview](../web-application/index.html) demonstrates the
complete visual vocabulary with generic sample content.

## Table of Contents

- [Inheritance and scope](#inheritance-and-scope)
- [Application tokens](#application-tokens)
- [Application shell and navigation](#application-shell-and-navigation)
- [Page headings and panels](#page-headings-and-panels)
- [Application actions](#application-actions)
- [Forms and browser autofill](#forms-and-browser-autofill)
- [Authentication and verification codes](#authentication-and-verification-codes)
- [Notifications and status](#notifications-and-status)
- [Active work and task trees](#active-work-and-task-trees)
- [Data tables, filters, and pagination](#data-tables-filters-and-pagination)
- [Dashboards and live reports](#dashboards-and-live-reports)
- [Empty, error, and sensitive-value states](#empty-error-and-sensitive-value-states)
- [Application footer](#application-footer)
- [Responsive and accessibility requirements](#responsive-and-accessibility-requirements)
- [Implementation boundaries](#implementation-boundaries)

## Inheritance and scope

Application interfaces inherit the approved palette, Inter typography, spacing
scale, radii, focus treatments, local asset requirements, privacy defaults, and
responsive breakpoints from the general web guide.

Application layouts may use project-specific widths, heights, and information
density. Branding defines the structure, typography, color, interaction, and
state treatment of components; it does not prescribe rigid component dimensions
other than minimum usable control targets and responsive breakpoint guidance.

The following general patterns remain unchanged:

- Wordmark selection and logo rules
- Semantic landmarks and heading hierarchy
- Links for navigation and buttons for actions
- Dark and light panel contrast rules
- Four alert states
- Visible keyboard focus and reduced-motion support
- Local, versioned fonts, icons, stylesheets, and scripts

[Back to top](#web-application-style-guide)

## Application tokens

Use the complete core and alert palettes from [Brand Foundations](brand-foundations.md).
The following tokens are especially useful in data-rich interfaces:

| Token | Application role |
| --- | --- |
| `--slate-grey` | Secondary icons, placeholders, and system-origin status |
| `--pale-steel` | Light chart series and subtle high-contrast detail |
| `--muted-deep-accent` | Darker chart series and light-surface accent |
| `--dark-logo-charcoal` | Light-document headings and approved logo detail |
| `--alert-info` | Neutral or user-origin status |
| `--alert-success` | Running, enabled, or successful status |
| `--alert-warning` | Expiring, reconnecting, or attention-required status |
| `--alert-error` | Stopped, disabled, destructive, or failed status |

Derive translucent surfaces from approved tokens with `color-mix()` rather
than introducing lighter companion hex values. State must never be communicated
by color alone; pair it with text, an icon, or both.

Use the canonical radii:

- `--border-radius` for panels, fields, buttons, and popovers.
- `--border-radius-sm` for compact controls, table labels, and chart swatches.
- A fully rounded pill is permitted for short status labels.
- A circle is permitted for icon controls, verification cells, chart marks,
  and live-status dots when the shape has semantic value.

[Back to top](#web-application-style-guide)

## Application shell and navigation

An authenticated shell uses a sticky, compact header with the approved
dark-background wordmark, an optional product label, primary destinations, and
a sign-out action. A native `details` menu is the preferred mobile fallback
because it remains operable without JavaScript.

Authentication screens omit the application header and navigation. Public
shared-report pages may also omit authenticated navigation when no destination
is available to the viewer.

### Application shell HTML example

```html
<header class="app-header">
  <div class="app-header-inner">
    <a
      class="app-brand"
      href="/"
      aria-label="Grayhaven Systems LLC application home">
      <img
        src="assets/grayhaven-logo-wordmark-dark.svg"
        alt="Grayhaven Systems LLC">
      <span class="app-product">Application Name</span>
    </a>
    <nav class="app-nav app-nav-desktop" aria-label="Application navigation">
      <a href="/" aria-current="page">
        <i class="fa-solid fa-gauge-high" aria-hidden="true"></i>
        Dashboard
      </a>
      <button class="app-nav-action" type="button">
        <i class="fa-solid fa-right-from-bracket" aria-hidden="true"></i>
        Sign out
      </button>
    </nav>
    <details class="app-nav-mobile">
      <summary class="app-nav-toggle" aria-label="Application menu">
        <i class="fa-solid fa-bars" aria-hidden="true"></i>
        <span>Menu</span>
      </summary>
      <nav class="app-nav-menu" aria-label="Application navigation">...</nav>
    </details>
  </div>
</header>

<main class="app-shell">...</main>
```

### Application shell CSS example

```css
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--navbar-bg);
  border-bottom: 1px solid var(--charcoal-border);
  backdrop-filter: var(--navbar-blur);
}

.app-header-inner,
.app-shell {
  width: min(var(--app-container-max), calc(100% - 2 * var(--container-padding)));
  margin-inline: auto;
}

.app-brand,
.app-nav {
  display: flex;
  align-items: center;
}

.app-product {
  color: var(--cool-grey);
  border-left: 1px solid var(--charcoal-border);
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
}
```

[Back to top](#web-application-style-guide)

## Page headings and panels

Application pages use a left-aligned heading block with an optional eyebrow,
concise supporting text, and actions aligned opposite the heading on wider
screens. Capitalize section headings in title case; keep short common words
such as “and,” “by,” and “of” lowercase where appropriate.

Application panels use the general dark panel surface. Cards may be denser and
wider than marketing cards, but must retain the same border, radius, shadow,
heading, and body-text roles.

```html
<div class="app-page-heading">
  <div>
    <p class="app-eyebrow">CLIENTS</p>
    <h1>Clients &amp; Contracts</h1>
    <p class="app-muted">Manage client records and contract work.</p>
  </div>
  <a class="app-button app-button-primary" href="/clients/new">
    <i class="fa-solid fa-plus" aria-hidden="true"></i>
    Add Client
  </a>
</div>

<section class="panel panel-dark app-panel" aria-labelledby="panel-title">
  <div class="app-panel-heading">
    <h2 id="panel-title">Section Title</h2>
  </div>
  ...
</section>
```

[Back to top](#web-application-style-guide)

## Application actions

Application actions extend the general button language with semantic variants.
Use the primary accent for the main action, a quiet bordered treatment for
secondary actions, success for starting or enabling, and error for stopping or
destructive actions. Destructive actions require clear labels and an
appropriate confirmation when the result is not easily reversible.

Icon-only actions are reserved for compact repeated controls. They require an
`aria-label`, a visible tooltip or title where helpful, a minimum usable target,
and the same focus-visible treatment as labeled buttons.

```html
<button class="app-button app-button-primary" type="submit">
  <i class="fa-solid fa-check" aria-hidden="true"></i>
  Save Changes
</button>
<button class="app-button app-button-secondary" type="button">Cancel</button>
<button class="app-button app-button-start" type="button">Start Timer</button>
<button class="app-button app-button-stop" type="button">Stop Timer</button>
<button class="app-icon-button" type="button" aria-label="Rename task">
  <i class="fa-solid fa-pen" aria-hidden="true"></i>
</button>
```

Do not use `transition: all`; list the properties that actually change.

[Back to top](#web-application-style-guide)

## Forms and browser autofill

Forms use visible labels, optional explanatory text, an icon inside each field
when it improves recognition, and a clear action row. Placeholder text is never
a substitute for a label. Use the browser’s correct input type and preserve
native keyboard and assistive-technology behavior.

Password managers can mistake operational, financial, client, or task fields
for credentials. Apply both of the following attributes to noncredential forms
and their user-editable fields when autofill would be incorrect:

```html
autocomplete="off" data-protonpass-ignore="true"
```

Apply the attributes at form level and to each applicable `input`, `select`, or
`textarea`. Hidden CSRF fields do not require the attributes.

Do **not** apply `data-protonpass-ignore="true"` to login identifiers,
usernames, current passwords, new passwords, recovery codes, passkeys, or other
credential fields. Those fields must use the correct standard `autocomplete`
value such as `username`, `current-password`, `new-password`, or `one-time-code`
so credential managers and browser security features can work. In a mixed form,
apply the ignore attributes only to its noncredential fields.

### Noncredential form HTML example

```html
<form class="app-form" method="post" autocomplete="off" data-protonpass-ignore="true">
  <label for="client-name">Client Name</label>
  <span class="app-input-with-icon">
    <i class="fa-solid fa-building" aria-hidden="true"></i>
    <input
      id="client-name"
      name="name"
      type="text"
      autocomplete="off"
      data-protonpass-ignore="true"
      required>
  </span>
  <div class="app-form-actions">
    <a class="app-button app-button-secondary" href="/">Cancel</a>
    <button class="app-button app-button-primary" type="submit">Add Client</button>
  </div>
</form>
```

### Credential form HTML example

```html
<form class="app-form" method="post">
  <label for="email">Email Address</label>
  <input id="email" name="email" type="email" autocomplete="username" required>
  <label for="password">Password</label>
  <input
    id="password"
    name="password"
    type="password"
    autocomplete="current-password"
    required>
</form>
```

### Form CSS example

```css
.app-form {
  display: grid;
  gap: var(--space-sm);
}

.app-form label {
  color: var(--soft-white);
  font-size: 0.86rem;
  font-weight: var(--font-weight-medium);
}

.app-input-with-icon {
  position: relative;
  display: block;
}

.app-input-with-icon > i {
  position: absolute;
  top: 50%;
  left: 0.85rem;
  color: var(--slate-grey);
  transform: translateY(-50%);
  pointer-events: none;
}

.app-input-with-icon > input {
  padding-left: 2.65rem;
}
```

[Back to top](#web-application-style-guide)

## Authentication and verification codes

Authentication pages are focused, centered, and free of authenticated
navigation. Display the wordmark above a single credential panel without
promotional copy between the logo and the form.

Ask for a time-based one-time password only after the primary identifier and
password have been accepted. Render six visually separate circular fields while
supporting keyboard progression, deletion, full-code paste, and
`autocomplete="one-time-code"`. The fields must remain usable without motion.

```html
<fieldset class="app-totp-fieldset">
  <legend>
    <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
    Authenticator Code
  </legend>
  <div class="app-totp-bubbles" data-totp-input>
    <input
      inputmode="numeric"
      pattern="[0-9]*"
      maxlength="1"
      autocomplete="one-time-code"
      aria-label="Digit 1">
    <input
      inputmode="numeric"
      pattern="[0-9]*"
      maxlength="1"
      aria-label="Digit 2">
    <input
      inputmode="numeric"
      pattern="[0-9]*"
      maxlength="1"
      aria-label="Digit 3">
    <input
      inputmode="numeric"
      pattern="[0-9]*"
      maxlength="1"
      aria-label="Digit 4">
    <input
      inputmode="numeric"
      pattern="[0-9]*"
      maxlength="1"
      aria-label="Digit 5">
    <input
      inputmode="numeric"
      pattern="[0-9]*"
      maxlength="1"
      aria-label="Digit 6">
  </div>
</fieldset>
```

Any script that coordinates the individual cells belongs in a linked
application JavaScript file. The server must validate the complete code as one
credential regardless of its visual presentation.

[Back to top](#web-application-style-guide)

## Notifications and status

Use flash notifications for the result of a user action and status pills for a
compact persistent state. Both reuse the four alert tokens. Status labels use
plain language such as “Enabled,” “Expires Soon,” “Running,” or “Disabled.”

Suggested semantic mapping:

| Meaning | Token |
| --- | --- |
| Enabled, running, successful, administrator-origin | `--alert-success` |
| Neutral, user-origin, informational | `--alert-info` |
| Expiring, public-origin, reconnecting | `--alert-warning` |
| Disabled, stopped, failed, destructive | `--alert-error` |
| System-origin audit event | `--slate-grey` |

```html
<div class="app-flash app-flash-success" role="status">
  <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
  Client added successfully.
</div>
<span class="app-status-pill app-status-running">
  <i class="fa-solid fa-circle" aria-hidden="true"></i>
  Running
</span>
```

Derive the background and border from the same state token. Use soft white for
badge text when a brighter state color would reduce readability.

[Back to top](#web-application-style-guide)

## Active work and task trees

An active-work panel makes the current context, elapsed value, and stop action
immediately visible. Use tabular numerals for updating durations. A pulsing live
dot is optional and must stop under reduced motion.

Task trees use indentation and a subtle border to show hierarchy. Repeated task
actions belong at the end of each row. Use a native `details` element for a
small rename or edit popover when it provides a safe no-JavaScript fallback.

```html
<section class="panel panel-dark app-active-work" aria-labelledby="active-title">
  <span class="app-running-dot" aria-hidden="true"></span>
  <div>
    <p class="app-eyebrow">ACTIVE TIMER</p>
    <strong id="active-title">Client · Contract · Task</strong>
  </div>
  <output class="app-elapsed" aria-label="Elapsed time">01:24:36</output>
  <button class="app-button app-button-stop" type="button">Stop Timer</button>
</section>

<div class="app-task-tree">
  <div class="app-task-row">
    <span><i class="fa-solid fa-list-check" aria-hidden="true"></i> Parent Task</span>
    <button class="app-icon-button" type="button" aria-label="Rename parent task">...</button>
  </div>
  <div class="app-subtask-list">
    <div class="app-task-row">Subtask</div>
  </div>
</div>
```

[Back to top](#web-application-style-guide)

## Data tables, filters, and pagination

Use tables for genuinely tabular records. Place wide tables inside a labeled
horizontal scroll container; do not compress columns until values become
unreadable. Headers use the primary accent, compact uppercase labels, and
explicit scope attributes.

Alignment is semantic, not positional: descriptive columns align left and
numeric values align right. Apply a class such as `app-table-numeric` to the
appropriate cells or scope a positional rule to a specific table type. Do not
use `!important` to override a generic table rule.

Filters appear before the table and collapse to one column on narrow screens.
Pagination reports the current range as text and uses real links or buttons for
available destinations. Disabled controls remain identifiable and are removed
from the keyboard sequence where appropriate.

```html
<form class="app-table-filters" autocomplete="off" data-protonpass-ignore="true">
  <label for="event-filter">Event Type</label>
  <select id="event-filter" name="event" autocomplete="off" data-protonpass-ignore="true">...</select>
  <button class="app-button app-button-secondary" type="submit">Apply Filters</button>
</form>

<div class="app-table-scroll" role="region" aria-label="Audit events" tabindex="0">
  <table class="app-data-table">
    <thead>
      <tr>
        <th scope="col">Timestamp</th>
        <th scope="col">Actor</th>
        <th scope="col">Action</th>
        <th scope="col" class="app-table-numeric">Duration</th>
      </tr>
    </thead>
    <tbody>...</tbody>
  </table>
</div>

<nav class="app-pagination" aria-label="Table pages">
  <span>Showing 1–25 of 68</span>
  <a class="app-button app-button-secondary" href="?page=2">Next</a>
</nav>
```

[Back to top](#web-application-style-guide)

## Dashboards and live reports

Dashboard summary cards prioritize a label, a current value, and supporting
context. Browser-based live reports may add summary totals, charts, legends,
and session tables while retaining the same panel and table foundations.

Live status must include a text label and `aria-live="polite"`. Use “Live,”
“Reconnecting,” or “Report Ended” rather than relying on a colored dot. New
records and timer changes should update without a page reload when the
application supports live synchronization; the last received values remain a
safe readable fallback when synchronization is unavailable.

Live report pages use a report-specific fixed header with the wordmark,
confidentiality marker, report type, and live status. They use a report-specific
fixed footer for company identity and confidentiality. Only the report content
between those elements scrolls. Do not reuse authenticated application
navigation on the client-facing report shell.

Chart series use the approved palette in this order:

1. Primary Accent
2. Muted Emerald
3. Elevated Hover
4. Muted Deep Accent
5. Cool Grey
6. Light Surface Accent
7. Pale Steel
8. Standard Hover

Each chart requires an accessible label and a text legend. Do not rely on color
alone to identify a series. SVG chart styling belongs in the linked stylesheet;
use chart-series classes rather than `fill` attributes in HTML.

```html
<p class="app-live-status" data-state="live" aria-live="polite">
  <span class="app-running-dot" aria-hidden="true"></span>
  <span>Live</span>
</p>
<svg class="app-chart" viewBox="0 0 200 200" role="img" aria-label="Time by task">
  <path class="app-chart-series-0" d="..."><title>Task A: 3 hours</title></path>
</svg>
<ul class="app-chart-legend">
  <li><span class="app-legend-swatch app-chart-series-0"></span> Task A · 3 hours</li>
</ul>
```

[Back to top](#web-application-style-guide)

## Empty, error, and sensitive-value states

Empty states explain why no records appear and, when authorized, provide one
clear next action. Error states identify the failure in plain language and
offer a safe recovery path without exposing internal details.

Sensitive one-time values, recovery material, and setup secrets use a bordered
monospace block with wrapping enabled. Label the value and explain whether it
can be viewed again. QR codes require a quiet light background for reliable
scanning and equivalent textual setup information.

```html
<section class="panel panel-dark app-empty-state">
  <i class="fa-solid fa-inbox" aria-hidden="true"></i>
  <h2>No Clients Yet</h2>
  <p>Add a client to begin organizing contract work.</p>
</section>

<div class="app-sensitive-value" aria-label="One-time recovery code">
  ABCD-EFGH-IJKL
</div>
```

[Back to top](#web-application-style-guide)

## Application footer

Authenticated application footers are compact. Use the blue uppercase
`CONFIDENTIAL` label as the left-side identity and optional build or version
metadata as secondary text on the right. Public client reports may use the full
company name plus the same confidentiality marker when report identity is
needed. Use a fixed-height column flex shell so the header and footer remain
visible. The main content region between them is the only vertical scroll
container, including on long pages. Apply the same behavior to live client web
reports, using the report-specific header and footer instead of authenticated
application navigation. Exported PDF documents use their separately approved
document layout.

```html
<footer class="app-footer">
  <strong class="app-footer-confidential">CONFIDENTIAL</strong>
  <span>Build 1.0.0</span>
</footer>
```

```css
.application-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
}

.app-viewport {
  min-height: 0;
  overflow-y: auto;
  flex: 1 1 auto;
}

.app-footer {
  flex: 0 0 auto;
}

.app-footer-confidential {
  color: var(--primary-accent);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.16em;
}
```

[Back to top](#web-application-style-guide)

## Responsive and accessibility requirements

- Preserve usable layouts at the general `400px`, `575px`, `640px`, `768px`,
  `1120px`, and `1721px` breakpoints only where the component needs them.
- Stack heading actions, form actions, active-work controls, report headers,
  and footers before they collide.
- Keep touch targets at least 44 by 44 CSS pixels for primary mobile controls.
- Preserve horizontal table scrolling rather than clipping data.
- Use `aria-current`, `aria-live`, field labels, table scopes, and accessible
  names as appropriate.
- Ensure status, chart, and audit-source meanings remain understandable without
  color.
- Keep essential navigation, forms, content, and server actions usable without
  JavaScript. Live updates and paste distribution may enhance the fallback.
- Stop nonessential animation and pulsing when reduced motion is requested.

[Back to top](#web-application-style-guide)

## Implementation boundaries

- Keep CSS in linked `.css` files. Do not use `<style>`, `style`, SVG
  presentation attributes, or dynamically written inline styles.
- Keep JavaScript in linked `.js` files. Do not use executable inline scripts
  or inline event-handler attributes.
- Use design tokens for colors and recurring values. Define a semantic token
  before repeating a derived surface, border, or shadow.
- Avoid `!important` for component overrides. The reduced-motion accessibility
  override in the general guide is the documented exception.
- Use native elements such as `details`, `dialog`, `button`, `output`, and
  semantic form controls before creating scripted equivalents.
- Keep application-specific dimensions in the consuming application when they
  do not change the approved visual or interaction pattern.
- Do not introduce a new brand color, breakpoint, logo treatment, or component
  family without review and an update to the relevant branding guide and live
  preview.

[Back to top](#web-application-style-guide)
