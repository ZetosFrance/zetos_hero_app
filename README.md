# Zetos Hero App

A modern React application showcasing company profiles with a beautiful, responsive design and an immersive background.

## Recent Updates

### Background Implementation
- Implemented full-screen HD background using `hd-bg.png`
- Optimized background rendering for different screen sizes and resolutions
- Added proper mobile viewport handling
- Improved performance with hardware acceleration and image rendering optimizations

### Layout Improvements
- Centered all page content with proper hierarchy
- Implemented responsive grid system for company cards
- Added proper spacing and alignment throughout the application
- Optimized layout for both desktop and mobile views

### Styling Enhancements
- Updated global styles for better consistency
- Improved typography with centered text alignment
- Enhanced component styling with proper z-index management
- Added smooth transitions and animations

## Project Structure

```
src/
├── components/
│   ├── Card/
│   ├── Footer/
│   ├── Profile/
│   └── StickyNav/
├── pages/
│   ├── ChintecStory/
│   ├── AsutexStory/
│   └── ...
├── styles/
│   ├── GlobalStyles.ts
│   ├── theme.ts
│   └── styled.d.ts
└── App.tsx
```

## Technology Stack

- React 18
- TypeScript
- Styled Components
- Vite
- React Router DOM

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Development Guidelines

### Styling
- Use styled-components for component styling
- Follow the theme configuration in `src/styles/theme.ts`
- Maintain responsive design principles
- Use proper z-index layering as defined in the theme

### Components
- Keep components modular and reusable
- Follow TypeScript type definitions
- Implement proper prop validation
- Maintain accessibility standards

### Performance
- Optimize images before adding to `/public`
- Use proper lazy loading where appropriate
- Implement proper cleanup in components
- Follow React best practices for performance

## Deployment

The application is configured for deployment using Vite's build system:

```bash
npm run build
```

## Contributing

1. Create a feature branch from `dev_lead`
2. Make your changes
3. Test thoroughly
4. Create a pull request to `dev_lead`

## License

Private - All rights reserved

---
Last updated: 2024
Contact: dev_lead@zetos.fr

