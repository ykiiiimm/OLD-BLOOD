# OLD BLOOD MERCH STORE
## Complete File Structure & Setup Guide

---

### 📁 Files in this folder

```
merch-store/
├── index.html        ← Merch store homepage (hero, featured products, drops banner)
├── apparel.html      ← Apparel category page (hoodies, tees, jackets, joggers)
├── accessories.html  ← Accessories category page (caps, mousepads, stickers)
├── drops.html        ← Limited drops page with countdown + archive
├── product.html      ← Individual product page (reused for all products via ?id=)
├── checkout.html     ← Checkout page with cart summary + order confirmation
├── style.css         ← ALL shared styles (one file — no duplicating!)
├── store.js          ← ALL shared JS: cart logic, product data, header/footer injection
└── README.md         ← This file
```

---

### 🔗 How to link from your main website

In your **main site's** `index.html`, update the "Merch Store" button in the navbar:

**Change this:**
```html
<a href="#">Merch Store →</a>
```

**To this:**
```html
<a href="merch-store/index.html">Merch Store →</a>
```

Also update the nav button in `bottom-nav`:
```html
<!-- Find this line in index.html: -->
<a href="#">
  Merch Store
  <svg ...></svg>
</a>

<!-- Replace with: -->
<a href="merch-store/index.html">
  Merch Store
  <svg ...></svg>
</a>
```

---

### 🛒 Cart System

- Cart is saved in **localStorage** — persists across page refreshes
- Works across all store pages automatically
- Cart count badge shows in top-right nav icon
- Cart drawer slides in from the right

---

### 📦 Adding Real Products

In `store.js`, find the `PRODUCTS` array and edit/add items:

```js
{
  id: 'p009',              // Unique ID — used in product.html?id=p009
  name: 'My New Product',  // Product name
  category: 'Apparel',     // Category label
  price: 49.99,            // Price in USD
  badge: 'new',            // 'new', 'sale', null
  badgeLabel: 'NEW',       // Text on badge
  oldPrice: 69.99,         // Optional — shows strikethrough price
  sizes: ['S','M','L','XL'],// Empty array [] for "one size"
  color: 'Black',          // Color description
  description: '...',      // Long description on product page
  details: ['Detail 1', 'Detail 2'], // Bullet list on product page
  tag: 'apparel',          // 'apparel', 'accessories', or 'drops'
  featured: true,          // Shows on homepage featured section
}
```

---

### 🖼️ Adding Real Product Images

Currently shows placeholder graphics. To add real images:

1. Put your product images in `merch-store/` (name them like `hoodie-1.jpg`)
2. In `store.js`, add an `image` field to each product:
   ```js
   image: 'hoodie-1.jpg'
   ```
3. In the `productCardHTML()` function, replace the placeholder `<div>` with:
   ```html
   <img src="${product.image}" alt="${product.name}">
   ```

---

### 💳 Making Checkout Work for Real

The checkout page currently shows a success screen on submit. To process real payments:

1. Sign up for **Stripe** (stripe.com) — free to start
2. Replace the payment form with Stripe Elements
3. Or use **Gumroad** or **Shopify Buy Button** for the easiest option

---

### 🚀 Deploy

This is a **static website** — no backend needed.

1. Upload the whole `merch-store/` folder into your GitHub repo (OLD-BLOOD)
2. GitHub Pages will serve it automatically at:
   `https://ykiiiimm.github.io/OLD-BLOOD/merch-store/`
3. Link to it from your main site nav

---

Built to match Old Blood's dark red aesthetic. © 2026 Old Blood Esports.
