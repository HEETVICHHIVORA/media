// components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Check if there's a hash (anchor link) first
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    // Scroll to top for regular routes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // 'smooth' for animated scrolling
    });
    
    // Fallback for stubborn cases
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;