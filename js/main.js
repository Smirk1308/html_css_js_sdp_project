/**
 * JivanSathi — Premium Health Awareness & Holistic Wellness Platform
 * Interactive UI Engine & Client Logic
 * Brand: JivanSathi | "Your companion for a healthier life"
 * Author: Shubh Sharma, CSE, NIE Mysuru
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Navigation & Frosted Glass Scroll State
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
  handleNavbarScroll(); // Initial check on load

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
  // 2. Animated Stat Counters with IntersectionObserver
  // -------------------------------------------------------------------------
  const statElements = document.querySelectorAll('.stat-number[data-counter-target]');

  if (statElements.length > 0) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animateCounter = (element) => {
      const targetStr = element.getAttribute('data-counter-target');
      const suffix = element.getAttribute('data-counter-suffix') || '';
      const prefix = element.getAttribute('data-counter-prefix') || '';
      const targetNum = parseInt(targetStr, 10);
      const duration = 1600; // ms

      if (prefersReducedMotion || isNaN(targetNum)) {
        element.textContent = `${prefix}${targetStr}${suffix}`;
        return;
      }

      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Ease-out cubic formula
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
  // 3. Interactive Water Tracker (LocalStorage + 8 Clickable Glasses)
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

    // Load saved intake from localStorage
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
      // Update glasses active state
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

      // Update counters
      if (counterText) counterText.textContent = `${currentGlasses} / 8`;
      const ml = currentGlasses * 250;
      if (mlText) mlText.textContent = `${ml} ml / 2000 ml`;

      // Update progress bar
      const pct = Math.round((currentGlasses / 8) * 100);
      if (barFill) barFill.style.width = `${pct}%`;

      // Update status message
      if (statusMsg) statusMsg.textContent = messages[currentGlasses] || messages[0];

      // Save to localStorage
      try {
        localStorage.setItem(STORAGE_KEY, currentGlasses.toString());
      } catch (e) {
        // Ignore localStorage quota errors
      }
    };

    // Glass click handler
    glasses.forEach((glass) => {
      glass.addEventListener('click', () => {
        const idx = parseInt(glass.getAttribute('data-glass-index'), 10);
        // If clicking on the exact current count, toggle it back by one
        if (idx === currentGlasses) {
          currentGlasses = Math.max(0, currentGlasses - 1);
        } else {
          currentGlasses = idx;
        }
        render();
      });
    });

    // Quick +1 Glass button
    if (btnAdd) {
      btnAdd.addEventListener('click', () => {
        if (currentGlasses < 8) {
          currentGlasses++;
          render();
        }
      });
    }

    // Reset button
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        currentGlasses = 0;
        render();
      });
    }

    // Initial render
    render();
  })();

  // -------------------------------------------------------------------------
  // 4. Image Gallery Modal Lightbox
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

      // Keyboard accessibility (Enter/Space to open)
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
  // 5. Contact Form Validation & Submission Feedback
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

      // Collect values for personal confirmation
      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const userName = nameInput ? nameInput.value.trim() : 'Friend';
      const userEmail = emailInput ? emailInput.value.trim() : '';

      // Show friendly success confirmation alert
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

      // Reset form
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    });
  }

  // -------------------------------------------------------------------------
  // 6. Back-to-Top Floating Button
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
  // 7. Scroll Reveal Animation using IntersectionObserver
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
