/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neon: {
          blue: '#00f5ff',
          purple: '#bf00ff',
          pink: '#ff0080',
          green: '#00ff80',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'rotate-slow': 'rotate 20s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'tilt': 'tilt 10s infinite linear',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'zoom-in': 'zoomIn 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'flip': 'flip 0.6s ease-in-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'rotate-y': 'rotateY 0.6s ease-in-out',
        'rotate-x': 'rotateX 0.6s ease-in-out',
        'skew': 'skew 0.5s ease-in-out',
        'morph': 'morph 4s ease-in-out infinite',
        'particle-float': 'particleFloat 8s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff' },
          '100%': { boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)',
            transform: 'scale(1.05)'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0)' },
          '40%': { transform: 'perspective(400px) translateZ(150px) rotateY(170deg)' },
          '50%': { transform: 'perspective(400px) translateZ(150px) rotateY(190deg) scale(1)' },
          '80%': { transform: 'perspective(400px) rotateY(360deg) scale(0.95)' },
          '100%': { transform: 'perspective(400px) scale(1)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotateY: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(180deg)' },
        },
        rotateX: {
          '0%': { transform: 'perspective(1000px) rotateX(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateX(180deg)' },
        },
        skew: {
          '0%': { transform: 'skew(0deg)' },
          '100%': { transform: 'skew(10deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        particleFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(120deg)' },
          '66%': { transform: 'translateY(5px) rotate(240deg)' },
        },
        textGlow: {
          '0%': { textShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff' },
          '100%': { textShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        borderGlow: {
          '0%': { borderColor: 'rgba(0, 245, 255, 0.3)' },
          '100%': { borderColor: 'rgba(0, 245, 255, 0.8)' },
        },
      },
      transform: {
        '3d': 'translate3d(0, 0, 0)',
        'perspective': 'perspective(1000px)',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      perspectiveOrigin: {
        'center': 'center',
        'top': 'top',
        'bottom': 'bottom',
        'left': 'left',
        'right': 'right',
      },
      boxShadow: {
        'neon': '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff, 0 0 20px #00f5ff',
        'neon-purple': '0 0 5px #bf00ff, 0 0 10px #bf00ff, 0 0 15px #bf00ff, 0 0 20px #bf00ff',
        'neon-pink': '0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080, 0 0 20px #ff0080',
        'neon-green': '0 0 5px #00ff80, 0 0 10px #00ff80, 0 0 15px #00ff80, 0 0 20px #00ff80',
        'glow-lg': '0 0 20px rgba(0, 245, 255, 0.3)',
        'glow-xl': '0 0 40px rgba(0, 245, 255, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(0, 245, 255, 0.2)',
      },
      textShadow: {
        'neon': '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff',
        'neon-lg': '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        'cyber-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        'neon-gradient': 'linear-gradient(45deg, #00f5ff, #bf00ff, #ff0080)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.perspective-2000': {
          'perspective': '2000px',
        },
        '.transform-3d': {
          'transform': 'translate3d(0, 0, 0)',
        },
        '.text-shadow-neon': {
          'text-shadow': '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff',
        },
        '.text-shadow-neon-lg': {
          'text-shadow': '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff',
        },
        '.box-shadow-neon': {
          'box-shadow': '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff, 0 0 20px #00f5ff',
        },
        '.box-shadow-neon-purple': {
          'box-shadow': '0 0 5px #bf00ff, 0 0 10px #bf00ff, 0 0 15px #bf00ff, 0 0 20px #bf00ff',
        },
        '.box-shadow-neon-pink': {
          'box-shadow': '0 0 5px #ff0080, 0 0 10px #ff0080, 0 0 15px #ff0080, 0 0 20px #ff0080',
        },
        '.box-shadow-neon-green': {
          'box-shadow': '0 0 5px #00ff80, 0 0 10px #00ff80, 0 0 15px #00ff80, 0 0 20px #00ff80',
        },
        '.glow-blue': {
          'box-shadow': '0 0 20px rgba(0, 245, 255, 0.3)',
        },
        '.glow-purple': {
          'box-shadow': '0 0 20px rgba(191, 0, 255, 0.3)',
        },
        '.glow-pink': {
          'box-shadow': '0 0 20px rgba(255, 0, 128, 0.3)',
        },
        '.glow-green': {
          'box-shadow': '0 0 20px rgba(0, 255, 128, 0.3)',
        },
        '.inner-glow': {
          'box-shadow': 'inset 0 0 20px rgba(0, 245, 255, 0.2)',
        },
        '.gradient-text': {
          'background': 'linear-gradient(45deg, #00f5ff, #bf00ff, #ff0080)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.cyber-grid': {
          'background-image': `
            linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
          `,
          'background-size': '50px 50px',
        },
        '.holographic': {
          'background': 'linear-gradient(45deg, transparent 30%, rgba(0, 245, 255, 0.1) 50%, transparent 70%)',
          'background-size': '200% 200%',
          'animation': 'gradientShift 3s ease-in-out infinite',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
