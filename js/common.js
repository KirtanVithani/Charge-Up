// Inject shared navbar into pages with data-include="navbar"
(function(){
  const slot = document.querySelector('[data-include="navbar"]');
  if (!slot) return;
  slot.outerHTML = `
  <header class="site-header">
    <div class="container nav">
      <div class="brand">
        <img src="contents/logo.jpeg" alt="Logo" onerror="this.src='contents/WhatsApp Image 2025-10-05 at 1.25.43 PM.jpeg'">
        <span>Charge Up</span>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle Menu">☰</button>
      <nav class="menu" id="mainMenu">
        <a href="index.html">Home</a>
        <a href="stickers.html">Stickers</a>
        <a href="laptop-skins.html">Laptop Skins</a>
        <div class="menu-dropdown">
          <button class="menu-parent">Mobile Cover ▾</button>
          <div class="submenu">
            <a href="mobile-cover.html#template">Template</a>
            <a href="mobile-cover.html#custom">Custom image</a>
          </div>
        </div>
      </nav>
    </div>
  </header>`;
})();

// Highlight active menu item based on current page
(function(){
  const menu = document.getElementById('mainMenu');
  if (!menu) return;
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const links = menu.querySelectorAll('a[href]');
  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    const base = href.split('#')[0].toLowerCase();
    if (base && base === current) {
      a.classList.add('active');
      const dd = a.closest('.menu-dropdown');
      if (dd) {
        const parentBtn = dd.querySelector('.menu-parent');
        parentBtn && parentBtn.classList.add('active');
      }
    }
  });
})();

// Mobile menu toggle
document.addEventListener('click', (e) => {
  const toggle = e.target.closest('#navToggle');
  if (toggle) {
    const menu = document.getElementById('mainMenu');
    if (menu) menu.classList.toggle('open');
  }
});

// Enable submenu toggle on click for touch devices
document.addEventListener('click', (e) => {
  const parentBtn = e.target.closest('.menu-parent');
  if (parentBtn) {
    const dd = parentBtn.parentElement;
    const submenu = dd && dd.querySelector('.submenu');
    if (submenu) {
      e.preventDefault();
      dd.classList.toggle('open');
    }
  }
});

// Close menu after navigation on mobile
document.addEventListener('click', (e) => {
  const link = e.target.closest('nav.menu a');
  if (link) {
    const menu = document.getElementById('mainMenu');
    if (menu && menu.classList.contains('open')) {
      menu.classList.remove('open');
    }
  }
});


