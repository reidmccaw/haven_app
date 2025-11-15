# Haven App - ViroReact Setup Instructions

## Prerequisites
- Node.js (v20.18.0 or later)
- npm (v10.8.2 or later)
- Expo CLI (will be installed with dependencies)
- For iOS: Xcode and CocoaPods
- For Android: Android Studio and Android SDK

## Installation Steps

When your internet connection is restored, run the following commands:

### 1. Install Dependencies
```bash
npm install
```

This will install:
- Expo and React Native core dependencies
- ViroReact (@reactvision/react-viro) for AR/VR functionality

### 2. Prebuild Native Code (Required for ViroReact)
```bash
npx expo prebuild
```

This generates the native iOS and Android projects with ViroReact properly configured.

### 3. Install iOS Dependencies (macOS only)
```bash
cd ios
pod install
cd ..
```

### 4. Start Development Server
```bash
npm start
```

Then press:
- `i` for iOS simulator
- `a` for Android
- Scan QR code with Expo Go app (for development)

## Project Structure

- `App.tsx` - Main application entry point
- `app.json` - Expo configuration with ViroReact plugin
- `babel.config.js` - Babel configuration
- `package.json` - Dependencies including ViroReact

## ViroReact Configuration

The project is already configured with:
- ✅ ViroReact plugin in `app.json`
- ✅ Camera permissions for iOS and Android
- ✅ Bundle identifiers set up
- ✅ AR/VR capabilities enabled

## Next Steps

After installation, you can start building your AR/VR features using ViroReact components. Refer to the [ViroReact documentation](https://reactvision.xyz/viro-react/) for API details.

## Notes

- This is a high-fidelity prototype (no backend required)
- ViroReact supports both AR (ARKit/ARCore) and VR platforms
- The app is configured for both iOS and Android

