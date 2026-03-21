/* ═══════════════════════════════════════════════
   OLD BLOOD MERCH STORE — SHARED JS
   ═══════════════════════════════════════════════ */

'use strict';

// ── CART STATE ──────────────────────────────────
let cart = JSON.parse(localStorage.getItem('ob-cart') || '[]');

function saveCart() {
  localStorage.setItem('ob-cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(product) {
  const key = `${product.id}-${product.size || 'one-size'}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, key, qty: 1 });
  }
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

function getCartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

// ── CART UI ─────────────────────────────────────
function updateCartUI() {
  const countEl = document.getElementById('cart-count');
  const count = getCartCount();
  if (countEl) {
    countEl.textContent = count;
    countEl.classList.toggle('show', count > 0);
  }
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
  const totalEl = document.getElementById('cart-total');
  if (!el) return;

  if (cart.length === 0) {
    el.innerHTML = `
      <div class="cart-empty-msg">
        <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
        </svg>
        <p>Your cart is empty</p>
      </div>`;
    if (totalEl) totalEl.textContent = '$0.00';
    return;
  }

  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:var(--bg3);display:flex;align-items:center;justify-content:center;">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.3">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"/>
        </svg>
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.size ? `Size: ${item.size}` : 'One size'} · ${item.color || 'Black'}</div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;">
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty('${item.key}', -1)">−</button>
            <span class="qty-val">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty('${item.key}', 1)">+</button>
          </div>
          <div style="display:flex;align-items:center;gap:12px;">
            <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
            <button onclick="removeFromCart('${item.key}')" style="background:none;border:none;color:var(--text-dim);cursor:pointer;padding:2px;" title="Remove">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (totalEl) totalEl.textContent = `$${getCartTotal().toFixed(2)}`;
}

// ── TOAST ────────────────────────────────────────
function showToast(msg) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── CART DRAWER HTML (injected into body) ────────
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
        <div class="cart-subtotal">
          <span>Subtotal</span>
          <span id="cart-total">$0.00</span>
        </div>
        <p style="font-size:12px;color:var(--text-dim);">Shipping and taxes calculated at checkout</p>
        <a href="checkout.html" class="btn btn-primary btn-block btn-lg" onclick="closeCart()">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          Checkout
        </a>
        <button class="btn btn-ghost btn-block" onclick="closeCart()">Continue Shopping</button>
      </div>
    </div>
  `);
}

// ── SHARED HEADER ────────────────────────────────
function injectHeader(activePage) {
  const pages = [
    { href: 'index.html', label: 'All Products' },
    { href: 'apparel.html', label: 'Apparel' },
    { href: 'accessories.html', label: 'Accessories' },
    { href: 'drops.html', label: 'Drops' },
  ];

  const navHTML = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');

  const headerEl = document.getElementById('site-header');
  if (!headerEl) return;

  headerEl.innerHTML = `
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="header-logo">
          <div>
            <div class="wordmark">OLD <span>BLOOD</span></div>
          </div>
          <span class="store-tag">Store</span>
        </a>
        <nav class="header-nav">${navHTML}</nav>
        <div class="header-actions">
          <a href="../index.html" class="btn btn-ghost btn-sm" title="Back to main site">
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Main Site
          </a>
          <button class="icon-btn" title="Search">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </button>
          <button class="icon-btn" onclick="openCart()" title="Cart" style="position:relative;">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            <span class="cart-count" id="cart-count">0</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

// ── SHARED FOOTER ────────────────────────────────
function injectFooter() {
  const footerEl = document.getElementById('site-footer');
  if (!footerEl) return;

  footerEl.innerHTML = `
    <div class="container">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="wordmark">OLD <span>BLOOD</span></div>
          <p>More than a team — a lineage. Official merch for those who carry the blood. Every purchase supports the roster.</p>
        </div>
        <div>
          <div class="footer-col-title">Shop</div>
          <div class="footer-links">
            <a href="index.html">All Products</a>
            <a href="apparel.html">Apparel</a>
            <a href="accessories.html">Accessories</a>
            <a href="drops.html">Limited Drops</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Help</div>
          <div class="footer-links">
            <a href="#">Sizing Guide</a>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">Org</div>
          <div class="footer-links">
            <a href="../index.html">Main Site</a>
            <a href="../about.html">About</a>
            <a href="../teams.html">Teams</a>
            <a href="../contact.html">Contact</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© 2026 Old Blood Esports. All rights reserved.</p>
        <div class="footer-socials">
          <a href="https://x.com/xyressszz784205" target="_blank" aria-label="X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.69 3.06L12.69 8.77 8.37 3.06H2.11l7.48 9.78-7.08 8.1h3.03l5.47-6.25 4.78 6.25h6.1L13.1 10.63l6.62-7.57h-2.03Z"/></svg>
          </a>
          <a href="https://www.instagram.com/iyyykiiiiiiiim/" target="_blank" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@its_hakimouuuuu" target="_blank" aria-label="TikTok">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.97a8.16 8.16 0 004.77 1.52V7.04a4.85 4.85 0 01-1-.35z"/></svg>
          </a>
          <a href="https://discord.com/users/1156188747994505216" target="_blank" aria-label="Discord">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.014.043.031.055a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;
}

// ── PRODUCT DATA ─────────────────────────────────
const PRODUCTS = [
  // Apparel
  {
    id: 'p001',
    name: 'OLD BLOOD Classic Hoodie',
    category: 'Apparel',
    price: 69.99,
    badge: 'new',
    badgeLabel: 'NEW',
    sizes: ['XS','S','M','L','XL','2XL'],
    color: 'Blood Black',
    description: 'Heavyweight 400gsm fleece. Embroidered OLD BLOOD crest on chest, printed lineage code on back. Washed for vintage feel.',
    details: ['400gsm fleece cotton blend', 'Embroidered front logo', 'Back graphic print', 'Dropped shoulders', 'Kangaroo pocket'],
    tag: 'apparel',
    featured: true,
  },
  {
    id: 'p002',
    name: 'Lineage Tee',
    category: 'Apparel',
    price: 39.99,
    badge: null,
    sizes: ['XS','S','M','L','XL','2XL'],
    color: 'Washed Black',
    description: 'Premium 220gsm cotton. Oversized cut. Blood-red graphic on the back, small chest hit on the front.',
    details: ['220gsm 100% cotton', 'Oversized silhouette', 'Screen printed', 'Pre-washed'],
    tag: 'apparel',
    featured: true,
  },
  {
    id: 'p003',
    name: 'War Council Jacket',
    category: 'Apparel',
    price: 119.99,
    badge: 'sale',
    badgeLabel: 'SALE',
    oldPrice: 149.99,
    sizes: ['S','M','L','XL','2XL'],
    color: 'Blacked Out',
    description: 'Lightweight shell jacket with satin interior. Embroidered logo, zip chest pocket, custom zipper pulls.',
    details: ['Water-resistant exterior', 'Satin interior lining', 'YKK zippers', 'Embroidered branding'],
    tag: 'apparel',
    featured: true,
  },
  {
    id: 'p004',
    name: 'Blood Crest Snapback',
    category: 'Accessories',
    price: 34.99,
    badge: null,
    sizes: [],
    color: 'Black / Red',
    description: 'Structured 6-panel snapback. Embroidered OLD BLOOD crest front, flag logo on side.',
    details: ['One size fits most', 'Snapback closure', 'Structured front panels', 'Embroidered detail'],
    tag: 'accessories',
    featured: true,
  },
  {
    id: 'p005',
    name: 'Lineage Joggers',
    category: 'Apparel',
    price: 64.99,
    badge: null,
    sizes: ['XS','S','M','L','XL','2XL'],
    color: 'Blood Black',
    description: '360gsm fleece joggers with tapered leg. Embroidered waistband, zip pockets.',
    details: ['360gsm fleece', 'Tapered fit', 'Zip side pockets', 'Elastic + drawstring waist'],
    tag: 'apparel',
    featured: false,
  },
  {
    id: 'p006',
    name: 'OB Mousepad XL',
    category: 'Accessories',
    price: 24.99,
    badge: null,
    sizes: [],
    color: 'Black',
    description: '900×400mm extended mousepad. Non-slip base. Micro-woven surface optimized for gaming.',
    details: ['900×400×4mm', 'Stitched edges', 'Non-slip rubber base', 'Micro-woven surface'],
    tag: 'accessories',
    featured: false,
  },
  {
    id: 'p007',
    name: 'VALORANT Drop Tee',
    category: 'Drops',
    price: 44.99,
    badge: 'new',
    badgeLabel: 'DROP',
    sizes: ['S','M','L','XL'],
    color: 'Blood Red',
    description: 'Limited VALORANT collab drop. Agent-inspired design, blood-red colourway. Once it\'s gone, it\'s gone.',
    details: ['Limited edition', 'VALORANT collab', 'Screen printed', '200gsm cotton'],
    tag: 'drops',
    featured: true,
  },
  {
    id: 'p008',
    name: 'OB Sticker Pack',
    category: 'Accessories',
    price: 9.99,
    badge: null,
    sizes: [],
    color: 'Assorted',
    description: '8-piece sticker pack. Holographic and matte finishes. Die-cut OB logos, slogans, player tags.',
    details: ['8 stickers per pack', 'Holographic + matte', 'Weatherproof vinyl', 'Die-cut'],
    tag: 'accessories',
    featured: false,
  },
];

function getProducts(filter) {
  if (!filter || filter === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.tag === filter);
}

function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

// ── PRODUCT CARD HTML ────────────────────────────
function productCardHTML(product) {
  const badgeHTML = product.badge
    ? `<span class="product-badge badge-${product.badge}">${product.badgeLabel}</span>`
    : '';

  const priceHTML = product.oldPrice
    ? `<span class="product-price">$${product.price.toFixed(2)}</span><span class="product-price-old">$${product.oldPrice.toFixed(2)}</span>`
    : `<span class="product-price">$${product.price.toFixed(2)}</span>`;

  const quickSizes = product.sizes.slice(0, 4).map(s =>
    `<button class="size-btn" onclick="event.preventDefault();this.classList.toggle('active')" data-size="${s}">${s}</button>`
  ).join('');

  return `
    <a href="product.html?id=${product.id}" class="product-card">
      <div class="product-card-media">
        ${badgeHTML}
        <div style="width:100%;height:100%;background:linear-gradient(160deg,var(--bg3) 0%,var(--red-deep) 100%);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="opacity:.2;color:var(--red-hot)">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10"/>
          </svg>
          <span style="font-family:var(--font-display);font-size:13px;letter-spacing:.12em;color:rgba(184,0,10,.35);text-transform:uppercase;">OLD BLOOD</span>
        </div>
        ${product.sizes.length > 0 ? `
        <div class="product-quick-add">
          <div style="font-family:var(--font-condensed);font-size:11px;font-weight:700;letter-spacing:.12em;color:var(--text-muted);text-transform:uppercase;margin-bottom:8px;">Quick Select Size</div>
          <div class="size-grid">${quickSizes}</div>
        </div>` : ''}
      </div>
      <div class="product-card-body">
        <div class="product-category">${product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price-row">${priceHTML}</div>
      </div>
    </a>
  `;
}

// ── INIT ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  injectCartDrawer();
  renderCartItems();
});
