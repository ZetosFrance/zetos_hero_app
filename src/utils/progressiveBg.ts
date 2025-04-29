/**
 * Handles progressive background loading and swapping
 * 1. Initial state: blur-bg.svg (from HTML)
 * 2. After DOMContentLoaded: low-bg.svg
 * 3. After app-ready event: hd-bg.png
 */

const swapBackground = (quality: 'blur' | 'low' | 'hd') => {
  document.documentElement.setAttribute('data-bg', quality);
};

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const initProgressiveBackground = () => {
  // Step 1: Initial blur background is set via HTML data-bg attribute

  // Step 2: On DOMContentLoaded or immediately if already loaded
  const switchToLowQuality = () => {
    preloadImage('/low-bg.svg')
      .then(() => swapBackground('low'))
      .catch(error => console.error('Failed to load low quality background:', error));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', switchToLowQuality);
  } else {
    switchToLowQuality();
  }

  // Step 3: After app is ready and HD image is loaded, swap to HD
  window.addEventListener('app-ready', async () => {
    try {
      await preloadImage('/hd-bg.png');
      swapBackground('hd');
    } catch (error) {
      console.error('Failed to load HD background:', error);
      // Keep the low quality background as fallback
    }
  });
}; 