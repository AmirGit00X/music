document.addEventListener("DOMContentLoaded", () => {
  
  // ============================================
  // ۱. مدیریت منو (موبایل و دسکتاپ)
  // ============================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  function openMenu() {
    sidebar.classList.add('active');
    overlay.classList.add('active');
  }

  function closeMenu() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuBtn.addEventListener('click', openMenu);
  closeMenuBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);


  // ============================================
  // ۲. منوی کشویی (بخش‌ها) - Accordion
  // ============================================
  const accordionBtn = document.getElementById('accordionBtn');
  
  accordionBtn.addEventListener('click', () => {
    accordionBtn.classList.toggle('active');
  });


  // ============================================
  // ۳. تغییر تم شب و روز
  // ============================================
  const themeBtn = document.getElementById('themeBtn');
  
  // بارگذاری تم ذخیره شده
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeText(currentTheme);

  themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeText(newTheme);
  });

  function updateThemeText(theme) {
    if (theme === 'dark') {
      themeBtn.textContent = "حالت روز ☀️";
    } else {
      themeBtn.textContent = "حالت شب 🌙";
    }
  }

});
