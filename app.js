// ===========================
//  SIRIUS HANDLOOM — app.js
// ===========================

/* ─── CART STATE ─── */
let cart = JSON.parse(localStorage.getItem('sh_cart') || '[]');

function saveCart() { localStorage.setItem('sh_cart', JSON.stringify(cart)); }

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(i => i.id === id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...product, qty: 1 }); }
  saveCart(); updateCartUI(); showToast('Added to cart — ' + product.name.substring(0,30));
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartUI();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart(); updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => el.textContent = count);
  document.querySelectorAll('.cart-count-text').forEach(el => el.textContent = `(${count})`);

  const cartBody = document.getElementById('cartBody');
  const cartEmpty = document.getElementById('cartEmptyState');
  const cartFoot = document.getElementById('cartFoot');
  const cartTotal = document.getElementById('cartTotal');

  if (!cartBody) return;

  if (cart.length === 0) {
    cartEmpty && (cartEmpty.style.display = 'flex');
    cartBody.style.display = 'none';
    cartFoot && (cartFoot.style.display = 'none');
  } else {
    cartEmpty && (cartEmpty.style.display = 'none');
    cartBody.style.display = 'block';
    cartFoot && (cartFoot.style.display = 'block');

    cartBody.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-thumb">
          <img src="${item.image}" 
               alt="${item.name}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="ci-info">
          <h5>${item.name}</h5>
          <p>${item.price}</p>
          <div class="ci-qty">
            <button onclick="changeQty(${item.id},-1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${item.id},1)">+</button>
          </div>
        </div>
        <button class="ci-remove" onclick="removeFromCart(${item.id})">✕</button>
      </div>
    `).join('');

    const total = cart.reduce((s, i) => s + i.rawPrice * i.qty, 0);
    if (cartTotal) cartTotal.textContent = `LKR ${total.toLocaleString()}`;
  }
}

/* ─── CART DRAWER ─── */
function toggleCart() {
  document.getElementById('cartDrawer')?.classList.toggle('open');
  document.getElementById('cartOverlay')?.classList.toggle('open');
}

/* ─── SEARCH ─── */
function toggleSearch() {
  document.getElementById('searchWrap')?.classList.toggle('open');
}

/* ─── MOBILE NAV ─── */
function toggleMenu() {
  document.getElementById('mobileNav')?.classList.toggle('open');
}

/* ─── TOAST ─── */
function showToast(msg) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="toast-icon">✦</span> ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2800);
}

/* ─── RENDER FUNCTIONS ─── */

function productCard(p, animate = '') {
  const imgSrc = p.image;
  const badgeClass = p.tag === 'premium' ? 'gold' : p.tag === 'trending' ? 'teal' : '';
  const stars = '★★★★★';
  return `
    <div class="product-card" style="${animate}">
      <div class="prod-img-wrap">
        <img class="prod-fabric" src="${imgSrc}" alt="${p.fullName}" loading="lazy">
        <span class="prod-badge ${badgeClass}">${p.badge}</span>
        <div class="prod-actions-hover">
          <button class="btn-add" onclick="addToCart(${p.id})">Add to Cart</button>
          <button class="btn-wish" title="Wishlist">♡</button>
        </div>
      </div>
      <div class="prod-body">
        <p class="prod-cat">${p.cat}</p>
        <h3 class="prod-name">${p.name}</h3>
        <div class="prod-footer">
          <span class="prod-price">${p.price}</span>
          <span class="prod-stars">${stars}</span>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(list, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = list.map((p, i) => productCard(p, `animation-delay:${i*0.04}s`)).join('');
}

function renderCategories() {
  const cats = [
    { name: 'Cotton Sarongs', count: '40+ styles', product: PRODUCTS[1] },
    { name: 'Check Patterns', count: '15+ styles', product: PRODUCTS[4] },
    { name: 'Stripe Collection', count: '25+ styles', product: PRODUCTS[0] },
    { name: 'Premium Weaves', count: '10+ styles', product: PRODUCTS[15] },
  ];
  const grid = document.getElementById('catGrid');
  if (!grid) return;
  grid.innerHTML = cats.map(c => {
    const img = c.product.image;
    return `
      <div class="cat-card" onclick="window.location='shop.html'">
        <img class="cat-card-bg" src="${img}" alt="${c.name}" style="width:100%;height:100%;object-fit:cover;">
        <div class="cat-overlay">
          <p class="cat-name">${c.name}</p>
          <p class="cat-count">${c.count}</p>
        </div>
        <span class="cat-arrow">→</span>
      </div>
    `;
  }).join('');
}

function renderFeaturedWall() {
  const items = [PRODUCTS[6], PRODUCTS[1], PRODUCTS[10], PRODUCTS[7], PRODUCTS[15]];
  const grid = document.getElementById('featuredWall');
  if (!grid) return;
  grid.innerHTML = items.map(p => {
    const img = p.image;
    return `
      <div class="fw-item">
        <img class="fw-fabric" src="${img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">
        <div class="fw-overlay">
          <p class="fw-name">${p.name}</p>
          <p class="fw-price">${p.price}</p>
          <a href="shop.html" class="fw-cta">Shop Now</a>
        </div>
      </div>
    `;
  }).join('');
}

function renderHeroFabrics() {
  const showcased = [PRODUCTS[0], PRODUCTS[6], PRODUCTS[10]];
  const container = document.getElementById('heroFabrics');
  if (!container) return;
  container.innerHTML = showcased.map(p => {
    const img = p.image;
    return `
      <div class="hero-fabric-card">
        <img src="${img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">
        <div class="hero-fabric-label">
          ${p.name}
          <span class="hero-price">${p.price}</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const picks = [1,2,7,5,8,14,15,11,4,13];
  grid.innerHTML = picks.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return '';
    const img = p.image;
    return `
      <div class="g-item">
        <img class="g-fabric" src="${img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">
      </div>
    `;
  }).join('');
}

/* ─── TABS ─── */
let currentTab = 'all';
function switchTab(el, filter) {
  document.querySelectorAll('.tab-pill').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  currentTab = filter;
  const filtered = filter === 'all' ? PRODUCTS :
    filter === 'new' ? PRODUCTS.filter(p => p.tag === 'new' || p.tag === 'bestseller') :
    filter === 'featured' ? PRODUCTS.filter(p => p.tag === 'featured') :
    PRODUCTS.filter(p => p.tag === 'premium' || p.tag === 'trending');
  renderProducts(filtered, 'productsGrid');
}

/* ─── STICKY HEADER ─── */
window.addEventListener('scroll', () => {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  header.style.boxShadow = window.scrollY > 60 ? '0 4px 24px rgba(0,0,0,.1)' : '';
});

/* ─── THEME TOGGLE ─── */
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('sh_theme', next);
}

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('sh_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Inject theme toggle button if not present
  const hActions = document.querySelector('.h-actions');
  if (hActions && !document.querySelector('button[onclick="toggleTheme()"]')) {
    const themeBtn = document.createElement('button');
    themeBtn.className = 'h-btn';
    themeBtn.title = 'Toggle Theme';
    themeBtn.innerHTML = '🌓';
    themeBtn.onclick = toggleTheme;
    const cartBtn = hActions.querySelector('button[onclick="toggleCart()"]');
    if (cartBtn) hActions.insertBefore(themeBtn, cartBtn);
    else hActions.appendChild(themeBtn);
  }

  renderHeroFabrics();
  renderCategories();
  renderProducts(PRODUCTS.slice(0, 16), 'productsGrid');
  renderFeaturedWall();
  renderGallery();
  updateCartUI();

  // ── Scroll Reveal Animations ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const animElements = document.querySelectorAll('.section-title, .section-sub, .product-card, .cat-card, .feature, .testi-card, .fw-item');
  animElements.forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
});
