document.addEventListener("DOMContentLoaded", () => {
  
  /* ============================================
     ۱. حالت شب/روز
     ============================================ */
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

  // بررسی اولیه تم
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(systemDark ? 'dark' : 'light');
  }

  // تغییر تم با کلیک
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });


  /* ============================================
     ۲. منوی کشویی (بخش‌ها)
     ============================================ */
  const dropdownItem = document.getElementById('dropdownItem');
  const dropdownBtn = document.getElementById('dropdownBtn');

  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); // جلوگیری از بسته شدن منو
    dropdownItem.classList.toggle('open');
  });


  /* ============================================
     ۳. منوی موبایل (کشویی از راست)
     ============================================ */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const menuOverlay = document.getElementById('menuOverlay');

  // تابع برای بستن منوی اصلی
  function closeMainMenu() {
    mainNav.classList.remove('open');
    menuOverlay.classList.remove('active');
  }

  // باز و بسته کردن منوی اصلی
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    mainNav.classList.toggle('open');
    menuOverlay.classList.toggle('active');
  });

  // بستن منو با کلیک روی لایه تاریک
  menuOverlay.addEventListener('click', closeMainMenu);


  /* ============================================
     ۴. بستن منوها با کلیک در فضای خالی
     ============================================ */
  document.addEventListener('click', (e) => {
    // بستن منوی کشویی در دسکتاپ
    if (dropdownItem && !dropdownItem.contains(e.target)) {
      dropdownItem.classList.remove('open');
    }
  });

});
