# FirstWin Mobile Component - Framer Embedding Guide

## 📱 Mobile-Optimized Animation Component

This is a mobile-optimized version of the FirstWin animation, designed specifically for small screens (320px - 768px).

## 🎯 Key Mobile Optimizations

- **Vertical Stack Layout** - Steps arranged vertically for better mobile viewing
- **Touch-Optimized Sizing** - Larger touch targets (48px icons)
- **Reduced Animation Complexity** - Lighter animations for better mobile performance
- **Smaller Font Sizes** - Optimized typography for mobile screens
- **Progress Indicator** - Bottom pagination dots for easy tracking
- **Compact Padding** - More efficient use of limited screen space
- **Simplified Effects** - Fewer particles and lighter glows for performance

## 📋 How to Embed in Framer

### Step 1: Copy the Component Code
1. Open `FirstWinFramerMobile.tsx`
2. Copy the entire file contents

### Step 2: Create Code Component in Framer
1. Open your Framer project
2. Go to **Assets** panel → Click **+** → Select **Code**
3. Choose **New from code**
4. Paste the copied code
5. Name it: `FirstWinMobile`

### Step 3: Add to Your Canvas
1. Find `FirstWinMobile` in your Assets panel
2. Drag it onto your mobile canvas/breakpoint
3. Resize to fit your design (recommended: 320px - 420px width)

### Step 4: Responsive Setup
1. Create separate breakpoints for Mobile, Tablet, Desktop
2. Use `FirstWinMobile` for mobile breakpoint (< 768px)
3. Use `FirstWinFramer` (desktop version) for larger screens

## 🎨 Component Features

### Visual Effects
- ✨ Subtle particle animations (5 particles vs 8 on desktop)
- 💫 Shimmer effect on active icon
- 🌊 Ambient glow behind active step
- 📊 Animated progress dots at bottom
- 🎭 Smooth slide-up animations

### Interactive States
- **Active** - Enlarged icon, bold text, description visible
- **Past** - Green checkmark, reduced opacity
- **Future** - Grayed out, minimal visibility
- **Animated Transitions** - Smooth 3.5s cycle between steps

### Typography
- Font: **Poppins** (auto-loaded from Google Fonts)
- Active Heading: 16px, weight 600
- Inactive Heading: 15px, weight 500
- Description: 12px, weight 400

### Layout Specifications
- Min Height: 500px
- Padding: 16px outer, 20px inner
- Icon Size: 48x48px
- Border Radius: 24px (card), 12px (icons)
- Gap Between Steps: 8px
- Progress Dots: 6px height, 24px width (active)

## 🔧 Customization Tips

### Adjust Animation Speed
Change the interval in line 62:
```typescript
const interval = setInterval(() => {
  setActiveTab((prev) => (prev + 1) % steps.length)
}, 3500) // Change this number (milliseconds)
```

### Modify Step Content
Edit the `steps` array (starting at line 18) to change:
- Icons (emojis)
- Titles
- Descriptions
- Colors

### Change Color Scheme
Each step has:
- `color`: Main accent color
- `bgColor`: Background color for icon
- `accentColor`: RGB values for glows/shadows

## 📱 Best Practices

1. **Screen Size**: Works best on 320px - 768px width
2. **Height**: Ensure container has min-height of 500px
3. **Performance**: Animations are optimized for 60fps on mobile
4. **Touch Areas**: All interactive elements meet 44px touch target minimum
5. **Font Loading**: Component auto-loads Poppins, ensure stable network

## 🚀 Performance Notes

- Uses CSS animations (GPU-accelerated)
- Minimal re-renders with React hooks
- Particles automatically cleanup after 2 seconds
- Optimized for battery efficiency on mobile devices

## 🎯 Use Cases

Perfect for:
- Mobile landing pages
- Onboarding flows
- Feature showcases
- Progress indicators
- Achievement displays

## 📞 Support

If you encounter any issues:
1. Check browser console for errors
2. Ensure Framer is up to date
3. Verify code component syntax is correct
4. Test on actual mobile device, not just desktop preview

---

**Component Version**: Mobile Optimized v1.0  
**Last Updated**: January 2026  
**Compatibility**: iOS 12+, Android 8+, All modern mobile browsers
