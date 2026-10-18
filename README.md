# Singapore haze-mask sentiment

[Open the dashboard](https://chi-hoong.github.io/singapore-haze-sentiment/)

A public-source dashboard for Singapore’s October 2026 government N95 vending and mask-collection rollout. The reviewed snapshot contains **194 posts and comments from eight platforms**, including 104 social-media records. The 18 October refresh added 54 newly captured mentions after reviewing new feedback and earlier discussions. See [SEARCH_COVERAGE.md](SEARCH_COVERAGE.md) for sources, search depth and access limits.

Filter by feedback focus, channel, platform, posted date, evidence, sentiment or topic. A comparison separates **31 machine-specific mentions** from **163 wider-rollout mentions**. Each record has a scope explanation, source link and CSV export fields. The daily chart excludes 100 records without exact dates. Creator opinions, firsthand collections, firsthand observations and secondhand reports are distinguished.

This is a reviewed snapshot, not continuous social listening. Labels are AI-assisted; the sample is not representative. Public comments do not independently verify stock, outages or eligibility failures. Browser-local layout changes do not update the public data; data updates require a rebuilt deployment.

## Deployment

The GitHub Actions workflow deploys the committed `dist/` directory on pushes to `main`. It verifies build hashes, source/snapshot agreement, completed authoring status and absence of local task metadata before uploading. No API keys, platform credentials or server backend are required.

GitHub Pages settings must use **GitHub Actions** as the publishing source. The workflow uses the standard `github-pages` environment.

## Local preview

From this repository, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Then open http://127.0.0.1:4173/. Serve over HTTP instead of opening the HTML as a file.

## Updating the dashboard

Editable content lives in `src/content/dashboard/`; reviewed data and provenance are in `src/data.json`. Follow `AGENTS.md` for the managed Data app runtime boundary. Rebuild using the installed data-analytics plugin, then commit the updated source and complete `dist/` bundle together. The deployment workflow uses the already verified bundle and does not require the local authoring plugin on GitHub.

With `NODE_BIN` set to the Codex Node executable and `DATA_PLUGIN_ROOT` set to the installed data-analytics plugin directory, a public release build uses:

```sh
env -u CODEX_SESSION_ID -u CODEX_THREAD_ID "$NODE_BIN" "$DATA_PLUGIN_ROOT/scripts/data-app.mjs" build --project-dir "$PWD" --separate-data
python3 .github/scripts/check-static.py
```

If an existing local build contains task-routing metadata, preserve it outside the repository before the release rebuild. Do not hand-edit compiled runtime assets or hash manifests. Private authoring metadata, caches, environment files and offline backups are excluded from Git.

Validation covers aggregation, CSV quoting, unknown-date handling, source coverage, social-only filtering, zero-data daily views, source detail and responsive layout. The committed bundle’s snapshot and HTML checksums are checked again during deployment.
