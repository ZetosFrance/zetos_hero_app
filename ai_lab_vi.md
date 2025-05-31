# ZETOS Hero App - Visual Identity (VI) Elements
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-31**  
**Version: 1.0**  
**Purpose: Visual Identity specifications for ZETOS Hero App following UXPilot framework**

## 🎨 Brand Specifications

### Primary Colors
- **Cyan Accent**: #00FFFF - Primary brand color for CTAs, links, and key highlights
- **White**: #FFFFFF - Primary text color for maximum contrast
- **Pink Accent**: #FF1177 - Secondary accent color, used in gradients and special elements

### Secondary Colors
- **Gray**: #9CA3AF - Secondary text, labels, and subtle UI elements
- **Dark Alpha**: #111827CC - Semi-transparent dark for glass-morphism effects
- **Medium Gray**: #4B5563 - Additional gray tone for varied hierarchy
- **Dark Gray**: #374151 - Darker gray variant for emphasis
- **Dark Background**: #0F0F0F - Deep dark for high contrast areas

### Background Colors
- **Pure Black**: #000000 - Base HTML background
- **Transparent**: #00000000 - Fully transparent fill
- **Cyan Alpha**: #06B6D433 - Semi-transparent cyan for borders and overlays

### Special Effects
- **Gradient**: linear-gradient(90deg, #00FFFF 0%, #FF1177 100%) - Cyan to pink gradient
- **Glass Effect**: backdrop-filter: blur(8px) with dark alpha background

### Error/Warning/Success States
- **Error**: #EF4444 - Bright red for error states
- **Warning**: #F59E0B - Amber for warnings
- **Success**: #10B981 - Emerald green for success

## 📝 Typography System

### Font Family
- **Primary Font**: Inter
- **Fallback Stack**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
- **Font Weights**: 400 (regular), 700 (bold)

### Font Scale
- **Small (sm)**: 14px
- **Base**: 16px
- **Large (lg)**: 20px
- **XL**: 24px
- **2XL**: 30px
- **3XL**: 36px
- **4XL**: 48px

### Line Heights
- **XS**: 14px
- **SM**: 16px
- **Base**: 20px
- **MD**: 24px
- **LG**: 30px
- **XL**: 36px
- **2XL**: 48px

### Heading Hierarchy
- **H1**: 48px/48px bold (mobile: 30px/30px)
- **H2**: 36px/36px bold
- **H3**: 30px/30px bold
- **H4**: 24px/30px bold
- **Body**: 16px/20px regular
- **Small**: 14px/16px regular

## 📐 Spacing System

### Base Unit
- **Base**: 8px (0.5rem)

### Spacing Scale
- **0.25rem**: 4px
- **0.5rem**: 8px
- **0.75rem**: 12px
- **1rem**: 16px
- **1.25rem**: 20px
- **1.5rem**: 24px
- **2rem**: 32px
- **4rem**: 64px

### Component Padding
- **Small**: 0.5rem (8px)
- **Medium**: 0.75rem (12px)
- **Large**: 1.5rem (24px)
- **XL**: 2rem (32px)

### Border Radius
- **Small**: 4px (buttons, inputs)
- **Medium**: 8px (cards, containers)
- **Large**: 50% (avatars, circular elements)

## 🎯 Design Principles

### Style Direction
- **Modern**: Clean, minimalist interface with focus on content
- **Futuristic**: Cyan/pink color scheme with glass-morphism effects
- **Professional**: Balanced use of color and whitespace
- **Tech-Forward**: Dark theme with neon accents

### Visual Effects
- **Shadows**: Minimal shadows, rely on borders and glass effects
- **Borders**: 1px solid with themed colors (cyan alpha for subtle, cyan for emphasis)
- **Glass-morphism**: backdrop-filter: blur(8px) with semi-transparent backgrounds
- **Gradients**: Used sparingly for CTAs and special elements

### Interaction Patterns
- **Transitions**: 200ms-300ms ease for smooth interactions
- **Hover States**: 
  - Opacity: 0.9 for solid elements
  - Border color: Brighten from alpha to full color
  - Transform: scale(1.1) for small elements
- **Active States**: Slightly darker/pressed appearance
- **Focus States**: Cyan outline for accessibility

### Animation Principles
- **Performance First**: Use transform and opacity for smooth 60fps
- **Respect Preferences**: Honor prefers-reduced-motion
- **Purposeful**: Animations enhance UX, not distract
- **Consistent**: 300ms standard duration

## 🖼️ Logo & Brand Assets

### Avatar/Profile
- **Size**: 100x100px (mobile), 120x120px (desktop)
- **Border**: 4px gradient border (cyan to pink)
- **Shape**: Perfect circle (border-radius: 50%)

### Company Logos
- **Size**: 24x24px (mobile), 28x28px (default), 32x32px (desktop)
- **Format**: SVG preferred for scalability
- **Shape**: Circular crop for consistency
- **Hover**: scale(1.1) transform

### Background Assets
- **HD Background**: /hd-bg.png - High-resolution hero background
- **Blur Background**: /blur-bg.svg - SVG blur pattern
- **Low Background**: /low-bg.svg - Low-quality placeholder
- **Divider**: /div0.svg - Section divider graphic

## 📱 Responsive Breakpoints

### Mobile
- **iPhone 14 Specific**: 390px
- **General Mobile**: < 768px

### Tablet
- **Standard**: 768px - 1024px

### Desktop
- **Standard**: > 1024px
- **Max Content Width**: 1200px
- **Max Page Width**: 1440px

## 🎨 Component Visual Standards

### Buttons
- **Primary**: Gradient background, white text, 4px radius
- **Secondary**: Transparent bg, cyan border, cyan text
- **Padding**: 0.75rem 2rem (desktop), 0.75rem 1.5rem (mobile)
- **Font**: Bold, base size

### Cards
- **Background**: Dark alpha with glass effect
- **Border**: 1px solid cyan alpha
- **Radius**: 8px
- **Padding**: 1.5rem (desktop), 1rem (mobile)
- **Hover**: Border brightens to full cyan

### Forms
- **Input Background**: Dark alpha
- **Border**: 1px solid gray, cyan on focus
- **Radius**: 4px
- **Padding**: 0.75rem
- **Text**: White color

### Navigation
- **Background**: Dark alpha with blur
- **Height**: 60px
- **Sticky**: Transform translateY animations
- **Mobile**: Hamburger menu pattern

## 🌟 Brand Personality

### Visual Tone
- **Innovative**: Cutting-edge tech aesthetic
- **Trustworthy**: Clean, organized layouts
- **Premium**: High-quality visuals and smooth interactions
- **Accessible**: High contrast, clear hierarchy

### Color Psychology
- **Cyan**: Innovation, technology, future
- **Pink**: Creativity, energy, uniqueness
- **Dark**: Sophistication, focus, premium
- **White**: Clarity, simplicity, openness

---

**Document Version:** 1.0  
**Last Updated:** 2025-05-31  
**Next Review:** After implementation of design system components