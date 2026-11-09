document.addEventListener("DOMContentLoaded", () => {
  
  // ============================================
  // ۱. مدیریت منوی موبایل (باز و بسته شدن پنل)
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
  // ۲. زیرمنوهای موبایل (باز شدن با کلیک)
  // ============================================
  const hasSubmenus = document.querySelectorAll('.has-submenu > a');

  hasSubmenus.forEach(link => {
    link.addEventListener('click', (e) => {
      // اگر در حالت موبایل بودیم، از رفتن به لینک جلوگیری کن و زیرمنو را باز کن
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

  // ============================================
  // ۳. تغییر تم شب و روز
  // ============================================
  const themeToggle = document.getElementById('themeToggle');
  
  // بارگذاری تم ذخیره شده
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
