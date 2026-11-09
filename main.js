document.addEventListener("DOMContentLoaded", () => {
  
  // ============================================
  // ۱. مدیریت منوی موبایل
  // ============================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  const overlay = document.getElementById('overlay');

  function toggleMobileMenu() {
    mainNav.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  overlay.addEventListener('click', toggleMobileMenu);

  // ============================================
  // ۲. زیرمنوهای موبایل
  // ============================================
  const hasSubmenus = document.querySelectorAll('.has-submenu > a');

  hasSubmenus.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // جلوگیری از رفرش صفحه
        const parentLi = link.parentElement;
        parentLi.classList.toggle('active');
        
        const submenu = parentLi.querySelector('.submenu');
        if (submenu) {
          submenu.classList.toggle('active');
        }
      }
    });
  });

  // ============================================
  // ۳. تغییر تم
  // ============================================
  const themeToggle = document.getElementById('themeToggle');
  
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeText(savedTheme);

  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeText(newTheme);
  });

  function updateThemeText(theme) {
    if (theme === 'dark') {
      themeToggle.textContent = "حالت روز ☀️";
    } else {
      themeToggle.textContent = "حالت شب 🌙";
    }
  }

});
