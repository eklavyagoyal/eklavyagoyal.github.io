# Deployment Checklist

## Pre-Deployment Setup

### 1. Install Dependencies

```bash
npm install
```

This installs:
- TailwindCSS v3.4+
- PostCSS and autoprefixer
- Tailwind Typography and Forms plugins

### 2. Configure Hugo

✅ Already configured in `hugo.toml`

Key settings:
- BaseURL: `https://eklavyagoyal.github.io/`
- Build optimization enabled
- Minification enabled
- Image processing optimized

### 3. Set Up GitHub Pages

1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. Custom domain (optional): Add your domain
4. Enforce HTTPS: ✅ Enabled

### 4. Configure GitHub Actions

✅ Already configured in `.github/workflows/deploy.yml`

The workflow:
- Triggers on push to `main` branch
- Installs Node.js dependencies
- Builds Hugo site with production settings
- Deploys to GitHub Pages
- Runs Lighthouse CI tests

## Content Preparation

### 1. Update Personal Information

Edit `hugo.toml`:
```toml
[params]
  author = 'Your Name'
  info = 'Your Title/Role'
  description = 'Your description'
  avatarurl = '/images/your-avatar.jpg'
```

### 2. Add Your Avatar Image

Replace or add:
- `static/images/eklavya.jpg` → Your photo (square, 400x400px recommended)

### 3. Configure Social Links

In `hugo.toml`:
```toml
[[params.social]]
  name = 'Github'
  url = 'https://github.com/yourusername/'
```

### 4. Optional: Enable Comments (Giscus)

1. Install Giscus app on your repo: https://github.com/apps/giscus
2. Visit https://giscus.app/ to generate config
3. Update `hugo.toml`:
```toml
[params.giscus]
  enabled = true
  repo = 'username/repo'
  repoId = 'R_xxx'
  category = 'General'
  categoryId = 'DIC_xxx'
```

### 5. Optional: Enable Analytics

**Plausible (recommended):**
```toml
[params.analytics.plausible]
  enabled = true
  domain = 'yourdomain.com'
```

**Google Analytics:**
```toml
[params.analytics]
  googleAnalytics = 'G-XXXXXXXXXX'
```

## Fonts Setup

The site uses Inter and IBM Plex Mono. You have two options:

### Option 1: Self-hosted (Recommended)

1. Download fonts:
   - Inter: https://rsms.me/inter/
   - IBM Plex Mono: https://github.com/IBM/plex

2. Convert to woff2 and place in `static/fonts/`

3. Create `static/css/fonts.css`:
```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-weight: 100 900;
  font-display: swap;
}

@font-face {
  font-family: 'IBM Plex Mono';
  src: url('/fonts/ibm-plex-mono-var.woff2') format('woff2');
  font-weight: 400 600;
  font-display: swap;
}
```

### Option 2: Google Fonts (Easier)

Add to `layouts/partials/head/meta.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## Favicon Setup

Generate favicons from your logo:

1. Visit https://realfavicongenerator.net/
2. Upload your logo (square, high-res)
3. Download the package
4. Place files in `static/`:
   - `favicon.svg`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

## Build and Test Locally

### Development Server

```bash
npm run dev
# or
hugo server -D
```

Visit: http://localhost:1313

### Production Build

```bash
npm run build:prod
```

This creates optimized output in `public/`

### Test Lighthouse Locally

```bash
npm install -g @lhci/cli
hugo --minify
lhci autorun --config=lighthouserc.json
```

## Deployment Steps

### Initial Deployment

1. Commit all changes:
```bash
git add .
git commit -m "Initial deployment of modernized site"
```

2. Push to GitHub:
```bash
git push origin main
```

3. GitHub Actions will automatically:
   - Build the site
   - Deploy to GitHub Pages
   - Run Lighthouse tests

4. Check Actions tab for build status

### Custom Domain Setup (Optional)

1. Add CNAME file in `static/`:
```
yourdomain.com
```

2. Configure DNS:
```
A     185.199.108.153
A     185.199.109.153
A     185.199.110.153
A     185.199.111.153
AAAA  2606:50c0:8000::153
AAAA  2606:50c0:8001::153
AAAA  2606:50c0:8002::153
AAAA  2606:50c0:8003::153
```

Or for subdomain:
```
CNAME yourusername.github.io
```

3. Enable "Enforce HTTPS" in repo settings (wait 24h for certificate)

## Post-Deployment Verification

### ✅ Checklist

- [ ] Site loads at https://yourusername.github.io
- [ ] Dark mode toggle works
- [ ] Mobile menu works
- [ ] All navigation links work
- [ ] Blog posts display correctly
- [ ] Teaching pages load
- [ ] Images load and are optimized
- [ ] Fonts load properly
- [ ] No console errors
- [ ] Lighthouse scores ≥90 in all categories
- [ ] RSS feed accessible
- [ ] Sitemap.xml generated
- [ ] Robots.txt accessible

### Test on Multiple Devices

- Desktop (Chrome, Firefox, Safari)
- Mobile (iOS Safari, Chrome)
- Tablet

## Performance Optimization

### Enable Caching

If using Cloudflare:

**Cache Rules:**
- HTML: 1 hour
- CSS/JS: 1 year (fingerprinted)
- Images: 1 year
- Fonts: 1 year

### CDN Setup (Optional)

Use Cloudflare for:
- Faster global delivery
- DDoS protection
- Analytics
- Image optimization

## Monitoring

### Set Up Uptime Monitoring

Use free services:
- UptimeRobot: https://uptimerobot.com/
- StatusCake: https://www.statuscake.com/

### Enable Analytics

- Plausible for privacy-friendly analytics
- Or Google Analytics for detailed insights

## Troubleshooting

### Build Fails

Check:
1. Node.js version ≥18
2. `npm ci` runs without errors
3. Hugo extended version installed
4. No syntax errors in templates

### Styles Don't Apply

1. Check TailwindCSS config paths
2. Ensure PostCSS processes correctly
3. Clear browser cache
4. Check browser console for errors

### Dark Mode Issues

1. Check localStorage is enabled
2. Verify inline script in `<head>` loads first
3. Check CSS classes are correct

### Lighthouse Score Low

**Performance:**
- Optimize images (use WebP)
- Minimize JavaScript
- Preload critical fonts
- Enable compression

**Accessibility:**
- Check color contrast
- Add alt text to images
- Ensure keyboard navigation
- Test with screen reader

**SEO:**
- Add meta descriptions
- Use semantic HTML
- Create sitemap
- Add structured data

## Maintenance

### Regular Updates

Monthly:
- Update Hugo: `hugo version`
- Update dependencies: `npm update`
- Check for security issues: `npm audit`

### Content Updates

1. Create new post:
```bash
hugo new posts/my-new-post.md
```

2. Edit content
3. Test locally
4. Commit and push

### Backup

Backup these regularly:
- `content/` directory
- `static/` directory
- `hugo.toml`
- Custom layouts

## Support

For issues:
1. Check Hugo documentation: https://gohugo.io/documentation/
2. TailwindCSS docs: https://tailwindcss.com/docs
3. GitHub Pages docs: https://docs.github.com/pages

---

**Last Updated**: October 2025  
**Hugo Version**: 0.121.0+  
**Node Version**: 18.0.0+

