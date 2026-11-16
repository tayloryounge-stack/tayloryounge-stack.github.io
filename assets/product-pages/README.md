# Product landing pages

`/leanclub/` and `/mahjong-people/` share the locale/preview controller and responsive stylesheet here. Each page has its own brand tokens, copy, app metadata and screenshot assets.

- LeanClub: official Flutter colors from `lianbaoji/lianbaoji_flutter/lib/theme.dart`; feature claims from `lianbaoji/appstore/metadata.json`. Screenshots are faithful resized JPEG copies of `lianbaoji/appstore/screenshots/{locale}/01-today.png`, `02-plan.png`, and `04-workout.png`.
- Mahjong People: official Flutter colors from `mahjong_people/mahjong_people/lib/app/app_theme.dart`; feature claims from `mahjong_people/appstore/metadata.json`. Screenshots are faithful resized copies of `mahjong_people/appstore/screenshots/{locale}/04-session.jpg`, `01-overview.jpg`, and `02-records.jpg`.
- Real app icons use the existing `/assets/app-icons/` assets and source documentation.
- Languages: English, Simplified Chinese, Traditional Chinese, Japanese, Korean. Locale order: URL `lang` > saved product-page preference > browser preference > English. Screenshot records are examples, not user statistics.
- Support, privacy and terms link to the existing localized product documents. App Store IDs: LeanClub 6827574759; Mahjong People 6821504275.

Prepared 2026-11-16. No third-party analytics or external runtime dependencies added.
