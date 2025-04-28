import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.inter}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.fill.dark};
    color: ${({ theme }) => theme.colors.fill.white};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeights.base};
  }

  #root {
    width: 100%;
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
    line-height: ${({ theme }) => theme.typography.lineHeights['2xl']};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    line-height: ${({ theme }) => theme.typography.lineHeights.xl};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
    line-height: ${({ theme }) => theme.typography.lineHeights.lg};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  }

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeights.base};
  }

  button {
    font-family: inherit;
    border: none;
    cursor: pointer;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }
`; 