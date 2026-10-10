# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static site for www.mastersbasketballtournaments.com, built with Eleventy 3 (ESM, Liquid templates in `.html` files) and Tailwind CSS 4, deployed to Netlify. Tournament data is not stored here — it is fetched at build time from the CMS API at `cms.mastersbasketballtournaments.com`.

## Commands

- `npm start` — clean `_site/` and run the Eleventy dev server (http://localhost:8080) alongside the Tailwind watcher, in parallel via `run-p`
- `npm run build` — production build into `_site/` (what Netlify runs): Eleventy, then minified Tailwind

There is no test suite or linter.

## Environment

`.env` (loaded via `dotenv`):

- `ELEVENTY_ENV` — `development` switches `site.url` to localhost and makes the API fetches try a local CMS first; `production` (set in `netlify.toml`) enables Google Analytics in the layout
- `API_TOKEN` — sent as the `Authorization` header to the CMS API

Keep `.env.example` in sync with the variable names in `.env`.

## Architecture

- **Data**: `src/_data/tournaments.js` and `seasons.js` are thin wrappers around `src/_lib/fetch-api.js`, which fetches `/api/<path>` with `@11ty/eleventy-fetch` (`duration: '0d'`, no caching). In development it tries `http://localhost:5176` first with a 5s timeout, then falls back to production. On total failure it returns `[]` so the build never breaks. `site.js` provides `site.url`, `title`, `environment` and `buildDateTime`.
- **CSS**: Tailwind is compiled by the Tailwind CLI, not Eleventy, from `src/_styles/app.css` to `_site/assets/css/app.css`. The brand colour scale (`brand-50`…`brand-700`) and Inter font are defined in its `@theme` block, and `@source` scans `src/**/*.html` and `*.svg` for classes. The Eleventy dev server watches the compiled CSS to reload.
- **Layout**: every page gets `layouts/default.html` via global data in `.eleventy.js`; it includes `header.html` and `footer.html`. Icons are inline SVGs under `_includes/icons/`, pulled in with `{% include 'icons/<name>.svg' %}`.
- **Pages**: `index.html` renders `_includes/results.html`, which groups tournaments by season (`tournaments | where: 'year', season`). `tournament-update.html` paginates over `tournaments` to generate one pre-filled update form per tournament at `/tournament-update/<slug>/`; `tournament-suggestion.html` is the blank equivalent. Both use `_includes/tournament-form.html`, a Netlify Form (`data-netlify="true"`, reCAPTCHA) posting to `/thank-you/`. The contact form in `footer.html` is another Netlify Form, with a honeypot. Netlify adds the reCAPTCHA widget into the `data-netlify-recaptcha` placeholder at deploy time, so it never appears on the local dev server.
- **Date picker**: pages with `datePicker: true` in front matter load Litepicker (copied from `node_modules` by a passthrough in `.eleventy.js`) and `src/assets/js/date-picker.js`, which attaches it to the `startEndDates` input.
- **Custom filters/shortcodes** (`.eleventy.js`): `where` (array filter by property), `dump` (console.log), `{% year %}`.
- **Deploys**: `netlify/functions/scheduled-deploy.js` is a Netlify scheduled function that POSTs to a build hook daily at 02:37 UTC so the site picks up CMS changes.
