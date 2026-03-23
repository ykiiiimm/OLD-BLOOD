'use strict';

// ── DATA — built from content.js (OB.store) ──────────────────
// If content.js is loaded (OB exists), we pull everything from it.
// This means you can edit all store data in content.js just like the main site.
const _s = (typeof OB !== 'undefined' && OB.store) ? OB.store : null;

const ROSTER = _s ? _s.roster.map(p => ({ ...p })) : [
  { id: 'krixx',  name: 'KRIXX',  role: 'Duelist',    bio: 'Entry fragger. First blood every round.',     accent: '#e8001a', accentDim: '#7a0008', img: 'images/krixx.jpeg' },
  { id: 'ph4ntm', name: 'PH4NTM', role: 'Controller', bio: 'Smokes and control. Owns the mid.',           accent: '#c0003a', accentDim: '#600020', img: 'images/ph4ntm.jpeg' },
  { id: 'volt',   name: 'VOLT',   role: 'Initiator',  bio: 'Flash entry. Creates space nobody else can.', accent: '#e8001a', accentDim: '#7a0008', img: 'images/volt.jpeg' },
  { id: 'zero',   name: 'ZER0',   role: 'Sentinel',   bio: 'Locks down sites. Nothing gets through.',     accent: '#c0003a', accentDim: '#600020', img: 'images/zero.jpeg' },
  { id: 'raven',  name: 'RAVEN',  role: 'Duelist',    bio: 'Lurker. Silent. Deadly.',                     accent: '#e8001a', accentDim: '#7a0008', img: 'images/raven.jpeg' },
  { id: 'nexus',  name: 'NEXUS',  role: 'IGL',        bio: 'In-game leader. The brain behind Old Blood.', accent: '#c0003a', accentDim: '#600020', img: 'images/nexus.jpeg' },
];

const _playerPrice  = _s ? _s.playerJerseyPrice : 80;
const _teamPrice    = _s ? _s.teamJerseyPrice   : 75;
const _sizes        = _s ? _s.sizes             : ['S','M','L','XL','2XL'];
const _color        = _s ? _s.color             : 'Blood Black / Red';
const _details      = _s ? _s.jerseyDetails     : ['100% polyester sublimation print','Tournament moisture-wicking fabric','Old Blood crest on chest','Size up if between sizes'];
const _teamJersey   = _s ? _s.teamJersey        : { bio: 'The team. The org. The lineage.', description: 'The standard Old Blood team jersey. No player name — just the crest, the org, and the blood.', details: ['100% polyester sublimation print','Tournament moisture-wicking fabric','Old Blood crest on chest','Clean back — no player name','Size up if between sizes'] };
const _footerNote   = _s ? _s.footerNote        : 'Official jerseys for Old Blood VALORANT.';

const PRODUCTS = [
  ...ROSTER.map(p => ({
    id:          `jersey-${p.id}`,
    name:        `${p.name} — Player Jersey`,
    playerName:  p.name,
    playerId:    p.id,
    playerRole:  p.role,
    bio:         p.bio,
    img:         p.img,
    category:    'Jerseys',
    price:       _playerPrice,
    sizes:       _sizes,
    color:       _color,
    description: `Official Old Blood VALORANT jersey for ${p.name}. ${p.bio} Sublimation-printed tournament-grade fabric. Their name. Your back.`,
    details:     [..._details, `${p.name} name printed on back`],
    tag:         'jerseys',
    featured:    true,
    accent:      p.accent,
    accentDim:   p.accentDim,
  })),
  {
    id:          'jersey-team',
    name:        'Old Blood — Team Jersey',
    playerName:  null,
    playerId:    'team',
    playerRole:  null,
    bio:         _teamJersey.bio,
    img:         _teamJersey.img || 'images/team jersey front.jpeg',
    backImg:     _teamJersey.backImg || 'images/team jersey back.jpeg',
    category:    'Jerseys',
    price:       _teamPrice,
    sizes:       _sizes,
    color:       _color,
    description: _teamJersey.description,
    details:     _teamJersey.details,
    tag:         'jerseys',
    featured:    true,
    accent:      '#e8001a',
    accentDim:   '#7a0008',
  }
];

function getProducts(tag) {
  return (!tag || tag === 'all') ? PRODUCTS : PRODUCTS.filter(p => p.tag === tag);
}
function getFeaturedProducts() { return PRODUCTS.filter(p => p.featured); }
function getProductById(id)    { return PRODUCTS.find(p => p.id === id);  }

// ── CART ─────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('ob-cart') || '[]');

function saveCart() {
  localStorage.setItem('ob-cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(product) {
  const key = `${product.id}-${product.size || 'one-size'}`;
  const existing = cart.find(i => i.key === key);
  if (existing) { existing.qty += 1; }
  else { cart.push({ ...product, key, qty: 1 }); }
  saveCart();
  showToast(`${product.name} added to cart`);
  openCart();
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  saveCart();
  renderCartItems();
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCartItems();
}

function getCartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function getCartCount()  { return cart.reduce((s, i) => s + i.qty, 0); }

// ── WISHLIST ─────────────────────────────────────
let wishlist = JSON.parse(localStorage.getItem('ob-wishlist') || '[]');

function saveWishlist() {
  localStorage.setItem('ob-wishlist', JSON.stringify(wishlist));
  updateWishlistUI();
}

function toggleWishlist(id) {
  const index = wishlist.indexOf(id);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`Removed from wishlist`);
  } else {
    wishlist.push(id);
    showToast(`Added to wishlist`);
  }
  saveWishlist();
  
  // Update all heart icons for this product ID across the page
  document.querySelectorAll(`[data-wishlist-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', isInWishlist(id));
  });
}

function isInWishlist(id) {
  return wishlist.includes(id);
}

function updateWishlistUI() {
  const el = document.getElementById('wishlist-count');
  const n = wishlist.length;
  if (el) { el.textContent = n; el.classList.toggle('show', n > 0); }
}

function renderWishlistItems(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  
  if (wishlist.length === 0) {
    el.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:80px 0;">
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="var(--text-dim)" style="margin-bottom:16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        <p style="color:var(--text-muted);font-family:var(--font-condensed);text-transform:uppercase;letter-spacing:.1em;">Your wishlist is empty</p>
        <a href="index.html" class="btn btn-outline btn-sm" style="margin-top:20px;">Return to Store</a>
      </div>`;
    return;
  }
  
  const items = wishlist.map(id => getProductById(id)).filter(p => p);
  el.innerHTML = items.map(productCardHTML).join('');
}

// ── CART UI ──────────────────────────────────────
function updateCartUI() {
  const el = document.getElementById('cart-count');
  const n = getCartCount();
  if (el) { el.textContent = n; el.classList.toggle('show', n > 0); }
}

function openCart() {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCartItems() {
  const el = document.getElementById('cart-items');
  const tot = document.getElementById('cart-total');
  if (!el) return;
  if (!cart.length) {
    el.innerHTML = `<div class="cart-empty-msg">
      <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
      <p>Your cart is empty</p></div>`;
    if (tot) tot.textContent = '$0.00';
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:var(--bg3);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:3px;">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.2;color:var(--red-hot)"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/></svg>
        ${item.playerName ? `<span style="font-size:7px;font-family:var(--font-display);color:rgba(232,0,26,.45);letter-spacing:.1em;">${item.playerName}</span>` : ''}
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.size ? 'Size: ' + item.size : 'One size'}</div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;">
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty('${item.key}',-1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.key}',1)">+</button>
          </div>
          <div style="display:flex;align-items:center;gap:10px;">
            <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
            <button onclick="removeFromCart('${item.key}')" style="background:none;border:none;color:var(--text-dim);cursor:pointer;padding:2px;">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>`).join('');
  if (tot) tot.textContent = `$${getCartTotal().toFixed(2)}`;
}

// ── TOAST ────────────────────────────────────────
function showToast(msg) {
  let t = document.getElementById('global-toast');
  if (!t) { t = document.createElement('div'); t.id = 'global-toast'; t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── CART DRAWER ───────────────────────────────────
function injectCartDrawer() {
  if (document.getElementById('cart-drawer')) return;
  document.body.insertAdjacentHTML('beforeend', `
    <div class="cart-overlay" id="cart-overlay" onclick="closeCart()"></div>
    <div class="cart-drawer" id="cart-drawer">
      <div class="cart-header">
        <h2>Your Cart</h2>
        <button class="icon-btn" onclick="closeCart()">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="cart-items" id="cart-items"></div>
      <div class="cart-footer">
        <div class="cart-subtotal"><span>Subtotal</span><span id="cart-total">$0.00</span></div>
        <p style="font-size:12px;color:var(--text-dim);">Shipping calculated at checkout</p>
        <a href="checkout.html" class="btn btn-primary btn-block btn-lg" onclick="closeCart()">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          Checkout
        </a>
        <button class="btn btn-ghost btn-block" onclick="closeCart()">Continue Shopping</button>
      </div>
    </div>`);
}

// ── HEADER ───────────────────────────────────────
function injectHeader(activePage) {
  const nav = [
    { href: 'index.html',  label: 'All Jerseys' },
    { href: 'roster.html', label: 'Roster' },
    { href: 'product.html?id=jersey-team', label: 'Team Jersey' },
  ].map(p => `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`).join('');

  const el = document.getElementById('site-header');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="header-logo">
          <div class="wordmark">OLD <span>BLOOD</span></div>
          <span class="store-tag">Store</span>
        </a>
        <nav class="header-nav">${nav}</nav>
        <div class="header-actions">
          <a href="../index.html" class="btn btn-ghost btn-sm">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Main Site
          </a>
          <button class="icon-btn" title="Wishlist" onclick="location.href='wishlist.html'" style="position:relative;">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            <span class="wishlist-count" id="wishlist-count">0</span>
          </button>
          <button class="icon-btn" onclick="openCart()" style="position:relative;">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span class="cart-count" id="cart-count">0</span>
          </button>
        </div>
      </div>
    </div>`;
}

// ── FOOTER ───────────────────────────────────────
function injectFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="wordmark">OLD <span>BLOOD</span></div>
          <p>${_footerNote}</p>
        </div>
        <div>
          <div class="footer-col-title">Shop</div>
          <div class="footer-links">
            <a href="index.html">All Jerseys</a>
            <a href="roster.html">The Roster</a>
            <a href="product.html?id=jersey-team">Team Jersey</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Players</div>
          <div class="footer-links">
            ${ROSTER.map(p => `<a href="product.html?id=jersey-${p.id}">${p.name}</a>`).join('')}
          </div>
        </div>
        <div>
          <div class="footer-col-title">Help</div>
          <div class="footer-links">
            <a href="help.html#sizing">Sizing Guide</a>
            <a href="help.html#shipping">Shipping</a>
            <a href="help.html#returns">Returns</a>
            <a href="../contact.html">Contact</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2026 Old Blood Esports. All rights reserved.</p>
        <div class="footer-socials">
          <a href="https://x.com/xyressszz784205" target="_blank"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.69 3.06L12.69 8.77 8.37 3.06H2.11l7.48 9.78-7.08 8.1h3.03l5.47-6.25 4.78 6.25h6.1L13.1 10.63l6.62-7.57h-2.03Z"/></svg></a>
          <a href="https://www.instagram.com/iyyykiiiiiiiim/" target="_blank"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
          <a href="https://discord.com/users/1156188747994505216" target="_blank"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.014.043.031.055a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg></a>
        </div>
      </div>
    </div>`;
}

// ── JERSEY SVG PLACEHOLDER ────────────────────────
function jerseyPlaceholderSVG(playerName, accent, accentDim) {
  const name = playerName || 'OB';
  const gid = 'g' + name.replace(/[^a-z0-9]/gi,'');
  return `<svg viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%" stop-color="${accentDim}" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#060202" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect width="300" height="380" fill="url(#${gid})"/>
    <path d="M80 62 L48 94 L76 110 L76 298 L224 298 L224 110 L252 94 L220 62 L192 76 Q150 92 108 76 Z"
      fill="none" stroke="${accent}" stroke-width="1.5" stroke-opacity="0.2"/>
    <path d="M108 76 Q150 96 192 76" fill="none" stroke="${accent}" stroke-width="1" stroke-opacity="0.35"/>
    <circle cx="150" cy="148" r="26" fill="none" stroke="${accent}" stroke-width="1" stroke-opacity="0.25"/>
    <text x="150" y="144" text-anchor="middle" font-family="'Bebas Neue',sans-serif" font-size="10" fill="${accent}" fill-opacity="0.45" letter-spacing="2">OLD</text>
    <text x="150" y="158" text-anchor="middle" font-family="'Bebas Neue',sans-serif" font-size="10" fill="${accent}" fill-opacity="0.45" letter-spacing="2">BLOOD</text>
    <text x="150" y="238" text-anchor="middle" font-family="'Bebas Neue',sans-serif" font-size="${name.length > 5 ? 30 : 38}" fill="${accent}" fill-opacity="0.15" letter-spacing="5">${name}</text>
    <text x="150" y="316" text-anchor="middle" font-family="'Bebas Neue',sans-serif" font-size="9" fill="${accent}" fill-opacity="0.25" letter-spacing="6">VALORANT</text>
    <text x="150" y="358" text-anchor="middle" font-family="'Bebas Neue',sans-serif" font-size="8" fill="#4a2a2a" letter-spacing="3">PHOTO COMING SOON</text>
  </svg>`;
}

// ── PRODUCT CARD ──────────────────────────────────
function productCardHTML(product) {
  const accent = product.accent || '#e8001a';
  const accentDim = product.accentDim || '#7a0008';
  const gid = product.id;
  return `
    <div class="product-card">
      <button class="wishlist-btn${isInWishlist(product.id) ? ' active' : ''}" 
              data-wishlist-id="${product.id}" 
              onclick="event.preventDefault(); toggleWishlist('${product.id}')"
              title="Add to Wishlist">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
      </button>
      <a href="product.html?id=${product.id}" class="product-card-inner" style="display:contents;">
        <div class="product-card-media" style="background:#060202;">
          ${product.img 
            ? `<img src="${product.img}" alt="${product.name}" class="product-img-main" style="width:100%;height:100%;object-fit:cover;">`
            : jerseyPlaceholderSVG(product.playerName, accent, accentDim)
          }
          <div class="product-quick-add">
            <div style="font-family:var(--font-condensed);font-size:11px;font-weight:700;letter-spacing:.12em;color:var(--text-muted);text-transform:uppercase;margin-bottom:8px;">Quick Size</div>
            <div class="size-grid">
              ${product.sizes.slice(0,4).map(s =>
                `<button class="size-btn" onclick="event.preventDefault();document.querySelectorAll('[data-qg=\\'${gid}\\']').forEach(b=>b.classList.remove('active'));this.classList.add('active')" data-qg="${gid}">${s}</button>`
              ).join('')}
            </div>
          </div>
        </div>
        <div class="product-card-body">
          <div class="product-category" style="color:${accent};">${product.playerRole || 'Team'}</div>
          <div class="product-name">${product.name}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:10px;line-height:1.5;flex:1;">${product.bio}</div>
          <div class="product-price-row"><span class="product-price">$${product.price.toFixed(2)}</span></div>
        </div>
      </a>
    </div>`;
}

// ── ROSTER CARD ───────────────────────────────────
function rosterCardHTML(player) {
  const pid = `jersey-${player.id}`;
  return `
    <div class="product-card" style="display:contents;">
      <a href="product.html?id=${pid}" style="
        background:var(--bg2);border:1px solid var(--border);border-radius:4px;
        display:flex;flex-direction:column;overflow:hidden;text-decoration:none;
        transition:border-color .3s,transform .35s cubic-bezier(0.19,1,0.22,1);position:relative;"
        onmouseover="this.style.borderColor='${player.accent}';this.style.transform='translateY(-5px)'"
        onmouseout="this.style.borderColor='var(--border)';this.style.transform=''">
        
        <button class="wishlist-btn${isInWishlist(pid) ? ' active' : ''}" 
                data-wishlist-id="${pid}" 
                onclick="event.preventDefault(); toggleWishlist('${pid}')"
                style="top:12px;right:12px;"
                title="Add to Wishlist">
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>

        <div style="position:relative;overflow:hidden;background:#060202;aspect-ratio:3/4;">
          ${player.img 
            ? `<img src="${player.img}" alt="${player.name}" style="width:100%;height:100%;object-fit:cover;">`
            : jerseyPlaceholderSVG(player.name, player.accent, player.accentDim)
          }
          <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(6,2,2,.95) 0%,transparent 55%);"></div>
          <div style="position:absolute;bottom:0;left:0;right:0;padding:20px 18px;">
            <div style="font-family:var(--font-condensed);font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:${player.accent};margin-bottom:3px;">${player.role}</div>
            <div style="font-family:var(--font-display);font-size:34px;color:var(--cream);letter-spacing:.04em;line-height:1;">${player.name}</div>
          </div>
        </div>
        <div style="padding:14px 18px;display:flex;align-items:center;justify-content:space-between;gap:10px;">
          <div>
            <div style="font-size:12px;color:var(--text-muted);line-height:1.5;margin-bottom:4px;">${player.bio}</div>
            <div style="font-family:var(--font-display);font-size:22px;color:var(--cream);letter-spacing:.03em;">$${_playerPrice}</div>
          </div>
          <div style="flex-shrink:0;font-family:var(--font-condensed);font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${player.accent};display:flex;align-items:center;gap:4px;white-space:nowrap;">
            Get Jersey <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </div>
        </div>
      </a>
    </div>`;
}

// ── INIT ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  updateWishlistUI();
  injectCartDrawer();
  renderCartItems();
});
