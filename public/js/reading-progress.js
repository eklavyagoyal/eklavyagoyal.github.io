/**
 * Reading Progress Bar
 * Shows scroll progress for blog posts
 */

(function() {
  'use strict';
  
  const progressBar = document.getElementById('reading-progress');
  
  if (!progressBar) return;
  
  // Calculate and update progress
  function updateProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate percentage
    const progress = (scrollTop / documentHeight) * 100;
    
    // Update progress bar width
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }
  
  // Throttle function for better performance
  function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // Add scroll listener with throttling
  const throttledUpdate = throttle(updateProgress, 50);
  window.addEventListener('scroll', throttledUpdate, { passive: true });
  window.addEventListener('resize', throttledUpdate, { passive: true });
  
  // Initial update
  updateProgress();
})();

