# JivanSathi — Your Companion for a Healthier Life 🌿❤️

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/Vanilla%20JS-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success)](#)

> **JivanSathi** is a modern, responsive, and evidence-based Health Awareness web platform created as a collegiate Skill Development Project (SDP) in the Department of Computer Science & Engineering at **The National Institute of Engineering (NIE), Mysuru**.

---

## 🌟 Overview & Brand Identity

- **Brand Name**: **JivanSathi**
- **Tagline**: *"Your companion for a healthier life"*
- **Core Philosophy**: Empowering students and everyday individuals with practical, science-backed lifestyle knowledge, nutritional guidance, active exercise plans, hydration monitoring, and restorative sleep hygiene.
- **Visual Design**: Premium wellness aesthetic featuring deep emerald / teal primary tones (`#065f46`, `#047857`), soft mint and warm off-white surfaces (`#fafaf9`, `#ecfdf5`), and energetic warm coral/amber accents (`#f97316`).

---

## 📑 Included Sections & Features

The website follows a fluid single-page architecture with smooth scrolling, frosted-glass header dynamics, and responsive interactions:

### 1. 🧭 Navigation Bar (Header)
- **Glassmorphic Sticky Nav**: Seamlessly shifts from transparent over the hero to a frosted-glass backdrop (`backdrop-filter: blur(16px)`) with subtle shadow on scroll.
- **Brand Wordmark & Logo Mark**: Inline SVG combining heart vitality and a green sprout leaf.
- **Dark / Light Wellness Mode Switcher**: Seamless theme toggle in the navbar with `localStorage` memory and WCAG AAA compliant contrast so zero text ever vanishes.
- **Scroll-Spy & Smooth Navigation**: Automatically updates the active section indicator.
- **Mobile Responsive Drawer**: Clean, accessible hamburger collapse on smaller screens.

### 2. 🌅 Hero Section & 3D Vitality Orb
- **3D Floating Hero "Vitality Orb"**: Pure CSS 3D spherical core with multi-stop emerald radial gradients, specular lighting, pulsating heart core, rotating orbital rings, and floating status chips.
- **Ambient Floating Bio-Particles System**: Dynamic, GPU-accelerated glowing emerald and amber wellness particles drifting gently in the background.
- **Full Viewport Backdrop**: Atmospheric wellness imagery with a layered emerald-to-dark gradient overlay.
- **Impactful Typography**: Single fluid `<h1>` headline utilizing `clamp()` typography paired with Plus Jakarta Sans and Inter.
- **Dual CTA Buttons**: Quick links to explore lifestyle pillars or dive into the daily water tracker.
- **Animated Stat Counters**: Real-time counter animations (`8 Glasses`, `8 Hours Sleep`, `30+ Mins Exercise`, `100% Science-Backed`) triggered upon entering the viewport via `IntersectionObserver`.

### 3. 🌱 Healthy Lifestyle Pillars
- **Four Core Pillars of Longevity**:
  1. *Circadian Alignment* (sunlight exposure, natural biological clock)
  2. *Stress Resilience* (vagal nerve stimulation, breathwork)
  3. *Cellular Nutrition* (polyphenol variety, microbiome care)
  4. *Active Mobility* (anti-sedentary micro-breaks, posture correction)
- **Interactive 24-Hour Blueprint**: Step-by-step student-friendly daily cadence from morning hydration to digital sunset.

### 4. 🥗 Healthy Food & Nutrition
- **6 Detailed Food Group Cards**:
  - Rainbow Phytonutrient Bowls (Antioxidants & Fiber)
  - Heart-Healthy Nuts & Seeds (Omega-3 & Magnesium)
  - Plant Proteins & Legumes (Amino acids & Tissue repair)
  - Hydrating Berries & Citrus (Bioflavonoids & Vitamin C)
  - Probiotic Fermented Foods (Gut microbiome & Enzyme health)
  - Ancient Millets & Whole Grains (Sustained glycemic energy)
- **Visual & Interaction Polish**: Image hover zoom, calorie & nutrient tags, and layered card lift.
- **Harvard Healthy Plate Method**: Intuitive proportional breakdown ($\frac{1}{2}$ vegetables/fruits, $\frac{1}{4}$ whole grains, $\frac{1}{4}$ lean protein).

### 5. 🏃 Active Exercise & Fitness
- **Tabbed Pill Navigation**: Seamless switching between 4 essential movement disciplines:
  - **Cardio & Stamina** (Zone 2 training, aerobic capacity)
  - **Strength & Core** (Bodyweight calisthenics, bone mineral density)
  - **Yoga & Flexibility** (Surya Namaskar, vinyasa, fascia recovery)
  - **Desk Stretches & Posture** (Anti-sedentary drills, 20-20-20 screen rule)
- **Actionable Metrics**: Weekly frequency targets, clinical benchmarks, and pro form coaching tips.

### 6. 💧 Sleep & Water Tracker (Interactive Daily Tool)
- **Restorative Sleep Architecture**: 5 clinical principles (consistent window, blue-light curfew, room temperature, caffeine half-life cutoff, cognitive journaling).
- **Interactive Water Tracker**:
  - 8 clickable interactive glasses (250ml each, totaling 2000ml / day).
  - Dynamic progress bar and status feedback ("Great start! 💧", "Halfway there! ⚡", "Goal Achieved! 🎉").
  - Quick action buttons: `+1 Glass` and `Reset Tracker`.
  - **Local Storage Persistence**: Progress is automatically preserved in your browser (`localStorage`) so your daily record remains intact on page refresh.

### 7. 🩺 Health Awareness & Prevention (Accordion)
- **Accordion Topics**:
  1. *Popular Health Myths vs. Scientific Facts* (extreme fasting debunked, knuckle cracking fact, multivitamin myth)
  2. *Mental Health & Academic Burnout* (warning signs, Pomodoro technique, Tele-MANAS national helpline 14416)
  3. *Personal & Environmental Hygiene* (20-second handwashing, device sanitization, oral microbiome)
  4. *Essential Annual Checkups & Screening Biomarkers* (tabular clinical reference values for BP, HbA1c, Lipids, Vit D3/B12)
  5. *Preventing Lifestyle Diseases* (Type 2 Diabetes, Hypertension, and Fatty Liver prevention protocols)

### 8. 📸 Wellness Gallery & Lightbox
- Responsive grid showcasing healthy lifestyle habits in action.
- Hover overlays featuring category tags and zoom indicator icons.
- **Modal Lightbox**: Clicking any image launches a full-screen Bootstrap 5.3 modal lightbox with high-resolution imagery and descriptive captions.

### 9. 📬 Contact & Community Section
- **Split Layout Design**:
  - *Left Info Card*: Department details (NIE Mysuru), student desk contact info, location, and social links.
  - *Right Form*: Name, email, wellness topic selector, message, and consent checkbox.
  - **Client-Side Validation**: Interactive HTML5 and Bootstrap validation (`needs-validation`) with styled instant feedback and submission alert.

### 10. 🛡️ Footer & Medical Disclaimer
- Clean brand statement, organized navigation columns, academic department attribution, and a prominent educational disclaimer clarifying that the content provides general wellness awareness and not medical prescriptions.

---

## 🛠️ Technology Stack & Architecture

- **Markup**: Pure HTML5 (Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **Styling**: CSS3 with modern CSS custom properties (`:root`), fluid typography with `clamp()`, soft layered shadows, and responsive grid layouts.
- **Framework & Libraries**:
  - [Bootstrap 5.3.3](https://getbootstrap.com/) (Grid, Accordion, Tab navigation, Modal, Form validation via CDN)
  - [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/) (CDN)
  - [Google Fonts](https://fonts.google.com/) (*Plus Jakarta Sans* & *Inter* via CDN)
- **Interactions**: Pure Vanilla JavaScript (`js/main.js`):
  - `IntersectionObserver` for performant scroll-reveal and animated stat counters.
  - `localStorage` API for the interactive water tracker.
  - Bootstrap Modal API integration for the gallery lightbox.
  - Respects user accessibility preferences (`prefers-reduced-motion: reduce`).
- **Zero Build Tools / Zero npm**: Runs straight out of the box with zero dependencies to install.

---

## 📁 Project Directory Structure

```text
html_css_sdp_project/
├── index.html           # Main semantic HTML5 document
├── css/
│   └── style.css        # Custom design system, typography & components
├── js/
│   └── main.js          # Interactive counters, tracker, lightbox & animations
├── images/              # High-resolution, royalty-free wellness photography
│   ├── hero-bg.jpg
│   ├── food-rainbow-bowl.jpg
│   ├── food-nuts-seeds.jpg
│   ├── food-plant-protein.jpg
│   ├── food-berries-citrus.jpg
│   ├── food-fermented-gut.jpg
│   ├── food-whole-grains.jpg
│   ├── exercise-cardio.jpg
│   ├── exercise-strength.jpg
│   ├── exercise-yoga.jpg
│   ├── exercise-stretching.jpg
│   ├── sleep-rest.jpg
│   ├── water-hydration.jpg
│   ├── gallery-1.jpg ... gallery-6.jpg
├── .gitignore           # Clean git repository hygiene
└── README.md            # Comprehensive project documentation
```

---

## 🚀 How to Run Locally

Since this is a lightweight, pure front-end project with CDN dependencies, no server or installation is needed:

1. **Directly via Browser**:
   - Double-click `index.html` or right-click and choose **Open With > Google Chrome / Microsoft Edge / Firefox**.

2. **Using a Local Live Server (Optional)**:
   - If using VS Code: Right-click `index.html` and select **"Open with Live Server"**.
   - Or via Python in terminal:
     ```bash
     python -m http.server 8000
     ```
     Then navigate to `http://localhost:8000` in your web browser.

---

## 👤 Author & Academic Attribution

- **Student Developer**: **Shubh Sharma**
- **Institution**: **The National Institute of Engineering (NIE), Mysuru**
- **Department**: Department of Computer Science & Engineering (CSE)
- **Project Type**: Skill Development Project (SDP) — Front-End Web Development
- **GitHub**: [@Smirk1308](https://github.com/Smirk1308)

---

## ⚖️ License & Disclaimer

- **License**: MIT Open Source.
- **Disclaimer**: All information published on JivanSathi is strictly for general health awareness and educational purposes. Always consult a certified medical practitioner or dietitian for specific health conditions or treatment plans.
