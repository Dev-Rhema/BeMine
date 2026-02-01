# 🎮 Retro Pixel Valentine's Website

A retro 8-bit style Valentine's Day website with pixel art hearts, Press Start 2P font, CRT scanlines, and classic gaming aesthetics!

## ✨ Features

- **Pixel Art Hearts**: Hand-crafted SVG pixel hearts (broken & whole)
- **Retro 8-bit Font**: Classic "Press Start 2P" pixel font
- **CRT Scanlines**: Authentic retro monitor effect
- **Pixel Grid Background**: Animated scrolling grid
- **Glowing Text**: Neon-style text effects
- **Pixel Confetti**: 8-bit celebration animation
- **NO Emojis**: Pure pixel art graphics
- **Retro Gradient**: Classic blue & orange color scheme
- **Smooth Animations**: Powered by Framer Motion
- **Responsive**: Works on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd valentine-pixel
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### Edit the Message

To customize the message that appears when someone clicks YES, open `src/App.jsx` and find around line 350:

```jsx
<div>&gt; UNLIMITED CUDDLES</div>
<div>&gt; LIFETIME BAD PUNS</div>
<div>&gt; PIZZA STEALING RIGHTS</div>
```

Replace with your own messages in retro terminal style!

### Change Colors

The pixel theme uses:
- **Blue**: `#0ea5e9` (primary text & borders)
- **Orange**: `#f97316` (secondary highlights)
- **Green**: `#10b981` (success/hearts)
- **Red**: `#ef4444` (broken hearts)

Edit these in `src/App.jsx` and `tailwind.config.js`

### Customize Pixel Hearts

The hearts are SVG-based pixel art. Find the `PixelHeart` component in `src/App.jsx` (around line 80) to modify the pixel pattern.

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder!

## 🌐 Deployment

Deploy to:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag `dist` folder
- **GitHub Pages**: Push `dist` to `gh-pages` branch

## 💾 Retro Features Explained

### CRT Scanlines
Authentic retro monitor effect with horizontal scanlines overlay

### Pixel Grid Background
Animated scrolling grid pattern for that classic 8-bit feel

### Glowing Text
Neon-style text shadows for that arcade cabinet glow

### Pixel Hearts
- **Broken Heart**: Crack down the middle with optional tears
- **Whole Heart**: Complete pixel heart with animation

### Press Start 2P Font
The classic pixel font used in retro games

## 🎮 Controls

- Click **REFRESH** to start
- Click **YES** to accept (triggers confetti!)
- Click **NO** to... well, try it and see!

## 🛠️ Technologies

- **React 18**: Component-based UI
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Press Start 2P**: Retro pixel font

## 📝 License

Free to use for personal Valentine's projects!

## 🎯 Tips

- Test the NO button behavior (it jumps around!)
- After 2 NO clicks, the heart cries pixel tears
- The confetti is made of pixel squares
- Scanlines add authentic CRT monitor feel
- Works great on mobile devices too

Made with 💾 and nostalgia for the 8-bit era!
