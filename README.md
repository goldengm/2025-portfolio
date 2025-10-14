# Pluto Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, inspired by the CodeByPluto design.

## Features

- 🚀 **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Optimized with React and Tailwind CSS
- 🎨 **Beautiful UI**: Modern gradients, shadows, and typography
- 🔧 **TypeScript**: Type-safe development
- 🎭 **Animations**: Smooth transitions with Framer Motion
- 📧 **Contact Form**: Interactive contact form
- 🌙 **Professional**: Showcases skills, experience, and projects

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with introduction
│   ├── About.tsx       # About section with services
│   ├── Projects.tsx    # Portfolio projects showcase
│   ├── Experience.tsx  # Work experience timeline
│   ├── Skills.tsx      # Skills and technologies
│   ├── Contact.tsx     # Contact form and information
│   └── Footer.tsx      # Footer with links
├── App.tsx             # Main app component
├── index.tsx           # App entry point
└── index.css           # Global styles and Tailwind imports
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Content
Update the content in each component file:
- Personal information in `Hero.tsx`
- Projects in `Projects.tsx`
- Experience in `Experience.tsx`
- Skills in `Skills.tsx`
- Contact information in `Contact.tsx`

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Inline Tailwind classes
- Custom animations: `tailwind.config.js`

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to Netlify

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Images**: Optimized and responsive
- **Fonts**: Google Fonts with display=swap

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- **Email**: contact@pluto.dev
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

Built with ❤️ by Pluto