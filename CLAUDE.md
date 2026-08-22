# Young Konsultering website

Static site (no build step): `index.html`, `styles.css`, `script.js`, `info/` (content hub), `assets/`.

## Hard rule: no hyphens, anywhere

Never use a hyphen `-`, en dash `–`, or em dash `—` anywhere on this site: not in visible text (headings, body copy, meta titles/descriptions, button labels, alt text, aria-labels), and not in file names or URL slugs.

- Compound words that would normally use a hyphen must be rewritten instead (e.g. "in- och utgående moms" → "ingående och utgående moms", "EU-länder" → "länder inom EU").
- Sentences that would use an em dash for a parenthetical must be rewritten with a comma, period, or colon instead of just swapping the punctuation mark.
- New content pages must use underscores or no separator in the filename (e.g. `budget_i_excel.html`), never hyphens.

Before finishing any edit that touches visible copy or adds a file, grep the changed files for `-`, `–`, and `—` to confirm none remain (excluding non-visible code like CSS class names, `href`/`src` values pointing to existing asset paths, and markup attributes).
