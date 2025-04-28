import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    fill: {
      transparent: '#00000000',
      cyan: '#00ffff',
      white: '#ffffff',
      gray: '#9ca3af',
      darkAlpha: '#111827cc',
      gradient: 'linear-gradient(90deg, #00ffff 0%, #ff1177 100%)',
      darkGray: '#374151',
      pink: '#ff1177',
      mediumGray: '#4b5563',
      dark: '#0F0F0F'
    },
    stroke: {
      gray: '#e5e7eb',
      cyan: '#00ffff',
      cyanAlpha: '#06b6d433',
      pink: '#ff1177'
    }
  },
  typography: {
    fontFamily: {
      inter: 'Inter'
    },
    lineHeights: {
      xs: '14px',
      sm: '16px',
      base: '20px',
      md: '24px',
      lg: '30px',
      xl: '36px',
      '2xl': '48px'
    },
    fontWeights: {
      regular: 400,
      bold: 700
    },
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '30px',
      '3xl': '36px',
      '4xl': '48px'
    }
  }
}; 