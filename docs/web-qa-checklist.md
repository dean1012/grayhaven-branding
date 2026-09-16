# Web QA Checklist

[Back to Web Style Guide](../web/style-guide/style-guide.md)

This checklist provides recommended testing guidelines before deploying a
website or web application using Grayhaven Systems LLC branding. It is a
manual review aid for human or AI-assisted work; it is not a CI requirement.

## Table of Contents

- [Content and metadata](#content-and-metadata)
- [Responsive layout](#responsive-layout)
- [Accessibility](#accessibility)
- [JavaScript and fallback behavior](#javascript-and-fallback-behavior)
- [Motion and interaction](#motion-and-interaction)
- [Assets and privacy](#assets-and-privacy)
- [Final review](#final-review)

## Content and metadata

- [ ] Page titles, descriptions, canonical URLs, Open Graph fields, and
      structured data describe the current page.
- [ ] Visible company references use “Grayhaven Systems LLC” unless a
      deliberate shorthand is appropriate.
- [ ] Headings follow a logical hierarchy.
- [ ] Links and calls to action describe their destination or action.
- [ ] Sample or placeholder content has been replaced before deployment.

[Back to top](#web-qa-checklist)

## Responsive layout

- [ ] Check the narrowest supported mobile width.
- [ ] Check the compact mobile breakpoint and confirm the menu, logo, and
      contact control remain usable.
- [ ] Check tablet width and long navigation or button labels.
- [ ] Check wide desktop width and the transition immediately below the full
      desktop navigation breakpoint.
- [ ] Confirm site and application navigation switch at their separately
      documented breakpoints without changing the approved desktop or mobile
      implementation.
- [ ] Confirm no text, buttons, tags, cards, or footer links are clipped or
      forced into unintended horizontal scrolling.
- [ ] Confirm responsive tables become labeled stacked rows/cards with every
      caption, value, structured detail, empty state, and row action preserved.
- [ ] Confirm every shared component uses the approved dark-surface treatment.

[Back to top](#web-qa-checklist)

## Accessibility

- [ ] Navigate the page using only the keyboard.
- [ ] Confirm every focused editable text-like field, select, textarea, and
      compound field wrapper changes only its existing one-pixel border to
      Primary Accent.
- [ ] Confirm read-only fields retain their resting border and use the
      documented outline; file, choice, and switch controls retain their
      documented control-specific focus treatment.
- [ ] Confirm links, buttons, icon controls, and other non-field controls retain
      their existing visible `:focus-visible` treatment.
- [ ] Confirm icon-only controls have accessible names.
- [ ] Confirm informative images have meaningful alternative text and
      decorative images have empty alternative text.
- [ ] Confirm the active navigation state is communicated visually and, where
      available, with `aria-current`.
- [ ] Confirm menu state is communicated accurately to assistive technology.
- [ ] Confirm desktop navigation is horizontal and the mobile navigation uses
      the icon-only 44 by 44 CSS pixel native `details` control with an
      accessible name.
- [ ] Confirm color is not the only way information is conveyed.

[Back to top](#web-qa-checklist)

## JavaScript and fallback behavior

- [ ] With JavaScript enabled, confirm active-section highlighting and other
      convenience enhancements behave correctly.
- [ ] With JavaScript disabled, confirm navigation links, section anchors,
      content discovery, and contact links still work.
- [ ] Confirm opening or closing a mobile menu does not unexpectedly scroll the
      page or change the URL.
- [ ] Confirm essential content and actions do not depend exclusively on
      JavaScript.

[Back to top](#web-qa-checklist)

## Motion and interaction

- [ ] Confirm hover and keyboard focus treatments are visually distinct and
      restrained.
- [ ] Test with `prefers-reduced-motion: reduce` enabled.
- [ ] Confirm transitions and smooth scrolling are reduced or disabled when
      requested.
- [ ] Confirm links, buttons, menus, and dialogs have usable target sizes and
      do not overlap at narrow widths.

[Back to top](#web-qa-checklist)

## Assets and privacy

- [ ] Confirm all local fonts, icons, logos, stylesheets, and scripts load.
- [ ] Confirm mutable local resources have current cache-busting versions.
- [ ] Confirm no unintended CDN dependencies remain.
- [ ] Confirm no analytics, tracking pixels, fingerprinting, ad scripts, or
      nonessential cookies were introduced.
- [ ] Confirm external resources have a documented functional reason and do
      not send unnecessary visitor data.

[Back to top](#web-qa-checklist)

## Final review

- [ ] Compare every changed website or application component against the
      canonical Branding source; stop for approval before any deviation.
- [ ] Verify required HTML wrappers, classes, and hooks as well as shared CSS
      parity. If the contract lacks a needed structure or behavior, present
      the gap for approval before implementing a variation.
- [ ] Check mixed component order, hidden children, and nested panel content
      against the shared spacing rules at desktop and mobile widths. Keep
      approved preview appearance unchanged when correcting shared structure.
- [ ] Confirm category stylesheets do not redefine or visually override shared
      components.
- [ ] Review the page in a fresh browser session.
- [ ] Inspect the browser console for errors and failed resource requests.
- [ ] Validate the final HTML, CSS, and JavaScript using the consuming
      project's configured tools.
- [ ] Recheck the published result after deployment, including metadata cards
      where applicable.

[Back to top](#web-qa-checklist)
