# ZETOS Hero App - UX/UI Design System
**Classification: ZETOS-CONFIDENTIAL ▲**  
**Created: 2025-05-31**  
**Version: 1.0**  
**Purpose: UX/UI Design specifications for ZETOS Hero App following UXPilot Component-First framework**

## 📋 Project Context

### Overview
ZETOS Hero App is a portfolio showcase application for a tech-visionary and serial entrepreneur, featuring company ventures, success stories, and professional achievements. The design follows a modern, futuristic aesthetic with glass-morphism effects and neon accents.

### Target Audience
- **Primary**: Potential investors, business partners, and clients
- **Secondary**: Tech enthusiasts, startup community, media
- **Tertiary**: Job seekers, students, industry professionals

### Design Goals
1. **Showcase Excellence**: Highlight achievements and ventures effectively
2. **Build Trust**: Professional appearance with premium feel
3. **Drive Engagement**: Clear CTAs for business inquiries
4. **Mobile First**: Optimized for mobile viewing (iPhone 14 primary target)

## 🧩 Component Library

### BUTTONS

#### Primary Button (Gradient CTA)
```
- Background: linear-gradient(90deg, #00FFFF 0%, #FF1177 100%)
- Text: #FFFFFF, bold, 16px
- Padding: 0.75rem 2rem
- Border Radius: 4px
- States:
  - Default: Full opacity
  - Hover: opacity: 0.9
  - Active: opacity: 0.8
  - Disabled: opacity: 0.5, cursor: not-allowed
- Mobile: padding: 0.75rem 1.5rem, max-width: 180px
```

#### Secondary Button (Outline)
```
- Background: transparent
- Border: 1px solid #00FFFF
- Text: #00FFFF, regular, 16px
- Padding: 0.75rem 2rem
- Border Radius: 4px
- States:
  - Default: Transparent background
  - Hover: background: #06B6D433
  - Active: background: #06B6D466
  - Focus: outline: 2px solid #00FFFF
- Mobile: padding: 0.5rem, font-size: 14px
```

### CARDS

#### Company Card
```
- Background: #111827CC (dark alpha)
- Border: 1px solid #06B6D433 (cyan alpha)
- Border Radius: 8px
- Padding: 1.5rem (desktop), 1rem (mobile)
- Min Width: 320px (desktop), 100% (mobile)
- Effects: backdrop-filter: blur(8px)
- States:
  - Default: Border cyan alpha
  - Hover: Border #00FFFF
- Content Structure:
  - Logo (32x32px) + Company name/category
  - Divider graphic
  - Metric row (label + value)
  - Read Story button
```

#### Stats Card (NumberBox)
```
- Background: #111827CC
- Border: 1px solid #00FFFF
- Border Radius: 8px
- Padding: 1.5rem 2rem
- Min Width: 160px (desktop), 140px (mobile)
- Effects: backdrop-filter: blur(8px)
- Content: Animated number + label
```

### NAVIGATION

#### Sticky Navigation Bar
```
- Background: #111827E6 (90% opacity)
- Height: 60px
- Position: Fixed top
- Effects: backdrop-filter: blur(12px)
- Behavior: Hide on scroll down, show on scroll up
- Content:
  - Logo/Home link (left)
  - Support link (right)
- Mobile: Same layout, smaller padding
```

### TYPOGRAPHY COMPONENTS

#### Hero Title (H1)
```
- Font: Inter Bold
- Size: 30px (desktop), 24px (mobile)
- Color: #FFFFFF
- Line Height: 1.2
- Text Align: Center
- Margin: 0 0 1rem
```

#### Section Title (H2)
```
- Font: Inter Bold
- Size: 36px
- Color: #FFFFFF
- Line Height: 1.2
- Gradient Option: background-clip for special titles
```

#### Card Title (H3)
```
- Font: Inter Bold
- Size: 20px (desktop), 16px (mobile)
- Color: #FFFFFF
- Margin: 0
```

#### Body Text
```
- Font: Inter Regular
- Size: 16px
- Color: #FFFFFF
- Line Height: 1.5 (24px)
- Max Width: 800px for readability
```

#### Label Text
```
- Font: Inter Regular
- Size: 14px
- Color: #9CA3AF
- Line Height: 1.14 (16px)
```

### INTERACTIVE ELEMENTS

#### Avatar Container
```
- Size: 100x100px (mobile), 120x120px (desktop)
- Border: 4px gradient (#00FFFF to #FF1177)
- Shape: Circle (border-radius: 50%)
- Content: Profile image
- Hover: Subtle scale effect
```

#### Logo Link
```
- Size: 28x28px (default), 32x32px (desktop), 24x24px (mobile)
- Shape: Circle
- Transition: transform 0.3s ease
- Hover: scale(1.1)
```

#### Animated Number
```
- Font: Inter Bold
- Size: 48px (desktop), 36px (mobile)
- Color: #00FFFF
- Animation: Rolling number effect (5 steps)
- Duration: 1.5s total
- Respects: prefers-reduced-motion
```

### LAYOUT COMPONENTS

#### Page Container
```
- Max Width: 1440px
- Padding: 0 20px
- Min Height: 100vh
- Display: Flex column
- Align: Center
```

#### Main Content
```
- Max Width: 1200px
- Padding: 4rem 0 (desktop), 2rem 0 (mobile)
- Display: Flex column
- Align: Center
- Gap: 2rem
```

#### Card Grid
```
- Display: Grid
- Columns: 2 (desktop), 1 (mobile)
- Gap: 2rem
- Max Width: 1200px
- Breakpoint: 768px
```

### SPECIAL EFFECTS

#### Glass Card Effect
```
background: #111827CC;
backdrop-filter: blur(8px);
border: 1px solid #06B6D433;
```

#### Gradient Text
```
background: linear-gradient(90deg, #00FFFF 0%, #FF1177 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

#### Progressive Background
```
- Low quality placeholder loads first
- HD image loads progressively
- Smooth fade transition
- Fixed attachment for parallax
```

## 📐 Layout Templates

### 1. Homepage Layout
```
Structure:
├── Fixed Background (HD image)
├── Sticky Navigation
├── Main Content
│   ├── Profile Section
│   │   ├── Avatar
│   │   ├── Title
│   │   ├── Stats Row (3 boxes)
│   │   └── CTA Button
│   └── Company Grid
│       └── 4 rows × 2 columns of cards
└── Footer
```

### 2. Story Page Layout
```
Structure:
├── Fixed Background
├── Sticky Navigation
├── Story Container (max-width: 800px)
│   ├── Back Navigation
│   ├── Company Header
│   ├── Hero Section
│   ├── Content Sections
│   └── CTA Section
└── Footer
```

### 3. Mobile Layout Adaptations
```
Changes at 390px:
- Single column grid
- Reduced padding (1rem)
- Smaller fonts (base: 14px)
- Full-width buttons
- Stacked stats boxes
- Simplified navigation
```

## 🔄 User Flows

### Primary User Journey
```
1. Landing Page
   - View hero profile
   - See achievements (animated numbers)
   - Browse company cards
   - Click "Let's Talk" or "Read Story"

2. Story Page
   - Read company background
   - View achievements
   - Understand services
   - Contact via CTA

3. Contact Action
   - Email link opens default client
   - Pre-filled subject line
   - Professional email template
```

### Mobile User Flow
```
1. Optimized for thumb navigation
2. Sticky nav for easy access
3. Smooth scrolling between sections
4. Touch-friendly tap targets (44px min)
5. Swipe gestures considered
```

## 🎯 Interaction Patterns

### Hover States
- **Cards**: Border brightens from alpha to full cyan
- **Buttons**: Opacity change or background fill
- **Links**: Underline or color change
- **Logos**: Scale transform (1.1x)

### Click/Tap Feedback
- **Immediate**: Visual feedback within 100ms
- **Buttons**: Active state with darker appearance
- **Cards**: Subtle press effect
- **Navigation**: Instant response

### Loading States
- **Progressive Images**: Low → High quality fade
- **Animated Numbers**: Smooth rolling animation
- **Page Transitions**: Maintained header/footer

### Scroll Behaviors
- **Smooth Scrolling**: Native CSS smooth
- **Sticky Nav**: Hide/show on scroll direction
- **Parallax Background**: Fixed attachment
- **Lazy Loading**: Images load on viewport entry

## 📱 Responsive Design

### Mobile First Approach
```
Base styles: Mobile (390px)
├── @media (min-width: 768px) - Tablet
└── @media (min-width: 1024px) - Desktop
```

### Breakpoint Behaviors
```
390px (iPhone 14):
- Single column layout
- Reduced spacing (1rem gaps)
- Smaller typography scale
- Full-width CTAs
- Simplified animations

768px (Tablet):
- 2-column grid appears
- Increased spacing
- Desktop font sizes
- Side padding increases

1024px+ (Desktop):
- Maximum content widths applied
- Full animations enabled
- Hover states active
- Extended padding
```

## 🚀 Performance Optimizations

### Image Strategy
- **Progressive Loading**: Low → High quality
- **Format**: WebP with PNG fallback
- **Lazy Loading**: Intersection Observer
- **Caching**: 15-minute browser cache

### Animation Performance
- **GPU Acceleration**: Transform/opacity only
- **Will-change**: Applied to animated elements
- **RAF**: RequestAnimationFrame for smoothness
- **Reduced Motion**: Respected via media query

### Code Optimization
- **Component-based**: Reusable styled-components
- **Tree Shaking**: Minimal bundle size
- **Code Splitting**: Route-based splitting
- **CSS-in-JS**: Scoped styles, no conflicts

## ♿ Accessibility Standards

### WCAG AA Compliance
- **Color Contrast**: 4.5:1 minimum for text
- **Focus Indicators**: Visible cyan outlines
- **Keyboard Navigation**: Full support
- **Screen Readers**: Semantic HTML, ARIA labels

### Interactive Elements
- **Touch Targets**: 44x44px minimum
- **Hover Alternatives**: Touch-friendly on mobile
- **Error States**: Clear visual indicators
- **Loading States**: Announced to screen readers

## 🎨 Design Tokens

```javascript
{
  "colors": {
    "primary": "#00FFFF",
    "secondary": "#FF1177",
    "text": {
      "primary": "#FFFFFF",
      "secondary": "#9CA3AF"
    },
    "background": {
      "dark": "#111827CC",
      "darker": "#0F0F0F"
    },
    "border": {
      "default": "#06B6D433",
      "hover": "#00FFFF"
    }
  },
  "spacing": {
    "xs": 4,
    "sm": 8,
    "md": 16,
    "lg": 24,
    "xl": 32,
    "2xl": 64
  },
  "typography": {
    "fontFamily": "Inter",
    "fontSize": {
      "sm": 14,
      "base": 16,
      "lg": 20,
      "xl": 24,
      "2xl": 30,
      "3xl": 36,
      "4xl": 48
    }
  },
  "borderRadius": {
    "sm": 4,
    "md": 8,
    "full": "50%"
  },
  "effects": {
    "blur": "8px",
    "transition": "300ms ease"
  }
}
```

## 📝 Implementation Notes

### Component Hierarchy
1. **Atomic**: Buttons, links, labels
2. **Molecular**: Cards, navigation items
3. **Organism**: Header, footer, grids
4. **Templates**: Page layouts
5. **Pages**: Specific implementations

### State Management
- **Local State**: Component-level with hooks
- **Navigation**: React Router for routing
- **Animations**: Refs and effects for control
- **Responsive**: Window listeners for breakpoints

### Testing Checklist
- [ ] All interactive states work
- [ ] Responsive breakpoints correct
- [ ] Animations perform at 60fps
- [ ] Accessibility standards met
- [ ] Cross-browser compatibility
- [ ] Touch gestures smooth
- [ ] Loading states clear
- [ ] Error states handled

---

**Document Version:** 1.0  
**Component Count:** 15+ core components  
**Last Updated:** 2025-05-31  
**Next Review:** After component library implementation