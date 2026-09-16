# Web Application

[Back to README](../README.md) ·
[Sample application](../web-application/index.html) ·
[Shared Web Components](web-components.md) ·
[Components preview](../web/components/index.html)

Use this page only for the Grayhaven Systems LLC web-application shell:
solid navigation, breadcrumbs, fixed full-height layout, middle-viewport
scrolling, footer, and application breakpoints. Build page content from the
[shared component reference](web-components.md); do not redefine buttons,
forms, panels, tables, status, or other reusable pieces here.

Use the shared [vertical component composition](web-components.md#vertical-component-composition)
for page sections and content inside panels. The sample application's content
arrangement is illustrative; retain the component structures and spacing rules
when assembling a different page.

## Asset order

```html
<link rel="stylesheet" href="fonts.css">
<link rel="stylesheet" href="fontawesome.min.css">
<link rel="stylesheet" href="shared-components.css">
<link rel="stylesheet" href="web-application.css">
<script src="shared-components.js" defer></script>
<script src="section-navigation.js" defer></script>
```

- Shared component CSS and behavior:
  [`web/shared-components.css`](../web/shared-components.css) and
  [`web/shared-components.js`](../web/shared-components.js)
- Application shell CSS:
  [`web-application/web-application.css`](../web-application/web-application.css)
- Optional active-section enhancement:
  [`web/section-navigation.js`](../web/section-navigation.js)

## Application shell HTML

Replace the example destinations and page content. Keep the landmark and flex
hierarchy unchanged: `app-body` → header → scrolling `app-viewport` → footer.

```html
<body
  class="app-body"
  data-section-default="overview"
  data-section-scroll-root=".app-viewport"
>
  <header class="app-header">
    <div class="app-header-inner">
      <a
        class="brand"
        href="/"
        aria-label="Grayhaven Systems LLC application home"
      >
        <img src="grayhaven-logo-wordmark-dark.svg" alt="Grayhaven Systems LLC">
        <span class="brand-product">Application Name</span>
      </a>

      <nav
        class="app-nav desktop-nav"
        data-section-nav
        aria-label="Application navigation"
      >
        <a href="#overview">
          <i class="fa-solid fa-house" aria-hidden="true"></i>Overview
        </a>
        <a href="#records">
          <i class="fa-solid fa-table" aria-hidden="true"></i>Records
        </a>
        <form action="/action" method="post">
          <button class="nav-button" type="submit">
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>Action
          </button>
        </form>
      </nav>

      <details class="mobile-nav" data-mobile-nav>
        <summary class="mobile-nav-toggle" aria-label="Application navigation menu">
          <i class="fa-solid fa-bars" aria-hidden="true"></i>
        </summary>
        <nav
          class="mobile-nav-links"
          data-section-nav
          aria-label="Application mobile navigation"
        >
          <a href="#overview">
            <i class="fa-solid fa-house" aria-hidden="true"></i>Overview
          </a>
          <a href="#records">
            <i class="fa-solid fa-table" aria-hidden="true"></i>Records
          </a>
          <form action="/action" method="post">
            <button class="nav-button" type="submit">
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>Action
            </button>
          </form>
        </nav>
      </details>
    </div>

    <nav class="breadcrumbs app-breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><a class="breadcrumb-label" href="/">Example</a></li>
        <li aria-current="page">
          <span class="breadcrumb-label">Overview</span>
        </li>
      </ol>
    </nav>
  </header>

  <main class="app-viewport">
    <div class="page-shell">
      <section id="overview" aria-labelledby="overview-title">
        <h1 id="overview-title">Overview</h1>
        <!-- Compose approved shared components here. -->
      </section>
      <section id="records" aria-labelledby="records-title">
        <h2 id="records-title">Records</h2>
        <!-- Compose approved shared components here. -->
      </section>
    </div>
  </main>

  <footer class="app-footer">
    <div class="app-footer-inner">
      <strong class="app-footer-label">EXAMPLE</strong>
      <span>Build 1.0.0</span>
    </div>
  </footer>
</body>
```

Desktop and mobile navigation contain the same destinations and icons. The
native `details` menu is the single mobile behavior. The desktop behavior is
one horizontal link row. Breadcrumbs remain inside the header below the main
navigation. The footer is a direct flex child of `app-body`, never a child of
the scrolling viewport.

## Application shell CSS

Copy the complete shell source. Component and preview-only selectors do not
belong in this file.

```css
/* Grayhaven Systems LLC web-application shell. */

/* Reusable components are defined only in ../web/shared-components.css. */

/* stylelint-disable no-descending-specificity -- grouped shell rules. */

/* stylelint-disable declaration-block-no-duplicate-properties -- fallback. */

:root {
  --container-padding: 1rem;
}

html {
  min-width: 0;
  height: 100%;
  overflow: hidden;
  overflow: clip;
}

body {
  min-height: 100vh;
  min-height: 100dvh;
  margin: 0;
  color: var(--cool-grey);
  background:
    radial-gradient(
      circle at 50% 12%,
      color-mix(in srgb, var(--primary-accent) 14%, transparent),
      transparent 34rem
    ),
    linear-gradient(
      145deg,
      var(--deep-graphite),
      var(--background-mid) 48%,
      var(--background-end)
    );
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: var(--font-primary);
  font-size: 15px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

.app-body {
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  overflow: hidden;
  overflow: clip;
}

h1 {
  margin-bottom: 0.55rem;
  font-size: 2.5rem;
  letter-spacing: -0.025em;
}

h2 {
  margin-bottom: 0.35rem;
  font-size: 1.25rem;
}

.app-header {
  position: sticky;
  top: 0;
  z-index: 5;
  flex: 0 0 auto;
  background: var(--navbar-bg);
  border-bottom: 1px solid var(--charcoal-border);
}

.app-header-inner {
  display: flex;
  align-items: center;
  width: min(
    1680px,
    calc(100% - var(--container-padding) - var(--container-padding))
  );
  height: 76px;
  margin: auto;
}

.brand {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  min-width: 0;
}

.brand img {
  width: 194px;
  height: auto;
}

.brand-product {
  padding-left: 1.1rem;
  color: var(--cool-grey);
  border-left: 1px solid var(--charcoal-border);
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.03em;
}

.app-nav {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  margin-left: auto;
}

.app-nav a:not(:where(.button, .icon-button)),
.nav-button {
  color: var(--cool-grey);
  font-size: 0.9rem;
  font-weight: var(--font-weight-medium);
}

.app-nav a:not(:where(.button, .icon-button)):hover,
.app-nav a:not(:where(.button, .icon-button)):focus-visible,
.app-nav a:not(:where(.button, .icon-button))[aria-current],
.app-nav a:not(:where(.button, .icon-button)).is-active,
.nav-button:hover,
.nav-button:focus-visible {
  color: var(--primary-accent);
}

.app-nav a:not(:where(.button, .icon-button)),
.mobile-nav-links a:not(:where(.button, .icon-button)),
.nav-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.app-nav form,
.mobile-nav-links form {
  margin: 0;
}

.nav-button {
  padding: 0;
  background: none;
  border: 0;
}

.desktop-nav {
  display: none;
}

.mobile-nav {
  position: relative;
  display: block;
  flex: 0 0 auto;
  margin-left: auto;
}

.mobile-nav > summary {
  list-style: none;
}

.mobile-nav > summary::-webkit-details-marker {
  display: none;
}

.mobile-nav-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  color: var(--soft-white);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
  cursor: pointer;
}

.mobile-nav-toggle:focus-visible {
  outline: 2px solid var(--primary-accent);
  outline-offset: 3px;
}

.mobile-nav[open] .mobile-nav-toggle {
  color: var(--primary-accent);
  border-color: var(--primary-accent);
}

.mobile-nav-links {
  position: absolute;
  top: calc(100% + 0.65rem);
  right: 0;
  z-index: 20;
  display: grid;
  min-width: 220px;
  padding: 0.55rem;
  background: var(--navbar-bg);
  border: 1px solid var(--charcoal-border);
  border-radius: var(--border-radius);
  box-shadow: var(--panel-shadow);
}

.mobile-nav-links a:not(:where(.button, .icon-button)),
.mobile-nav-links .nav-button {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  width: 100%;
  min-height: 44px;
  padding: 0.65rem 0.75rem;
  color: var(--cool-grey);
  text-align: left;
  border-radius: var(--border-radius-sm);
}

.mobile-nav-links a:not(:where(.button, .icon-button)):hover,
.mobile-nav-links a:not(:where(.button, .icon-button)):focus-visible,
.mobile-nav-links a:not(:where(.button, .icon-button))[aria-current],
.mobile-nav-links a:not(:where(.button, .icon-button)).is-active,
.mobile-nav-links .nav-button:hover,
.mobile-nav-links .nav-button:focus-visible {
  color: var(--primary-accent);
  background: color-mix(in srgb, var(--primary-accent) 9%, transparent);
}

.app-breadcrumbs {
  width: min(
    1680px,
    calc(100% - var(--container-padding) - var(--container-padding))
  );
  margin: 0 auto;
  padding: 0.55rem 0 0.7rem;
}

.app-viewport {
  min-height: 0;
  overflow-y: auto;
  flex: 1 1 auto;
}

.page-shell {
  width: min(
    1680px,
    calc(100% - var(--container-padding) - var(--container-padding))
  );
  margin: 0 auto;
  padding: 3.3rem 0 5rem;
}

.app-footer {
  flex: 0 0 auto;
  color: var(--cool-grey);
  border-top: 1px solid
    color-mix(in srgb, var(--charcoal-border) 60%, transparent);
  font-size: 0.78rem;
  white-space: nowrap;
}

.app-footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  width: min(
    1680px,
    calc(100% - var(--container-padding) - var(--container-padding))
  );
  margin: 0 auto;
  padding: 1.2rem 0 2.5rem;
}

.app-footer-label {
  color: var(--primary-accent);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.16em;
}

@media (width >=640px) {
  :root {
    --container-padding: 2rem;
  }
}

@media (width <768px) {
  h1 {
    font-size: 2rem;
  }

  .app-header-inner {
    height: 68px;
  }

  .brand-product {
    padding-left: 0.75rem;
    font-size: 0.78rem;
  }

  .page-shell {
    padding: 2rem 0 3.5rem;
  }
}

@media (width <=575px) {
  .brand-product {
    display: none;
  }
}

@media (width <=400px) {
  :root {
    --container-padding: 0.8rem;
  }

  h1 {
    font-size: 1.75rem;
  }
}

@media (width >=768px) and (width <1120px) {
  .brand {
    gap: 0.75rem;
  }

  .brand-product {
    padding-left: 0.75rem;
    font-size: 0.78rem;
  }

  .app-nav {
    gap: 0.85rem;
  }

  .app-nav a:not(:where(.button, .icon-button)),
  .nav-button {
    font-size: 0.8rem;
  }
}

@media (width >=1120px) {
  :root {
    --container-padding: 2.5rem;
  }
}

@media (width >=1721px) {
  :root {
    --container-padding: 4rem;
  }

  .desktop-nav {
    display: flex;
  }

  .mobile-nav {
    display: none;
  }

  .app-header-inner,
  .page-shell,
  .app-footer-inner {
    max-width: 1760px;
  }

  .page-shell {
    padding-top: 4rem;
  }
}
```

## Scrolling and footer acceptance

- `window.scrollY` remains zero during application navigation.
- `.app-viewport` is the only vertical scroll container.
- The header and footer remain visible at every scroll position.
- The footer bottom equals the visual viewport bottom.
- `.app-footer` draws a full-width top divider while `.app-footer-inner` keeps
  footer content aligned with the constrained application shell.
- Content may not escape behind the footer or create a second scrollbar.

## Navigation enhancement

Native anchors are the required fallback. The optional shared section script
adds active-link tracking for the nested `.app-viewport`, applies
`aria-current="location"`, closes the mobile menu after selection, and closes
that menu on Escape. Keep the body data attributes shown in the shell markup.

## Breakpoints

- `400px` and below: smallest container padding and heading size.
- `575px` and below: hide the optional product label.
- `640px` and above: tablet container padding.
- `768px` and above: normal content sizing; shared components own their own
  component breakpoints.
- `1120px` and above: wide application padding.
- `1721px` and above: horizontal desktop navigation; below it use the native
  mobile `details` menu.

Range media-query syntax is required. Do not create a second desktop or mobile
navigation behavior for an individual application.
