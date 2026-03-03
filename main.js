/* ===== Portfolio Scripts - 3D + Nav + Scroll ===== */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileMenu();
  initScrollAnimations();
});

function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // Nav styling handled by fixed position
}

function initMobileMenu() {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

function initScrollAnimations() {
  const sections = document.querySelectorAll('.block');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}
