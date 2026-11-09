document.addEventListener("DOMContentLoaded", () => {
  
  // ============================================
  // ۱. تنظیمات تم شب و روز
  // ============================================
  const themeBtn = document.getElementById('themeBtn');
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

  // بارگذاری تم اولیه
  if (savedTheme) applyTheme(savedTheme);
  else applyTheme(systemDark ? 'dark' : 'light');

  // تغییر تم با کلیک
  themeBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('theme', next);
  });


  // ============================================
  // ۲. منوی کشویی (Dropdown)
  // ============================================
  const dropBtn = document.getElementById('dropBtn');
  const dropContainer = document.querySelector('.dropdown-container');
  const dropMenu = document.getElementById('dropMenu');

  // باز و بسته کردن منوی کشویی
  dropBtn.addEventListener('click', (e) => {
    e.preventDefault(); // جلوگیری از رفتار پیش‌فرض دکمه
    e.stopPropagation(); // جلوگیری از رسیدن کلیک به Document (که باعث بسته شدن می‌شد)
    
    dropContainer.classList.toggle('active');
  });

  // جلوگیری از بسته شدن منو وقتی روی آیتم‌های داخل آن کلیک می‌کنیم
  dropMenu.addEventListener('click', (e) => {
    e.stopPropagation(); 
  });

  // بستن منو وقتی بیرون از آن کلیک می‌کنیم (فقط در دسکتاپ)
  document.addEventListener('click', (e) => {
    if (!dropContainer.contains(e.target)) {
      dropContainer.classList.remove('active');
    }
  });


  // ============================================
  // ۳. منوی موبایل (پنل کشویی)
  // ============================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');
  const menuOverlay = document.getElementById('menuOverlay');

  function toggleMobileMenu() {
    navMenu.classList.toggle('open');
    menuOverlay.classList.toggle('active');
    
    // اگر منوی موبایل بسته شد، منوی کشویی داخلی هم بسته شود
    if (!navMenu.classList.contains('open')) {
      dropContainer.classList.remove('active');
    }
  }

  // کلیک روی دکمه همبرگری
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
  });

  // بستن منو با کلیک روی لایه تاریک
  menuOverlay.addEventListener('click', toggleMobileMenu);

});
