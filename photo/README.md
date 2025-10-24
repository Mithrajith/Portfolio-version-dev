# Profile Images

This folder contains all the profile images that will be displayed in the ProfileAvatar component.

## Current Images
- `profile.jpeg` - Primary profile image
- `profile2.jpeg` - Secondary profile image

## Adding New Images

To add more profile images:

1. Add your image files to this folder
2. Update the `knownImages` array in `/src/lib/imageLoader.ts` to include your new image filenames
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

Example:
```typescript
const knownImages = [
  'profile.jpeg',
  'profile2.jpeg',
  'profile3.jpg',    // <- Add your new image here
  'profile4.png',    // <- And here
];
```

## Image Requirements

- **Size**: Recommended square aspect ratio (e.g., 400x400px)
- **Format**: JPEG, PNG, WebP, or GIF
- **File size**: Keep under 2MB for optimal loading performance
- **Quality**: High resolution recommended as images will be displayed in various sizes

## Features

The ProfileAvatar component supports:
- ✅ Click to cycle through images
- ✅ Right-click to go to previous image
- ✅ Keyboard navigation (←/→ arrow keys)
- ✅ Auto-rotation mode (press 'A' key)
- ✅ Image counter display
- ✅ Loading states and error handling
- ✅ Smooth animations and transitions
- ✅ Hover effects and visual feedback

## Technical Notes

- Images are preloaded for smooth transitions
- Failed image loads are automatically filtered out
- The component gracefully handles empty or single image scenarios
- All images are displayed with consistent styling and animations