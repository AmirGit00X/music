/* ============================================
   ۱. حالت شب/روز
   ============================================ */
const themeToggle = document.getElementById('themeToggle');
const iconMoon = document.getElementById('iconMoon');
const iconSun = document.getElementById('iconSun');

// بررسی تنظیمات ذخیره‌شده یا سیستم‌عامل
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// تابع اعمال تم
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  
  if (theme === 'dark') {
    iconMoon.style.display = 'none';
    iconSun.style.display = 'block'; // در حالت شب، آیکون خورشید (برای رفتن به روز) نشان داده می‌شود
  } else {
    iconMoon.style.display = 'block'; // در حالت روز، آیکون ماه نشان داده می‌شود
    iconSun.style.display = 'none';
  }
}

// مقداردهی اولیه
if (savedTheme) {
  applyTheme(savedTheme); 
} else {
  applyTheme(systemDark ? 'dark' : 'light'); // اگر کاربر قبلاً چیزی انتخاب نکرده، از سیستم تبعیت کن
}

// گوش دادن به تغییرات سیستم‌عامل (اگر کاربر دستی تنظیمات را عوض نکرده باشد)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

// کلیک روی دکمه تم
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('theme', next); // ذخیره انتخاب کاربر
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
   ۳. منوی موبایل
   ============================================ */
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu() {
  mainNav.classList.toggle('open');
  menuOverlay.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu); 
