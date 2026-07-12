# Grayhaven Systems LLC Branding Guidance

This repository is the private brand source of truth for Grayhaven Systems LLC.
It covers websites, documentation, presentations, Discord/operational
notifications, terminal interfaces, logos, icons, and other branded work. It is
intended to be consumed by humans and AI tools.

Before changing any Grayhaven Systems LLC-branded asset or deliverable:

1. Read `docs/ai-context.md`.
2. Read `docs/brand-foundations.md` and `docs/logo-usage.md`.
3. Read the task-specific reference: web, Discord, terminal, or another
   relevant document.
4. Read the target repository’s own local instructions.
5. Inspect the closest existing asset or documented pattern in this repository
   before inventing a pattern.

Use this repository for brand and task-specific guidance. For website work,
`docs/web-standards.md` and `docs/web-components.md` provide the web-specific
rules. Use the target website repository for executable tooling, lint commands,
deployment workflow, and project-specific content.

For web work, the default expectations are minimal progressive JavaScript, a
safe no-JS fallback, semantic accessible HTML, token-driven CSS, local versioned
assets, and no analytics, tracking, or nonessential cookies.

Do not modify `README.md` merely to document a website implementation detail.
Put web standards in `docs/web-standards.md`, component guidance in
`docs/web-components.md`, and AI onboarding context in `docs/ai-context.md`.

## Git authorship

All commits must be signed with the configured Grayhaven Systems LLC signing
key:

```bash
git commit -S -m "<message>"
```

If GPG signing fails because the signing cache is cold, stop and ask the user
to run this command:

```bash
echo "test" | gpg --clearsign \
  --local-user D919B0102C4B7313845B25898CEEEE3C816C5619 > /dev/null
```

The agent must not run the cache-priming command. Wait for the user to confirm
that it succeeded before continuing work that requires signed commits.

Do not commit or push changes unless the user explicitly requests that work.
