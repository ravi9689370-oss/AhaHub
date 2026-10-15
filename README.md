# AhaHub - Multi-App & Game Hub

A fully functional Multi-App & Game Hub inspired by modern mini-app platforms like Aha Games. Play 50+ HTML5 games instantly and access popular social apps through web wrappers in one unified mobile experience.

## Features

### 🎮 Gaming
- **50+ HTML5 Games**: From classic puzzles (Snake, 2048, Tetris) to action games (Pac-Man, Space Shooter)
- **Instant Play**: No installation required - games load directly in your browser
- **Progressive Web App**: Install to home screen for native app experience
- **Offline Support**: Games cache for play without internet
- **Save Progress**: Track scores, achievements, and game history
- **Fullscreen Sandbox**: Immersive gameplay experience

### 🔗 Social Apps
- **Social Web Wrappers**: WhatsApp, Instagram, Facebook, YouTube, Twitter, Telegram
- **One-Tap Access**: Launch any app instantly from the hub
- **Desktop Shortcuts**: Create PWA shortcuts for easy access
- **Session Persistence**: Continue where you left off

### 💰 AHA Coins Economy
- **Welcome Bonus**: 500 AHA Coins on signup
- **Play to Earn**: Earn coins by playing games
- **Ad-Free Pass**: Premium subscription removes ads
- **Purchase Store**: Buy coins and passes with real money
- **Withdraw**: Convert coins to real money (coming soon)

### 👤 Profile & Social Features
- **User Accounts**: Sign up/login with email or social
- **Profile Page**: Avatar, handle, scores, rankings
- **Achievements**: Track game milestones and accomplishments
- **Leaderboard**: Compete with friends and global players
- **Game Statistics**: Detailed gameplay analytics

## Tech Stack

### Frontend
- **Vite**: Blazing fast development server
- **React**: Component-based UI architecture
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first styling
- **Service Workers**: Offline functionality & PWA support

### Mobile
- **Apache Capacitor**: Native Android packaging
- **PWA**: Progressive Web App for installability
- **WebView**: Native app shell for social apps

### DevOps
- **GitHub Pages**: Web hosting and deployment
- **GitHub Actions**: Automated APK builds and CI/CD
- **Docker**: Development environment isolation

## Screenshots

### Home Tab
![Home Tab](screenshots/home.png)
- Banner carousel with promotions and daily bonuses
- Continue playing section with progress bars
- Hot games grid with ratings and direct play buttons

### Category Tab
![Category Tab](screenshots/category.png)
- Social apps section with one-tap access
- Game categories with filtering
- App cards with descriptions and ratings

### Profile Tab
![Profile Tab](screenshots/profile.png)
- User profile with avatar and stats
- AHA Coins wallet balance
- Ad-Free Pass subscription options
- Best scores and rankings

### Game Sandbox
![Game Sandbox](screenshots/game.png)
- Fullscreen game play
- Controls overlay with pause/restart
- Score tracking and achievements

## Getting Started

### Prerequisites
- Node.js 18+ (or prefered environment)
- Git (for version control)

### Installation

```bash
# Clone the repository
cd /path/to/ahahub

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Serve the built files
npm run preview
```

### Running for Development

```bash
# Start the Vite dev server
npm run dev

# Open in browser
http://localhost:3000
```

### Building for Production

```bash
# Build for production
npm run build

# Preview the built files
npm run preview

# Deploy to GitHub Pages
npx cap add android  # Add Android platform
npm run android:build  # Build Android APK
```

## Android App

### Installation via Capacitor

```bash
# Add Android platform
npx cap add android

# Synchronize web assets
npx cap sync android

# Copy to native project
npx cap copy android

# Open in Android Studio or build via command line
npx cap run android
```

### APK Building via GitHub Actions

The project includes a GitHub Actions workflow that automatically builds Android APKs:

1. Push to main branch
2. Workflow triggers `.github/workflows/android.yml`
3. Downloads Gradle-built APK
4. Uploads as GitHub Actions artifact

### Local Android Build

```bash
# Build Android Debug APK
npx cap run android --debug

# Build Android Release APK
npx cap run android --release
```

## PWA Installation

1. Open AhaHub in your browser
2. Look for the install prompt (in address bar or at bottom)
3. Click "Install" or "Add to Home Screen"
4. Launch from home screen like a native app

## Features Roadmap

### Phase 1 (Completed)
- Core web app with 50+ games
- Social app wrappers
- User authentication
- AHA Coins economy
- Mobile PWA support

### Phase 2 (Upcoming)
- Advanced wallet features
- Push notifications
- Multiplayer gaming
- Tournament system
- Social sharing

### Phase 3 (Future)
- iOS support
- Advanced analytics
- Custom game creation
- Marketplace for user games
- Advanced social features

## Contributing

We welcome contributions! Please refer to our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Guidelines

1. **Code Style**: Use Prettier for formatting, ESLint for linting
2. **Testing**: Write unit tests for components, integration tests for workflows
3. **Performance**: Optimize bundle size, use code splitting
4. **Accessibility**: Ensure WCAG 2.1 AA compliance
5. **Documentation**: Update docs for all new features

### Project Structure

```
/src/
  /components/          React components
  /hooks/              Custom hooks
  /services/            API services
  /utils/               Helper functions
  /assets/             Images, icons, assets
  /games/              Game implementations
  /config.js           App configuration
  /types/              TypeScript types

/docs/                 Documentation
  /PRD.md              Product Requirements
  /DESIGN.md            Design System

/github/workflows/    CI/CD pipelines

/assets/
  /icons/              App icons (various sizes)
  /images/             Screenshots, banners

/apps/                 Native app code (Capacitor)
  /android/            Android platform
```

## License

This project is licensed under the MIT License.

## Acknowledgements

- Inspired by Aha Games and similar mini-app platforms
- Built with modern web technologies (React, Vite, TypeScript)
- Uses Capacitor for native mobile packaging
- Follows Material Design guidelines with custom styling

## Support

For issues, please create a GitHub issue. For questions, reach out on Discord or Twitter.

---

**Version**: 1.0.0
**Last Updated**: October 15, 2026
**Author**: AhaHub Team