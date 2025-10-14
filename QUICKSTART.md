# 🚀 Quick Start Guide

Get your modernized site up and running in 5 minutes!

## ⚡ Fast Track

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
open http://localhost:1313
```

That's it! Your site is running locally.

---

## 📋 Pre-Launch Checklist

### 1. Add Fonts (5 minutes)

**Option A: Google Fonts (Easiest)**

Add to `layouts/partials/head/meta.html` after line 1:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Option B: Self-Hosted (Better Performance)**

1. Download fonts:
   - Inter: https://rsms.me/inter/
   - IBM Plex Mono: https://github.com/IBM/plex/releases

2. Convert to woff2 (use https://transfonter.org/)

3. Place in `static/fonts/`

4. The site is already configured to use them!

### 2. Generate Favicons (2 minutes)

1. Visit https://realfavicongenerator.net/
2. Upload your logo (square, high-res PNG)
3. Download the package
4. Replace files in `static/`:
   - `favicon.svg`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

### 3. Update Personal Info (2 minutes)

Edit `hugo.toml`:
```toml
title = 'Your Name'

[params]
  author = 'Your Name'
  info = 'Your Title/Role'
  description = 'Your description'
```

### 4. Update Social Links (1 minute)

In `hugo.toml`, find `[[params.social]]` sections and update URLs:
```toml
[[params.social]]
  name = 'Github'
  url = 'https://github.com/yourusername/'
```

---

## 🎬 Deploy to GitHub Pages

### One-Time Setup

1. **Enable GitHub Pages**
   - Go to your repo settings
   - Pages → Source: "GitHub Actions"
   - Save

2. **That's it!** The workflow is already configured.

### Every Time You Update

```bash
git add .
git commit -m "Your update message"
git push origin main
```

GitHub Actions will automatically:
- Build your site
- Deploy to GitHub Pages
- Run Lighthouse tests

Visit your site at: `https://yourusername.github.io`

---

## 📝 Create Your First Blog Post

```bash
# Create new post
hugo new posts/my-first-post.md
```

Edit the file:
```yaml
---
title: "My First Post"
date: 2024-10-14T10:00:00+02:00
description: "A brief description"
tags: ["tag1", "tag2"]
draft: false
---

Your content here...
```

View it locally at http://localhost:1313/posts/my-first-post/

---

## 🎨 Customize Colors

Edit `tailwind.config.js`:

```js
colors: {
  'light': {
    primary: '#2563eb',  // Change this
  },
  'dark': {
    primary: '#60a5fa',  // And this
  },
}
```

Restart dev server to see changes.

---

## 🔧 Common Commands

```bash
# Development
npm run dev                # Start dev server
hugo new posts/title.md    # Create new post
hugo new teaching/course.md # Create new course page

# Building
npm run build              # Build site
npm run build:prod         # Build for production
npm run clean              # Clean build artifacts

# Testing
hugo server -D             # Show drafts
npm run lighthouse         # Run Lighthouse locally
```

---

## ✅ Launch Checklist

Before going live:

- [ ] Updated personal info in `hugo.toml`
- [ ] Added your avatar image
- [ ] Updated social links
- [ ] Added fonts (or using Google Fonts)
- [ ] Generated favicons
- [ ] Tested locally (`npm run dev`)
- [ ] Built successfully (`npm run build:prod`)
- [ ] Committed and pushed to GitHub
- [ ] Enabled GitHub Pages in settings
- [ ] Site is live and accessible
- [ ] Tested on mobile device
- [ ] Checked dark mode works
- [ ] Verified all links work

---

## 🆘 Quick Fixes

### Site won't build?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Dark mode not working?
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
- Check browser console for errors

### Styles not applying?
```bash
rm -rf resources
npm run build
```

### GitHub Actions failing?
- Check Actions tab for error message
- Ensure `hugo.toml` baseURL is correct
- Verify Node.js version in workflow is 18+

---

## 📚 Learn More

- **Full Documentation**: See [README.md](README.md)
- **Deployment Guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Architecture**: See [ARCHITECTURE.md](ARCHITECTURE.md)
- **Migration Guide**: See [MIGRATION.md](MIGRATION.md)

---

## 🎉 You're Done!

Your modern, blazing-fast personal website is ready! 🚀

**Next steps:**
1. Write some blog posts
2. Share your new site
3. Enjoy the speed and beauty!

Questions? Check the documentation or open an issue.

---

**Happy building! ✨**

