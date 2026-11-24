# Denmark preview: pre-Live readiness notes (24 November 2026)

This is a source and CI handover note, **not** an authorization to publish, migrate, or replace a private OSIRIS map.

## Confirmed in the repository / deployment
- `src/app/api/cctv/denmark.ts` contains 119 curated Danish entries (119 unique IDs), all with public URLs and source labels. Twelve include a direct image URL; this is not a claim that all 119 have working live streams.
- Five entries are grouped under `Fugle og natur`: DOF ØrneTV (Saksfjed-Hyllekrog), UgleTV (Sønderjylland), Esrum Kloster, Gribskov and Smedager. Publisher pages may be seasonal or inactive. See `docs/denmark-nature-cameras.md`.
- The OSIRIS Denmark Vercel preview's deployment of 17 November 2026 was reported READY, with SSO protection enabled. This is deployment metadata, **not** a fresh end-to-end or all-feed playback test.
- The 17 November 2026 Denmark CCTV GitHub Actions run passed lint, tests, typecheck and production build. Earlier 'no jobs were run' notifications from a different repository/branch are not evidence that this later run failed.
- Duplicate publisher URLs are permissible when separate camera viewpoints share a publicly listed landing page; catalogue checks report them as warnings rather than as duplicate cameras.

## Deferred pending proof
- **Samsø:** A historic Ballen Havn webcam listed at https://www.webcamgalore.dk/webcam/Danmark/Ballen-Samsoe/6234.html is explicitly reported out of service on the listing. Do not count or label it as an active camera. Seek a working, publisher-confirmed public feed before adding it.
- **Kværkeby Fuglereservat:** The reserve describes eagle sightings, but no public, currently accessible eagle webcam page has been confirmed. Do not infer a webcam or disclose nest coordinates.
- **Tissø:** Osprey observations do not establish the existence of a publicly available webcam. Do not add an unverified feed or nest coordinates.
- **Private map:** The source repository and Vercel preview are not the same system as any separate private Sites camera map; counts and parity must be checked in that map before claiming data was imported.

## Pre-Live checklist
1. Confirm private deployment authentication and retain private access; no public launch without explicit approval.
2. Re-run a source-to-map comparison and check the actual loaded number of Danish entries in the target map.
3. Independently open sampled publisher pages and each direct-image feed. Record checked dates; distinguish stream, image, external page, season-ended, and unavailable.
4. Reverify Samsø and wildlife pages through their official publishers before adding records.
5. Confirm that automated image URL checks are informative, not proofs of uninterrupted playback.
6. Review the final Live deployment configuration, credentials, and domain with the owner; do not promote this preview automatically.

## Sources / provenance
- GitHub PR #6 and documentation for the 17 November 2026 nature-camera changes: https://github.com/morein1/osiris/pull/6
- GitHub Denmark CI passing run: https://github.com/morein1/osiris/actions/runs/44151080265
- Ballen Havn historical listing, marked out of service: https://www.webcamgalore.dk/webcam/Danmark/Ballen-Samsoe/6234.html
- Kværkeby reserve's own description: https://www.fuglereservat.dk/memberportal/frontpage/page/10966
- DOF Tissø bird-site description: https://www.dof.dk/oplev-fuglene/fuglesteder/sjaelland/tisso
