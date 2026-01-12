# How to Embed FirstWin Animation in Framer

## Option 1: React Component (Recommended - Most Reliable)

1. **Copy the Component File**
   - Open `FirstWinFramer.tsx` from your project
   - Copy the entire file content

2. **In Framer:**
   - Click **Insert** → **Code Component**
   - Select **React** as the language
   - Paste the code from `FirstWinFramer.tsx`
   - The component will render automatically

3. **Customize:**
   - You can adjust the size, colors, and timing directly in the component code
   - All styles are inline, so you can modify them easily

## Option 2: Lottie File (If you want to use Lottie)

1. **Upload to LottieFiles:**
   - Go to [lottiefiles.com](https://lottiefiles.com)
   - Create an account/login
   - Click **Upload** → Upload `animations/firstWinAnimation.json`
   - Once uploaded, copy the URL or download the file

2. **In Framer:**
   - Install the **LottieFiles** plugin:
     - Menu → **Plugins** → **Open Plugins**
     - Search "LottieFiles" → Install
   - Open the LottieFiles plugin
   - Paste your Lottie URL or upload the JSON file
   - Click **Insert**

## Option 3: Video Export (Alternative)

If neither option works, you can:
1. Record a screen capture of the animation running in your browser
2. Export as MP4/GIF
3. Upload to Framer as a video/image element

## Troubleshooting

- **Component not rendering?** Make sure you selected "React" as the code type
- **Lottie file blank?** The React component (Option 1) is more reliable
- **Animation too fast/slow?** Adjust the `3000` value in the `setInterval` (milliseconds per step)

## Recommended Approach

**Use Option 1 (React Component)** - It's the most reliable and gives you full control over the animation without depending on external Lottie files.
