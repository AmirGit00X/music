/* ============================================
   ۱. حالت شب/روز (با بررسی خودکار سیستم)
   ============================================ */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

// بررسی تنظیمات ذخیره‌شده یا سیستم‌عامل
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// تابع اعمال تم
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  if (theme === 'dark') {
    themeIcon.textContent = '☀️';
    themeLabel.textContent = 'حالت روز';
  } else {
    themeIcon.textContent = '🌙';
    themeLabel.textContent = 'حالت شب';
  }
}

// مقداردهی اولیه
if (savedTheme) {
  applyTheme(savedTheme); // اگر کاربر قبلاً انتخاب کرده، همان را اعمال کن
} else {
  applyTheme(systemDark ? 'dark' : 'light'); // در غیر این صورت، تنظیمات سیستم را اعمال کن
}

// شنیدن تغییرات سیستم‌عامل (اگر کاربر تنظیمات دستی نداشته باشد)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

// کلیک روی دکمه تم
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});


/* ============================================
   ۲. منوی کشویی (بخش‌ها)
   ============================================ */
const dropdownItem = document.getElementById('dropdownItem');
const dropdownBtn = document.getElementById('dropdownBtn');

dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownItem.classList.toggle('open');
  dropdownBtn.setAttribute('aria-expanded', dropdownItem.classList.contains('open'));
});

document.addEventListener('click', (e) => {
  if (!dropdownItem.contains(e.target)) {
    dropdownItem.classList.remove('open');
    dropdownBtn.setAttribute('aria-expanded', 'false');
  }
});


/* ============================================
   ۳. منوی موبایل (پنل کشویی از راست)
   ============================================ */
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const menuOverlay = document.getElementById('menuOverlay');

// باز و بسته کردن منو
function toggleMenu() {
  mainNav.classList.toggle('open');
  menuOverlay.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu); // بستن با کلیک روی لایه تاریک
