/**
 * Dark Mode Toggle with localStorage persistence
 * Prevents FOUC (Flash of Unstyled Content) by syncing with inline script in head
 */

(function() {
  'use strict';
  
  // Get theme toggle buttons
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
  
  // Get icons
  const sunIcons = document.querySelectorAll('[id^="theme-toggle-light-icon"]');
  const moonIcons = document.querySelectorAll('[id^="theme-toggle-dark-icon"]');
  
  // Get current theme
  function getTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  // Update icons based on theme
  function updateIcons() {
    const theme = getTheme();
    const isDark = theme === 'dark';
    
    // Toggle icon visibility
    sunIcons.forEach(icon => {
      icon.classList.toggle('hidden', isDark);
    });
    moonIcons.forEach(icon => {
      icon.classList.toggle('hidden', !isDark);
    });
  }
  
  // Set theme
  function setTheme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    updateIcons();
    
    // Update Giscus theme if present
    const giscusFrame = document.querySelector('iframe.giscus-frame');
    if (giscusFrame) {
      const giscusTheme = theme === 'dark' ? 'dark' : 'light';
      giscusFrame.contentWindow.postMessage(
        { giscus: { setConfig: { theme: giscusTheme } } },
        'https://giscus.app'
      );
    }
  }
  
  // Toggle theme
  function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }
  
  // Initialize
  function init() {
    updateIcons();
    
    // Add event listeners
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }
    if (themeToggleBtnMobile) {
      themeToggleBtnMobile.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    });
    
    // Keyboard shortcut: Ctrl/Cmd + Shift + D
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }
  
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

