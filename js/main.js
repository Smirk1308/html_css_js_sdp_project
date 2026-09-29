/**
 * JivanSathi — Premium Health Awareness & Holistic Wellness Platform
 * Interactive UI Engine & Client Logic (Enhanced Edition)
 * Brand: JivanSathi | "Your companion for a healthier life"
 * Author: Shubh Sharma, CSE, NIE Mysuru
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Theme Management (Light & Dark Wellness Mode with LocalStorage)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const THEME_KEY = 'jivansathi_theme';

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) {
        themeIcon.classList.remove('bi-moon-stars-fill');
        themeIcon.classList.add('bi-sun-fill');
        themeIcon.style.color = '#fbbf24';
      }
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) {
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-stars-fill');
        themeIcon.style.color = '';
      }
    }
  };

  // Determine initial theme: saved preference -> system preference -> default to light
  let currentTheme = 'light';
  try {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      currentTheme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      currentTheme = 'dark';
    }
  } catch (e) {
    currentTheme = 'light';
  }

  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      currentTheme = (currentTheme === 'dark') ? 'light' : 'dark';
      applyTheme(currentTheme);
      try {
        localStorage.setItem(THEME_KEY, currentTheme);
      } catch (e) {
        // Ignore quota limits
      }
    });
  }

  // -------------------------------------------------------------------------
  // 2. Ambient Floating Bio-Particles Generator
  // -------------------------------------------------------------------------
  const particlesContainer = document.getElementById('particlesContainer');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (particlesContainer && !prefersReducedMotion) {
    const particleCount = 22;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'bio-particle';
      if (Math.random() > 0.75) {
        particle.classList.add('particle-gold');
      }

      const size = Math.floor(Math.random() * 4) + 3; // 3px to 6px
      const left = Math.floor(Math.random() * 100); // 0% to 100%
      const duration = Math.floor(Math.random() * 10) + 12; // 12s to 22s
      const delay = Math.floor(Math.random() * 15); // 0s to 15s

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}%`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `-${delay}s`;

      fragment.appendChild(particle);
    }

    particlesContainer.appendChild(fragment);
  }

  // -------------------------------------------------------------------------
  // 3. Navigation & Frosted Glass Scroll State
  // -------------------------------------------------------------------------
  const navbar = document.querySelector('.navbar-jivansathi');
  const navCollapse = document.getElementById('navbarJivanSathiNav');
  const navLinks = document.querySelectorAll('.navbar-jivansathi .nav-link:not(.btn)');

  const handleNavbarScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // Close mobile navbar dropdown when clicking any nav link
  if (navCollapse) {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && navCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 4. Animated Stat Counters with IntersectionObserver
  // -------------------------------------------------------------------------
  const statElements = document.querySelectorAll('.stat-number[data-counter-target]');

  if (statElements.length > 0) {
    const animateCounter = (element) => {
      const targetStr = element.getAttribute('data-counter-target');
      const suffix = element.getAttribute('data-counter-suffix') || '';
      const prefix = element.getAttribute('data-counter-prefix') || '';
      const targetNum = parseInt(targetStr, 10);
      const duration = 1600;

      if (prefersReducedMotion || isNaN(targetNum)) {
        element.textContent = `${prefix}${targetStr}${suffix}`;
        return;
      }

      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.floor(easeProgress * targetNum);

        element.textContent = `${prefix}${currentVal}${suffix}`;

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          element.textContent = `${prefix}${targetStr}${suffix}`;
        }
      };

      window.requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statElements.forEach((el) => counterObserver.observe(el));
  }

  // -------------------------------------------------------------------------
  // 5. Interactive Water Tracker (LocalStorage + 8 Clickable Glasses)
  // -------------------------------------------------------------------------
  const waterTracker = (() => {
    const glasses = document.querySelectorAll('.water-glass-btn');
    const counterText = document.getElementById('waterGlassesCount');
    const mlText = document.getElementById('waterMlText');
    const barFill = document.getElementById('waterBarFill');
    const statusMsg = document.getElementById('waterStatusMsg');
    const btnAdd = document.getElementById('btnAddGlass');
    const btnReset = document.getElementById('btnResetWater');

    const STORAGE_KEY = 'jivansathi_water_intake';
    let currentGlasses = 0;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved !== null) {
        currentGlasses = Math.min(Math.max(parseInt(saved, 10) || 0, 0), 8);
      }
    } catch (e) {
      currentGlasses = 0;
    }

    const messages = {
      0: "Start your hydration journey! 1 glass = 250ml 💧",
      1: "Great start! Morning hydration activates digestion 🌱",
      2: "Keep going! 500ml down, your brain is energizing 🧠",
      3: "3 glasses in! Healthy circulation and glowing skin ✨",
      4: "Halfway there! 1000ml replenished, feeling refreshed 💧",
      5: "5 glasses completed! Sustained focus and stamina ⚡",
      6: "Almost at your goal! Optimal organ hydration 🌊",
      7: "One last glass to reach your daily wellness milestone 🎯",
      8: "Daily Goal Achieved (2000ml)! Outstanding hydration 🎉"
    };

    const render = () => {
      glasses.forEach((glass) => {
        const glassIndex = parseInt(glass.getAttribute('data-glass-index'), 10);
        if (glassIndex <= currentGlasses) {
          glass.classList.add('active');
          glass.setAttribute('aria-pressed', 'true');
        } else {
          glass.classList.remove('active');
          glass.setAttribute('aria-pressed', 'false');
        }
      });

      if (counterText) counterText.textContent = `${currentGlasses} / 8`;
      const ml = currentGlasses * 250;
      if (mlText) mlText.textContent = `${ml} ml / 2000 ml`;

      const pct = Math.round((currentGlasses / 8) * 100);
      if (barFill) barFill.style.width = `${pct}%`;

      if (statusMsg) statusMsg.textContent = messages[currentGlasses] || messages[0];

      try {
        localStorage.setItem(STORAGE_KEY, currentGlasses.toString());
      } catch (e) {
        // Ignore quota limits
      }
    };

    glasses.forEach((glass) => {
      glass.addEventListener('click', () => {
        const idx = parseInt(glass.getAttribute('data-glass-index'), 10);
        if (idx === currentGlasses) {
          currentGlasses = Math.max(0, currentGlasses - 1);
        } else {
          currentGlasses = idx;
        }
        render();
      });
    });

    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        if (currentGlasses < 8) {
          currentGlasses++;
          render();
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        currentGlasses = 0;
        render();
      });
    }

    render();
  })();

  // -------------------------------------------------------------------------
  // 6. Image Gallery Modal Lightbox
  // -------------------------------------------------------------------------
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModalEl = document.getElementById('galleryLightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');

  if (lightboxModalEl && galleryItems.length > 0) {
    const lightboxModal = bootstrap.Modal.getOrCreateInstance(lightboxModalEl);

    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const titleEl = item.querySelector('.gallery-item-title');
        const tagEl = item.querySelector('.gallery-item-tag');
        const descText = item.getAttribute('data-gallery-desc') || (tagEl ? tagEl.textContent : '');

        if (img && lightboxImg) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt || 'Gallery photo';
        }
        if (titleEl && lightboxTitle) {
          lightboxTitle.textContent = titleEl.textContent;
        }
        if (lightboxDesc) {
          lightboxDesc.textContent = descText;
        }

        lightboxModal.show();
      });

      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });
  }

  // -------------------------------------------------------------------------
  // 7. Contact Form Validation & Submission Feedback
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('jivansathiContactForm');
  const contactAlert = document.getElementById('contactFormAlert');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!contactForm.checkValidity()) {
        contactForm.classList.add('was-validated');
        return;
      }

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const userName = nameInput ? nameInput.value.trim() : 'Friend';
      const userEmail = emailInput ? emailInput.value.trim() : '';

      if (contactAlert) {
        contactAlert.innerHTML = `
          <div class="alert alert-success d-flex align-items-center border-0 shadow-sm rounded-3 py-3 px-3 mb-4" role="alert">
            <i class="bi bi-check-circle-fill fs-4 text-success me-3"></i>
            <div>
              <h5 class="alert-heading fw-bold mb-1">Message Sent Successfully!</h5>
              <p class="mb-0 small">Thank you, <strong>${userName}</strong>! Your inquiry has been received. Our wellness team will follow up with you at <strong>${userEmail}</strong> within 24 hours.</p>
            </div>
          </div>
        `;
        contactAlert.classList.remove('d-none');
        contactAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }

  // -------------------------------------------------------------------------
  // 8. Back-to-Top Floating Button
  // -------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('btnBackToTop');

  if (backToTopBtn) {
    const handleScrollBtn = () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScrollBtn, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -------------------------------------------------------------------------
  // 9. Scroll Reveal Animation using IntersectionObserver
  // -------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  }
});
