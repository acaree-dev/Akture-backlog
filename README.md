# Akture - Sports Video Capture Platform

<div align="center">
  <img src="src/assets/logo.svg" alt="Akture Logo" width="120" height="120">
  
  **ALL YOUR MOMENTS, PERFECTLY PRESERVED**
  
  *Your best sports memories, at your fingertips.*
</div>

## 🏀 About Akture

Akture is a revolutionary sports video capture platform that empowers athletes
by making high-quality sports footage accessible to all. We foster a strong,
connected local sports community where every moment deserves to be celebrated,
studied, and shared without barriers.

### Our Mission

We aim to empower every athlete by making high-quality sports footage accessible
to all, while fostering a strong, connected local sports community. Your moments
deserve to be celebrated, studied, and shared without barriers.

### Our Vision

We envision a world where every athlete has access to their sports footage,
allowing them to relive their best moments, share their highlights, and improve
their game.

## ⚡ Built with Modern Technology

This project leverages cutting-edge web technologies for optimal performance and
user experience:

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router for
  fast, scalable applications
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for
  better development experience
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for
  rapid UI development
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion
  library for React

## 🚀 Key Features

### For Athletes

- **🎯 Competitive Advantage**: Enhance your game with instant access to
  high-definition footage
- **🎬 Relive the Moment**: Never miss a moment with seamless access to every
  highlight
- **📤 Share**: Showcase standout moments with teammates, coaches, and friends
- **📱 Easy to Use**: Simple QR code scanning process for quick video access

### For Venues

- **📣 Promote Your Facility**: Enhance your sports facility with Akture live
  streaming. Parents can watch and record games, coaches can review athlete
  performance, and players can capture and share memorable moments. Use the
  footage to market and promote your facility.

- **🏆 Competitive Advantage**: Players return to locations where they can
  purchase memories or save and share it on all social media platforms.
- **🛡️ Enhanced Security**: Camera systems provide added security.
- **⚡ Simple Implementation**: Easy system for guest video purchases or
  subscription members.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Max-Aref/Akture.git
cd Akture
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
akture/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout with Akture branding
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable UI components (ready for future use)
│   ├── sections/            # Page sections and major components
│   │   ├── AktureCarousel.tsx # Main hero carousel with sports images
│   │   ├── Header.tsx       # Navigation header with glassmorphism
│   │   ├── TrendingPromo.tsx # Marquee promotional banner
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features showcase
│   │   ├── Testimonials.tsx # Customer testimonials
│   │   ├── CallToAction.tsx # Call-to-action section
│   │   ├── LogoTicker.tsx   # Brand logos ticker
│   │   └── Footer.tsx       # Site footer
│   └── assets/              # Static assets and images
│       ├── Akture-logo.svg  # Main Akture logo
│       ├── carousel-images/ # Carousel background images
│       ├── pickleball1.jpg  # Pickleball promotional images
│       ├── pickleball2.jpg
│       ├── button-bg.jpg    # Button background texture
│       ├── avatar-*.png     # User avatar placeholders
│       ├── logo-*.png       # Partner/brand logos
│       ├── social-*.svg     # Social media icons
│       └── [other assets]   # Various UI icons and images
├── public/                  # Public static files
│   └── favicon.svg          # Akture logo favicon
├── tailwind.config.ts       # Tailwind CSS configuration with custom animations
├── next.config.mjs          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## 🎥 Key Components

### AktureCarousel

The main hero carousel component featuring:

- **4 Sports Slides**: Basketball, pickleball, soccer, and softball imagery
- **Auto-play**: 6-second intervals with smooth transitions
- **Interactive Controls**: Navigation arrows, slide indicators, and pause/play
- **Touch Support**: Swipe gestures for mobile devices
- **Accessibility**: Full keyboard navigation and ARIA labels

### Header

Navigation component with:

- **Glassmorphism Design**: Modern frosted glass effect
- **Responsive Layout**: Mobile-friendly with collapsible menu
- **Akture Branding**: Logo integration and brand colors

### TrendingPromo

Promotional banner featuring:

- **Marquee Animation**: Smooth infinite scrolling text
- **Brand Messaging**: Key value propositions for athletes and venues
- **Custom Timing**: 150-second animation cycle

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with optimized breakpoints
  (375px, 768px, 1200px)
- **Modern Animations**: Custom Tailwind animations including marquee scrolling
  and carousel transitions
- **Hero Carousel**: Full-screen interactive carousel featuring basketball,
  pickleball, soccer, and softball
- **Glassmorphism Effects**: Modern glass-like design elements in navigation
  header
- **Marquee Animations**: Smooth scrolling promotional banners with infinite
  loop
- **Sports-Focused Imagery**: High-quality sports photography optimized for web
  performance
- **Performance Optimized**: Image optimization, lazy loading, and code
  splitting with Next.js
- **Accessibility**: WCAG compliant with semantic HTML, ARIA labels, and
  keyboard navigation
- **SEO Optimized**: Meta tags, structured data, and optimized Core Web Vitals
- **Touch-Friendly**: Mobile-optimized with swipe gestures and responsive
  controls

## 📱 Responsive Breakpoints

- **Mobile**: 375px and up
- **Tablet**: 768px and up
- **Desktop**: 1200px and up

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

The application is optimized for deployment on:

- **[Vercel](https://vercel.com/)** (Recommended)
- **[AWS Amplify](https://aws.amazon.com/amplify/)**

## 📞 Contact

- **Website**: [akture.video](https://www.akture.video/)
- **LinkedIn**:
  [Akture Company](https://linkedin.com/company/crazed-entertainment/)
- **Instagram**: [@akture.video](https://instagram.com/akture.video)

## 📄 License

© 2025 Akture. All rights reserved.

---

<div align="center">
  <strong>Empowering athletes through accessible sports footage</strong>
</div>
