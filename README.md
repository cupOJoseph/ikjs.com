# ikjs.com

A small, static portfolio of twenty public projects by Joseph Schiarizzi. No build step is required: open `index.html` locally or serve the repository root with any static file server.

## Editing

- Project cards and their links are in `index.html`.
- Colors, layout, and decorative art are in `styles.css`.
- Category filtering is in `script.js`.

The selection favors original public projects with a distinct idea, useful demonstration, or substantive implementation. It spans creative tools, civic data, games, and onchain systems. The repository links are the canonical project links; demo links are included only where a project provides one.

## GitHub Pages

Publish from the root of the `main` branch in the repository's **Settings → Pages**. Set the custom domain to `ikjs.com` there. `CNAME` documents the intended domain, but the GitHub Pages setting must also be configured.

At the DNS provider, point the apex (`@`) to GitHub Pages with these `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For `www`, add a `CNAME` to `cupojoseph.github.io`. GitHub Pages will redirect `www.ikjs.com` to the configured apex domain once DNS is correct. Remove any conflicting default or parked records, leave email records intact, and enable **Enforce HTTPS** after GitHub provisions the certificate.

See [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) for the current DNS guidance.
