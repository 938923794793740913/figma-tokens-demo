/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'bg-main': 'var(--color-bg-main)',
        'bg-card': 'var(--color-bg-card)',
        'bg-dark': 'var(--color-bg-dark)',
        'accent': 'var(--color-accent)',
        'text-main': 'var(--color-text-main)',
        'text-light': 'var(--color-text-light)',
        'text-muted': 'var(--color-text-muted)'
      },
      spacing: {
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)'
      },
      borderRadius: {
        'btn': 'var(--radius-btn)',
        'card': 'var(--radius-card)'
      }
    }
  }
};
