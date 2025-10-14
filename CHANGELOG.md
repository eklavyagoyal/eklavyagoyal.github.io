# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-10-14

### 🎉 Complete Site Modernization

This is a complete rewrite and modernization of the site, transitioning from the hugo-coder theme to a custom TailwindCSS-based implementation.

### ✨ Added

#### Core Features
- **Custom Hugo Theme** - Built from scratch with modern best practices
- **TailwindCSS 3.4** - Utility-first CSS framework with custom design system
- **Dark Mode** - Automatic detection with manual toggle and localStorage persistence
- **Hugo Pipes** - Modern asset processing with bundling and fingerprinting
- **Semantic HTML5** - Proper document structure and landmarks

#### Blog Features
- **Table of Contents** - Auto-generated with active section highlighting
- **Reading Progress Bar** - Visual indicator for blog posts
- **Related Posts** - Tag-based content suggestions
- **Code Highlighting** - Chroma with GitHub Dark theme
- **Math Support** - KaTeX integration for LaTeX equations
- **Share Buttons** - Twitter, LinkedIn, copy link
- **Author Bio** - Post footer with author information

#### SEO & Metadata
- **Meta Tags** - Complete meta information for all pages
- **OpenGraph** - Social media preview cards
- **Twitter Cards** - Enhanced Twitter sharing
- **JSON-LD Schema** - Structured data (Person, Article, Course)
- **Sitemap** - Auto-generated XML sitemap
- **RSS Feed** - Full-content RSS/Atom feeds
- **Canonical URLs** - Proper URL canonicalization

#### Performance
- **Image Optimization** - Automatic resizing and WebP conversion
- **Lazy Loading** - Images load on-demand
- **Critical CSS** - Inlined for instant rendering
- **Asset Minification** - CSS and JS minification
- **Asset Fingerprinting** - Cache busting with content hashes
- **Font Preloading** - Preload critical fonts

#### Accessibility
- **ARIA Labels** - Complete screen reader support
- **Keyboard Navigation** - All interactive elements accessible
- **Skip Links** - Quick content navigation
- **Focus Indicators** - Visible focus states
- **Color Contrast** - WCAG AA compliant
- **Semantic Headings** - Proper heading hierarchy

#### Developer Experience
- **GitHub Actions** - Automated deployment pipeline
- **Lighthouse CI** - Automated performance testing
- **Hot Reload** - Instant preview during development
- **Modular Structure** - Organized and maintainable code
- **Inline Documentation** - Comments throughout templates

#### New Components
- **Header** - Responsive navigation with mobile menu
- **Footer** - Social links, quick links, copyright
- **Toggle Shortcode** - Collapsible sections for teaching materials
- **Figure Shortcode** - Optimized image display
- **KaTeX Shortcode** - Math rendering
- **Card Component** - Reusable card design
- **Button Components** - Primary and secondary styles
- **Search Modal** - Pagefind integration (optional)

#### Configuration
- **Modern hugo.toml** - Optimized Hugo configuration
- **TailwindCSS Config** - Custom design system
- **PostCSS Config** - CSS processing pipeline
- **Package.json** - Node.js dependencies and scripts
- **Lighthouse Config** - Performance benchmarks

#### Documentation
- **README.md** - Comprehensive project overview
- **ARCHITECTURE.md** - Site architecture and design decisions
- **DEPLOYMENT.md** - Detailed deployment guide
- **MIGRATION.md** - Migration guide from old theme
- **CHANGELOG.md** - This file!

### 🔄 Changed

#### Design
- **Typography** - Inter for sans-serif, IBM Plex Mono for code
- **Color System** - Custom semantic color palette for light/dark modes
- **Spacing** - Consistent vertical rhythm and padding
- **Layout** - Improved responsive breakpoints
- **Mobile UX** - Enhanced mobile navigation and touch targets

#### Templates
- **baseof.html** - Complete rewrite with modern structure
- **single.html** - Enhanced blog post layout
- **list.html** - Improved post grid and pagination
- **home.html** - New homepage design

#### Navigation
- **Header** - New responsive design with mobile menu
- **Footer** - Reorganized with better information architecture
- **Breadcrumbs** - Added for nested pages

#### Content
- **Blog Posts** - Enhanced layout with TOC and reading progress
- **Teaching Materials** - Improved organization with collapsible sections
- **About Page** - Refreshed design

### 🗑️ Removed

- **hugo-coder theme** - No longer using external theme
- **Disqus** - Replaced with Giscus (optional, privacy-friendly)
- **Font Awesome** - Replaced with SVG icons
- **Gravatar** - Using local avatar image
- **jQuery** - Pure vanilla JavaScript
- **Legacy CSS** - Replaced with TailwindCSS
- **Inline Styles** - Moved to utility classes

### 🔧 Technical Changes

#### Build System
- **Node.js 18+** - Modern Node.js version
- **Hugo Extended 0.121+** - Latest Hugo with Sass support
- **npm Scripts** - Organized build commands
- **GitHub Actions** - Automated CI/CD

#### Asset Processing
- **TailwindCSS** - JIT compilation
- **PostCSS** - Autoprefixer and minification
- **Hugo Pipes** - Asset bundling and fingerprinting
- **Image Pipeline** - Automatic optimization

#### Performance Optimizations
- **Code Splitting** - Separated JS modules
- **Lazy Loading** - Deferred image loading
- **Font Display** - Font-display: swap
- **Minification** - HTML, CSS, JS minified in production
- **Compression** - Gzip/Brotli ready

### 🎯 Target Metrics

| Metric | Target | Notes |
|--------|--------|-------|
| Lighthouse Performance | 100 | Perfect score |
| Lighthouse Accessibility | 100 | WCAG AA+ compliant |
| Lighthouse Best Practices | 100 | Modern standards |
| Lighthouse SEO | 100 | Fully optimized |
| First Contentful Paint | <1s | Fast initial render |
| Time to Interactive | <2s | Quick interactivity |
| Total Bundle Size | <100KB | Minimal payload |

### 📦 Dependencies

#### Production
- TailwindCSS v3.4.0
- @tailwindcss/typography v0.5.10
- @tailwindcss/forms v0.5.7
- Autoprefixer v10.4.16
- PostCSS v8.4.32

#### Development
- Hugo Extended v0.121+
- Node.js v18+
- npm v9+

#### Optional
- Pagefind (search)
- Giscus (comments)
- Plausible (analytics)
- KaTeX (math rendering)

### 🔐 Security

- **Content Security Policy** - Ready for CSP headers
- **Subresource Integrity** - Fingerprinted assets
- **HTTPS Only** - Enforced on GitHub Pages
- **Privacy Friendly** - No tracking by default
- **Safe External Links** - rel="noopener noreferrer"

### ♿ Accessibility Improvements

- **Semantic HTML** - Proper landmarks and structure
- **ARIA Labels** - Complete screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Visible focus indicators
- **Color Contrast** - WCAG AA compliant colors
- **Alternative Text** - All images have alt text
- **Skip Links** - Quick content navigation
- **Responsive Text** - Readable on all devices

### 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 90+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

### 🚀 Performance Features

- **Critical CSS** - Inlined for instant rendering
- **Deferred JavaScript** - Non-blocking scripts
- **Lazy Images** - Load on viewport entry
- **Optimized Fonts** - Preloaded, subset, woff2
- **Minified Assets** - All CSS/JS minified
- **Asset Fingerprinting** - Aggressive caching
- **No jQuery** - Pure vanilla JS
- **Minimal Dependencies** - Small bundle size

### 📝 Content Features

- **Markdown Support** - Full GitHub Flavored Markdown
- **Code Blocks** - Syntax highlighting with line numbers
- **Math Equations** - KaTeX rendering
- **Shortcodes** - Custom content components
- **Front Matter** - Extended metadata
- **Tags & Categories** - Content organization
- **Series** - Multi-part content
- **Draft Mode** - Preview unpublished content

### 🎨 Design System

#### Colors
- Light mode: Blue primary, white background
- Dark mode: Blue-400 primary, slate-900 background
- Semantic naming: primary, secondary, accent, muted

#### Typography
- Sans-serif: Inter (400, 500, 600, 700)
- Monospace: IBM Plex Mono (400, 600)
- Scale: 1.25 ratio (16px base)

#### Spacing
- Base: 1.75rem
- Container: 65ch for prose, 80rem for wide
- Consistent vertical rhythm

### 🔄 Migration Path

See [MIGRATION.md](MIGRATION.md) for detailed migration instructions from hugo-coder theme.

### 🎯 Future Enhancements

Planned for future releases:
- [ ] Web Mentions support
- [ ] Newsletter signup
- [ ] PDF generation from posts
- [ ] PWA support (offline mode)
- [ ] i18n for German content
- [ ] Advanced search with filters
- [ ] Post series navigation
- [ ] Reading time estimates
- [ ] View counters
- [ ] Improved mobile gestures

### 🙏 Credits

- **Hugo** - Static site generator
- **TailwindCSS** - CSS framework
- **KaTeX** - Math rendering
- **Inter Font** - Rasmus Andersson
- **IBM Plex** - IBM
- **GitHub** - Hosting and CI/CD

---

## [1.0.0] - 2024-10-05

### Added
- Initial site with hugo-coder theme
- Basic blog functionality
- Teaching pages
- About page

---

**Legend:**
- ✨ Added: New features
- 🔄 Changed: Changes to existing features
- 🗑️ Removed: Removed features
- 🔧 Technical: Technical improvements
- 🐛 Fixed: Bug fixes
- 🔐 Security: Security improvements
- ♿ Accessibility: Accessibility improvements
- 📝 Documentation: Documentation changes

