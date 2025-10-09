// Inject shared navbar into pages with data-include="navbar"
(function(){
  const slot = document.querySelector('[data-include="navbar"]');
  if (!slot) return;
  slot.outerHTML = `
  <header class="site-header">
    <div class="container nav">
      <div class="brand">
  <img src="contents/Logo.jpeg" alt="Logo" onerror="this.src='contents/WhatsApp Image 2025-10-05 at 1.25.43 PM.jpeg'">
        <span>Charge Up</span>
      </div>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle Menu">☰ <span class="nav-label">Menu</span></button>
      <nav class="menu" id="mainMenu">
        <a href="index.html">Home</a>
        <a href="stickers.html">Stickers</a>
        <div class="menu-dropdown">
          <button class="menu-parent">Laptop Skins ▾</button>
          <div class="submenu">
            <a href="laptop-skins.html">All</a>
            <a href="laptop-skins.html#anime">1. Anime and Cartoon</a>
            <a href="laptop-skins.html#cars">2. Cars and Bikes</a>
            <a href="laptop-skins.html#marvel">3. Marvel and Movies</a>
            <a href="laptop-skins.html#nature">4. Nature</a>
            <a href="laptop-skins.html#spiritual">5. Spiritual</a>
            <a href="laptop-skins.html#other">6. Other</a>
          </div>
        </div>
        <div class="menu-dropdown">
          <button class="menu-parent">Mobile Cover ▾</button>
          <div class="submenu">
            <a href="/mobile-cover">All</a>
            <a href="/mobile-cover#cars">1. Cars and Bikes</a>
            <a href="/mobile-cover#anime">2. Anime and Cartoon</a>
            <a href="/mobile-cover#marvel">3. Marvel</a>
            <a href="/mobile-cover#natural">4. Natural</a>
            <a href="/mobile-cover#spiritual">5. Spiritual</a>
            <a href="/mobile-cover#others">6. Movies and Others</a>
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

// Enable submenu toggle on click for all devices
document.addEventListener('click', (e) => {
  const parentBtn = e.target.closest('.menu-parent');
  if (parentBtn) {
    const dd = parentBtn.parentElement;
    const submenu = dd && dd.querySelector('.submenu');
    if (submenu) {
      e.preventDefault();
      e.stopPropagation();
      // Close other dropdowns first
      document.querySelectorAll('.menu-dropdown.open').forEach(d => {
        if (d !== dd) d.classList.remove('open');
      });
      dd.classList.toggle('open');
    }
  } else {
    // Close all dropdowns when clicking outside
    document.querySelectorAll('.menu-dropdown.open').forEach(d => {
      d.classList.remove('open');
    });
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


