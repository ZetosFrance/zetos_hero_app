import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      fill: {
        transparent: string;
        cyan: string;
        white: string;
        gray: string;
        darkAlpha: string;
        gradient: string;
        darkGray: string;
        pink: string;
        mediumGray: string;
        dark: string;
      };
      stroke: {
        gray: string;
        cyan: string;
        cyanAlpha: string;
        pink: string;
      };
    };
    typography: {
      fontFamily: {
        inter: string;
      };
      lineHeights: {
        xs: string;
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
      };
      fontWeights: {
        regular: number;
        bold: number;
      };
      fontSize: {
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
      };
    };
  }
} 