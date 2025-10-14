/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.{html,md}',
    './themes/**/layouts/**/*.html',
    './themes/**/content/**/*.{html,md}',
  ],
  
  // Dark mode configuration
  darkMode: 'class', // Use class strategy for manual control
  
  theme: {
    extend: {
      // Color palette - semantic naming
      colors: {
        // Light mode colors
        'light': {
          bg: '#ffffff',
          fg: '#171717',
          primary: '#2563eb',
          secondary: '#94a3b8',
          accent: '#0ea5e9',
          muted: '#f1f5f9',
          border: '#e2e8f0',
        },
        // Dark mode colors
        'dark': {
          bg: '#0f172a',
          fg: '#f8fafc',
          primary: '#60a5fa',
          secondary: '#64748b',
          accent: '#38bdf8',
          muted: '#1e293b',
          border: '#334155',
        },
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
        display: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.75rem' }],
        'lg': ['1.125rem', { lineHeight: '1.875rem' }],
        'xl': ['1.25rem', { lineHeight: '2rem' }],
        '2xl': ['1.563rem', { lineHeight: '2.25rem' }],
        '3xl': ['1.953rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.441rem', { lineHeight: '3rem' }],
        '5xl': ['3.052rem', { lineHeight: '3.5rem' }],
      },
      
      // Prose (for blog content)
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.light.fg'),
            lineHeight: '1.75',
            
            // Headings
            'h1, h2, h3, h4': {
              fontWeight: '600',
              letterSpacing: '-0.025em',
            },
            h1: {
              fontSize: theme('fontSize.4xl[0]'),
              lineHeight: theme('fontSize.4xl[1].lineHeight'),
              marginTop: '0',
              marginBottom: '2rem',
            },
            h2: {
              fontSize: theme('fontSize.3xl[0]'),
              lineHeight: theme('fontSize.3xl[1].lineHeight'),
              marginTop: '3rem',
              marginBottom: '1.5rem',
            },
            h3: {
              fontSize: theme('fontSize.2xl[0]'),
              lineHeight: theme('fontSize.2xl[1].lineHeight'),
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            
            // Links
            a: {
              color: theme('colors.light.primary'),
              textDecoration: 'underline',
              textDecorationColor: theme('colors.light.accent'),
              textUnderlineOffset: '2px',
              fontWeight: '500',
              transition: 'color 0.2s ease',
              '&:hover': {
                color: theme('colors.light.accent'),
              },
            },
            
            // Code
            code: {
              color: theme('colors.light.accent'),
              backgroundColor: theme('colors.light.muted'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontWeight: '600',
              fontSize: '0.875em',
              '&::before': { content: '""' },
              '&::after': { content: '""' },
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
              color: 'inherit',
              fontWeight: '400',
            },
            pre: {
              backgroundColor: theme('colors.slate.900'),
              color: theme('colors.slate.100'),
              padding: '1.25rem',
              borderRadius: '0.5rem',
              overflowX: 'auto',
              fontSize: '0.875em',
              lineHeight: '1.7',
            },
            
            // Blockquotes
            blockquote: {
              borderLeftColor: theme('colors.light.primary'),
              borderLeftWidth: '4px',
              paddingLeft: '1.5rem',
              fontStyle: 'italic',
              color: theme('colors.light.secondary'),
            },
            
            // Lists
            'ul, ol': {
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            
            // Tables
            table: {
              width: '100%',
              borderCollapse: 'collapse',
            },
            'thead th': {
              borderBottomColor: theme('colors.light.border'),
              borderBottomWidth: '2px',
              padding: '0.75rem',
              textAlign: 'left',
            },
            'tbody td': {
              borderBottomColor: theme('colors.light.border'),
              borderBottomWidth: '1px',
              padding: '0.75rem',
            },
          },
        },
        
        // Dark mode prose
        dark: {
          css: {
            color: theme('colors.dark.fg'),
            
            a: {
              color: theme('colors.dark.primary'),
              textDecorationColor: theme('colors.dark.accent'),
              '&:hover': {
                color: theme('colors.dark.accent'),
              },
            },
            
            code: {
              color: theme('colors.dark.accent'),
              backgroundColor: theme('colors.dark.muted'),
            },
            
            pre: {
              backgroundColor: theme('colors.slate.950'),
              color: theme('colors.slate.100'),
            },
            
            blockquote: {
              borderLeftColor: theme('colors.dark.primary'),
              color: theme('colors.dark.secondary'),
            },
            
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.dark.fg'),
            },
            
            'thead th': {
              borderBottomColor: theme('colors.dark.border'),
            },
            'tbody td': {
              borderBottomColor: theme('colors.dark.border'),
            },
            
            strong: {
              color: theme('colors.dark.fg'),
            },
          },
        },
      }),
      
      // Spacing
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      
      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      
      // Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'progress': 'progress 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        progress: {
          '0%': { width: '0%' },
        },
      },
      
      // Border radius
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

