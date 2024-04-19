'use client';

import { useEffect, useState } from 'react';

export const useScrollTop = (distance_to_top: number) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > distance_to_top) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrolled };
};
