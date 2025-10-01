# Interactive Portfolio

A modern, interactive portfolio built with Next.js, TailwindCSS, Framer Motion, and GSAP.

## 🚀 Tech Stack

- **Next.js 15.5.4** - React framework with App Router
- **TailwindCSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **GSAP** - Professional-grade animation library
- **TypeScript** - Type-safe development

## 🎨 Design Features

### Color Palette

- **Background**: `#0d1117` (Dark mode)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#c9d1d9`
- **Accent Blue**: `#0077ff`
- **Accent Violet**: `#9b59b6`

### Typography

- **Headings**: Inter (700-900 weight)
- **Body**: Manrope (400-600 weight)
- **Sizes**: xl (20px), 2xl (24px), 4xl (36px), base (16px), lg (18px)

### Interactive Elements

- **Buttons**: Rounded (`rounded-2xl`), hover glow effects, scale animations
- **Smooth Scrolling**: Enabled globally
- **Page Transitions**: Fade + slide up animations via Framer Motion
- **Sticky Navbar**: Fixed navigation with backdrop blur on scroll

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
giwa-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Homepage with sections
│   │   └── globals.css      # Global styles and Tailwind config
│   └── components/
│       ├── Layout.tsx       # Main layout wrapper
│       ├── Navbar.tsx       # Sticky navigation component
│       └── PageTransition.tsx # Page transition wrapper
├── public/                  # Static assets
├── package.json
└── README.md
```

## 🎯 Components

### Layout Component

- Wraps all pages with consistent structure
- Includes the sticky navbar
- Integrates page transitions

### Navbar Component

- Fixed position with backdrop blur on scroll
- Smooth anchor navigation
- Responsive design with mobile menu
- Animated hover effects

### PageTransition Component

- Fade + slide up animation on route changes
- Smooth transitions with cubic-bezier easing
- Consistent animation timing

## 🎨 Custom Tailwind Classes

### Button Classes

- `.btn-primary` - Blue accent button with glow effect
- `.btn-secondary` - Violet accent button with glow effect

Both include:

- `rounded-2xl` corners
- `px-6 py-3` padding
- Hover scale (105%) and glow effects
- Smooth transitions

## 🌐 Sections

The homepage includes four main sections:

1. **Hero Section** (`#home`)

   - GSAP-powered staggered title animation
   - Gradient text effect
   - CTA buttons with animations

2. **About Section** (`#about`)

   - Scroll-triggered animations
   - Centered content layout

3. **Projects Section** (`#projects`)

   - Grid layout with project cards
   - Hover effects on cards
   - Staggered entrance animations

4. **Contact Section** (`#contact`)
   - Centered CTA
   - Scroll-triggered animations

## 🔧 Customization

### Adding New Colors

Edit `src/app/globals.css` in the `@theme inline` block:

```css
@theme inline {
  --color-your-color: #hexcode;
}
```

Then use in Tailwind classes: `bg-your-color`, `text-your-color`, etc.

### Modifying Animations

- **Framer Motion**: Edit motion props in components
- **GSAP**: Modify timeline animations in `page.tsx` useEffect hooks

### Changing Typography

Update Google Fonts import in `globals.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@weights&display=swap");
```

Then update the theme variables.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

Deploy easily on Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- Built with [Next.js](https://nextjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://greensock.com/gsap/)
- Fonts from [Google Fonts](https://fonts.google.com/)
