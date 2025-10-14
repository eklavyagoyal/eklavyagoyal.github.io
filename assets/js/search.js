/**
 * Search functionality using Pagefind
 * Loaded conditionally when search is enabled
 */

(function() {
  'use strict';
  
  // This file is intentionally minimal
  // Pagefind UI is initialized in baseof.html
  // Additional search enhancements can be added here
  
  // Keyboard shortcut: Ctrl/Cmd + K to open search
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchModal = document.getElementById('search-modal');
      if (searchModal) {
        searchModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Focus search input
        setTimeout(() => {
          const searchInput = document.querySelector('#search input');
          if (searchInput) searchInput.focus();
        }, 100);
      }
    }
  });
})();

