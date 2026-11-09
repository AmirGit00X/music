/* ============================================
   ۱. حالت شب/روز
   ============================================ */
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
  document.documentElement.setAttribute('data-theme', 'dark');
  updateThemeUI('dark');
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  updateThemeUI('light');
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeUI(next);
});

function updateThemeUI(theme) {
  if (theme === 'dark') {
    themeIcon.textContent = '☀️';
    themeLabel.textContent = 'حالت روز';
  } else {
    themeIcon.textContent = '🌙';
    themeLabel.textContent = 'حالت شب';
  }
}

/* ============================================
   ۲. منوی کشویی
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

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
