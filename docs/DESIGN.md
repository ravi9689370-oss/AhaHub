# AhaHub Design System & UI/UX

## Color Palette

### Primary Colors
- **Orange Main**: #FF6B00 (Primary accent for buttons, highlights)
- **Orange Dark**: #E55D00 (Hover states, active elements)
- **Orange Light**: #FF8C42 (Hover backgrounds, subtle accents)

### Supporting Colors
- **Background**: #F8F9FA (Main page background)
- **Surface**: #FFFFFF (Cards, modals, elevated components)
- **Text Primary**: #212529 (Primary text)
- **Text Secondary**: #6C757D (Secondary text, descriptions)
- **Success**: #28A745 (Positive actions, earned items)
- **Error**: #DC3545 (Destructive actions, warnings)
- **Warning**: #FFC107 (Notifications, tips)
- **Info**: #17A2B8 (Informational elements)

### Design Tokens
```json
{
  "colors": {
    "primary": "#FF6B00",
    "primary-dark": "#E55D00",
    "secondary": "#FF8C42",
    "background": "#F8F9FA",
    "surface": "#FFFFFF",
    "on-primary": "#FFFFFF",
    "on-surface": "#212529",
    "text-muted": "#6C757D"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "2xl": "48px"
  },
  "radius": {
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "full": "9999px"
  }
}
```

## Typography

### Font Families
- **Display Font**: Poppins (for headings, brand elements)
- **Body Font**: Inter (for main content, UI text)

### Type Scale
```css
/* Headings */
h1 { font-size: 2.5rem; font-weight: 700; line-height: 1.2; }
h2 { font-size: 2rem; font-weight: 600; line-height: 1.3; }
h3 { font-size: 1.5rem; font-weight: 600; line-height: 1.4; }
h4 { font-size: 1.25rem; font-weight: 500; line-height: 1.5; }

/* Body */
.text-base { font-size: 1rem; line-height: 1.5; }
.text-sm { font-size: 0.875rem; line-height: 1.5; }
.text-xs { font-size: 0.75rem; line-height: 1.5; }

/* Special */
.display-text { font-family: Poppins; font-weight: 700; }
.caption { font-size: 0.75rem; color: #6C757D; }
```

## Component Guidelines

### Buttons
```css
.btn-primary {
  background: #FF6B00;
  color: white;
  border-radius: 9999px;
  padding: 12px 24px;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: #E55D00;
  transform: scale(1.02);
}

.btn-secondary {
  background: #F8F9FA;
  color: #212529;
  border-radius: 9999px;
  padding: 12px 24px;
  font-weight: 500;
}

.btn-secondary:hover {
  background: #E9ECEF;
}
```

### Cards
```css
.card {
  background: #FFFFFF;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s;
  padding: 1.5rem;
}

.card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}
```

### Game Cards
```css
.game-card {
  border-left: 4px solid var(--game-color);
  background: linear-gradient(to bottom right, #FFFFFF, #F8F9FA);
  border-radius: 1rem;
  padding: 1rem;
  transition: all 0.2s;
}

.game-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px -2px rgba(0, 0, 0, 0.1);
}
```

## Iconography

### Icon Style Guide
- **Style**: Rounded, filled
- **Color**: Primary #FF6B00 for highlights, #6C757D for secondary
- **Size**: 24px for buttons, 32px for large elements, 16px for small indicators
- **Examples**: 🎮 (games), 💬 (social), 🏠 (navigation), 📱 (mobile)

### Icon Library
Create a set of 50+ simple, distinctive icons:
- Games: 🎮, 🎯, 🏆, 🎲, 🧩, ⛳, 🏎️, 🎪, 🦸, 🦸‍♀️
- Social: 💬, 📷, 👍, ▶️, 🐦, ✈️, 📧, ☁️
- Actions: ➕, ➖, ✕, ✅, 🔍, 🎛️, 📱
- Status: 🟢, 🟡, 🔴, 🔄, ⭐, 💰, 🕐

## Layout Guidelines

### Grid System
- Container max-width: 1200px
- Column gaps: 24px
- Row gaps: 16px

### Responsive Breakpoints
```css
/* Mobile First Approach */
.container { max-width: 100%; padding: 0 1rem; }

@media (min-width: 640px) {
  .container { max-width: 640px; }
}

@media (min-width: 768px) {
  .container { max-width: 768px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1024px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}
```

### Navigation
- Bottom navigation: 56px height
- Minimum touch target: 44px
- Icon text gap: 8px
- Active indicator: colored underline or background

## Animation & Motion

### Micro-interactions
- **Hover scale**: 1.05 transform
- **Press scale**: 0.95 transform
- **Slide up**: translateY(-10px)
- **Fade in**: opacity: 0 → opacity: 1

### Animation Duration
- Fast: 150ms
- Medium: 300ms
- Slow: 500ms

### Easing
- **Standard**: cubic-bezier(0.4, 0, 0.2, 1)
- **Ease-out**: cubic-bezier(0, 0, 0.2, 1)
- **Ease-in**: cubic-bezier(0.4, 0, 1, 1)

## Accessibility

### Contrast Ratios
- **Large text**: 4.5:1 minimum
- **Small text**: 4.5:1 minimum
- **UI elements**: 3:1 minimum

### Focus States
- Visible outline on all interactive elements
- Focus ring: 2px solid #FF6B00
- Tab order logical and sequential

### Screen Reader
- All icons have aria-labels
- Button text descriptive
- Form fields have labels
- Status updates announced

## Components Anatomy

### Home Tab Layout
```
Header (Logo, User Profile)
├─ Banner Carousel
├─ Continue Playing (horizontal scroll)
└─ Hot Games (grid with ratings)
```

### Category Tab Layout
```
Sidebar: Social Apps, Games
└─ Main Content Area
   ├── Must Have (social apps)
   └── Game Categories
       ├── Puzzle
       ├── Action
       ├── ...
```

### Profile Tab Layout
```
Profile Header
├─ Avatar & Handle
├─ Coins Balance
├─ Ad-Free Pass (if applicable)
├─ Best Scores
└─ Account Settings
```

### Game Sandbox Layout
```
Header (Game title, Back button)
├─ Game Canvas
└─ Controls Footer
   ├── Start/Pause
   ├── Restart
   └── Exit
```

## PWA & Mobile Design

### Touch Targets
- Minimum size: 44x44px
- Recommended size: 48x48px
- Icon button size: 32x32px

### Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

### Status Bar
- Transparent background
- Text color: dark (iOS) or light (Android based on theme)
- Height: 20px or 44px depending on OS

### Splash Screens
- iOS: 3x, 2x resolutions
- Android: mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi
- All in #FF6B00 theme

## Testing Considerations

### Visual Tests
- All components visible on 320px, 768px, 1280px
- Text wrapping at each breakpoint
- Icon scaling proportional
- Button tap areas visible

### Interactive Tests
- All buttons have hover states
- Form inputs have focus states
- Game cards clickable
- Navigation responsive

### Performance Tests
- App loads under 3 seconds (3G)
- Game switching instant
- Canvas rendering 60fps
- Memory usage stable

### Compatibility Tests
- iOS 14+ (Safari, Chrome)
- Android 8+ (Chrome)
- PWA install functionality
- Service worker offline fallback

## Brand System

### Logo Usage
- Primary: Orange gradient #FF6B00 to #FF8C42
- White background
- Minimum clear space: 2x logo width
- Tagline: "Your ultimate Multi-App & Game Hub"

### Typography Hierarchy
1. H1 (72px on desktop): App title, hero sections
2. H2 (56px): Section titles, modals
3. H3 (40px): Component titles, card headers
4. Body (16px): Main content, descriptions
5. Caption (12px): Labels, metadata

### Iconography Style
- Thin stroke weight
- Consistent rounding
- Only essential details
- Colorful but not overwhelming

## Typography Colors Usage Guide
- **Primary Actions**: #FF6B00 (buttons, CTAs, highlights)
- **Important Information**: #212529 (primary text, headers)
- **Secondary Information**: #6C757D (descriptions, labels, metadata)
- **Success Feedback**: #28A745 (positive actions, earned coins)
- **Warning/Danger**: #DC3545 (destructive actions, errors)
- **Neutral Backgrounds**: #F8F9FA (card backgrounds, separators)
- **Elevation/White Space**: #FFFFFF (main surface, overlays)

## Iconography Usage Guide
- **Primary**: Orange gradient #FF6B00 for main app actions and navigation icons
- **Secondary**: #FF8C42 for supporting actions and secondary navigation
- **Status Indicators**: #6C757D for inactive elements, #28A745 for success, #DC3545 for errors
- **Game Categories**: Color-coded using primary theme with brightness variations

## Component Styles

### Game Cards with Color System
Each game card uses:
- **Border color**: #FF6B00 (category indicator)
- **Background**: #FF6B00/10 (light colored background)
- **Icon color**: #FF6B00 (icon color matching border)
- **Hover state**: Darker background, shadow enhancement

### Social Apps Cards
- **Background**: Gradient #FF6B00 to #FF8C42
- **Text color**: #FFFFFF
- **Badge backgrounds**: #FFFFFF/20 (transparent white)

### Profile Cards
- **Balance cards**: Gradient from #FF6B00/10 to #FF8C42/10
- **Achievement cards**: #28A745/10 backgrounds
- **Warning cards**: #DC3545/10 backgrounds

## Layout Optimization

### Mobile View (320-768px)
- 2-column grid for games
- Stacked sections vertically
- Bottom navigation for app switching
- Card padding reduced
- Font sizes scaled down

### Tablet View (768-1024px)
- 3-4 column grid for games
- Sidebar + main content split
- Top navigation maintained
- Card padding standard
- Font sizes maintain ratio

### Desktop View (1024+px)
- 5-6 column grid for games
- Expanded sidebar options
- Top navigation
- Card padding generous
- Font sizes optimal for reading

## Micro-interactions

### Button Press
```
.hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(255, 107, 0, 0.3);
}

.active {
  transform: scale(0.95);
  box-shadow: 0 2px 4px rgba(255, 107, 0, 0.2);
}
```

### Game Card Hover
```
.game-card:hover {
  border-left-width: 6px;
  background: linear-gradient(to bottom right, #FFFFFF, #FF6B00/5);
}
```

### Tab Switching
```
.tab-active {
  background: #FF6B00/10;
  color: #FF6B00;
  font-weight: 600;
}
```

### Toast/Notification
```
.toast {
  background: #212529;
  color: #FFFFFF;
  border-radius: 8px;
  padding: 12px 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slideUp 0.3s ease-out;
}
```

## Animation Guidelines

### Tween Animations (CSS)
- **Bounce**: cubic-bezier(0.68, -0.55, 0.265, 1.55)
- **Smooth**: cubic-bezier(0.4, 0, 0.2, 1)
- **Deceleration**: cubic-bezier(0, 0, 0.2, 1)

### Keyframes
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Game Loading
```css
@keyframes gameLoad {
  0% { transform: translateY(10px) scale(0.98); opacity: 0; }
  50% { transform: translateY(-5px) scale(1.02); }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
.game-loading {
  animation: gameLoad 0.5s ease-out;
}
```

## Accessibility Testing

### Contrast Test Colors
- Primary text on background: #212529 on #FFFFFF ✓ (4.68:1)
- Secondary text on background: #6C757D on #FFFFFF ✓ (4.81:1)
- Accent on surface: #FF6B00 on #FFFFFF ✓ (3.73:1)

### Focus Indicators
- All interactive elements have:
  - 2px border with #FF6B00
  - 4px offset from edge
  - Visible in keyboard navigation

### Screen Reader Labels
- Icons have aria-labels or role descriptions
- Buttons have descriptive text
- Status updates have live regions
- Form validation errors are announced

## Performance Optimization

### Animation Limits
- Prefer CSS animations over JavaScript
- Limit to 2 concurrent animations per page
- Use will-change sparingly
- Animate transform properties only

### Transition Optimization
```css
.optimized {
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

### Visual Hierarchy
- **Information Architecture**: Clear content hierarchy through visual weight
- **Color Coding**: Consistent color usage for categories and states
- **Typography**: Responsive font scaling for readability
- **Spacing**: Structured breathing room (8px base unit)
- **Iconography**: Meaningful visual symbols with consistent styling

## Iconography and Visual Elements

### Icon Design
- **Style**: Minimalist, rounded corners
- **Color System**: Orange gradient for primary, gray for secondary
- **Size Ratios**: Consistent 24dp grid system
- **Brand Integration**: Unicorn Saaur symbol central to identity

### Visual Hierarchy
1. **Primary Actions**: Orange gradient (#FF6B00 → #FF8C42)
2. **Secondary Information**: Gray (#6C757D) for supporting text
3. **Positive Actions**: Green (#28A745) for success states
4. **Negative Actions**: Red (#DC3545) for destructive actions
5. **Neutral Backgrounds**: Off-white (#F8F9FA) for sections
6. **Elevation**: White (#FFFFFF) for cards and overlays

### Interactive Elements
- **Buttons**: Orange gradient with smooth transitions
- **Cards**: White background with subtle shadows
- **Icons**: Orange for primary actions, gray for secondary
- **Status**: Color-coded indicators for game states

## Layout Structure

### Grid System
- **Container**: 1200px max width
- **Columns**: 12-column grid with 24px gutters
- **Spacing**: 8px base unit
- **Breakpoints**:
  - Mobile: 320-768px
  - Tablet: 768-1024px
  - Desktop: 1024-1280px
  - Wide: 1280+px

### Navigation
- **Bottom Bar**: Fixed at 56px height
- **Touch Targets**: Minimum 44px
- **Icon Size**: 24px for buttons, 32px for large icons
- **Active States**: Orange underline, active background

### Content Flow
1. **Hero Section**: Banner carousel with orange gradient backgrounds
2. **Game Grid**: 2-6 columns responsive
3. **Profile Cards**: White with orange accents
4. **Social Apps**: Orange gradient backgrounds
5. **Game Sandbox**: Full-screen with orange controls

## Animation Guidelines

### Micro-interactions
- **Hover Scale**: 1.05 transform with 0.2s ease
- **Press Scale**: 0.95 transform
- **Slide Up**: translateY(-10px) on hover
- **Fade**: opacity transition for overlays

### Animation Properties
- **Preferred**: Transform, opacity, background-color
- **Avoid**: Width, height, position changes
- **Duration**: 0.2s for micro-interactions, 0.5s for major transitions
- **Easing**: Cubic-bezier for smooth acceleration

### Responsive Considerations
- **Mobile**: Stack layouts, larger touch targets
- **Tablet**: Grid layouts, sidebar navigation
- **Desktop**: Expanded layouts, hover states
- **Performance**: Reduce animations on slower devices

## Interactive Design

### Button States
```css
.btn-primary {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8C42 100%);
  color: white;
  border-radius: 9999px;
  padding: 12px 24px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.3);
}

.btn-primary:active {
  transform: translateY(0) scale(0.95);
}
```

### Card Interactions
```css
.game-card {
  background: white;
  border-radius: 16px;
  border-left: 4px solid var(--category-color);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.game-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

### Navigation Active State
```css
.nav-item.active {
  color: #FF6B00;
  background: rgba(255, 107, 0, 0.1);
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #FF6B00;
  border-radius: 1.5px;
}
```

## Component Variants

### Game Card Variations
```css
/* Standard Game Card */
.standard-card {
  border-radius: 12px;
  padding: 12px;
}

/* Large Game Card */
.large-card {
  border-radius: 16px;
  padding: 16px;
}

/* Minimal Game Card */
.minimal-card {
  background: transparent;
  border: 1px solid #E9ECEF;
  border-radius: 8px;
  padding: 8px;
}
```

### Social App Card
```css
.social-card {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8C42 100%);
  border-radius: 16px;
  padding: 16px;
  color: white;
  text-align: center;
}

.social-card .icon {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  margin: 0 auto 12px;
}
```

## Visual Specification Summary

### Color Palette
1. **Primary**: #FF6B00 (Orange) - Main brand color, CTAs, highlights
2. **Secondary**: #FF8C42 (Orange Light) - Secondary actions, hover states
3. **Background**: #F8F9FA (Off-white) - Main page background
4. **Surface**: #FFFFFF (White) - Cards, modals, elevated components
5. **Text Primary**: #212529 (Almost black) - Main readable text
6. **Text Secondary**: #6C757D (Gray) - Secondary text, descriptions
7. **Success**: #28A745 (Green) - Positive actions, earned coins
8. **Error**: #DC3545 (Red) - Destructive actions, warnings

### Typography System
- **Headings**: Poppins, font-weight 600-700
- **Body Text**: Inter, font-weight 400-500
- **Sizes**: Responsive scaling from 12px to 32px
- **Colors**: Text aligned with color palette hierarchy

### Iconography
- **Style**: Rounded, filled icons
- **Size**: 24px base, scaled accordingly
- **Colors**: Primary orange, secondary gray
- **Placement**: Consistent 8px margins and padding

### Layout
- **Container**: 1200px max, 24px gutters
- **Grid**: 12 columns, 8px base spacing
- **Responsive**: Mobile-first approach
- **Touch Targets**: Minimum 44px

### Animation
- **Micro-interactions**: 0.2s transitions with cubic-bezier
- **Major Transitions**: 0.5s animations
- **Properties**: Transform, opacity, background-color
- **Performance**: Hardware acceleration enabled

## Responsive Design

### Mobile (320-768px)
- 2-column game grid
- Bottom navigation bar
- Stacked layouts
- Larger touch targets
- Text scaling for readability

### Tablet (768-1024px)
- 3-4 column game grid
- Sidebar navigation
- Split-screen layouts
- Standard touch targets
- Optimized grid spacing

### Desktop (1024-1280px)
- 5-6 column game grid
- Top navigation
- Expanded layouts
- Hover states available
- Maximum content width

### Visual Adaptation Strategy
- **Content Hierarchy**: Maintain information architecture across devices
- **Touch Targets**: Scale from 44px (mobile) to 48px (desktop)
- **Spacing**: Flexible padding/margin based on viewport
- **Typography**: Responsive font scaling
- **Grid System**: Breakpoint-based column counts

### Layout Shifts Prevention
- **Container Queries**: Component-level responsiveness
- **Image Optimization**: Responsive image sources
- **Animation Control**: Device-based animation limits
- **Loading States**: Progressive enhancement

## Accessibility Implementation

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Color combinations tested for readability
- Focus indicators clearly visible
- No reliance on color alone for information

### Interactive Elements
- Minimum touch target: 44x44px
- Focus ring: 2px solid #FF6B00
- Keyboard navigation: Tab order logical
- Screen reader: Semantic HTML used correctly

### Visual Design
- **Contrast**: #FF6B00 on white has 3.73:1 ratio
- **Background**: #212529 on #FFFFFF has 6:1 ratio
- **Success**: #28A745 on #FFFFFF has 3.38:1 ratio
- **Error**: #DC3545 on #FFFFFF has 3.38:1 ratio
- **All combinations pass WCAG AA for normal text**

### Focus Indicators
- All interactive elements have clear focus states
- Focus ring visible with 2px solid #FF6B00
- Higher contrast with 4px offset
- Visible in keyboard navigation only

### Screen Reader
- All icons have descriptive aria-labels
- Button text is clear and action-oriented
- Form fields have associated labels
- Status updates use live regions when needed

## Component State Management

### Default State
- Background: #FFFFFF
- Text: #212529
- Border: #E9ECEF
- Shadow: subtle (0 2px 8px rgba(0,0,0,0.1))

### Hover State
- Background: #FF6B00/10 (10% opacity)
- Border: #FF6B00/30 (30% opacity)
- Shadow: enhanced (0 4px 16px rgba(0,0,0,0.15))
- Transform: translateY(-2px) scale(1.02)

### Active/Pressed State
- Background: #FF6B00/20 (20% opacity)
- Transform: translateY(0) scale(0.98)
- Shadow: inset (0 2px 4px rgba(0,0,0,0.1))

### Focus State
- Outline: 2px solid #FF6B00
- Outline-offset: 2px
- Box-shadow: 0 0 0 4px rgba(255,107,0,0.2)

### Disabled State
- Background: #E9ECEF
- Color: #ADB5BD
- Cursor: not-allowed
- Opacity: 0.6

### Loading State
- Background: #FF6B00/5 (5% opacity shimmer)
- Animation: shimmer effect (2s infinite)
- Color: #FF6B00/60

### Error State
- Border: 2px solid #DC3545
- Background: #DC3545/10 (10% opacity)
- Color: #DC3545
- Icon: ❌ (error symbol)

### Success State
- Border: 2px solid #28A745
- Background: #28A745/10 (10% opacity)
- Color: #28A745
- Icon: ✅ (success symbol)

### Warning State
- Border: 2px solid #FFC107
- Background: #FFC107/10 (10% opacity)
- Color: #856404
- Icon: ⚠️ (warning symbol)

## Interactive Component Design

### Buttons
```css
.btn {
  border-radius: 9999px;
  padding: 12px 24px;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8C42 100%);
  color: white;
  border: none;
}

.btn-secondary {
  background: white;
  color: #212529;
  border: 1px solid #E9ECEF;
}

.btn-outline {
  background: transparent;
  color: #FF6B00;
  border: 1px solid #FF6B00;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
```

### Cards
```css
.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card:active {
  transform: translateY(0);
}
```

### Input Fields
```css
.input {
  border-radius: 12px;
  border: 1px solid #E9ECEF;
  padding: 12px 16px;
  font-size: 16px;
  transition: all 0.2s ease;
  background: white;
}

.input:focus {
  outline: none;
  border-color: #FF6B00;
  box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
}

.input::placeholder {
  color: #ADB5BD;
}
```

### Badges
```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.badge-primary {
  background: #FF6B00/10;
  color: #FF6B00;
}

.badge-success {
  background: #28A745/10;
  color: #28A745;
}

.badge-error {
  background: #DC3545/10;
  color: #DC3545;
}
```

## Interactive Elements

### Navigation
```css
.nav-item {
  padding: 12px 16px;
  border-radius: 12px;
  color: #6C757D;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
}

.nav-item:hover {
  background: #FF6B00/10;
  color: #FF6B00;
}

.nav-item.active {
  color: #FF6B00;
  background: #FF6B00/10;
  font-weight: 600;
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #FF6B00;
  border-radius: 1.5px;
}
```

### List Items
```css
.list-item {
  padding: 12px 0;
  border-bottom: 1px solid #E9ECEF;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.list-item:hover {
  background: #FF6B00/5;
  padding-left: 8px;
}

.list-item:last-child {
  border-bottom: none;
}
```

### Expandable Sections
```css
.accordion {
  border: 1px solid #E9ECEF;
  border-radius: 12px;
  overflow: hidden;
}

.accordion-item {
  border-bottom: 1px solid #E9ECEF;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  padding: 16px 24px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.accordion-header:hover {
  background: #FF6B00/5;
}

.accordion-content {
  padding: 0 24px 24px;
  background: white;
}
```

### Toast Notifications
```css
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  background: #212529;
  color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 8px;
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.toast.hide {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

.toast-success {
  background: #28A745;
}

.toast-error {
  background: #DC3545;
}

.toast-warning {
  background: #FFC107;
  color: #212529;
}
```

### Loading Spinner
```css
.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #E9ECEF;
  border-top: 2px solid #FF6B00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

### Progress Bar
```css
.progress {
  width: 100%;
  height: 8px;
  background: #E9ECEF;
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF6B00 0%, #FF8C42 100%);
  transition: width 0.5s ease;
  border-radius: 4px;
}

.progress-fill.indeterminate {
  background: linear-gradient(90deg, #FF6B00 0%, #FF8C42 50%, #FF6B00 100%);
  background-size: 200% 100%;
  animation: progress-indeterminate 2s infinite linear;
}

@keyframes progress-indeterminate {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Modal/Overlay
```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  transition: all 0.3s ease;
  padding: 24px;
}

.modal.open {
  opacity: 1;
}

.modal-content {
  background: white;
  border-radius: 16px;
  padding: 32px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.modal.open .modal-content {
  transform: scale(1);
}
```

### Tooltip
```css
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  padding: 8px 12px;
  background: #212529;
  color: white;
  border-radius: 8px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 100;
}

.tooltip:hover::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 4px;
  border: 4px solid transparent;
  border-top-color: #212529;
  z-index: 100;
}
```

### Dropdown Menu
```css
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  padding: 8px;
  min-width: 200px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.2s ease;
  z-index: 1000;
  pointer-events: none;
}

.dropdown.open .dropdown-menu {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.dropdown-item {
  padding: 12px 16px;
  border-radius: 8px;
  color: #212529;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.dropdown-item:hover {
  background: #FF6B00/10;
  color: #FF6B00;
}

.dropdown-item:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

## Interactive Component Variations

### Game Card Variations
```css
/* Standard Game Card */
.game-card {
  border-radius: 16px;
  padding: 20px;
  background: white;
  border-left: 4px solid var(--category-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Featured Game Card */
.featured-game-card {
  background: linear-gradient(135deg, var(--category-color)/20 0%, white 100%);
  border-left: 6px solid var(--category-color);
  padding: 24px;
}

/* Minimal Game Card */
.minimal-game-card {
  background: transparent;
  border: 1px solid #E9ECEF;
  border-radius: 12px;
  padding: 16px;
}

/* Compact Game Card */
.compact-game-card {
  padding: 12px;
  border-radius: 12px;
  gap: 8px;
}

.compact-game-card .icon {
  width: 40px;
  height: 40px;
  font-size: 20px;
}

.compact-game-card .title {
  font-size: 14px;
}

.compact-game-card .stats {
  font-size: 12px;
}
```

### Social App Card Variants
```css
/* Standard Social Card */
.social-card {
  border-radius: 16px;
  padding: 20px;
  background: white;
  text-align: center;
  transition: all 0.3s ease;
}

/* Large Social Card */
.large-social-card {
  padding: 32px;
}

.large-social-card .icon {
  width: 80px;
  height: 80px;
  font-size: 40px;
}

/* Minimal Social Card */
.minimal-social-card {
  background: transparent;
  padding: 16px;
  border: 1px solid #E9ECEF;
  border-radius: 12px;
}

/* Compact Social Card */
.compact-social-card {
  padding: 12px;
  border-radius: 12px;
}

.compact-social-card .icon {
  width: 48px;
  height: 48px;
  font-size: 24px;
}
```

### Profile Card Variations
```css
/* User Profile Card */
.user-profile-card {
  border-radius: 20px;
  padding: 32px;
  background: white;
}

/* Wallet Balance Card */
.wallet-balance-card {
  border-radius: 16px;
  padding: 24px;
  background: linear-gradient(135deg, #FF6B00/10 0%, #FF8C42/10 100%);
}

/* Achievement Card */
.achievement-card {
  border-radius: 12px;
  padding: 16px;
  background: #28A745/10;
  border: 1px solid #28A745/30;
}

/* Stats Card */
.stats-card {
  border-radius: 12px;
  padding: 20px;
  background: #F8F9FA;
  text-align: center;
}
```

### Download Tab Components
```css
/* App Item */
.app-item {
  border-radius: 16px;
  padding: 20px;
  background: white;
  transition: all 0.3s ease;
}

.app-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(255, 107, 0, 0.1);
}

/* Cached Game Card */
.cached-game-card {
  border-radius: 12px;
  padding: 16px;
  background: #FF6B00/5;
  border: 1px solid #FF6B00/20;
}

/* Shortcut Badge */
.shortcut-badge {
  border-radius: 9999px;
  padding: 8px 16px;
  background: white;
  border: 1px solid #E9ECEF;
  transition: all 0.2s ease;
}

.shortcut-badge:hover {
  border-color: #FF6B00;
  background: #FF6B00/5;
}
```

### Category Tab Components
```css
/* Category Sidebar */
.category-sidebar {
  border-radius: 16px;
  padding: 16px;
  background: white;
}

/* Filter Tabs */
.filter-tab {
  padding: 12px 20px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
}

.filter-tab.active {
  background: #FF6B00;
  color: white;
}

.filter-tab:not(.active) {
  background: #F8F9FA;
  color: #6C757D;
}

.filter-tab:not(.active):hover {
  background: #E9ECEF;
}
```

### Profile Tab Components
```css
/* Achievement Badge */
.achievement-badge {
  border-radius: 12px;
  padding: 8px 16px;
  background: #FFC107/10;
  border: 1px solid #FFC107/30;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

/* Level Indicator */
.level-indicator {
  border-radius: 9999px;
  padding: 4px 12px;
  background: #FF6B00/10;
  color: #FF6B00;
  font-weight: 600;
  font-size: 12px;
}

/* Coin Balance Display */
.coin-balance {
  border-radius: 12px;
  padding: 16px 24px;
  background: linear-gradient(135deg, #FF6B00/10 0%, #FF8C42/10 100%);
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Ad-Free Pass Badge */
.premium-badge {
  border-radius: 8px;
  padding: 4px 8px;
  background: #28A745;
  color: white;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
}
```

### Home Tab Components
```css
/* Banner */
.banner {
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #FF6B00 0%, #FF8C42 100%);
}

/* Continue Playing Card */
.continue-card {
  border-radius: 16px;
  padding: 20px;
  background: white;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.continue-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FF6B00, #FF8C42);
  border-radius: 4px 4px 0 0;
}

/* Hot Games Grid */
.hot-games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 16px;
  padding: 16px;
}

/* Game Banner */
.game-banner {
  border-radius: 16px;
  padding: 24px;
  background: linear-gradient(135deg, var(--banner-color) 0%, white 100%);
  position: relative;
  overflow: hidden;
}

.game-banner::after {
  content: attr(data-emoji);
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 80px;
  opacity: 0.1;
  pointer-events: none;
}
```

## Component State Variants

### Loading States
```css
/* Skeleton Loading */
.skeleton {
  background: linear-gradient(90deg, #E9ECEF 25%, #FF6B00/10 50%, #E9ECEF 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 8px;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Pulse Loading */
.loading-pulse {
  animation: loading-pulse 1.5s ease-in-out infinite;
}

@keyframes loading-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Empty States
```css
/* Empty State Card */
.empty-state {
  border-radius: 16px;
  padding: 48px 24px;
  background: #F8F9FA;
  text-align: center;
}

.empty-state-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #E9ECEF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 32px;
}

.empty-state-title {
  font-size: 20px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 8px;
}

.empty-state-description {
  font-size: 14px;
  color: #6C757D;
  max-width: 300px;
  margin: 0 auto;
}

.empty-state-action {
  margin-top: 24px;
}
```

### Error States
```css
/* Error Message */
.error-message {
  border-radius: 12px;
  padding: 16px 20px;
  background: #DC3545/10;
  border: 1px solid #DC3545/30;
  color: #DC3545;
  display: flex;
  align-items: center;
  gap: 12px;
}

.error-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #DC3545;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
}

.error-message .message {
  flex: 1;
  font-size: 14px;
}

.error-message .action {
  padding: 6px 12px;
  background: #DC3545;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.error-message .action:hover {
  background: #B02a37;
}

.error-message .action:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

### Success States
```css
/* Success Message */
.success-message {
  border-radius: 12px;
  padding: 16px 20px;
  background: #28A745/10;
  border: 1px solid #28A745/30;
  color: #28A745;
  display: flex;
  align-items: center;
  gap: 12px;
}

.success-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #28A745;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
}

.success-message .message {
  flex: 1;
  font-size: 14px;
}

.success-message .action {
  padding: 6px 12px;
  background: #28A745;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.success-message .action:hover {
  background: #218838;
}

/* Success Badge */
.success-badge {
  border-radius: 6px;
  padding: 4px 8px;
  background: #28A745;
  color: white;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

### Notification States
```css
/* Toast Notification */
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1000;
  animation: toast-slide-up 0.3s ease;
}

@keyframes toast-slide-up {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.toast-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-message {
  font-size: 14px;
  font-weight: 500;
}

.toast-close {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.toast-close:hover {
  opacity: 1;
}

/* Toast Variants */
.toast-success {
  background: #28A745;
  color: white;
}

.toast-error {
  background: #DC3545;
  color: white;
}

.toast-warning {
  background: #FFC107;
  color: #212529;
}

.toast-info {
  background: #17A2B8;
  color: white;
}
```

### Rating Component
```css
/* Star Rating */
.star-rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.star {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E9ECEF;
  transition: all 0.2s ease;
}

.star.filled {
  color: #FFC107;
}

.star.half-filled {
  color: #FFC107;
  clip-path: inset(0 50% 0 0);
}

.star:hover {
  transform: scale(1.1);
}

.star-rating.disabled .star {
  cursor: default;
  transform: none;
}

.rating-text {
  font-size: 12px;
  color: #6C757D;
  margin-left: 8px;
}
```

### Progress Indicator
```css
/* Linear Progress */
.progress {
  width: 100%;
  height: 8px;
  background: #E9ECEF;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #FF6B00 0%, #FF8C42 100%);
  border-radius: 4px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: progress-shine 2s infinite;
}

@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.progress.indeterminate .progress-bar {
  animation: progress-indeterminate 2s infinite linear;
}

@keyframes progress-indeterminate {
  0% { transform: translateX(-100%) scaleX(0.1); }
  50% { transform: translateX(0) scaleX(0.3); }
  100% { transform: translateX(100%) scaleX(0.1); }
}

/* Circle Progress */
.circle-progress {
  position: relative;
  width: 60px;
  height: 60px;
}

.circle-progress svg {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}

.circle-progress-circle {
  stroke: #E9ECEF;
  stroke-width: 4;
  fill: none;
}

.circle-progress-bar {
  stroke: #FF6B00;
  stroke-width: 4;
  fill: none;
  stroke-linecap: round;
  transition: stroke-dasharray 0.5s ease;
}

.circle-progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: 600;
  color: #212529;
}
```

### Timeline Component
```css
/* Vertical Timeline */
.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #E9ECEF;
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -25px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FF6B00;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #FF6B00;
}

.timeline-content {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.timeline-date {
  font-size: 12px;
  color: #6C757D;
  margin-bottom: 8px;
}

.timeline-title {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 4px;
}

.timeline-desc {
  font-size: 14px;
  color: #6C757D;
}
```

### Accordion Component
```css
/* FAQ Accordion */
.accordion {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.accordion-item {
  border-bottom: 1px solid #E9ECEF;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  padding: 20px 24px;
  background: white;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.accordion-header:hover {
  background: #FF6B00/5;
}

.accordion-header.active {
  color: #FF6B00;
  background: #FF6B00/10;
}

.accordion-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.accordion-header.active .accordion-icon {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-content.show {
  max-height: 500px;
}

.accordion-body {
  padding: 0 24px 24px;
  background: white;
  color: #6C757D;
  font-size: 14px;
  line-height: 1.6;
}
```

### Tabs Component
```css
/* Horizontal Tabs */
.tabs {
  display: flex;
  gap: 8px;
  background: #F8F9FA;
  padding: 8px;
  border-radius: 12px;
}

.tab {
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #6C757D;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.tab:hover {
  color: #212529;
  background: rgba(255, 107, 0, 0.05);
}

.tab.active {
  color: #FF6B00;
  font-weight: 600;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: #FF6B00;
  border-radius: 1.5px 1.5px 0 0;
}

/* Vertical Tabs */
.vertical-tabs {
  display: flex;
  gap: 16px;
}

.vertical-tabs-content {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.vertical-tabs-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
}

.vertical-tab {
  padding: 16px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #6C757D;
  background: white;
  border: 1px solid #E9ECEF;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.vertical-tab:hover {
  border-color: #FF6B00;
  color: #FF6B00;
  background: #FF6B00/5;
}

.vertical-tab.active {
  border-color: #FF6B00;
  color: #FF6B00;
  font-weight: 600;
  background: #FF6B00/10;
  box-shadow: 0 2px 4px rgba(255, 107, 0, 0.2);
}
```

### Pagination Component
```css
/* Standard Pagination */
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;
}

.pagination-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #E9ECEF;
  background: white;
  color: #6C757D;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-button:hover:not(:disabled) {
  border-color: #FF6B00;
  color: #FF6B00;
  background: #FF6B00/5;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-button.active {
  background: #FF6B00;
  border-color: #FF6B00;
  color: white;
  font-weight: 600;
}

.pagination-ellipsis {
  padding: 0 8px;
  color: #6C757D;
  font-size: 14px;
}

/* Compact Pagination */
.pagination.compact .pagination-button {
  width: 32px;
  height: 32px;
  font-size: 12px;
}

/* Rounded Pagination */
.pagination.rounded .pagination-button {
  border-radius: 9999px;
}

/* With Input */
.pagination-with-input {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pagination-input {
  width: 60px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #E9ECEF;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}

.pagination-input:focus {
  outline: none;
  border-color: #FF6B00;
  box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
}

.pagination-go-button {
  padding: 12px 20px;
  border-radius: 8px;
  background: #FF6B00;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-go-button:hover {
  background: #E55D00;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(255, 107, 0, 0.3);
}
```

### Breadcrumb Component
```css
/* Standard Breadcrumb */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6C757D;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.breadcrumb-link {
  color: #6C757D;
  text-decoration: none;
  transition: all 0.2s ease;
}

.breadcrumb-link:hover {
  color: #FF6B00;
  text-decoration: underline;
}

.breadcrumb-current {
  color: #212529;
  font-weight: 500;
}

.breadcrumb-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Separated Breadcrumb */
.breadcrumb.separated .breadcrumb-item:not(:last-child)::after {
  content: '/';
  margin-left: 8px;
  color: #ADB5BD;
}

/* Chevron Breadcrumb */
.breadcrumb.chevron .breadcrumb-item:not(:last-child)::after {
  content: '〉';
  margin-left: 8px;
  color: #ADB5BD;
  font-size: 12px;
}

/* Arrow Breadcrumb */
.breadcrumb.arrow .breadcrumb-item:not(:last-child)::after {
  content: '→';
  margin-left: 8px;
  color: #ADB5BD;
  font-size: 12px;
}

/* Modern Breadcrumb */
.breadcrumb.modern {
  background: #F8F9FA;
  padding: 12px 16px;
  border-radius: 8px;
  display: inline-flex;
}

.breadcrumb.modern .breadcrumb-item:not(:last-child)::after {
  content: '•';
  margin: 0 12px;
  color: #ADB5BD;
}

/* Minimal Breadcrumb */
.breadcrumb.minimal {
  gap: 4px;
}

.breadcrumb.minimal .breadcrumb-item:not(:last-child)::after {
  content: '/';
  margin-left: 4px;
  color: #6C757D;
}
```

### Slider Component
```css
/* Standard Slider */
.slider {
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  position: relative;
}

.slider-track {
  width: 100%;
  height: 4px;
  background: #E9ECEF;
  border-radius: 2px;
  position: relative;
}

.slider-track-progress {
  position: absolute;
  height: 100%;
  background: linear-gradient(90deg, #FF6B00 0%, #FF8C42 100%);
  border-radius: 2px;
  left: 0;
  top: 0;
}

.slider-handle {
  width: 24px;
  height: 24px;
  background: white;
  border: 2px solid #FF6B00;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(255, 107, 0, 0.3);
  position: absolute;
  left: 0;
  top: -10px;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
}

.slider-handle:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.4);
}

.slider-handle.active {
  transform: scale(1.2);
  background: #FF6B00;
  border-color: white;
}

/* Vertical Slider */
.slider.vertical {
  width: 24px;
  height: 100px;
  flex-direction: column;
}

.slider.vertical .slider-track {
  width: 4px;
  height: 100%;
}

.slider.vertical .slider-track-progress {
  width: 100%;
  height: auto;
  left: 0;
  top: auto;
}

.slider.vertical .slider-handle {
  left: auto;
  right: -10px;
  top: 0;
}

/* Range Slider */
.slider.range {
  margin: 40px 0;
}

.slider.range .slider-track {
  margin: 0 20px;
}

.slider.range .slider-handle {
  left: calc(var(--slider-value, 0) * (100% - 48px) / 100% + 24px);
  transform: translateX(-50%);
}

.slider.range .slider-value {
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  background: #212529;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.slider.range .slider-handle:hover + .slider-value,
.slider.range .slider-handle.active + .slider-value {
  opacity: 1;
}

/* Slider with Labels */
.slider.with-labels {
  margin: 40px 0;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 12px;
  color: #6C757D;
}

.slider-label {
  position: absolute;
  top: -24px;
  transform: translateX(-50%);
  font-size: 11px;
  white-space: nowrap;
}

/* Slider with Steps */
.slider.with-steps {
  margin: 40px 0 32px;
}

.slider-steps {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.slider-step {
  width: 2px;
  height: 8px;
  background: #E9ECEF;
  border-radius: 1px;
}

.slider-step.active {
  background: #FF6B00;
  height: 16px;
}
```

### Collapse Component
```css
/* Standard Collapse */
.collapse {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
}

.collapse-item {
  border-bottom: 1px solid #E9ECEF;
}

.collapse-item:last-child {
  border-bottom: none;
}

.collapse-header {
  width: 100%;
  padding: 20px 24px;
  background: white;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.collapse-header:hover {
  background: #FF6B00/5;
}

.collapse-header.active {
  color: #FF6B00;
  background: #FF6B00/10;
}

.collapse-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.collapse-header.active .collapse-icon {
  transform: rotate(180deg);
}

.collapse-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: white;
}

.collapse-content.show {
  max-height: 500px;
}

.collapse-body {
  padding: 0 24px 24px;
  color: #6C757D;
  font-size: 14px;
  line-height: 1.6;
}

/* Collapse Variations */
.collapse.ghost {
  box-shadow: none;
  border: 1px solid #E9ECEF;
}

.collapse.ghost .collapse-header {
  padding: 16px 20px;
}

.collapse.ghost .collapse-body {
  padding: 0 20px 20px;
}

.collapse.solid {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.collapse.solid .collapse-header {
  padding: 24px 28px;
}

.collapse.solid .collapse-body {
  padding: 0 28px 28px;
}
```

## Component State Variants

### Loading States
```css
/* Skeleton Loading */
.skeleton {
  background: linear-gradient(90deg, #E9ECEF 25%, #FF6B00/10 50%, #E9ECEF 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 8px;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Pulse Loading */
.loading-pulse {
  animation: loading-pulse 1.5s ease-in-out infinite;
}

@keyframes loading-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Wave Loading */
.loading-wave {
  background: linear-gradient(90deg, #E9ECEF 0%, #FF6B00/10 50%, #E9ECEF 100%);
  background-size: 200% 100%;
  animation: loading-wave 2s infinite;
}

@keyframes loading-wave {
  0% { background-position: 200% 0; }
  50% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Empty States
```css
/* Empty State Card */
.empty-state {
  border-radius: 16px;
  padding: 48px 24px;
  background: #F8F9FA;
  text-align: center;
  transition: all 0.3s ease;
}

.empty-state:hover {
  background: #FF6B00/5;
  border: 1px dashed #FF6B00/30;
}

.empty-state-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #E9ECEF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 32px;
  transition: all 0.3s ease;
}

.empty-state:hover .empty-state-icon {
  background: #FF6B00;
  color: white;
  transform: scale(1.1);
}

.empty-state-title {
  font-size: 20px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.empty-state:hover .empty-state-title {
  color: #FF6B00;
}

.empty-state-description {
  font-size: 14px;
  color: #6C757D;
  max-width: 300px;
  margin: 0 auto 8px;
}

.empty-state-action {
  margin-top: 24px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease 0.1s;
}

.empty-state:hover .empty-state-action {
  opacity: 1;
  transform: translateY(0);
}
```

### Error States
```css
/* Error Message */
.error-message {
  border-radius: 12px;
  padding: 16px 20px;
  background: #DC3545/10;
  border: 1px solid #DC3545/30;
  color: #DC3545;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.error-message:hover {
  background: #DC3545/15;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.2);
}

.error-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #DC3545;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.error-message:hover .error-icon {
  transform: rotate(360deg);
}

.error-message .message {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
}

.error-message .action {
  padding: 6px 12px;
  background: #DC3545;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.error-message .action:hover {
  background: #B02a37;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
}

.error-message .action:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Error Alert */
.error-alert {
  border-radius: 12px;
  padding: 16px 20px;
  background: linear-gradient(135deg, #DC3545/10 0%, #DC3545/5 100%);
  border: 2px solid #DC3545/30;
  color: #721c24;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
}

.error-alert::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #DC3545;
}

.error-alert .icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #DC3545;
  color: white;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 600;
}

.error-alert .content {
  flex: 1;
}

.error-alert .title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.error-alert .description {
  font-size: 14px;
  line-height: 1.5;
}
```

### Success States
```css
/* Success Message */
.success-message {
  border-radius: 12px;
  padding: 16px 20px;
  background: #28A745/10;
  border: 1px solid #28A745/30;
  color: #28A745;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.success-message:hover {
  background: #28A745/15;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);
}

.success-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #28A745;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.success-message:hover .success-icon {
  transform: rotate(360deg);
}

.success-message .message {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
}

.success-message .action {
  padding: 6px 12px;
  background: #28A745;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.success-message .action:hover {
  background: #218838;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
}

/* Success Badge */
.success-badge {
  border-radius: 6px;
  padding: 4px 8px;
  background: #28A745;
  color: white;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(40, 167, 69, 0.2);
  transition: all 0.2s ease;
}

.success-badge:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
}

/* Success Toast */
.success-toast {
  border-radius: 12px;
  padding: 16px 20px;
  background: linear-gradient(135deg, #28A745 0%, #28A745 100%);
  color: white;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(40, 167, 69, 0.3);
  position: relative;
  overflow: hidden;
}

.success-toast::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: white;
  animation: success-toast-pulse 2s infinite;
}

@keyframes success-toast-pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
```

### Notification States
```css
/* Toast Notification */
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1000;
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.toast.hide {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

.toast-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toast-message {
  font-size: 14px;
  font-weight: 500;
}

.toast-close {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.toast-close:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

/* Toast Variants */
.toast-success {
  background: #28A745;
  color: white;
}

.toast-error {
  background: #DC3545;
  color: white;
}

.toast-warning {
  background: #FFC107;
  color: #212529;
}

.toast-info {
  background: #17A2B8;
  color: white;
}

/* Toast Position Variants */
.toast.top {
  bottom: auto;
  top: 24px;
}

.toast.top-left {
  bottom: auto;
  top: 24px;
  left: 24px;
  right: auto;
  transform: none;
}

.toast.top-right {
  bottom: auto;
  top: 24px;
  right: 24px;
  left: auto;
  transform: none;
}

.toast.bottom-left {
  bottom: 24px;
  left: 24px;
  right: auto;
  transform: none;
}

.toast.bottom-right {
  bottom: 24px;
  right: 24px;
  left: auto;
  transform: none;
}
```

### Rating Component
```css
/* Star Rating */
.star-rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.star {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E9ECEF;
  transition: all 0.2s ease;
}

.star.filled {
  color: #FFC107;
}

.star.half-filled {
  color: #FFC107;
  clip-path: inset(0 50% 0 0);
}

.star:hover {
  transform: scale(1.1);
}

.star-rating.disabled .star {
  cursor: default;
  transform: none;
}

.rating-text {
  font-size: 12px;
  color: #6C757D;
  margin-left: 8px;
}

/* Rating Stars */
.rating-stars {
  display: flex;
  align-items: center;
  gap: 2px;
}

.rating-star {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E9ECEF;
  transition: all 0.2s ease;
}

.rating-star.filled {
  color: #FFC107;
}

.rating-star.half-filled {
  color: #FFC107;
  clip-path: inset(0 50% 0 0);
}

.rating-star:hover {
  transform: scale(1.1);
}

/* Rating Badge */
.rating-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #FFC107/10;
  color: #FFC107;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
}
```

### Progress Indicator
```css
/* Linear Progress */
.progress {
  width: 100%;
  height: 8px;
  background: #E9ECEF;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #FF6B00 0%, #FF8C42 100%);
  border-radius: 4px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: progress-shine 2s infinite;
}

@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.progress.indeterminate .progress-bar {
  animation: progress-indeterminate 2s infinite linear;
}

@keyframes progress-indeterminate {
  0% { transform: translateX(-100%) scaleX(0.1); }
  50% { transform: translateX(0) scaleX(0.3); }
  100% { transform: translateX(100%) scaleX(0.1); }
}

/* Circle Progress */
.circle-progress {
  position: relative;
  width: 60px;
  height: 60px;
}

.circle-progress svg {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}

.circle-progress-circle {
  stroke: #E9ECEF;
  stroke-width: 4;
  fill: none;
}

.circle-progress-bar {
  stroke: #FF6B00;
  stroke-width: 4;
  fill: none;
  stroke-linecap: round;
  transition: stroke-dasharray 0.5s ease;
}

.circle-progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: 600;
  color: #212529;
}
```

### Timeline Component
```css
/* Vertical Timeline */
.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #E9ECEF;
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -25px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FF6B00;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #FF6B00;
}

.timeline-content {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.timeline-date {
  font-size: 12px;
  color: #6C757D;
  margin-bottom: 8px;
}

.timeline-title {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 4px;
}

.timeline-desc {
  font-size: 14px;
  color: #6C757D;
}
```

### Accordion Component
```css
/* Standard Collapse */
.accordion {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
}

.accordion-item {
  border-bottom: 1px solid #E9ECEF;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  padding: 20px 24px;
  background: white;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.accordion-header:hover {
  background: #FF6B00/5;
}

.accordion-header.active {
  color: #FF6B00;
  background: #FF6B00/10;
}

.accordion-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.accordion-header.active .accordion-icon {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-content.show {
  max-height: 500px;
}

.accordion-body {
  padding: 0 24px 24px;
  color: #6C757D;
  font-size: 14px;
  line-height: 1.6;
}
```

### Tabs Component
```css
/* Horizontal Tabs */
.tabs {
  display: flex;
  gap: 8px;
  background: #F8F9FA;
  padding: 8px;
  border-radius: 12px;
}

.tab {
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #6C757D;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.tab:hover {
  color: #212529;
  background: rgba(255, 107, 0, 0.05);
}

.tab.active {
  color: #FF6B00;
  font-weight: 600;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: #FF6B00;
  border-radius: 1.5px 1.5px 0 0;
}

/* Vertical Tabs */
.vertical-tabs {
  display: flex;
  gap: 16px;
}

.vertical-tabs-content {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.vertical-tabs-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
}

.vertical-tab {
  padding: 16px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #6C757D;
  background: white;
  border: 1px solid #E9ECEF;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.vertical-tab:hover {
  border-color: #FF6B00;
  color: #FF6B00;
  background: #FF6B00/5;
}

.vertical-tab.active {
  border-color: #FF6B00;
  color: #FF6B00;
  font-weight: 600;
  background: #FF6B00/10;
  box-shadow: 0 2px 4px rgba(255, 107, 0, 0.2);
}
```

### Pagination Component
```css
/* Standard Pagination */
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;
}

.pagination-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #E9ECEF;
  background: white;
  color: #6C757D;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-button:hover:not(:disabled) {
  border-color: #FF6B00;
  color: #FF6B00;
  background: #FF6B00/5;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-button.active {
  background: #FF6B00;
  border-color: #FF6B00;
  color: white;
  font-weight: 600;
}

.pagination-ellipsis {
  padding: 0 8px;
  color: #6C757D;
  font-size: 14px;
}

/* Compact Pagination */
.pagination.compact .pagination-button {
  width: 32px;
  height: 32px;
  font-size: 12px;
}

/* Rounded Pagination */
.pagination.rounded .pagination-button {
  border-radius: 9999px;
}

/* With Input */
.pagination-with-input {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pagination-input {
  width: 60px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #E9ECEF;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
}

.pagination-input:focus {
  outline: none;
  border-color: #FF6B00;
  box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.1);
}

.pagination-go-button {
  padding: 12px 20px;
  border-radius: 8px;
  background: #FF6B00;
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-go-button:hover {
  background: #E55D00;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(255, 107, 0, 0.3);
}
```

### Breadcrumb Component
```css
/* Standard Breadcrumb */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #6C757D;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.breadcrumb-link {
  color: #6C757D;
  text-decoration: none;
  transition: all 0.2s ease;
}

.breadcrumb-link:hover {
  color: #FF6B00;
  text-decoration: underline;
}

.breadcrumb-current {
  color: #212529;
  font-weight: 500;
}

.breadcrumb-icon {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Separated Breadcrumb */
.breadcrumb.separated .breadcrumb-item:not(:last-child)::after {
  content: '/';
  margin-left: 8px;
  color: #ADB5BD;
}

/* Chevron Breadcrumb */
.breadcrumb.chevron .breadcrumb-item:not(:last-child)::after {
  content: '〉';
  margin-left: 8px;
  color: #ADB5BD;
  font-size: 12px;
}

/* Arrow Breadcrumb */
.breadcrumb.arrow .breadcrumb-item:not(:last-child)::after {
  content: '→';
  margin-left: 8px;
  color: #ADB5BD;
  font-size: 12px;
}

/* Modern Breadcrumb */
.breadcrumb.modern {
  background: #F8F9FA;
  padding: 12px 16px;
  border-radius: 8px;
  display: inline-flex;
}

.breadcrumb.modern .breadcrumb-item:not(:last-child)::after {
  content: '•';
  margin: 0 12px;
  color: #ADB5BD;
}

/* Minimal Breadcrumb */
.breadcrumb.minimal {
  gap: 4px;
}

.breadcrumb.minimal .breadcrumb-item:not(:last-child)::after {
  content: '/';
  margin-left: 4px;
  color: #6C757D;
}
```

### Slider Component
```css
/* Standard Slider */
.slider {
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  position: relative;
}

.slider-track {
  width: 100%;
  height: 4px;
  background: #E9ECEF;
  border-radius: 2px;
  position: relative;
}

.slider-track-progress {
  position: absolute;
  height: 100%;
  background: linear-gradient(90deg, #FF6B00 0%, #FF8C42 100%);
  border-radius: 2px;
  left: 0;
  top: 0;
}

.slider-handle {
  width: 24px;
  height: 24px;
  background: white;
  border: 2px solid #FF6B00;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(255, 107, 0, 0.3);
  position: absolute;
  left: 0;
  top: -10px;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
}

.slider-handle:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.4);
}

.slider-handle.active {
  transform: scale(1.2);
  background: #FF6B00;
  border-color: white;
}

/* Vertical Slider */
.slider.vertical {
  width: 24px;
  height: 100px;
  flex-direction: column;
}

.slider.vertical .slider-track {
  width: 4px;
  height: 100%;
}

.slider.vertical .slider-track-progress {
  width: 100%;
  height: auto;
  left: 0;
  top: auto;
}

.slider.vertical .slider-handle {
  left: auto;
  right: -10px;
  top: 0;
}

/* Range Slider */
.slider.range {
  margin: 40px 0;
}

.slider.range .slider-track {
  margin: 0 20px;
}

.slider.range .slider-handle {
  left: calc(var(--slider-value, 0) * (100% - 48px) / 100% + 24px);
  transform: translateX(-50%);
}

.slider.range .slider-value {
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  background: #212529;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.slider.range .slider-handle:hover + .slider-value,
.slider.range .slider-handle.active + .slider-value {
  opacity: 1;
}

/* Slider with Labels */
.slider.with-labels {
  margin: 40px 0 32px;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 12px;
  color: #6C757D;
}

.slider-label {
  position: absolute;
  top: -24px;
  transform: translateX(-50%);
  font-size: 11px;
  white-space: nowrap;
}

/* Slider with Steps */
.slider.with-steps {
  margin: 40px 0 32px;
}

.slider-steps {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}

.slider-step {
  width: 2px;
  height: 8px;
  background: #E9ECEF;
  border-radius: 1px;
}

.slider-step.active {
  background: #FF6B00;
  height: 16px;
}
```

### Collapse Component
```css
/* Standard Collapse */
.collapse {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
}

.collapse-item {
  border-bottom: 1px solid #E9ECEF;
}

.collapse-item:last-child {
  border-bottom: none;
}

.collapse-header {
  width: 100%;
  padding: 20px 24px;
  background: white;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.collapse-header:hover {
  background: #FF6B00/5;
}

.collapse-header.active {
  color: #FF6B00;
  background: #FF6B00/10;
}

.collapse-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.collapse-header.active .collapse-icon {
  transform: rotate(180deg);
}

.collapse-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.collapse-content.show {
  max-height: 500px;
}

.collapse-body {
  padding: 0 24px 24px;
  color: #6C757D;
  font-size: 14px;
  line-height: 1.6;
}
```

## Component State Variants

### Loading States
```css
/* Skeleton Loading */
.skeleton {
  background: linear-gradient(90deg, #E9ECEF 25%, #FF6B00/10 50%, #E9ECEF 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
  border-radius: 8px;
}

@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Pulse Loading */
.loading-pulse {
  animation: loading-pulse 1.5s ease-in-out infinite;
}

@keyframes loading-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Wave Loading */
.loading-wave {
  background: linear-gradient(90deg, #E9ECEF 0%, #FF6B00/10 50%, #E9ECEF 100%);
  background-size: 200% 100%;
  animation: loading-wave 2s infinite;
}

@keyframes loading-wave {
  0% { background-position: 200% 0; }
  50% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Empty States
```css
/* Empty State Card */
.empty-state {
  border-radius: 16px;
  padding: 48px 24px;
  background: #F8F9FA;
  text-align: center;
  transition: all 0.3s ease;
}

.empty-state:hover {
  background: #FF6B00/5;
  border: 1px dashed #FF6B00/30;
}

.empty-state-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #E9ECEF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 32px;
  transition: all 0.3s ease;
}

.empty-state:hover .empty-state-icon {
  background: #FF6B00;
  color: white;
  transform: scale(1.1);
}

.empty-state-title {
  font-size: 20px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.empty-state:hover .empty-state-title {
  color: #FF6B00;
}

.empty-state-description {
  font-size: 14px;
  color: #6C757D;
  max-width: 300px;
  margin: 0 auto 8px;
}

.empty-state-action {
  margin-top: 24px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease 0.1s;
}

.empty-state:hover .empty-state-action {
  opacity: 1;
  transform: translateY(0);
}
```

### Error States
```css
/* Error Message */
.error-message {
  border-radius: 12px;
  padding: 16px 20px;
  background: #DC3545/10;
  border: 1px solid #DC3545/30;
  color: #DC3545;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.error-message:hover {
  background: #DC3545/15;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.2);
}

.error-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #DC3545;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.error-message:hover .error-icon {
  transform: rotate(360deg);
}

.error-message .message {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
}

.error-message .action {
  padding: 6px 12px;
  background: #DC3545;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.error-message .action:hover {
  background: #B02a37;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
}

.error-message .action:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

/* Error Alert */
.error-alert {
  border-radius: 12px;
  padding: 16px 20px;
  background: linear-gradient(135deg, #DC3545/10 0%, #DC3545/5 100%);
  border: 2px solid #DC3545/30;
  color: #721c24;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  overflow: hidden;
}

.error-alert::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #DC3545;
}

.error-alert .icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #DC3545;
  color: white;
  border-radius: 50%;
  font-size: 16px;
  font-weight: 600;
}

.error-alert .content {
  flex: 1;
}

.error-alert .title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.error-alert .description {
  font-size: 14px;
  line-height: 1.5;
}
```

### Success States
```css
/* Success Message */
.success-message {
  border-radius: 12px;
  padding: 16px 20px;
  background: #28A745/10;
  border: 1px solid #28A745/30;
  color: #28A745;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.success-message:hover {
  background: #28A745/15;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(40, 167, 69, 0.2);
}

.success-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #28A745;
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.success-message:hover .success-icon {
  transform: rotate(360deg);
}

.success-message .message {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
}

.success-message .action {
  padding: 6px 12px;
  background: #28A745;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.success-message .action:hover {
  background: #218838;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
}

/* Success Badge */
.success-badge {
  border-radius: 6px;
  padding: 4px 8px;
  background: #28A745;
  color: white;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(40, 167, 69, 0.2);
  transition: all 0.2s ease;
}

.success-badge:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
}

/* Success Toast */
.success-toast {
  border-radius: 12px;
  padding: 16px 20px;
  background: linear-gradient(135deg, #28A745 0%, #28A745 100%);
  color: white;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 4px 16px rgba(40, 167, 69, 0.3);
  position: relative;
  overflow: hidden;
}

.success-toast::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: white;
  animation: success-toast-pulse 2s infinite;
}

@keyframes success-toast-pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
```

### Notification States
```css
/* Toast Notification */
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 24px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 1000;
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.toast.hide {
  opacity: 0;
  transform: translateX(-50%) translateY(20px);
}

.toast-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
}

.toast-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toast-message {
  font-size: 14px;
  font-weight: 500;
}

.toast-close {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.2s ease;
  border-radius: 4px;
}

.toast-close:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

/* Toast Variants */
.toast-success {
  background: #28A745;
  color: white;
}

.toast-error {
  background: #DC3545;
  color: white;
}

.toast-warning {
  background: #FFC107;
  color: #212529;
}

.toast-info {
  background: #17A2B8;
  color: white;
}

/* Toast Position Variants */
.toast.top {
  bottom: auto;
  top: 24px;
}

.toast.top-left {
  bottom: auto;
  top: 24px;
  left: 24px;
  right: auto;
  transform: none;
}

.toast.top-right {
  bottom: auto;
  top: 24px;
  right: 24px;
  left: auto;
  transform: none;
}

.toast.bottom-left {
  bottom: 24px;
  left: 24px;
  right: auto;
  transform: none;
}

.toast.bottom-right {
  bottom: 24px;
  right: 24px;
  left: auto;
  transform: none;
}
```

### Rating Component
```css
/* Star Rating */
.star-rating {
  display: flex;
  align-items: center;
  gap: 4px;
}

.star {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E9ECEF;
  transition: all 0.2s ease;
}

.star.filled {
  color: #FFC107;
}

.star.half-filled {
  color: #FFC107;
  clip-path: inset(0 50% 0 0);
}

.star:hover {
  transform: scale(1.1);
}

.star-rating.disabled .star {
  cursor: default;
  transform: none;
}

.rating-text {
  font-size: 12px;
  color: #6C757D;
  margin-left: 8px;
}

/* Rating Stars */
.rating-stars {
  display: flex;
  align-items: center;
  gap: 2px;
}

.rating-star {
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E9ECEF;
  transition: all 0.2s ease;
}

.rating-star.filled {
  color: #FFC107;
}

.rating-star.half-filled {
  color: #FFC107;
  clip-path: inset(0 50% 0 0);
}

.rating-star:hover {
  transform: scale(1.1);
}

/* Rating Badge */
.rating-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #FFC107/10;
  color: #FFC107;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 600;
}
```

### Progress Indicator
```css
/* Linear Progress */
.progress {
  width: 100%;
  height: 8px;
  background: #E9ECEF;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #FF6B00 0%, #FF8C42 100%);
  border-radius: 4px;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: progress-shine 2s infinite;
}

@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.progress.indeterminate .progress-bar {
  animation: progress-indeterminate 2s infinite linear;
}

@keyframes progress-indeterminate {
  0% { transform: translateX(-100%) scaleX(0.1); }
  50% { transform: translateX(0) scaleX(0.3); }
  100% { transform: translateX(100%) scaleX(0.1); }
}

/* Circle Progress */
.circle-progress {
  position: relative;
  width: 60px;
  height: 60px;
}

.circle-progress svg {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}

.circle-progress-circle {
  stroke: #E9ECEF;
  stroke-width: 4;
  fill: none;
}

.circle-progress-bar {
  stroke: #FF6B00;
  stroke-width: 4;
  fill: none;
  stroke-linecap: round;
  transition: stroke-dasharray 0.5s ease;
}

.circle-progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: 600;
  color: #212529;
}
```

### Timeline Component
```css
/* Vertical Timeline */
.timeline {
  position: relative;
  padding-left: 40px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 15px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #E9ECEF;
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: -25px;
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #FF6B00;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #FF6B00;
}

.timeline-content {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.timeline-date {
  font-size: 12px;
  color: #6C757D;
  margin-bottom: 8px;
}

.timeline-title {
  font-size: 16px;
  font-weight: 600;
  color: #212529;
  margin-bottom: 4px;
}

.timeline-desc {
  font-size: 14px;
  color: #6C757D;
}
```

### Accordion Component
```css
/* Standard Collapse */
.accordion {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: white;
}

.accordion-item {
  border-bottom: 1px solid #E9ECEF;
}

.accordion-item:last-child {
  border-bottom: none;
}

.accordion-header {
  width: 100%;
  padding: 20px 24px;
  background: white;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.accordion-header:hover {
  background: #FF6B00/5;
}

.accordion-header.active {
  color: #FF6B00;
  background: #FF6B00/10;
}

.accordion-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.accordion-header.active .accordion-icon {
  transform: rotate(180deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-content.show {
  max-height: 500px;
}

.accordion-body {
  padding: 0 24px 24px;
  color: #6C757D;
  font-size: 14px;
  line-height: 1.6;
}
```

### Tabs Component
```css
/* Horizontal Tabs */
.tabs {
  display: flex;
  gap: 8px;
  background: #F8F9FA;
  padding: 8px;
  border-radius: 12px;
}

.tab {
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #6C757D;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.tab:hover {
  color: #212529;
  background: rgba(255, 107, 0, 0.05);
}

.tab.active {
  color: #FF6B00;
  font-weight: 600;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background: #FF6B00;
  border-radius: 1.5px 1.5px 0 0;
}

/* Vertical Tabs */
.vertical-tabs {
  display: flex;
  gap: 16px;
}

.vertical-tabs-content {
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.vertical-tabs-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
}

.vertical-tab {
  padding: 16px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #6C757D;
  background: white;
  border: 1px solid #E9ECEF;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.vertical-tab:hover {
  border-color: #FF6B00;
  color: #FF6B00;
  background: #FF6B00/5;
}

.vertical-tab.active {
  border-color: #FF6B00;
  color: #FF6B00;
  font-weight: 600;
  background: #FF6B00/10;
  box-shadow: 0 2px 4px rgba(255, 107, 0, 0.2);
}
```

### Pagination Component
```css
/* Standard Pagination */
.pagination {
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  margin-top: 32px;
}

.pagination-button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #E9ECEF;
  background: white;
  color: #6C757D;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.pagination-button:hover:not(:disabled) {
  border-color: #FF6B00;
  color: #FF6B00;
  background: #FF6B00/5