'use client'
import { useEffect, useState } from 'react';

export function useIntersectionObserver() {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgColor = entry.target.getAttribute('data-bg-color');
            if (bgColor) {
              setActiveSection(bgColor);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return activeSection;
}