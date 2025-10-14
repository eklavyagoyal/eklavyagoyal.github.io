# Eklavya Goyal's Personal Website

[![Deploy Status](https://github.com/eklavyagoyal/eklavyagoyal.github.io/workflows/Deploy%20Hugo%20Site%20to%20GitHub%20Pages/badge.svg)](https://github.com/eklavyagoyal/eklavyagoyal.github.io/actions)
[![Hugo](https://img.shields.io/badge/Hugo-0.121+-blue.svg)](https://gohugo.io)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4+-38bdf8.svg)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Modern, performant, and accessible personal website built with Hugo and TailwindCSS

🔗 **Live Site**: [https://eklavyagoyal.github.io](https://eklavyagoyal.github.io)

## ✨ Features

### 🎨 Design & UX
- **Modern Design System** - Clean, academic aesthetic with Inter + IBM Plex Mono
- **Dark Mode** - Automatic with system preference detection and localStorage persistence
- **Fully Responsive** - Mobile-first design that works beautifully on all devices
- **Smooth Animations** - Subtle transitions and micro-interactions

### 📝 Content Features
- **Blog System** - Full-featured blog with:
  - Automatic table of contents
  - Reading progress indicator
  - Related posts suggestions
  - Tag-based categorization
- **Teaching Materials** - Collapsible sections for course materials
- **Math Support** - KaTeX for beautiful LaTeX equations
- **Code Highlighting** - Syntax highlighting with GitHub Dark theme

### 🚀 Performance
- **Lighthouse 100** - Perfect scores in all categories (target)
- **Hugo Pipes** - Asset bundling, minification, and fingerprinting
- **Image Optimization** - Automatic resizing and WebP conversion
- **Lazy Loading** - Images load on-demand
- **Critical CSS** - Inlined for instant rendering

### ♿ Accessibility
- **Semantic HTML5** - Proper heading hierarchy and landmarks
- **ARIA Labels** - Complete screen reader support
- **Keyboard Navigation** - All interactive elements accessible
- **Skip Links** - Quick content navigation
- **Color Contrast** - WCAG AA compliant

### 🔍 SEO
- **Meta Tags** - Complete meta information
- **OpenGraph** - Beautiful social media previews
- **JSON-LD** - Structured data for search engines
- **Sitemap** - Auto-generated XML sitemap
- **RSS Feed** - Full-content RSS/Atom feeds

### 🛠️ Developer Experience
- **Fast Builds** - Hugo's incredible build speed
- **Hot Reload** - Instant preview during development
- **TailwindCSS** - Utility-first CSS framework
- **GitHub Actions** - Automated deployment and testing
- **TypeScript Ready** - Easy to add TS support

## 🏗️ Architecture

```
├── assets/
│   ├── css/              # TailwindCSS source
│   │   ├── main.css      # Main stylesheet
│   │   └── syntax.css    # Code highlighting
│   └── js/               # JavaScript modules
│       ├── theme-toggle.js
│       ├── reading-progress.js
│       ├── toc.js
│       └── search.js
├── content/              # Markdown content
│   ├── about/
│   ├── posts/
│   └── teaching/
├── layouts/              # Hugo templates
│   ├── _default/         # Base templates
│   ├── partials/         # Reusable components
│   │   ├── head/         # SEO and meta tags
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── toc.html
│   │   └── related-posts.html
│   └── shortcodes/       # Custom shortcodes
│       ├── toggle.html
│       ├── figure.html
│       └── katex.html
├── static/               # Static assets
│   ├── images/
│   ├── pdf/
│   ├── videos/
│   └── fonts/
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD pipeline
├── hugo.toml             # Hugo configuration
├── tailwind.config.js    # Tailwind configuration
├── package.json          # Node dependencies
└── DEPLOYMENT.md         # Deployment guide
```

## 🚀 Quick Start

### Prerequisites

- **Hugo Extended** v0.121.0 or higher
- **Node.js** v18.0.0 or higher
- **npm** v9.0.0 or higher

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/eklavyagoyal/eklavyagoyal.github.io.git
cd eklavyagoyal.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
# or
hugo server -D
```

4. **Visit** http://localhost:1313

### Building for Production

```bash
npm run build:prod
```

The optimized site will be in the `public/` directory.

## 📦 Technology Stack

| Category | Technology |
|----------|-----------|
| **Static Site Generator** | Hugo (Extended) |
| **CSS Framework** | TailwindCSS 3.4+ |
| **CSS Plugins** | Typography, Forms |
| **JavaScript** | Vanilla ES6+ |
| **Math Rendering** | KaTeX |
| **Code Highlighting** | Chroma (GitHub Dark) |
| **Search** | Pagefind (optional) |
| **Comments** | Giscus (optional) |
| **Analytics** | Plausible (optional) |
| **Deployment** | GitHub Pages + Actions |
| **Testing** | Lighthouse CI |

## 🎯 Configuration

### Basic Settings

Edit `hugo.toml`:

```toml
baseURL = 'https://yourusername.github.io/'
title = 'Your Name'

[params]
  author = 'Your Name'
  info = 'Your Title'
  description = 'Your description'
  avatarurl = '/images/avatar.jpg'
```

### Enable Features

**Math (KaTeX):**
```toml
[params]
  math = true  # Enable globally
```

Or per-post:
```yaml
---
math: true
---
```

**Search (Pagefind):**
```toml
[params]
  search = true
```

**Comments (Giscus):**
```toml
[params.giscus]
  enabled = true
  repo = 'username/repo'
  repoId = 'R_xxx'
```

**Analytics (Plausible):**
```toml
[params.analytics.plausible]
  enabled = true
  domain = 'yourdomain.com'
```

### Customization

#### Colors

Edit `tailwind.config.js`:

```js
colors: {
  'light': {
    primary: '#2563eb',  // Change primary color
  },
  'dark': {
    primary: '#60a5fa',  // Change dark mode primary
  },
}
```

#### Fonts

Edit `tailwind.config.js`:

```js
fontFamily: {
  sans: ['Your Font', ...defaultTheme.fontFamily.sans],
  mono: ['Your Mono Font', ...defaultTheme.fontFamily.mono],
}
```

## 📝 Content Management

### Creating a Blog Post

```bash
hugo new posts/my-post.md
```

Front matter template:
```yaml
---
title: "My Post Title"
date: 2024-10-14T10:00:00+02:00
description: "Post description for SEO"
tags: ["physics", "math"]
draft: false
toc: true          # Enable table of contents
math: true         # Enable KaTeX
comments: true     # Enable comments
featured_image: "cover.jpg"  # Optional
---

Your content here...
```

### Creating Teaching Materials

```bash
hugo new teaching/course-name/_index.md
```

Use the toggle shortcode:
```markdown
{{< toggle id="week01" title="Week 1: Introduction" >}}
Content for week 1
{{< /toggle >}}
```

### Adding Math

Inline math: `$E = mc^2$`

Display math:
```
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

Or use shortcode:
```
{{< katex display=true >}}
E = mc^2
{{< /katex >}}
```

### Optimized Images

Use the figure shortcode:
```
{{< figure src="image.jpg" alt="Description" caption="Optional caption" >}}
```

## 🔧 Development

### Available Commands

```bash
# Development server
npm run dev

# Production build
npm run build
npm run build:prod

# Clean build artifacts
npm run clean

# Deploy (requires gh-pages package)
npm run deploy

# Run Lighthouse locally
npm run lighthouse
```

### Project Structure

```
📁 Project Root
├── 📁 assets/          # Source assets (processed by Hugo)
├── 📁 content/         # Markdown content
├── 📁 layouts/         # HTML templates
├── 📁 static/          # Static files (copied as-is)
├── 📁 public/          # Generated site (git-ignored)
├── 📁 resources/       # Hugo cache (git-ignored)
└── 📄 hugo.toml        # Configuration
```

### Hugo Pipes Processing

1. **CSS**: `assets/css/main.css` → TailwindCSS → PostCSS → Minify → Bundle
2. **JS**: Individual files → Bundle → Minify → Fingerprint
3. **Images**: Auto-resize → WebP conversion → Lazy load

## 🚀 Deployment

### Automatic (GitHub Actions)

1. Push to `main` branch
2. GitHub Actions automatically:
   - Installs dependencies
   - Builds site
   - Deploys to GitHub Pages
   - Runs Lighthouse tests

### Manual

```bash
npm run build:prod
# Upload public/ directory to your host
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🧪 Testing

### Local Testing

```bash
# Build production version
hugo --minify

# Run Lighthouse
npx @lhci/cli@0.13.x autorun
```

### CI Testing

Lighthouse CI runs automatically on every deployment and tests:
- Performance (target: ≥90)
- Accessibility (target: ≥95)
- Best Practices (target: ≥90)
- SEO (target: ≥95)

## 📊 Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Performance | 100 | TBD |
| Accessibility | 100 | TBD |
| Best Practices | 100 | TBD |
| SEO | 100 | TBD |
| First Contentful Paint | <1s | TBD |
| Time to Interactive | <2s | TBD |
| Total Bundle Size | <100KB | TBD |

## 🛠️ Maintenance

### Regular Updates

**Monthly:**
- Update Hugo: `brew upgrade hugo` (macOS)
- Update dependencies: `npm update`
- Check security: `npm audit`

**As Needed:**
- Update content
- Add new features
- Optimize images
- Review analytics

## 🤝 Contributing

This is a personal website, but suggestions and bug reports are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hugo** - Amazing static site generator
- **TailwindCSS** - Beautiful utility-first CSS
- **GitHub Pages** - Free hosting
- **KaTeX** - Fast math rendering
- **Inter & IBM Plex** - Beautiful typefaces

## 📧 Contact

**Eklavya Goyal**
- Website: [eklavyagoyal.github.io](https://eklavyagoyal.github.io)
- Email: eklavya.goyal@tum.de
- GitHub: [@eklavyagoyal](https://github.com/eklavyagoyal)
- LinkedIn: [eklavya-goyal](https://linkedin.com/in/eklavya-goyal)

---

**Built with ❤️ using Hugo and TailwindCSS**

⭐ Star this repo if you find it useful!
