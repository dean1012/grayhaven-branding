# Web Standards

[Back to Web Style Guide](../web/style-guide/style-guide.md)

This document defines the implementation standards for Grayhaven Systems LLC
websites, previews, and web-based interfaces. It is intended to be useful to
both human designers/developers and AI tools making changes to this repository
or to a Grayhaven Systems LLC web project. It does not prescribe one specific
website repository or deployment system.

## Table of Contents

- [Source of truth](#source-of-truth)
- [Design tokens](#design-tokens)
- [HTML standards](#html-standards)
- [CSS standards](#css-standards)
- [JavaScript standards](#javascript-standards)
- [Privacy defaults](#privacy-defaults)
- [Responsive breakpoints](#responsive-breakpoints)
- [Assets and cache busting](#assets-and-cache-busting)
- [Metadata and structured data](#metadata-and-structured-data)
- [Manual QA](#manual-qa)
- [AI implementation guidance](#ai-implementation-guidance)

## Source of truth

This repository is the source of truth for the visual language and component
behavior. The branding preview demonstrates those rules without copying
application-specific content.

Use the existing design tokens and component names before introducing a new
value or pattern. If a new pattern is genuinely needed, update this document
and the component reference at the same time.

[Back to top](#web-standards)

## Design tokens

Use the following token families:

- Core colors: `--deep-graphite`, `--gunmetal`, `--slate-grey`, `--soft-white`,
  `--cool-grey`, `--primary-accent`, `--standard-hover`, `--elevated-hover`,
  `--light-surface-accent`, `--pale-steel`, `--muted-deep-accent`,
  `--charcoal-border`, `--dark-logo-charcoal`, and `--muted-emerald`.
- Alerts: `--alert-info`, `--alert-success`, `--alert-warning`, and
  `--alert-error`.
- Typography: `--font-primary` and the 300–800 font-weight tokens.
- Spacing: `--space-xs` through `--space-3xl`.
- Components: border radii, transitions, navbar, link buttons, panels, and
  container tokens.

Do not introduce pure black, neon colors, unbounded glow effects, or unrelated
blue palettes. Gradients should provide quiet dark-aluminum depth rather than
serve as decoration.

[Back to top](#web-standards)

## HTML standards

- Use semantic landmarks: `header`, `nav`, `main`, `section`, `article`, and
  `footer` where appropriate.
- Maintain a logical heading hierarchy. Do not choose headings for visual size
  alone.
- Use links for navigation and buttons for actions.
- Give meaningful alternative text to informative images. Mark decorative
  images with empty alt text.
- Icon-only controls require an accessible name with `aria-label`.
- Use `aria-current` for the active navigation location when it is known.
- Compact navigation uses a native `details` element with an icon-only
  `summary` control. Give the summary an accessible name and let the native
  open state communicate expansion without a duplicated `aria-expanded`
  value.
- External links opened in a new tab require
  `target="_blank" rel="noopener noreferrer"`.
- Use HTML entities such as `&amp;` for visible ampersands in markup.
- Keep metadata accurate: title, description, canonical URL, Open Graph fields,
  and structured data must describe the current site.

[Back to top](#web-standards)

## CSS standards

- Use mobile-first CSS and the shared design tokens.
- Keep component styles grouped by component and use clear, predictable class
  names.
- Prefer one shared stylesheet over duplicated inline style blocks.
- Keep all styling in linked stylesheets. Do not use `<style>` elements,
  `style` attributes, or SVG presentation attributes in HTML.
- Avoid unnecessary specificity, IDs for styling, and `!important`.
- Use `:focus-visible` with a visible accent-colored outline.
- Keep hover states restrained and provide equivalent keyboard focus states.
- Use modern color syntax consistently with the production stylesheet.
- Keep responsive behavior explicit at the documented breakpoints.
- Include a `prefers-reduced-motion: reduce` fallback for transitions,
  animations, and smooth scrolling.

[Back to top](#web-standards)

## JavaScript standards

JavaScript should be minimal, readable, and progressive. It is an enhancement,
not a prerequisite for understanding or using the site.

- Do not add JavaScript for behavior that native HTML and CSS already provide.
- Keep DOM queries and event handlers local to the behavior they enhance.
- Avoid global state, inline event attributes, and unrelated side effects.
- Load JavaScript from linked files. Do not place executable `<script>` content
  in HTML documents.
- Do not make scrolling, navigation, content discovery, or contact access
  depend exclusively on JavaScript.
- If JavaScript is unavailable, the site must retain a safe, usable fallback:
  navigation links still work, content remains visible, and forms or contact
  links retain their native behavior.
- Use JavaScript for convenience enhancements such as active-section
  highlighting or closing a mobile menu after navigation.

For section navigation, CSS `:target` behavior should provide the fallback
active state where supported. JavaScript may enhance that state while scrolling,
set `aria-current="location"`, and close the mobile menu after a link is
selected. None of these enhancements may be required to reach the content.

[Back to top](#web-standards)

## Privacy defaults

Grayhaven Systems LLC websites should not include analytics, tracking pixels,
ad scripts,
fingerprinting, or nonessential cookies. Do not add third-party scripts merely
for measurement, personalization, or social widgets.

Prefer local, versioned assets for fonts, icons, and stylesheets. Any third-party
resource must have a clear functional reason, be documented, and avoid sending
unnecessary visitor data.

[Back to top](#web-standards)

## Responsive breakpoints

Use the documented breakpoint policy for the consuming site or application only
when the layout needs it:

| Breakpoint | Purpose |
| --- | --- |
| `400px` and below | Smallest tag and link adjustments |
| `575px` and below | Compact mobile header and icon-only action control |
| `640px` and above | Tablet container padding |
| `768px` and above | Desktop grids and footer layout |
| `900px` and above | Two-column footer link grid |
| `1120px` and above | Wide desktop spacing and three-column footer grid |
| `1721px` and above | Wide-screen horizontal desktop navigation |

Navigation breakpoints are layout policy, not part of the navigation component
markup. General sites use the `1721px` threshold shown above. Applications may
use a separate documented threshold chosen from their approved responsive
layout based on navigation density; the Branding application preview uses
`1120px`. Both contexts use the same horizontal desktop navigation and native
`details` mobile implementation.

Use range media-query syntax at exclusive breakpoint boundaries. For example,
the application preview switches to mobile navigation with
`@media (width < 1120px)` and returns to desktop navigation at `1120px` and
above. Do not express that boundary as `max-width: 1119px`; fractional CSS
pixels and display scaling can otherwise leave a narrow boundary where the
wrong navigation remains visible.

Breakpoint differences must not create additional navigation behaviors or
visual variants. Site and application navigation retain the approved opaque
public-site presentation on both sides of their respective breakpoints. Their
destinations and optional product labels may differ, but the solid surface,
interaction model, and visual treatment do not.

Test narrow mobile, tablet, wide desktop, and the transition immediately below
the full desktop navigation breakpoint. Do not assume that a layout that works
at one desktop width works at all desktop widths.

[Back to top](#web-standards)

## Assets and cache busting

- Prefer the approved SVG logos for web use.
- Use local Inter font files and the approved local Font Awesome build for
  production-style previews.
- Record bundled third-party asset provenance in
  [Asset Provenance](asset-provenance.md).
- When an external CDN resource is needed, download and reference a local copy
  where practical and legally permitted. Record the upstream name, version,
  source, and license alongside the asset or in the project documentation.
- Use a version query string such as `?v=20260712` on references to mutable
  local stylesheets, scripts, and other browser-cached resources. Change the
  version whenever the referenced resource changes.
- Do not rely on a cache-busting query string as a substitute for immutable
  filenames when a build system already provides content hashes.
- Keep asset paths relative and valid when the preview is opened locally.

[Back to top](#web-standards)

## Metadata and structured data

Use [Web Metadata and Assets](web-metadata.md) for the required title,
description, canonical, Open Graph, Twitter/X, favicon, social-preview, and
JSON-LD patterns. Metadata must describe the current page and must remain
consistent with visible content. Do not add structured-data claims merely to
improve search visibility.

[Back to top](#web-standards)

## Manual QA

Use the [Web QA Checklist](web-qa-checklist.md) for recommended manual review
before deploying a website with Grayhaven Systems LLC branding. It covers
responsive layout, accessibility, JavaScript fallback behavior, reduced motion,
asset loading, privacy, and final metadata checks. This is guidance for human
and AI-assisted work, not a CI requirement.

[Back to top](#web-standards)

## AI implementation guidance

When an AI tool edits a Grayhaven Systems LLC web project, it should first
inspect the existing tokens, components, breakpoints, and project instructions.
It should
make the smallest coherent change, preserve no-JavaScript behavior, avoid
inventing brand values, and report any intentional deviation from this guide.

[Back to top](#web-standards)
