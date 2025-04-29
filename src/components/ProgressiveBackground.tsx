import { useEffect, useState, useCallback } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import '../styles/ProgressiveBackground.css';

interface ProgressiveBackgroundProps {
  lowResUrl: string;
  highResUrl: string;
  fallbackColor?: string;
  className?: string;
  maxRetries?: number;
  onError?: (error: Error) => void;
}

interface LoadingState {
  lowResLoaded: boolean;
  highResLoaded: boolean;
  error: Error | null;
  retryCount: number;
}

export const ProgressiveBackground: React.FC<ProgressiveBackgroundProps> = ({
  lowResUrl,
  highResUrl,
  fallbackColor = '#f0f0f0',
  className = '',
  maxRetries = 3,
  onError,
}) => {
  const [state, setState] = useState<LoadingState>({
    lowResLoaded: false,
    highResLoaded: false,
    error: null,
    retryCount: 0,
  });

  const prefersReducedMotion = useReducedMotion();

  const loadImage = useCallback((url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    });
  }, []);

  const loadHighResImage = useCallback(async () => {
    if (state.retryCount >= maxRetries) {
      const error = new Error('Max retries exceeded for high-res image');
      setState(prev => ({ ...prev, error }));
      onError?.(error);
      return;
    }

    try {
      await loadImage(highResUrl);
      setState(prev => ({ ...prev, highResLoaded: true }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        retryCount: prev.retryCount + 1,
        error: error as Error,
      }));
      onError?.(error as Error);
      
      // Retry after a delay
      setTimeout(() => {
        loadHighResImage();
      }, 2000);
    }
  }, [highResUrl, loadImage, maxRetries, onError, state.retryCount]);

  useEffect(() => {
    // Load low-res image first
    loadImage(lowResUrl)
      .then(() => {
        setState(prev => ({ ...prev, lowResLoaded: true }));
        // Start loading high-res image after low-res is loaded
        return loadHighResImage();
      })
      .catch((error) => {
        setState(prev => ({ ...prev, error }));
        onError?.(error);
      });
  }, [lowResUrl, loadHighResImage, loadImage, onError]);

  // Determine which background image to show
  const backgroundImage = state.highResLoaded
    ? `url(${highResUrl})`
    : state.lowResLoaded
    ? `url(${lowResUrl})`
    : 'none';

  // Handle error state
  if (state.error && !state.lowResLoaded && !state.highResLoaded) {
    return (
      <div
        className={`progressive-background ${className}`}
        style={{ backgroundColor: fallbackColor }}
        role="img"
        aria-label="Background"
      />
    );
  }

  return (
    <div
      className={`progressive-background ${className} ${
        state.highResLoaded ? 'loaded' : ''
      } ${prefersReducedMotion ? 'reduced-motion' : ''}`}
      style={{
        backgroundImage,
      }}
      role="img"
      aria-label="Background"
    />
  );
}; 