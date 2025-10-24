/**
 * Utility functions for loading and managing profile images
 */

export interface ImageInfo {
  path: string;
  name: string;
  loaded: boolean;
}

/**
 * Get all available profile images from the photo folder
 */
export const getProfileImages = (): string[] => {
  // In a real application, you might want to fetch this from an API
  // or use dynamic imports with webpack/vite to scan the directory
  
  // List of known images in the photo folder
  // You can add more images here as you add them to the photo folder
  const knownImages = [
    'profile.jpeg',
    'profile2.jpeg',
    // Add more images here as needed:
    // 'profile3.jpg',
    // 'profile4.png',
    // 'profile5.webp',
  ];

  return knownImages.map(img => `/photo/${img}`);
};

/**
 * Preload an image and return a promise that resolves when loaded
 */
export const preloadImage = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

/**
 * Preload multiple images and return only the successfully loaded ones
 */
export const preloadImages = async (imagePaths: string[]): Promise<string[]> => {
  const loadPromises = imagePaths.map(async (path) => {
    try {
      await preloadImage(path);
      return path;
    } catch (error) {
      console.warn(`Failed to load image: ${path}`);
      return null;
    }
  });

  const results = await Promise.all(loadPromises);
  return results.filter((path): path is string => path !== null);
};

/**
 * Get image name from path for display purposes
 */
export const getImageName = (path: string): string => {
  return path.split('/').pop()?.split('.')[0] || 'Unknown';
};