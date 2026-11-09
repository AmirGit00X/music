document.addEventListener("DOMContentLoaded", () => {
      
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


  /* منوی کشویی (بخش‌ها) */
  const dropdownItem = document.getElementById('dropdownItem');
  const dropdownBtn = document.getElementById('dropdownBtn');

  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    dropdownItem.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (dropdownItem && !dropdownItem.contains(e.target)) {
      dropdownItem.classList.remove('open');
    }
  });


  /* منوی موبایل */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const menuOverlay = document.getElementById('menuOverlay');

  function toggleMenu() {
    mainNav.classList.toggle('open');
    menuOverlay.classList.toggle('active');
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });
  
  menuOverlay.addEventListener('click', toggleMenu);

});
