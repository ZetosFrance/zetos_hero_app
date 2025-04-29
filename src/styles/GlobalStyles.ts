import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    background-color: #000000;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    width: 100%;
    font-family: ${({ theme }) => theme.typography.fontFamily.inter}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: transparent;
    color: #ffffff;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Fix for mobile viewport height issues */
    @supports (-webkit-touch-callout: none) {
      min-height: -webkit-fill-available;
    }
  }

  #root {
    min-height: 100vh;
    width: 100%;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    line-height: ${({ theme }) => theme.typography.lineHeights['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    text-align: center;
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    line-height: ${({ theme }) => theme.typography.lineHeights.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    text-align: center;
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    line-height: ${({ theme }) => theme.typography.lineHeights.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    text-align: center;
  }

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeights.base};
    text-align: center;
  }
`; 