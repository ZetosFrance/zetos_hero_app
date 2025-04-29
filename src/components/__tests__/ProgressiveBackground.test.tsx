import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import { ProgressiveBackground } from '../ProgressiveBackground';

describe('ProgressiveBackground', () => {
  const mockProps = {
    lowResUrl: '/test-low.jpg',
    highResUrl: '/test-high.jpg',
    fallbackColor: '#f0f0f0',
    onError: jest.fn(),
  };

  beforeEach(() => {
    // Reset mock function
    mockProps.onError.mockClear();
  });

  it('renders with initial state', () => {
    render(<ProgressiveBackground {...mockProps} />);
    const background = screen.getByRole('img');
    expect(background).toBeInTheDocument();
    expect(background).toHaveStyle({ backgroundColor: mockProps.fallbackColor });
  });

  it('loads low resolution image first', async () => {
    // Mock successful image load
    const originalImage = window.Image;
    const mockImage = {
      onload: (() => {}) as any,
      onerror: (() => {}) as any,
      src: '',
    };
    
    window.Image = jest.fn().mockImplementation(() => mockImage);

    render(<ProgressiveBackground {...mockProps} />);

    // Simulate low-res image load
    await act(async () => {
      if (mockImage.onload) mockImage.onload();
    });

    const background = screen.getByRole('img');
    expect(background).toHaveStyle({ backgroundImage: `url(${mockProps.lowResUrl})` });

    // Restore original Image constructor
    window.Image = originalImage;
  });

  it('handles image load errors', async () => {
    // Mock failed image load
    const originalImage = window.Image;
    const mockImage = {
      onload: (() => {}) as any,
      onerror: (() => {}) as any,
      src: '',
    };
    
    window.Image = jest.fn().mockImplementation(() => mockImage);

    render(<ProgressiveBackground {...mockProps} />);

    // Simulate image load error
    await act(async () => {
      if (mockImage.onerror) mockImage.onerror();
    });

    expect(mockProps.onError).toHaveBeenCalled();
    const background = screen.getByRole('img');
    expect(background).toHaveStyle({ backgroundColor: mockProps.fallbackColor });

    // Restore original Image constructor
    window.Image = originalImage;
  });

  it('respects reduced motion preferences', () => {
    // Mock matchMedia
    window.matchMedia = jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    render(<ProgressiveBackground {...mockProps} />);
    const background = screen.getByRole('img');
    expect(background).toHaveClass('reduced-motion');
  });
}); 