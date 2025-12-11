# Demo Images for Greg's House and Sera's Room

This folder contains demo images that will be automatically copied to the app when it's first launched on any device.

## How to Add Demo Images

1. **Place your images in this folder** (`assets/demo/`):
   - For Greg's House: e.g., `greg-room-1.jpg`, `greg-room-2.jpg`
   - For Sera's Room: e.g., `sera-room-1.jpg`, `sera-room-2.jpg`

2. **Update `src/utils/demoAssets.ts`** to import your images:
   ```typescript
   export const gregsHouseDemoImages: any[] = [
     require('../../assets/demo/greg-room-1.jpg'),
     require('../../assets/demo/greg-room-2.jpg'),
   ];

   export const serasRoomDemoImages: any[] = [
     require('../../assets/demo/sera-room-1.jpg'),
     require('../../assets/demo/sera-room-2.jpg'),
   ];
   ```

3. **Rebuild the app** - The images will be bundled with the app and automatically copied to the device's document directory when the demo projects are initialized.

## Supported Formats

- `.jpg` / `.jpeg`
- `.png`

## Notes

- Images should be reasonable size (recommended: under 5MB each)
- Images will be automatically copied to the document directory on first app launch
- Once copied, they'll be available even after app restarts
- The images will appear in the demo projects and can be used with the comment system




