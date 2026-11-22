document.addEventListener("DOMContentLoaded", () => {
  
  // ============================================
  // ۱. تغییر تم (شب/روز)
  // ============================================
  const themeToggle = document.getElementById('themeToggle');
  const iconMoon = document.getElementById('iconMoon');
  const iconSun = document.getElementById('iconSun');

  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      iconMoon.style.display = 'none';
      iconSun.style.display = 'block';
    } else {
      iconMoon.style.display = 'block';
      iconSun.style.display = 'none';
    }
  }

  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(systemDark ? 'dark' : 'light');
  }

  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });

  // ============================================
  // ۲. منوی موبایل (باز و بسته شدن پنل)
  // ============================================
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const menuOverlay = document.getElementById('menuOverlay');

  function toggleMenu() {
    mainNav.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });
  
  menuOverlay.addEventListener('click', toggleMenu);

  // ============================================
  // ۳. زیرمنوهای موبایل (باز شدن با کلیک)
  // ============================================
  const submenuLinks = document.querySelectorAll('.has-submenu > a');
  
  submenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); 
        const parentLi = link.parentElement;
        parentLi.classList.toggle('active');
        
        const submenu = parentLi.querySelector('.submenu');
        if (submenu) {
          submenu.classList.toggle('active');
        }
      }
    });
  });
});
