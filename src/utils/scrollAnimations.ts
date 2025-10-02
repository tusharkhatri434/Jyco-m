
export const initializeScrollAnimations = () => {
  // Performance-optimized scroll animations with throttling
  let isScrolling = false;
  
  const observerOptions = {
    threshold: [0.1, 0.3],
    rootMargin: '50px 0px -10% 0px' // Optimized margins for better performance
  };

  const observer = new IntersectionObserver((entries) => {
    if (isScrolling) return; // Skip if already processing
    
    isScrolling = true;
    requestAnimationFrame(() => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
          entry.target.classList.add('visible');
          
          // Optimized staggered animations
          const staggerElements = entry.target.querySelectorAll('[class*="scroll-stagger-"]');
          if (staggerElements.length > 0) {
            staggerElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('visible');
              }, index * 80); // Reduced delay for smoother effect
            });
          }
        }
      });
      isScrolling = false;
    });
  }, observerOptions);

  // Simplified animation selectors for better performance
  const animationSelectors = [
    '.scroll-animate-fade',
    '.scroll-animate-left', 
    '.scroll-animate-right',
    '.scroll-animate-zoom',
    '.scroll-animate-bounce'
  ];

  const observeElements = () => {
    animationSelectors.forEach(selector => {
      const elements = document.querySelectorAll(`${selector}:not(.observed)`);
      elements.forEach((element) => {
        element.classList.add('observed');
        
        // Immediate visibility for above-the-fold content
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          element.classList.add('visible');
        }
        
        observer.observe(element);
      });
    });
  };

  observeElements();
  ensureContentVisibility();

  // Optimized mutation observer with debouncing
  let mutationTimeout: NodeJS.Timeout;
  const mutationObserver = new MutationObserver(() => {
    clearTimeout(mutationTimeout);
    mutationTimeout = setTimeout(() => {
      observeElements();
    }, 100);
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  });

  return { observer, mutationObserver };
};

// Immediate content visibility - performance optimized
export const ensureContentVisibility = () => {
  const elements = document.querySelectorAll('.scroll-animate-fade, .scroll-animate-left, .scroll-animate-right');
  elements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      element.classList.add('visible');
    }
  });
};

// Optimized performance with reduced complexity
export const optimizeScrollPerformance = () => {
  let ticking = false;
  
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        ensureContentVisibility();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  // Passive scroll listener for better performance
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

// Simplified trigger animations
export const triggerAnimations = (selector: string, delay: number = 0) => {
  setTimeout(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 60); // Faster, smoother timing
    });
  }, delay);
};
