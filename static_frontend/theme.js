const ThemeManager = {
  themes: {
    light: 'light',
    dark: 'dark'
  },
  
  init() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else if (systemPrefersDark) {
      this.setTheme(this.themes.dark);
    } else {
      this.setTheme(this.themes.light);
    }
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.setTheme(e.matches ? this.themes.dark : this.themes.light);
      }
    });
  },
  
  setTheme(theme) {
    if (theme === this.themes.dark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('theme', theme);
    
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  },
  
  
  toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === this.themes.dark ? this.themes.light : this.themes.dark;
    this.setTheme(newTheme);
  },
  
  
  getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || this.themes.light;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => ThemeManager.toggle());
  }
});

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeManager;
}