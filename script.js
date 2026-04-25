// ============================================
// ReWorth Landing Page - Interactive Features
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // FAQ Accordion Functionality
  // ============================================
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close other open items (optional - remove if you want multiple open)
      const wasActive = item.classList.contains('active');
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      
      // Toggle current item
      if (!wasActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
  
  // ============================================
  // Scroll Reveal Animation
  // ============================================
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };
  
  // Initial check
  revealOnScroll();
  
  // Check on scroll with throttle for performance
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(() => {
      revealOnScroll();
    });
  });
  
  // ============================================
  // Smooth Scroll for Anchor Links
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const offsetTop = target.offsetTop - 80; // 80px offset for better positioning
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ============================================
  // Animated Counter for Stats
  // ============================================
  const statNumbers = document.querySelectorAll('.stat-number');
  let hasAnimated = false;
  
  const animateCounters = () => {
    if (hasAnimated) return;
    
    const statsSection = document.querySelector('.stats-grid');
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
      hasAnimated = true;
      
      statNumbers.forEach(stat => {
        const text = stat.textContent;
        const numberMatch = text.match(/\d+/);
        
        if (numberMatch) {
          const finalNumber = parseInt(numberMatch[0]);
          const suffix = text.replace(/\d+/, '');
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = finalNumber / steps;
          const stepDuration = duration / steps;
          
          let currentNumber = 0;
          
          const counter = setInterval(() => {
            currentNumber += increment;
            
            if (currentNumber >= finalNumber) {
              stat.textContent = finalNumber + suffix;
              clearInterval(counter);
            } else {
              stat.textContent = Math.floor(currentNumber) + suffix;
            }
          }, stepDuration);
        }
      });
    }
  };
  
  window.addEventListener('scroll', animateCounters);
  animateCounters(); // Check on load
  
  // ============================================
  // Parallax Effect for Hero (Subtle)
  // ============================================
  const hero = document.querySelector('.hero');
  
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      
      if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    });
  }
  
  // ============================================
  // Add Hover Sound Effect (Optional Enhancement)
  // ============================================
  const buttons = document.querySelectorAll('.btn, .cta-button');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      // Add a subtle scale effect
      button.style.transition = 'transform 0.3s ease';
    });
  });
  
  // ============================================
  // Track CTA Clicks (for analytics - placeholder)
  // ============================================
  const ctaButtons = document.querySelectorAll('a[href*="apps.apple.com"]');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Placeholder for analytics tracking
      console.log('CTA clicked: Download App');
      
      // If you add Google Analytics or similar:
      // gtag('event', 'click', {
      //   'event_category': 'CTA',
      //   'event_label': 'Download App'
      // });
    });
  });
  
  // ============================================
  // Lazy Load Images (Performance Optimization)
  // ============================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          
          // If image has data-src, load it
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          
          observer.unobserve(img);
        }
      });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // ============================================
  // Add Loading State to External Links
  // ============================================
  const externalLinks = document.querySelectorAll('a[target="_blank"]');
  
  externalLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Add a brief loading state
      const originalText = this.textContent;
      
      // Only for buttons, not regular links
      if (this.classList.contains('btn') || this.classList.contains('cta-button')) {
        this.style.opacity = '0.7';
        
        setTimeout(() => {
          this.style.opacity = '1';
        }, 300);
      }
    });
  });
  
  // ============================================
  // Keyboard Navigation Enhancement
  // ============================================
  document.addEventListener('keydown', (e) => {
    // Allow keyboard users to toggle FAQ with Enter or Space
    if (e.target.classList.contains('faq-question')) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.target.click();
      }
    }
  });
  
  // ============================================
  // Performance Monitoring (Development)
  // ============================================
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;
        
        console.log('Performance Metrics:');
        console.log(`Page Load Time: ${pageLoadTime}ms`);
        console.log(`Connection Time: ${connectTime}ms`);
        console.log(`Render Time: ${renderTime}ms`);
      }, 0);
    });
  }
  
  // ============================================
  // Add "Back to Top" Button (Appears on Scroll)
  // ============================================
  const createBackToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    
    // Styles
    Object.assign(button.style, {
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, var(--brand-purple), var(--brand-pink))',
      color: 'white',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      opacity: '0',
      visibility: 'hidden',
      transition: 'all 0.3s ease',
      zIndex: '1000',
      boxShadow: '0 4px 15px rgba(236, 72, 153, 0.4)'
    });
    
    document.body.appendChild(button);
    
    // Show/hide based on scroll
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        button.style.opacity = '1';
        button.style.visibility = 'visible';
      } else {
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
      }
    });
    
    // Scroll to top on click
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Hover effect
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-3px) scale(1.1)';
      button.style.boxShadow = '0 6px 20px rgba(236, 72, 153, 0.5)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0) scale(1)';
      button.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.4)';
    });
  };
  
  createBackToTop();
  
  // ============================================
  // Console Easter Egg
  // ============================================
  console.log(
    '%c✨ Funnyday Studio - 创造充满乐趣的产品 ',
    'background: linear-gradient(135deg, #8B5CF6, #EC4899); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;'
  );
  console.log(
    '%c正在寻找好玩的App？查看我们的主页：https://funnyday.studio',
    'color: #8B5CF6; font-size: 12px;'
  );
});
