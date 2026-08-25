# stampyx-landing

The public site at `stampyx.com`. Static, no framework at runtime, no authentication — the
panel lives at `/ui/` and is a separate app.

## Why Astro and not the SPA

The page has no application state and no login, so an Angular bundle would be pure overhead.
Astro ships zero JavaScript here beyond two small inline scripts (the theme toggle and its
pre-paint counterpart).

## Why two built locales instead of a toggle

The original mockup swapped languages at runtime with `display:none`, which flashes the wrong
language on first paint and gives search engines one page with both. Building `/` (pt-BR) and
`/en/` instead removes both problems and costs nothing — the content lives in one component
that takes a `lang` prop.

## The live panel is real data

`src/data/snapshot.json` holds the numbers the "reputation being built, live" section shows.
That section's whole argument is that it is the operator's real dashboard, not an
illustration, so the file is meant to be refreshed from the API on a schedule rather than
hand-edited. Until that job exists it holds a representative snapshot.

## Scripts

| script | does |
|---|---|
| `yarn dev` | dev server on 4203 |
| `yarn build` | static output into `dist/` |
| `yarn typecheck` | `astro check` |
| `yarn format` / `format:check` | Prettier |

Note `typecheck`, not `check`: `yarn check` is a Yarn 1 builtin and silently shadows a script
of that name, so the CI step would have verified the lockfile instead of the types.

## Docker

nginx serving `dist/`. Hashed `_astro/` assets are immutable for a year; the HTML that points
at them is `max-age=300`.
