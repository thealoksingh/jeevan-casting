// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          cardBackground: 'var(--card-background)',
          secondary: 'var(--brand-secondary)',
          'secondary-hover': 'var(--brand-secondary-hover)',
          accent: 'var(--brand-accent)',
          'accent-hover': 'var(--brand-accent-hover)',
        },
        neutral: {
          gray: 'var(--neutral-gray)',
          'bg-light': 'var(--neutral-bg-light)',
        }
      },

      boxShadow: {
        glow: 'var(--shadow-glow)',
        glowSecondary: 'var(--shadow-glow-secondary)',
      },

      // ✅ ADD THIS
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

      animation: {
        marquee: "marquee 45s linear infinite",
      },

    }
  },
  plugins: [],
}
