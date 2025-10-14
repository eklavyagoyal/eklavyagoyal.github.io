/**
 * Table of Contents Enhancement
 * Highlights current section and smooth scrolling
 */

(function() {
  'use strict';
  
  const toc = document.querySelector('.toc-nav');
  if (!toc) return;
  
  // Get all headings in the content
  const headings = document.querySelectorAll('.prose h2[id], .prose h3[id], .prose h4[id]');
  if (headings.length === 0) return;
  
  // Get all TOC links
  const tocLinks = toc.querySelectorAll('a');
  
  // Track active section
  let activeLink = null;
  
  // Update active TOC link
  function updateActiveLink(id) {
    if (activeLink) {
      activeLink.classList.remove('active');
    }
    
    const newActiveLink = toc.querySelector(`a[href="#${id}"]`);
    if (newActiveLink) {
      newActiveLink.classList.add('active');
      activeLink = newActiveLink;
      
      // Scroll TOC to show active link if needed
      const tocRect = toc.getBoundingClientRect();
      const linkRect = newActiveLink.getBoundingClientRect();
      
      if (linkRect.top < tocRect.top || linkRect.bottom > tocRect.bottom) {
        newActiveLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }
  
  // Intersection Observer for heading visibility
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateActiveLink(entry.target.id);
      }
    });
  }, observerOptions);
  
  // Observe all headings
  headings.forEach(heading => {
    observer.observe(heading);
  });
  
  // Smooth scroll for TOC links
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Calculate offset for fixed header
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without jumping
        history.pushState(null, null, `#${targetId}`);
      }
    });
  });
  
  // Set initial active link
  const firstHeading = headings[0];
  if (firstHeading) {
    updateActiveLink(firstHeading.id);
  }
})();

