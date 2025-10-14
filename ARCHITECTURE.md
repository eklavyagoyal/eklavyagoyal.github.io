# Site Architecture Plan - Eklavya Goyal's Personal Website

> Modern, performant, accessible Hugo site with TailwindCSS
> Target: 100/100 Lighthouse, semantic HTML5, dark mode, full accessibility

## 🎯 Design Philosophy

**Academic Elegance meets Modern Web**
- Clean mathematical paper aesthetic
- Minimalist but not sterile
- Typography-focused with generous spacing
- Dark mode as first-class citizen
- Accessibility non-negotiable

## 📁 Directory Structure

```
eklavyagoyal.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions CI/CD + Lighthouse
├── assets/
│   ├── css/
│   │   ├── main.css            # TailwindCSS entry point
│   │   └── syntax.css          # Code highlighting overrides
│   ├── js/
│   │   ├── theme-toggle.js     # Dark mode with localStorage
│   │   ├── reading-progress.js # Blog reading indicator
│   │   ├── toc.js              # Table of contents behavior
│   │   └── search.js           # Pagefind integration
│   └── images/                 # Processed images (Hugo Pipes)
├── content/
│   ├── about/
│   ├── posts/                  # Blog content
│   ├── teaching/               # Teaching materials
│   └── _index.md              # Homepage
├── layouts/
│   ├── _default/
│   │   ├── baseof.html        # Base template
│   │   ├── single.html        # Single page/post
│   │   ├── list.html          # List pages
│   │   └── home.html          # Homepage layout
│   ├── partials/
│   │   ├── head/
│   │   │   ├── meta.html      # Meta tags
│   │   │   ├── opengraph.html # OG tags
│   │   │   ├── schema.html    # JSON-LD structured data
│   │   │   └── analytics.html # Plausible (optional)
│   │   ├── header.html        # Site header/nav
│   │   ├── footer.html        # Site footer
│   │   ├── toc.html           # Table of contents
│   │   ├── related-posts.html # Related content
│   │   └── comments.html      # Giscus (optional)
│   └── shortcodes/
│       ├── toggle.html        # Collapsible sections
│       ├── katex.html         # Math rendering
│       └── figure.html        # Optimized images
├── static/
│   ├── fonts/                 # Inter + IBM Plex Mono
│   ├── pdf/                   # Course materials
│   ├── videos/                # Teaching videos
│   └── favicon.svg
├── package.json               # TailwindCSS + PostCSS
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS config
└── hugo.toml                  # Hugo configuration

```

## 🎨 Design System

### Typography
- **Sans-serif**: Inter (400, 500, 600, 700)
- **Monospace**: IBM Plex Mono (400, 600) for code
- **Scale**: Type scale based on 1.25 ratio
  - Base: 1rem (16px)
  - Headers: 1.25rem, 1.563rem, 1.953rem, 2.441rem, 3.052rem

### Color Palette

```css
/* Light Mode */
--background: 255 255 255      /* White */
--foreground: 23 23 23         /* Near black */
--primary: 37 99 235           /* Blue-600 */
--secondary: 148 163 184       /* Slate-400 */
--accent: 14 165 233           /* Sky-500 */
--muted: 241 245 249           /* Slate-100 */
--border: 226 232 240          /* Slate-200 */

/* Dark Mode */
--background: 15 23 42         /* Slate-900 */
--foreground: 248 250 252      /* Slate-50 */
--primary: 96 165 250          /* Blue-400 */
--secondary: 100 116 139       /* Slate-500 */
--accent: 56 189 248           /* Sky-400 */
--muted: 30 41 59              /* Slate-800 */
--border: 51 65 85             /* Slate-700 */
```

### Spacing
- Container: max-width 65ch for prose, 80rem for lists
- Vertical rhythm: 1.75rem base
- Section padding: 4rem (mobile), 6rem (desktop)

## 🏗️ Build Pipeline

### Hugo Pipes Processing
1. **CSS**: assets/css/main.css → TailwindCSS → PostCSS → Minify
2. **JS**: Individual assets → Babel (optional) → Minify → Bundle
3. **Images**: Auto-resize, WebP conversion, lazy loading
4. **Fonts**: Self-hosted, preloaded, woff2 only

### Optimization Targets
- **Performance**: 100/100
  - Critical CSS inlined
  - Deferred JS loading
  - Image optimization
  - Font preloading
- **Accessibility**: 100/100
  - Semantic HTML5
  - ARIA labels
  - Keyboard navigation
  - Skip links
- **SEO**: 100/100
  - Meta tags
  - OpenGraph
  - JSON-LD schema
  - Sitemap
- **Best Practices**: 100/100
  - HTTPS only
  - No console errors
  - Valid HTML
  - CSP headers

## 🎬 Key Features

### 1. Blog System
- **TOC**: Auto-generated from H2/H3 headers
- **Reading Progress**: Top bar indicator
- **Related Posts**: Tag-based similarity
- **Code Highlighting**: Chroma with GitHub Dark theme
- **Math**: KaTeX for LaTeX equations
- **Comments**: Giscus (GitHub Discussions)

### 2. Teaching Materials
- **Collapsible Sections**: Week-by-week materials
- **PDF Viewer**: Embedded PDFs with fallback links
- **Video Player**: HTML5 with poster images
- **Search**: Pagefind for course content

### 3. Dark Mode
- **Toggle**: Header button with sun/moon icon
- **Persistence**: localStorage + system preference
- **Transition**: Smooth color transitions
- **No FOUC**: Inline script in head

### 4. Navigation
- **Header**: Logo, main menu, dark mode toggle
- **Mobile**: Hamburger menu with slide-in
- **Footer**: Social links, copyright, RSS
- **Breadcrumbs**: For nested teaching pages

### 5. SEO & Social
- **Meta Tags**: Description, keywords, author
- **OpenGraph**: Title, description, image, type
- **Twitter Cards**: Summary with large image
- **JSON-LD**: Person, Article, Course schemas
- **Sitemap**: Auto-generated by Hugo
- **RSS**: Full-text feeds

## 🚀 Deployment

### GitHub Actions Workflow
1. **Trigger**: Push to main branch
2. **Build**: Hugo with --minify
3. **Test**: Lighthouse CI (all pages)
4. **Deploy**: GitHub Pages
5. **Cache**: Invalidate Cloudflare (if used)

### Performance Checklist
- [ ] Critical CSS inlined (<14KB)
- [ ] JS deferred/async
- [ ] Images optimized (WebP)
- [ ] Fonts preloaded
- [ ] Gzip/Brotli compression
- [ ] CDN configured
- [ ] Caching headers set
- [ ] No render-blocking resources

## 📊 Analytics & Monitoring

### Optional Integrations
- **Plausible**: Privacy-friendly analytics
- **Pagefind**: Static search
- **Giscus**: Comments via GitHub
- **Lighthouse CI**: Automated testing

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Development server with drafts
hugo server -D --disableFastRender

# Build for production
hugo --minify

# Build + test Lighthouse
npm run build:prod && npm run lighthouse

# Update TailwindCSS
npx tailwindcss -i ./assets/css/main.css -o ./public/css/styles.css --watch
```

## 📝 Content Guidelines

### Blog Posts
- Front matter: title, date, description, tags, draft
- Images in page bundles
- Code blocks with language specified
- Math with `$$` delimiters

### Teaching Materials
- Use toggle shortcode for collapsible sections
- PDFs in static/pdf/
- Videos in static/videos/
- Link to external resources

## 🎯 Migration Notes

### From hugo-coder theme
- [x] Extract custom CSS from theme
- [x] Rebuild with TailwindCSS
- [x] Port toggle shortcode
- [x] Preserve content structure
- [x] Update hugo.toml params

### Breaking Changes
- Theme parameter structure updated
- Custom CSS moved to TailwindCSS
- Font Awesome replaced with SVG icons
- Disqus replaced with Giscus (optional)

## 🔜 Future Enhancements

- [ ] Web mentions support
- [ ] RSS feed improvements
- [ ] Related posts algorithm
- [ ] Newsletter signup
- [ ] PDF generation from blog posts
- [ ] Offline support (PWA)
- [ ] i18n for German content

---

**Last Updated**: October 14, 2025  
**Version**: 2.0.0  
**Hugo Version**: 0.121.0+

