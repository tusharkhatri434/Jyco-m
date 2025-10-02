
// Image optimization utilities for better performance

export const createOptimizedImageUrl = (url: string, width?: number, quality?: number) => {
  // For production, you might want to use a service like Cloudinary or similar
  // For now, we'll add loading optimizations
  return url;
};

export const getImageLoadingProps = (priority = false) => ({
  loading: priority ? 'eager' as const : 'lazy' as const,
  decoding: 'async' as const,
  style: {
    imageRendering: 'crisp-edges' as const,
    filter: 'contrast(1.1) brightness(1.05)',
    transition: 'opacity 0.3s ease-in-out'
  }
});

export const preloadCriticalImages = (imageUrls: string[]) => {
  if (typeof window !== 'undefined') {
    imageUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }
};

// Intersection Observer for lazy loading
export const createLazyLoadObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    return new IntersectionObserver(callback, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });
  }
  return null;
};
