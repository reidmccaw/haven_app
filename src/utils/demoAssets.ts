/**
 * Demo Assets Configuration
 * 
 * To add demo images for Greg's House and Sera's Room:
 * 1. Place your demo images in the assets/demo/ folder
 * 2. Import them here using require()
 * 3. Add them to the appropriate arrays below
 * 
 * Example:
 * export const gregsHouseDemoImages = [
 *   require('../../assets/demo/greg-room-1.jpg'),
 *   require('../../assets/demo/greg-room-2.jpg'),
 * ];
 */

// Demo images for "Greg's House" project
// Add your images here by importing them:
// Example: require('../../assets/demo/greg-room-1.jpg')
export const gregsHouseDemoImages: any[] = [
  // Add your demo images here:
  // require('../../assets/demo/greg-room-1.jpg'),
  // require('../../assets/demo/greg-room-2.jpg'),
];

// Demo images for "Sera's Room" project
// Add your images here by importing them:
// Example: require('../../assets/demo/sera-room-1.jpg')
export const serasRoomDemoImages: any[] = [
  // Add your demo images here:
  // require('../../assets/demo/sera-room-1.jpg'),
  // require('../../assets/demo/sera-room-2.jpg'),
];

// Filename mappings for demo images
// These will be the filenames used in the document directory
export const getGregsHouseImageFilenames = (): string[] => {
  return gregsHouseDemoImages.map((_, index) => `demo_greg_${index + 1}.jpg`);
};

export const getSerasRoomImageFilenames = (): string[] => {
  return serasRoomDemoImages.map((_, index) => `demo_sera_${index + 1}.jpg`);
};




