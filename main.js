document.addEventListener("DOMContentLoaded", () => {
  
  /* ============================================
     ۱. حالت شب/روز
     ============================================ */
  const themeToggle = document.getElementById('themeToggle');
  const iconMoon = document.getElementById('iconMoon');
  const iconSun = document.getElementById('iconSun');

  const savedTheme = localStorage.getItem('theme');
  // بررسی اینکه آیا گوشی در حالت شب است یا نه
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

  // اگر کاربر قبلا انتخاب کرده همان را لود کن، در غیر این صورت از گوشی تبعیت کن
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


  /* ============================================
     ۲. منوی کشویی (بخش‌ها)
     ============================================ */
  const dropdownItem = document.getElementById('dropdownItem');
  const dropdownBtn = document.getElementById('dropdownBtn');

  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdownItem.classList.toggle('open');
  });

  // بستن منو وقتی بیرون از آن کلیک می‌شود
  document.addEventListener('click', (e) => {
    if (dropdownItem && !dropdownItem.contains(e.target)) {
      dropdownItem.classList.remove('open');
    }
  });


  /* ============================================
     ۳. منوی موبایل (کشویی از راست)
     ============================================ */
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
