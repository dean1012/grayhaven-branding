# AI Context Handoff

This document is a compact onboarding brief for a new Codex, coding agent, or
other AI-assisted context. Read it before making any branded Grayhaven Systems
LLC asset, document, interface, notification, or website change.

## Repository roles

### `grayhaven-branding`

The private source of truth for Grayhaven Systems LLC’s visual identity and branded
communication. Use it for:

- Brand foundations, colors, typography, tone, and logo usage
- Web standards and reusable web component patterns
- Discord notifications and operational messaging
- Terminal/tmux presentation guidance
- Logo, icon, and other reusable visual assets

### A Grayhaven Systems LLC website or web application

Use this repository as the Grayhaven Systems LLC brand contract. The consuming
project’s local instructions provide only technical context. Adapt content and
information architecture to the project while preserving the brand tokens,
interaction philosophy, accessibility, privacy, and no-JavaScript fallback
requirements defined here.

Executable validation commands, deployment workflow, and project-specific
content belong in the consuming project repository, not here.

### Other branded work

Do not apply web-specific rules to every task. First identify the output type:

- Websites and web previews: read `docs/web-standards.md` and
  `docs/web-components.md`.
- Logos and visual assets: read `docs/logo-usage.md` and inspect the approved
  source assets.
- Discord guidance: read `docs/discord.md`.
- Terminal and tmux interfaces: read `docs/operator-tmux.md`.
- General branded documents or new media: read `docs/brand-foundations.md`,
  then select the closest existing asset and document the adaptation.

## First-pass reading order

1. Read this document and the root `AGENTS.md`.
2. Read [Brand Foundations](brand-foundations.md) and [Logo Usage](logo-usage.md).
3. Read the task-specific reference listed above.
4. Inspect the target project’s local instructions.
5. Inspect the closest existing asset or implementation before creating a new variation.

## Non-negotiable defaults

- Prefer the existing brand vocabulary, asset treatments, and task-specific patterns.
- Keep JavaScript minimal and progressive.
- Preserve usable navigation and content when JavaScript is unavailable.
- Do not add analytics, tracking, fingerprinting, ad scripts, or nonessential
  cookies.
- Use semantic HTML and visible keyboard focus.
- Prefer local, versioned fonts, icons, and other mutable assets.
- Avoid pure black, neon/cyberpunk styling, excessive glow, unrelated visual
  systems, and unapproved logo modifications.
- Keep public-facing claims accurate and consistent with the current site.

## Decision rule for ambiguity

When the branding guide and an existing website differ, identify whether the
website contains an intentional project-specific exception. Preserve the
production behavior when it is clearly intentional; otherwise prefer the
branding guide and document the deviation.

Do not silently invent a new color, breakpoint, logo treatment, interaction
pattern, privacy dependency, or content voice. Surface the choice for review.

## When guidance is insufficient

If these branding guidelines do not adequately cover the requested work, stop
and consult the user before proceeding. Explain the gap and present the
available options so the decision can be made together.

After the user approves a new direction, update the appropriate branding
guidance first. Only then continue with the requested branded work using the
approved addition.

## Expected handoff

When finishing work, report:

- Which branding rules were applied
- Which production patterns were reused
- Any intentional deviations and why
- Which files changed
- Which repository-specific validation was run
- Whether commits, pushes, or deployment were performed
