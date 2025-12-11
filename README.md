# Haven App

A React Native mobile app built with Expo for AR furniture placement and interior design visualization. Users can scan their space, place 3D furniture models, take photos, and collaborate through comments on design projects.

## Features

- **AR Furniture Placement**: Place 3D furniture models in your space using AR
- **Project Management**: Create and manage design projects with multiple scenes
- **Photo Capture**: Save snapshots of your AR designs to projects
- **Comment System**: Add comments and feedback on specific images and locations
- **Demo Projects**: Pre-loaded demo projects (Greg's House and Sera's Room) with sample images and comments

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or later) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **Expo CLI** - Will be installed globally or via npx
- **iOS Development** (for iOS builds):
  - macOS (required)
  - Xcode (latest version from App Store)
  - CocoaPods: `sudo gem install cocoapods`
- **Android Development** (for Android builds):
  - Android Studio
  - Android SDK
  - Java Development Kit (JDK)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/reidmccaw/haven_app.git
   cd haven_app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install iOS dependencies** (if building for iOS)
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Running the App

### Development Mode

#### Start the Expo development server

```bash
npm start
```

This will start the Metro bundler and display a QR code in your terminal.

#### Run on iOS Simulator/Device

```bash
npm run ios
```

**Note**: This requires:

- macOS
- Xcode installed
- iOS Simulator (or a connected iPhone with developer mode enabled)

#### Run on Android Emulator/Device

```bash
npm run android
```

**Note**: This requires:

- Android Studio installed
- Android emulator running (or a connected Android device with USB debugging enabled)

#### Run on Web

```bash
npm run web
```

**Note**: AR features will not work on web. The app will open in your default browser.

### Using Expo Go (Limited Functionality)

⚠️ **Important**: This app uses custom native modules (ViroReact for AR) that are **not compatible with Expo Go**. You must build a native app to use AR features.

If you want to test non-AR features only, you can use Expo Go, but most functionality will not work:

```bash
npm start
# Then scan the QR code with Expo Go app
```

## Building for Production

### iOS Build

#### Using EAS Build (Recommended)

```bash
npm run build:ios
```

#### Local Build with Xcode

1. Generate native iOS project (if not already generated):

   ```bash
   npx expo prebuild --platform ios
   ```

2. Open in Xcode:

   ```bash
   open ios/Haven.xcworkspace
   ```

3. In Xcode:
   - Select your development team
   - Choose a target device or simulator
   - Click "Run" (▶️) or press `Cmd + R`

### Android Build

#### Using EAS Build (Recommended)

```bash
npm run build:android
```

#### Local Build with Android Studio

1. Generate native Android project (if not already generated):

   ```bash
   npx expo prebuild --platform android
   ```

2. Open in Android Studio:

   ```bash
   open -a "Android Studio" android
   ```

3. Build and run from Android Studio

## Project Structure

```
haven_app/
├── assets/           # Images, logos, and demo assets
│   ├── demo/        # Demo images for Greg's House and Sera's Room
│   └── models/      # 3D furniture model thumbnails
├── src/
│   ├── components/  # React components
│   ├── utils/       # Utility functions and helpers
│   └── theme.ts     # App theme configuration
├── App.tsx          # Root component
├── app.json         # Expo configuration
├── package.json     # Dependencies and scripts
└── tsconfig.json    # TypeScript configuration
```

## Key Technologies

- **React Native** (0.81.5)
- **Expo** (~54.0.23)
- **TypeScript**
- **ViroReact** (@reactvision/react-viro) - AR functionality
- **React Native AsyncStorage** - Local data persistence
- **Expo Camera** - Photo capture
- **Expo File System** - File management

## Demo Projects

The app automatically initializes two demo projects on first launch:

- **Greg's House** - Living room redesign with 4 demo images
- **Sera's Room** - Bedroom makeover with 2 demo images

These projects include pre-loaded comments and are perfect for testing the comment and collaboration features.

## Troubleshooting

### iOS Build Issues

If you encounter build errors:

1. Clean the build folder in Xcode: `Product > Clean Build Folder` (Shift + Cmd + K)
2. Reinstall pods:
   ```bash
   cd ios
   rm -rf Pods Podfile.lock
   pod install
   cd ..
   ```

### Android Build Issues

1. Clean gradle cache:
   ```bash
   cd android
   ./gradlew clean
   cd ..
   ```

### Metro Bundler Issues

Clear cache and restart:

```bash
npm start -- --reset-cache
```

### AR Features Not Working

- Ensure you're running a native build (not Expo Go)
- Check camera permissions are granted
- Verify you're on a physical device (AR requires real camera, not simulator)
- Make sure `@reactvision/react-viro` is properly configured in `app.json`

## Development Notes

- **Native Modules**: This app requires native builds - Expo Go will not work for AR features
- **Demo Assets**: Demo images are bundled with the app and automatically copied on first launch
- **Storage**: All data (projects, images, comments) is stored locally using AsyncStorage
- **Comments**: Demo projects have mock comments that merge with user-generated comments

## License

This project is private and proprietary.

## Support

For issues or questions, please open an issue on GitHub or contact the maintainers.
