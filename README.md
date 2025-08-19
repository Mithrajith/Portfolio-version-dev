# Mithrajith's Pixel Violet Portfolio

> A dark–violet, pixel‑styled, buttery‑smooth React portfolio with maximal yet tasteful motion.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)

## ✨ Features

### 🎨 Design
- **Dark Violet Theme**: Deep space violet background with neon accents
- **Pixel Perfect**: Retro pixel aesthetics with modern glass effects
- **CRT Effects**: Scanlines, dithering, and pixel grid overlays
- **Responsive**: Works seamlessly across all devices

### 🎭 Animations
- **Framer Motion**: Sophisticated animation system with spring physics
- **Pixel Dissolve**: Content appears with pixelated transitions
- **Magnetic Cursor**: Interactive cursor with crosshair and trails
- **Hover Effects**: Lift, glow, and chromatic aberration on interaction
- **Smooth Scrolling**: Buttery smooth page transitions

### 🚀 Performance
- **React + Vite**: Lightning fast development and optimized builds
- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Progressive loading with blur placeholders
- **Accessibility**: WCAG compliant with focus management

### 🎮 Interactive Features
- **Command Palette**: Press `⌘/Ctrl + K` for quick navigation
- **Konami Code**: `↑↑↓↓←→←→BA` for secret neon theme
- **Sound Toggle**: Optional 8-bit sound effects
- **Motion Toggle**: Respects `prefers-reduced-motion`

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Custom CSS Variables
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State**: Zustand
- **Icons**: Lucide React
- **Build**: Vite
- **Fonts**: Press Start 2P (pixel), VT323 (display), Inter (body)

## 🎯 Pages

1. **Home** (`/`) - Hero section with pixel planet and CTA chips
2. **About** (`/about`) - Timeline, stats, and bio with pixel avatar
3. **Skills** (`/skills`) - Interactive skill meters with pixel blocks
4. **Projects** (`/projects`) - Filterable project cards with hover effects
5. **Lab** (`/lab`) - Interactive coding experiments and demos
6. **Contact** (`/contact`) - Contact form with validation and social links

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Mithrajith/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Palette

```css
:root {
  --bg: #0E0A1F;        /* Deep space violet */
  --surface: #15102A;    /* Cards/panels */
  --violet: #7C3AED;     /* Primary accent */
  --violet-2: #A78BFA;   /* Soft accent/glows */
  --cyan: #22D3EE;       /* Secondary accent */
  --lime: #A3E635;       /* Success/highlights */
  --rose: #FB7185;       /* Errors/sparks */
  --text: #EDE9FE;       /* Primary text */
  --muted: #A1A1AA;      /* Secondary text */
}
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── PixelButton.tsx
│   │   ├── PixelCard.tsx
│   │   ├── MagneticCursor.tsx
│   │   └── CommandPalette.tsx
│   └── navigation/
│       └── DockNav.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── SkillsPage.tsx
│   ├── ProjectsPage.tsx
│   ├── LabPage.tsx
│   └── ContactPage.tsx
├── lib/
│   ├── animations.ts
│   └── utils.ts
├── store/
│   └── ui.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🎮 Interactive Features

### Command Palette
Press `⌘/Ctrl + K` to open the command palette for quick navigation:
- Navigate to any page
- Toggle sound/motion settings
- Activate secret features

### Konami Code
Enter the classic Konami code to unlock the secret neon theme:
`↑ ↑ ↓ ↓ ← → ← → B A`

### Magnetic Cursor
Elements respond to cursor proximity with spring physics. The cursor shows crosshairs on interactive elements.

## ♿ Accessibility

- High contrast color ratios (WCAG AA+)
- Focus visible indicators on all interactive elements
- Keyboard navigation for all features
- Screen reader friendly markup
- Motion controls for users with vestibular disorders

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `src/index.css`:

```css
:root {
  --violet: #your-color;
  --violet-2: #your-accent;
  /* ... other colors */
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route to `src/App.tsx`
3. Update navigation in `src/components/navigation/DockNav.tsx`

### Custom Animations
Use the animation variants in `src/lib/animations.ts`:

```tsx
import { pixelVariants } from '@/lib/animations';

<motion.div variants={pixelVariants} initial="hidden" animate="show">
  Your content
</motion.div>
```

## 📝 Performance Budget

- **LCP**: < 2.5s
- **TTI**: < 2.0s
- **Image loading**: Progressive with blur placeholders
- **Motion**: Optimized with `transform` and `opacity`
- **Bundle size**: Code splitting by route

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Framer Motion** for the animation system
- **Tailwind CSS** for the utility-first styling
- **Lucide** for the beautiful icons
- **Vite** for the lightning-fast build tool
- **CRT/Pixel aesthetics** inspired by retro computing

---

> **"Crafted with pixels, polish, and a pinch of magic."** ✨

Built with ❤️ by [Mithrajith](https://github.com/Mithrajith)

## 📞 Contact

- **Email**: hello@Mithrajith.dev
- **GitHub**: [@Mithrajith](https://github.com/Mithrajith)
- **LinkedIn**: [/in/Mithrajith](https://linkedin.com/in/Mithrajith)
- **Portfolio**: [Mithrajith.dev](https://Mithrajith.dev)
