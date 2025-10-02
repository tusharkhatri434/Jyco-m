
import { useEffect } from 'react';
import { preloadCriticalImages } from '@/utils/imageOptimization';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical images for faster loading
    const criticalImages = [
      '/lovable-uploads/a2a9380f-9e60-4f52-bd27-8f1676623beb.png',
      '/lovable-uploads/06b6304c-fc3d-4ca6-b39c-b1ce6a695606.png',
      '/lovable-uploads/138afcd7-0a71-41ff-95b0-ebaabea23a79.png'
    ];
    
    preloadCriticalImages(criticalImages);

    // Optimize font loading
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);

    // Reduce paint complexity for better performance
    const style = document.createElement('style');
    style.textContent = `
      * {
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }
      
      img {
        content-visibility: auto;
        contain-intrinsic-size: 1px 1000px;
      }
      
      .animate-fade-in {
        will-change: opacity, transform;
      }
      
      .hover\\:shadow-2xl:hover {
        will-change: box-shadow;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup if needed
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
