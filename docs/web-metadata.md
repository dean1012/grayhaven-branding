# Web Metadata and Assets

[Back to Web Style Guide](../web/style-guide/style-guide.md)

This document defines the metadata patterns and supporting assets for websites
using Grayhaven Systems LLC branding. It is intended for human and AI-assisted
implementation. Page-specific facts such as URLs, descriptions, locations,
contact details, and availability must be verified for the site being built.

## Table of Contents

- [Document metadata](#document-metadata)
- [Social sharing metadata](#social-sharing-metadata)
- [Structured data](#structured-data)
- [Web assets](#web-assets)
- [Implementation checklist](#implementation-checklist)

## Document metadata

Every public page should have accurate values for its current content:

```html
<title>Grayhaven Systems LLC | Page-specific title</title>
<meta
  name="description"
  content="Accurate page-specific description.">
<link rel="canonical" href="https://example.invalid/">
<meta name="theme-color" content="#1C1F24">
```

Use one unique title and description per substantive page. Do not copy the
homepage description onto unrelated pages. Canonical URLs must identify the
actual public URL and must not point to an example or preview address.

[Back to top](#web-metadata-and-assets)

## Social sharing metadata

Use Open Graph metadata for link previews and provide the equivalent Twitter/X
card metadata. The same approved social preview image may be used for both:

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://example.invalid/">
<meta
  property="og:title"
  content="Grayhaven Systems LLC | Page-specific title">
<meta property="og:description" content="Accurate page-specific description.">
<meta property="og:site_name" content="Grayhaven Systems LLC">
<meta property="og:image" content="https://example.invalid/assets/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Grayhaven Systems LLC">

<meta name="twitter:card" content="summary_large_image">
<meta
  name="twitter:title"
  content="Grayhaven Systems LLC | Page-specific title">
<meta name="twitter:description" content="Accurate page-specific description.">
<meta name="twitter:image" content="https://example.invalid/assets/og-image.png">
<meta name="twitter:image:alt" content="Grayhaven Systems LLC">
```

Do not add a separate social logo or third-party tracking integration merely to
support previews. Keep the image, title, description, and alt text aligned.

[Back to top](#web-metadata-and-assets)

## Structured data

Use JSON-LD when it accurately describes the page. A company homepage may
identify the organization and relevant offerings; structured-data entries should
match the visible names and descriptions. Do not claim a tool, location, service
channel, or capability that the current property does not support.

The organization entry should generally include:

- `name` and `legalName`: `Grayhaven Systems LLC`
- `url` and a stable organization `@id`
- the approved wordmark URL for `logo`
- an accurate description and `sameAs` profiles, when applicable
- `knowsAbout` terms that are actually represented on the site

Each offering entry should use the schema type that accurately describes it, a
visible `name`, an accurate type or category, the organization as `provider`,
and a page-specific `description`. Include `areaServed` or
`availableChannel` only when the property actually describes those details.

Example shape:

```json
{
  "@type": "Service",
  "name": "Example offering",
  "serviceType": "Example offering category",
  "provider": { "@id": "https://example.invalid/#organization" },
  "description": "Accurate description matching the visible offering content."
}
```

[Back to top](#web-metadata-and-assets)

## Web assets

The approved web distribution assets are stored under [`web/assets`](../web/assets):

- Use the canonical dark-background wordmark from
  [Logo Usage](logo-usage.md) rather than duplicating it under `web/assets`.
- `og-image.png` — 1200 × 630 social preview image for Open Graph and Twitter/X
  cards
- `favicon.ico` — legacy multi-size favicon
- `favicon-16.png`, `favicon-32.png`, and `favicon-512.png` — PNG favicon sizes
- `apple-touch-icon.png` — 180 × 180 Apple touch icon

These files are the approved web distribution assets. Consuming sites should
copy or reference them locally according to their own layout and deployment
structure.

The current PNG and ICO files were generated from the approved SVG assets with
ImageMagick. Run these commands from the branding repository root:

```bash
# 1200x630 social preview image from the dark wordmark
magick -background "#1C1F24" svg:logo/svg/grayhaven-logo-wordmark-dark.svg \
  -resize 1100x -gravity center -extent 1200x630 web/assets/og-image.png

# 512x512 PNG favicon source
magick -background "#1C1F24" svg:logo/svg/grayhaven-logo-monogram.svg \
  -resize 400x400 -gravity center -extent 512x512 web/assets/favicon-512.png

# Apple touch icon
magick -background "#1C1F24" svg:logo/svg/grayhaven-logo-monogram.svg \
  -resize 140x140 -gravity center -extent 180x180 web/assets/apple-touch-icon.png

# Small PNG favicons
magick -background "#1C1F24" svg:logo/svg/grayhaven-logo-monogram.svg \
  -resize 24x24 -gravity center -extent 32x32 web/assets/favicon-32.png
magick -background "#1C1F24" svg:logo/svg/grayhaven-logo-monogram.svg \
  -resize 12x12 -gravity center -extent 16x16 web/assets/favicon-16.png

# Multi-size ICO for legacy compatibility
magick web/assets/favicon-32.png web/assets/favicon-16.png web/assets/favicon.ico
```

Review the generated images at their actual sizes before replacing the
approved files. Keep the dark background and padding consistent with the
current assets unless a new visual treatment is explicitly approved.

Use cache-busted references for mutable stylesheets, scripts, and other browser
resources as described in [Web Standards](web-standards.md). The image assets
themselves should be replaced deliberately when the approved artwork changes.

[Back to top](#web-metadata-and-assets)

## Implementation checklist

- [ ] Title and description match the current page.
- [ ] Canonical URL is the actual public URL.
- [ ] Open Graph and Twitter/X metadata use matching, accurate values.
- [ ] Social preview image dimensions and alt text are correct.
- [ ] Favicon and Apple touch icon links point to local assets.
- [ ] Structured data validates and matches visible content.
- [ ] Offering names and descriptions match the visible content and the
      property's current terminology.
- [ ] No analytics, tracking, or unnecessary third-party metadata scripts were
      added.

[Back to top](#web-metadata-and-assets)
