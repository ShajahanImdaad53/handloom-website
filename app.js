// ===========================
//  SIRIUS HANDLOOM — app.js
//  Full E-Commerce Logic & Interactive Detail View
// ===========================

/* ─── CART STATE ─── */
let cart = JSON.parse(localStorage.getItem('sh_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('sh_wishlist') || '[]');

function saveCart() { localStorage.setItem('sh_cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('sh_wishlist', JSON.stringify(wishlist)); }

function addToCart(id, qty = 1, stitching = 'Ready-to-wear Tube Stitched') {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const cartKey = `${id}_${stitching}`;
  const existing = cart.find(i => (i.cartKey && i.cartKey === cartKey) || (i.id === id && (!i.stitching || i.stitching === stitching)));
  if (existing) {
    existing.qty += qty;
    existing.stitching = stitching;
    existing.cartKey = cartKey;
  } else {
    cart.push({ ...product, qty, stitching, cartKey });
  }
  saveCart();
  updateCartUI();
  showToast(`Added to cart — ${product.name.substring(0, 28)}`);
}

function removeFromCart(id, cartKey) {
  if (cartKey) {
    cart = cart.filter(i => i.cartKey !== cartKey);
  } else {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  updateCartUI();
}

function changeQty(id, delta, cartKey) {
  const item = cartKey ? cart.find(i => i.cartKey === cartKey) : cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id, cartKey);
    return;
  }
  saveCart();
  updateCartUI();
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
    if (cartEmpty) cartEmpty.style.display = 'flex';
    cartBody.style.display = 'none';
    if (cartFoot) cartFoot.style.display = 'none';
  } else {
    if (cartEmpty) cartEmpty.style.display = 'none';
    cartBody.style.display = 'block';
    if (cartFoot) cartFoot.style.display = 'block';

    cartBody.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="ci-thumb">
          <img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;object-position:center 36%;">
        </div>
        <div class="ci-info">
          <h5>${item.name}</h5>
          <p style="margin-bottom:2px;">${item.price}</p>
          ${item.stitching ? `<span style="font-size:0.68rem;color:var(--gold);display:block;margin-bottom:4px;">✦ ${item.stitching}</span>` : ''}
          <div class="ci-qty">
            <button onclick="changeQty(${item.id},-1,'${item.cartKey || ''}')">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${item.id},1,'${item.cartKey || ''}')">+</button>
          </div>
        </div>
        <button class="ci-remove" onclick="removeFromCart(${item.id},'${item.cartKey || ''}')">✕</button>
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

/* ─── WISHLIST ─── */
function toggleWishlist(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    if (btn) btn.classList.remove('active');
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    if (btn) btn.classList.add('active');
    showToast('Saved to wishlist ♡');
  }
  saveWishlist();
}

/* ─── RENDER PRODUCT CARD (DUAL-IMAGE & RICH DETAILS) ─── */
function productCard(p, animate = '') {
  const badgeClass = p.tag === 'premium' ? 'gold' : p.tag === 'trending' ? 'teal' : '';
  const isWish = wishlist.includes(p.id) ? 'active' : '';
  const hasSecondary = Boolean(p.secondaryImage);

  return `
    <div class="product-card" style="${animate}" data-id="${p.id}" data-category="${p.cat}" data-pattern="${p.pattern || ''}" data-price="${p.rawPrice}">
      <div class="prod-img-wrap" onclick="openQuickView(${p.id})">
        <img class="prod-img-primary" src="${p.image}" alt="${p.fullName}" loading="lazy">
        ${hasSecondary ? `<img class="prod-img-secondary" src="${p.secondaryImage}" alt="${p.fullName} Texture" loading="lazy">` : ''}
        ${p.badge ? `<span class="prod-badge ${badgeClass}">${p.badge}</span>` : ''}
        <span class="prod-stitch-badge">Stitched / Open</span>
        <div class="prod-actions-hover" onclick="event.stopPropagation()">
          <button class="btn-qv" onclick="openQuickView(${p.id})" title="Quick View">👁 Quick View</button>
          <button class="btn-add" onclick="addToCart(${p.id})">Add to Cart</button>
          <button class="btn-wish ${isWish}" onclick="toggleWishlist(${p.id}, this)" title="Wishlist">♡</button>
        </div>
      </div>
      <div class="prod-body">
        <div class="prod-meta-row">
          <span class="prod-sku">${p.sku || 'SH-' + p.id}</span>
          <span class="prod-pattern-tag">${p.pattern || p.cat}</span>
        </div>
        <h3 class="prod-name" onclick="openQuickView(${p.id})">${p.name}</h3>
        <div class="prod-swatches">
          ${(p.colors || []).map(c => `<span class="prod-color-dot" style="background:${c}"></span>`).join('')}
        </div>
        <div class="prod-footer">
          <div class="prod-price-col">
            <span class="prod-price">${p.price}</span>
            ${p.installment ? `<span class="prod-installment">${p.installment}</span>` : ''}
          </div>
          <div class="prod-rating-box">
            <span class="prod-stars">★ ${p.rating ? p.rating.toFixed(1) : '4.9'}</span>
            <span class="prod-review-count">(${p.reviews || 24})</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderProducts(list, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = list.map((p, i) => productCard(p, `animation-delay:${i * 0.03}s`)).join('');
}

/* ─── QUICK VIEW & DETAIL MODAL ─── */
let qvActiveProduct = null;
let qvSelectedStitching = 'Ready-to-wear Tube Stitched';
let qvSelectedQty = 1;

function ensureQuickViewModal() {
  if (document.getElementById('qvModal')) return;

  const overlay = document.createElement('div');
  overlay.className = 'qv-overlay';
  overlay.id = 'qvOverlay';
  overlay.onclick = closeQuickView;

  const modal = document.createElement('div');
  modal.className = 'qv-modal';
  modal.id = 'qvModal';
  modal.innerHTML = `
    <button class="qv-close-btn" onclick="closeQuickView()" title="Close">✕</button>
    <div class="qv-container" id="qvContent"></div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(modal);
}

function openQuickView(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  qvActiveProduct = p;
  qvSelectedStitching = 'Ready-to-wear Tube Stitched';
  qvSelectedQty = 1;

  ensureQuickViewModal();

  const galleryImages = p.gallery && p.gallery.length ? p.gallery : [p.image, p.secondaryImage].filter(Boolean);
  const specs = p.specs || {
    material: "100% Pure Combed Cotton (60s yarn count)",
    weave: "Traditional Artisan Loom Weave",
    dimensions: "Width: 48 in (120 cm) × Length: 2.0 Yards (200 cm circumference)",
    stitching: "Ready-to-wear Tube Stitched or Open Unstitched",
    origin: "Maruthamunai, Eastern Province, Sri Lanka 🇱🇰",
    care: "Gentle hand wash in cold water with mild liquid detergent. Line dry in shade. Warm iron on reverse."
  };

  const container = document.getElementById('qvContent');
  container.innerHTML = `
    <div class="qv-gallery-col">
      <div class="qv-main-display" id="qvMainDisplay" onmousemove="handleZoom(event)" onmouseleave="resetZoom()">
        <img id="qvMainImg" src="${galleryImages[0]}" alt="${p.fullName}">
        <span class="qv-zoom-badge">🔍 Hover to Zoom Texture</span>
      </div>
      <div class="qv-thumbs-row">
        ${galleryImages.map((img, idx) => `
          <div class="qv-thumb-item ${idx === 0 ? 'active' : ''}" onclick="selectQvImage('${img}', this)">
            <img src="${img}" alt="Angle ${idx + 1}">
          </div>
        `).join('')}
      </div>
    </div>

    <div class="qv-details-col">
      <div class="qv-meta-top">
        <span class="qv-meta-sku">SKU: ${p.sku || 'SH-' + p.id}</span>
        <span>•</span>
        <span>${p.cat}</span>
        <span>•</span>
        <span style="color:var(--gold);font-weight:600;">${p.pattern || 'Artisan Weave'}</span>
      </div>

      <h2 class="qv-title">${p.fullName || p.name}</h2>

      <div class="qv-rating-strip">
        <span class="stars">★★★★★</span>
        <span class="reviews">${p.rating ? p.rating.toFixed(1) : '5.0'} (${p.reviews || 35} verified reviews)</span>
        <span class="stock-pill">✓ ${p.stock || 'In Stock'}</span>
      </div>

      <div class="qv-price-box">
        <div class="qv-price-val">${p.price}</div>
        <div class="qv-installment-info">
          <span>💳</span>
          <span>Pay in 3 interest-free installments of <strong>LKR ${Math.round(p.rawPrice / 3).toLocaleString()}</strong> with Koko / Mintpay</span>
        </div>
      </div>

      <p style="font-size:0.86rem;line-height:1.6;color:var(--mid);margin-bottom:18px;">
        ${p.description || 'Mastercrafted by traditional weavers in Maruthamunai using premium cotton yarns. Perfect balance of airy breathability, soft tactile drape, and timeless Sri Lankan heritage elegance.'}
      </p>

      <div class="qv-section-label">Stitching & Finish Option:</div>
      <div class="qv-stitching-options">
        <div class="qv-stitch-opt active" id="stitchOpt1" onclick="selectStitching('Ready-to-wear Tube Stitched', this)">
          <span class="qv-stitch-title">Ready-to-wear Tube Stitched</span>
          <span class="qv-stitch-sub">Traditional sewn cylinder, ready to wear immediately</span>
        </div>
        <div class="qv-stitch-opt" id="stitchOpt2" onclick="selectStitching('Open Unstitched (Flat 2-Yards)', this)">
          <span class="qv-stitch-title">Open Unstitched (Flat)</span>
          <span class="qv-stitch-sub">Full 2-yard flat length for custom tailoring or open drape</span>
        </div>
      </div>

      <div class="qv-section-label">Artisan Specifications:</div>
      <table class="qv-specs-table">
        <tr><td>Material & Yarn</td><td>${specs.material}</td></tr>
        <tr><td>Weave Technique</td><td>${specs.weave}</td></tr>
        <tr><td>Dimensions</td><td>${specs.dimensions}</td></tr>
        <tr><td>Origin</td><td>${specs.origin}</td></tr>
        <tr><td>Wash & Care</td><td>${specs.care}</td></tr>
      </table>

      <div class="qv-actions-row">
        <div class="qv-qty-ctrl">
          <button onclick="changeQvQty(-1)">−</button>
          <span id="qvQtyDisplay">1</span>
          <button onclick="changeQvQty(1)">+</button>
        </div>
        <button class="btn-qv-add" onclick="addQvToCart()">Add to Cart</button>
        <button class="btn-qv-buy" onclick="buyQvNow()">Buy Now →</button>
      </div>

      <div class="qv-badges-footer">
        <div class="qv-badge-item"><span>🚚</span><span>Free Delivery over LKR 5,000</span></div>
        <div class="qv-badge-item"><span>🧵</span><span>100% Genuine Handloom</span></div>
        <div class="qv-badge-item"><span>🔄</span><span>Hassle-Free 7-Day Exchange</span></div>
      </div>
    </div>
  `;

  document.getElementById('qvOverlay').classList.add('open');
  document.getElementById('qvModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuickView() {
  document.getElementById('qvOverlay')?.classList.remove('open');
  document.getElementById('qvModal')?.classList.remove('open');
  document.body.style.overflow = '';
}

function selectQvImage(src, el) {
  document.getElementById('qvMainImg').src = src;
  document.querySelectorAll('.qv-thumb-item').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function handleZoom(e) {
  const container = document.getElementById('qvMainDisplay');
  const img = document.getElementById('qvMainImg');
  if (!container || !img) return;
  const rect = container.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  img.style.transformOrigin = `${x}% ${y}%`;
}

function resetZoom() {
  const img = document.getElementById('qvMainImg');
  if (img) img.style.transformOrigin = 'center center';
}

function selectStitching(val, el) {
  qvSelectedStitching = val;
  document.querySelectorAll('.qv-stitch-opt').forEach(opt => opt.classList.remove('active'));
  el.classList.add('active');
}

function changeQvQty(delta) {
  qvSelectedQty = Math.max(1, qvSelectedQty + delta);
  const disp = document.getElementById('qvQtyDisplay');
  if (disp) disp.textContent = qvSelectedQty;
}

function addQvToCart() {
  if (!qvActiveProduct) return;
  addToCart(qvActiveProduct.id, qvSelectedQty, qvSelectedStitching);
  closeQuickView();
}

function buyQvNow() {
  if (!qvActiveProduct) return;
  addToCart(qvActiveProduct.id, qvSelectedQty, qvSelectedStitching);
  closeQuickView();
  toggleCart();
}

/* ─── CATEGORY & HERO PREVIEWS ─── */
function renderCategories() {
  const cats = [
    { name: 'Cotton Sarongs', count: '40+ styles', product: PRODUCTS[1] },
    { name: 'Check Patterns', count: '15+ styles', product: PRODUCTS[12] },
    { name: 'Stripe Collection', count: '25+ styles', product: PRODUCTS[0] },
    { name: 'Heritage Weaves', count: '10+ styles', product: PRODUCTS[7] },
  ];
  const grid = document.getElementById('catGrid');
  if (!grid) return;
  grid.innerHTML = cats.map(c => `
    <div class="cat-card" onclick="window.location='shop.html'">
      <img class="cat-card-bg" src="${c.product.image}" alt="${c.name}" style="width:100%;height:100%;object-fit:cover;object-position:center 36%;">
      <div class="cat-overlay">
        <p class="cat-name">${c.name}</p>
        <p class="cat-count">${c.count}</p>
      </div>
      <span class="cat-arrow">→</span>
    </div>
  `).join('');
}

function renderFeaturedWall() {
  const items = [PRODUCTS[0], PRODUCTS[1], PRODUCTS[6], PRODUCTS[7], PRODUCTS[9]];
  const grid = document.getElementById('featuredWall');
  if (!grid) return;
  grid.innerHTML = items.map(p => `
    <div class="fw-item">
      <img class="fw-fabric" src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;object-position:center 36%;">
      <div class="fw-overlay">
        <p class="fw-name">${p.name}</p>
        <p class="fw-price">${p.price}</p>
        <button onclick="openQuickView(${p.id})" class="fw-cta" style="border:none;cursor:pointer;">Quick View</button>
      </div>
    </div>
  `).join('');
}

function renderHeroFabrics() {
  const showcased = [PRODUCTS[0], PRODUCTS[6], PRODUCTS[9]];
  const container = document.getElementById('heroFabrics');
  if (!container) return;
  container.innerHTML = showcased.map(p => `
    <div class="hero-fabric-card" onclick="openQuickView(${p.id})" style="cursor:pointer;">
      <img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;object-position:center 36%;">
      <div class="hero-fabric-label">
        ${p.name}
        <span class="hero-price">${p.price}</span>
      </div>
    </div>
  `).join('');
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const picks = [1, 2, 7, 5, 8, 10, 13, 11, 4, 3];
  grid.innerHTML = picks.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return '';
    return `
      <div class="g-item" onclick="openQuickView(${p.id})" style="cursor:pointer;" title="${p.name}">
        <img class="g-fabric" src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;object-position:center 36%;">
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
    filter === 'featured' ? PRODUCTS.filter(p => p.tag === 'premium' || p.tag === 'bestseller') :
    PRODUCTS.filter(p => p.tag === 'premium' || p.cat === 'Heritage Sarongs');
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

  ensureQuickViewModal();

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

  // Scroll Reveal Animations
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
