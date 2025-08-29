'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };

    // Professional animation timing configurations
    const sectionConfigs = {
      'section-1': { delay: 100, stagger: 200 },
      'section-2': { delay: 150, stagger: 180 },
      'section-3': { delay: 200, stagger: 160 },
      'section-4': { delay: 100, stagger: 150 },
      'section-5': { delay: 250, stagger: 200 },
      'section-6': { delay: 120, stagger: 170 },
      'section-7': { delay: 180, stagger: 190 },
      'section-8': { delay: 140, stagger: 160 },
      'section-9': { delay: 200, stagger: 180 }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        
        if (entry.isIntersecting) {
          // Get section type for specific timing
          const sectionClass = Array.from(element.classList).find(cls => cls.startsWith('section-'));
          const config = sectionClass ? sectionConfigs[sectionClass as keyof typeof sectionConfigs] : { delay: 100, stagger: 150 };
          
          // Animate section with specific delay
          setTimeout(() => {
            element.classList.add('animate-in');
            
            // Animate child elements with staggered timing
            const children = element.querySelectorAll('.fade-up, .text-reveal, .bounce-in, .card-flip, .report-card, .testimonial-slide, .slide-up-cards, .map-zoom, .card-slide-left, .card-bounce-in, .card-slide-right, .card-zoom-in, .testimonial-card, .image-slide-left, .testimonial-content, .quote-fade, .author-info, .cta-button');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-in');
              }, config.stagger + (index * config.stagger));
            });
            
          }, config.delay);
          
        } else {
          // Reset animations smoothly
          element.classList.remove('animate-in');
          const children = element.querySelectorAll('.fade-up, .text-reveal, .bounce-in, .card-flip, .report-card, .testimonial-slide, .slide-up-cards, .map-zoom, .card-slide-left, .card-bounce-in, .card-slide-right, .card-zoom-in, .testimonial-card, .image-slide-left, .testimonial-content, .quote-fade, .author-info, .cta-button');
          children.forEach((child) => {
            child.classList.remove('animate-in');
          });
        }
      });
    }, observerOptions);

    // Enhanced scroll listener with smooth performance
    let ticking = false;
    let lastScrollY = 0;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (!ticking && Math.abs(scrollY - lastScrollY) > 5) {
        requestAnimationFrame(() => {
          const sections = document.querySelectorAll('[class*="section-"]');
          const windowHeight = window.innerHeight;
          
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + scrollY;
            const sectionHeight = rect.height;
            
            // More precise viewport detection
            const isInView = (
              scrollY + windowHeight > sectionTop + 80 &&
              scrollY < sectionTop + sectionHeight - 80
            );
            
            const sectionClass = Array.from(section.classList).find(cls => cls.startsWith('section-'));
            const config = sectionClass ? sectionConfigs[sectionClass as keyof typeof sectionConfigs] : { delay: 100, stagger: 150 };
            
            if (isInView && !section.classList.contains('animate-in')) {
              setTimeout(() => {
                section.classList.add('animate-in');
                
                // Animate children
                const children = section.querySelectorAll('.fade-up, .text-reveal, .bounce-in, .card-flip, .report-card, .testimonial-slide, .slide-up-cards, .map-zoom, .card-slide-left, .card-bounce-in, .card-slide-right, .card-zoom-in, .testimonial-card, .image-slide-left, .testimonial-content, .quote-fade, .author-info, .cta-button');
                children.forEach((child, index) => {
                  setTimeout(() => {
                    child.classList.add('animate-in');
                  }, config.stagger + (index * config.stagger));
                });
              }, config.delay);
              
            } else if (!isInView && section.classList.contains('animate-in')) {
              section.classList.remove('animate-in');
              const children = section.querySelectorAll('.fade-up, .text-reveal, .bounce-in, .card-flip, .report-card, .testimonial-slide, .slide-up-cards, .map-zoom, .card-slide-left, .card-bounce-in, .card-slide-right, .card-zoom-in, .testimonial-card, .image-slide-left, .testimonial-content, .quote-fade, .author-info, .cta-button');
              children.forEach((child) => {
                child.classList.remove('animate-in');
              });
            }
          });
          
          lastScrollY = scrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Observe all sections
    const sections = document.querySelectorAll('[class*="section-"]');
    sections.forEach((el) => observer.observe(el));
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial load animation for first section
    setTimeout(() => {
      handleScroll();
      
      const firstSection = document.querySelector('.section-1');
      if (firstSection && !firstSection.classList.contains('animate-in')) {
        firstSection.classList.add('animate-in');
        
        const children = firstSection.querySelectorAll('.fade-up, .slide-up-cards');
        children.forEach((child, index) => {
          setTimeout(() => {
            child.classList.add('animate-in');
          }, 200 + (index * 200));
        });
      }
    }, 150);

    return () => {
      sections.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
