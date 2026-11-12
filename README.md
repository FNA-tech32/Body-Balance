# Body Balance 🏋️‍♂️

> **Body Balance** — A Modern, Responsive Fitness Club & Gym Landing Page built with React.js, Framer Motion, and CSS3.

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0-black?logo=framer)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

---

## 🌟 Overview

**Body Balance** is an interactive, high-converting fitness club and gym landing page designed to inspire prospective members to shape their ideal physique. The web application features dynamic animations, real-time counters, curated fitness programs, transparent membership tiers, genuine member testimonials, and an integrated contact & registration form with seamless **WhatsApp instant booking** supporting both **primary and alternative contact details**.

---

## 🚀 Key Features

- **⚡ Modern & Responsive Design**: Pixel-perfect layout tailored for desktops, tablets, and smartphones.
- **🏃‍♂️ Hero Section with Dynamic Motion**:
  - Animated advertisement banner and bold stroke-text headings.
  - Interactive animated widgets displaying real-time heart rate (116 bpm) and calories burned (220 kcal) powered by **Framer Motion**.
  - Animated live counters: **140+ expert coaches**, **978+ members joined**, and **50+ fitness programs**.
  - Quick action buttons linking to programs and membership tiers.
- **💪 Comprehensive Fitness Programs**:
  - **Strength Training**: Muscle building and progressive overload training.
  - **Cardio Training**: High-intensity sequential workouts (20–30 mins).
  - **Fat Burning**: High metabolic burn routines for sustainable weight loss.
  - **Health & Fitness**: General mobility, cardiovascular health, and wellness routines.
- **🏆 Why Choose Us**:
  - 140+ certified fitness trainers.
  - Smarter, high-efficiency workout plans.
  - 1 free trial program for every new member.
  - Official brand partnerships (Nike, Adidas, New Balance).
- **💳 Membership Plans**:
  - **Basic Plan ($25)**: 2 hours of daily gym access, coach consultation, and community access.
  - **Premium Plan ($30)**: 5 hours of workout access, dedicated trainer sessions, and minibar perks.
  - **Pro Plan ($45)**: 8 hours of training, private personal coaching, and free Body Balance merchandise.
- **💬 Testimonials Carousel**:
  - Animated slider showcasing real member success stories with spring animations and custom arrow controls.
- **📬 Newsletter & Direct Inquiries (Join Us)**:
  - Integrated with **EmailJS** for direct inbox message delivery.
- **📱 Contact & WhatsApp Registration with Alternative Contact Support**:
  - Dedicated contact card with facility details, working hours, primary phone, and alternative hotline.
  - Form fields: Name, Email, Primary Contact Number, **Alternative Contact Number (Optional)**, Age, Plan Selection, and Message.
  - Client-side validation ensuring valid phone numbers and inputs.
  - Instant **WhatsApp integration** (`wa.me`) that pre-populates a structured inquiry message with all details (including alternative contact info) directly to the gym's desk.
  - Reset form functionality for smooth user experience.
- **🌐 Comprehensive Footer**:
  - Complete facility address with Google Maps navigation link.
  - Primary contact, alternative phone lines, and official email addresses.
  - Direct 1-click WhatsApp hotline button.
  - Social media handles (Facebook, Instagram, WhatsApp, Google Maps).

---

## 📞 Official Contact Details

| Detail | Information |
|---|---|
| **Brand Name** | **Body Balance** |
| **Primary Contact** | [`+91 87665 39293`](tel:+918766539293) |
| **Alternative Contact** | [`+91 88888 17886`](tel:+918888817886) |
| **Additional Hotline** | [`+91 43635 57535`](tel:+914363557535) |
| **Email (General Inquiries)** | [`contact@bodybalance.com`](mailto:contact@bodybalance.com) |
| **Email (Support & Info)** | [`info@bodybalance.com`](mailto:info@bodybalance.com) |
| **WhatsApp Hotline** | [Chat on WhatsApp (`+91 87665 39293`)](https://wa.me/+918766539293?text=Hello%20Body%20Balance) |
| **Gym Location** | Satara Parisar, Aurangabad, Maharashtra, India |
| **Working Hours** | Mon – Sat: 6:00 AM – 10:00 PM \| Sun: 7:00 AM – 1:00 PM |

---

## 🛠️ Tech Stack

- **Frontend**: [React.js 18](https://react.dev/) (Hooks, Functional Components)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Counters**: [number-counter](https://www.npmjs.com/package/number-counter)
- **Smooth Scrolling**: [react-scroll](https://www.npmjs.com/package/react-scroll)
- **Email Service**: [@emailjs/browser](https://www.emailjs.com/)
- **Styling**: CSS3 (Custom Variables, Flexbox, CSS Grid, Media Queries)
- **Testing**: [Cypress](https://www.cypress.io/)

---

## 📁 Project Directory Structure

```text
Body-Balance/
├── public/
│   ├── favicon.ico
│   ├── index.html              # HTML shell with Body Balance metadata & font imports
│   ├── logo.svg                # Body Balance brand vector logo
│   ├── logo.png                # Brand icon
│   ├── manifest.json           # PWA web manifest
│   └── robots.txt
├── src/
│   ├── assets/                 # Brand assets, SVGs, program images, icons
│   │   ├── logo.svg            # Body Balance navbar logo
│   │   ├── dumbell.svg / .png  # Fitness icons
│   │   ├── hero_image.png      # Hero athlete visual
│   │   ├── whatsapp-logo.jpg   # WhatsApp CTA badge
│   │   └── ...
│   ├── Components/
│   │   ├── Header/             # Navbar with brand logo, smooth scroll links, & mobile toggle
│   │   ├── Hero/               # Hero banner, motion cards, live counters, CTAs
│   │   ├── Programs/           # Strength, cardio, fat burn, health fitness cards
│   │   ├── Reasons/            # "Why Choose Us", benefits list, partner brands
│   │   ├── Plans/              # Basic, Premium, and Pro membership pricing cards
│   │   ├── Testimonials/       # Animated member review slider
│   │   ├── Join/               # Level up section with EmailJS form
│   │   ├── Contact/            # Contact card with Primary & Alt details + WhatsApp form
│   │   └── Footer/             # Multi-column footer, social icons, and copyright
│   ├── data/
│   │   ├── plansData.jsx       # Pricing tiers, feature lists, and SVG icons
│   │   ├── programsData.jsx    # Workout programs definitions
│   │   └── testimonialsData.jsx# Member testimonials data
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Global layout & background styles
│   ├── index.js                # React DOM entry point
│   └── index.css               # Global reset, typography, and theme variables
├── cypress.config.js           # Cypress configuration
├── package.json                # Project dependencies & scripts
└── README.md                   # Project documentation
```

---

## 💻 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version `16.x` or higher recommended)
- `npm` (comes with Node.js) or `yarn`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Body-Balance.git
   cd Body-Balance
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```
   The application will run locally at [http://localhost:3000](http://localhost:3000).

4. **Build for production:**
   ```bash
   npm run build
   ```
   Compiles optimized production assets into the `build/` folder.

5. **Run tests:**
   ```bash
   npm test
   ```

---

## ⚙️ Configuration & Customization

### Updating Contact & Alternative Phone Numbers

- **Contact Form (`src/Components/Contact/Contact.jsx`)**:
  - The WhatsApp target number is defined in the `whatsapp` function:
    ```javascript
    const url = `https://wa.me/+918766539293?text=${encodeURIComponent(query)}`;
    ```
  - The left info panel contains the primary number (`+91 87665 39293`), alternative number (`+91 88888 17886`), hotline (`+91 43635 57535`), and email (`contact@bodybalance.com`).
- **Footer Section (`src/Components/Footer/Footer.jsx`)**:
  - Update direct telephone links (`tel:`) and email links (`mailto:`).
  - Update social media URLs and Google Maps link.

### Configuring EmailJS

To connect your own EmailJS account in `src/Components/Join/Join.jsx`:
1. Sign up at [EmailJS](https://www.emailjs.com/).
2. Replace `service_id`, `template_id`, and `public_key` with your credentials:
   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY');
   ```

### Customizing Theme & Colors

Colors and global theme tokens are defined in `src/App.css` and `src/index.css`:
```css
:root {
  --appColor: #3c3f45;
  --lightgray: #d9d9d9;
  --gray: #9c9c9c;
  --orange: #f48915;
  --darkGrey: #464d53;
  --caloryCard: #656565;
  --planCard: linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%);
}
```

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/Body-Balance/issues).

---

© 2026 **Body Balance**. All Rights Reserved.
