# Trident Group Solutions — official website

Source for **tridentgroupmt.com**. Public static website with two divisions: **Trident Rockscape Solutions** and **Trident Construction Solutions**.

## Current build

- 20 HTML pages plus a custom 404 page, robots.txt and sitemap.xml
- Shared graphite/limestone/gold responsive design
- Genuine Trident on-site video in the home and portfolio pages
- Dedicated service information, project examples and company/family story
- WhatsApp enquiry forms for private clients and professionals (+356 7999 0305)
- No analytics or advertising trackers currently installed
- No server-side form submissions or automatic document uploads: clients must press **Send** in WhatsApp and attach files themselves
- Project/client identities are not published

## Publishing — needs repository owner to finish in GitHub Settings

1. Visit **Settings > Pages** for this repository.
2. Under **Build and deployment**, set **Source: Deploy from a branch**.
3. Choose **main** and **/(root)**, then Save.
4. Under **Custom domain**, set `tridentgroupmt.com` (the repo already includes the matching `CNAME`).
5. At your DNS provider, configure A records for `@` pointing to all four GitHub Pages IP addresses:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
6. Configure the **www** CNAME to `curtaquilina1-png.github.io` (not the repository path).
7. Remove only conflicting domain-parking/redirect records for `@` or `www`. **Keep existing MX, SPF, DKIM and other email TXT records** unless deliberately changing the email provider.
8. After DNS resolves and GitHub provisions a certificate, enable **Enforce HTTPS**.
9. Test `https://tridentgroupmt.com` and `https://www.tridentgroupmt.com` on desktop and mobile.

GitHub documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Professional domain email (separate from GitHub hosting)

The domain is registered with Namecheap. If it uses Namecheap BasicDNS/PremiumDNS/FreeDNS, **free email forwarding** can be set in **Domain List > Manage > Advanced DNS > Mail Settings > Email Forwarding** and then **Domain > Redirect Email > Add Forwarder**. Example alias: `contact`, forwarded to an existing mailbox chosen by the owner. Do **not** publish the new contact address until delivery is verified.

Forwarding receives mail only; it does **not** allow sending as `contact@tridentgroupmt.com`. A true sending mailbox requires a separate email provider or outgoing-mail configuration. Check existing mail DNS before changing MX records.

Namecheap documentation: https://www.namecheap.com/support/knowledgebase/article.aspx/308/2214/how-to-set-up-free-email-forwarding/

## Outstanding content checks before public promotion

- Upload approved, authentic Trident project photos and both original brand logos; none are stored in this repository yet. The site currently displays its genuine project video.
- Review legal/privacy wording, founder history, exact offered services and any licence or insurance claims before relying on them as formal disclosures.
- Confirm the displayed WhatsApp number and test an enquiry on a phone.
- Verify the domain/HTTPS configuration and live public website before distributing the link.

## Development

Run `python3 -m http.server 4173` for local preview. Run `npm test` for the source tests. To regenerate HTML from the editable content source, run `node scripts/generate-pages.mjs`.

The page generator and generated HTML should be committed together when changing copy.

## Audit

On 12 Nov 2026, all 20 HTML pages were fetched and 330 local asset/link references were checked by the website assistant with no missing target found. This is a **source-link audit**, not a live browser or GitHub Pages deployment test.
