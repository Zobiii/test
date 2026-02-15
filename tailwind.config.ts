import type { Config } from 'tailwindcss';

export default {
  content: ['./*.html', './**/*.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#09080f',
        surface: '#120f21',
        card: '#1a1530',
        line: '#3d3361',
        text: '#e9e4ff',
        muted: '#a79cc9',
        accent: '#a855f7',
        accentSoft: '#d8b4fe'
      },
      borderRadius: {
        ui: '0.75rem'
      },
      boxShadow: {
        glass: '0 8px 24px rgba(88, 28, 135, 0.22)'
      }
    }
  },
  plugins: []
} satisfies Config;
