<div align="center">

# 🧵 SIRIUS HANDLOOM
### Pure Sri Lankan Handloom Textiles — E-Commerce Website

*Woven from tradition, crafted for the modern world.*

<br>

### 🔴 Live Demo

[![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-Visit%20Website-brightgreen?style=for-the-badge&logo=github)](https://shajahanimdaad53.github.io/handloom-website/)

👉 **[https://shajahanimdaad53.github.io/handloom-website/](https://shajahanimdaad53.github.io/handloom-website/)**

<br>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Products](https://img.shields.io/badge/Products-27-blue?style=for-the-badge)](#-product-catalogue)
[![Pages](https://img.shields.io/badge/Pages-8-orange?style=for-the-badge)](#-pages)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Technology Stack](#-technology-stack)
- [JavaScript Architecture](#-javascript-architecture)
- [Product Catalogue](#-product-catalogue)
- [Design System](#-design-system)
- [Shopping Cart](#-shopping-cart)
- [Wishlist](#-wishlist)
- [Quick View](#-quick-view)
- [Shop Filtering](#-shop-filtering)
- [Local Development](#-local-development)
- [Deployment](#-deployment)
- [Browser Support](#-browser-support)
- [Contact & Business Info](#-contact--business-info)
- [License](#-license)

---

## 🌟 Overview

**Sirius Handloom** is a fully responsive, multi-page e-commerce front-end website built for a real Sri Lankan handloom textile business founded in 2004 in Maruthamunai, Sri Lanka.

The site showcases an authentic collection of 100% cotton handloom sarongs, shirts, dresses, and sarees. All **27 products** feature high-quality real photography to showcase the premium craftsmanship and intricate patterns of our textiles.

This is a **pure static website** (HTML + CSS + JavaScript) with no backend, no frameworks, and no build tools required. All interactivity — cart, wishlist, quick-view modal, filtering, sorting, and search — runs entirely client-side using vanilla JavaScript and the `localStorage` API.

---

## 🚀 Live Demo

🌐 **Website:** [https://shajahanimdaad53.github.io/handloom-website/](https://shajahanimdaad53.github.io/handloom-website/)

The site is deployed via **GitHub Pages** and is live at the URL above. Every push to the `main` branch automatically updates the live site.

---

## ✨ Features

### 🛒 Shopping Experience
- **Add to Cart** — Add any product with quantity and stitching options
- **Stitching Variants** — Choose *Ready-to-wear Tube Stitched* or *Open Unstitched* per item
- **Cart Drawer** — Slide-in cart panel with item list, quantities, stitching label, and live total
- **Quantity Control** — Increase / decrease / remove items directly in the cart
- **Persistent Cart** — Cart data saved in `localStorage` (`sh_cart`) — survives page refresh
- **Buy Now** — Quick checkout shortcut from the Quick View modal
- **Toast Notifications** — Visual confirmation when items are added

### ❤️ Wishlist
- **Wishlist Toggle** — Heart icon on each product card
- **Persistent Wishlist** — Saved in `localStorage` (`sh_wishlist`)
- **Visual Feedback** — Heart fills in and animates on toggle

### 🔍 Quick View Modal
- **Image Gallery** — Multiple product photos with thumbnail selection
- **Zoom on Hover** — Magnified product detail within the main display
- **Stitching Selector** — Choose stitching option before adding to cart
- **Quantity Control** — Adjust quantity before adding
- **Add to Cart / Buy Now** — Direct actions from the modal
- **Product Specs** — Material, weave, dimensions, weight, origin, and care instructions
- **Stock & Rating** — Real-time stock status, star rating, and review count

### 🛍️ Shop Filtering
- **Category Filter** — Filter by Handloom Sarongs, Heritage Sarongs, Shirts, Dresses, Sarees
- **Pattern Type Filter** — Vertical Stripes, Horizontal Border, Check/Plaid, SAPTA, Puni, Textured, Solid
- **Price Range** — Min/max price inputs (LKR)
- **Color Palette** — Visual color swatches (Blue, Green, Beige, Dark, Gold, Purple, Pink)
- **Sort Options** — Recommended · Price Low→High · Price High→Low · Highest Rated · Name A–Z
- **Live Search** — Search by name, description, category, pattern, or SKU
- **Clear All** — One-click reset of all filters
- **Product Count** — Live count of filtered vs. total products
- **Pagination** — Page navigation for large result sets

### 🏪 Product Display
- **27 Real Products** — Authentic handloom textiles with real photography
- **Product Tabs** — Filter by All / New / Premium / Bestseller / Trending / Popular
- **Featured Wall** — Editorial grid of hand-picked top products
- **Category Grid** — Quick browse by product type
- **Gallery Section** — Visual fabric gallery on the homepage
- **Stitching Options** — Tube stitched or open unstitched
- **Installment Pricing** — Koko / Mintpay installment display

### 🔍 Navigation & UX
- **Sticky Header** with scroll shadow effect
- **Mobile Navigation** — Hamburger menu for small screens
- **Search Bar** — Toggle-able search input in the header
- **Theme Toggle** — Light / dark mode switch (persisted)
- **Announcement Bar** — Promotional banner at the top
- **Marquee Band** — Animated scrolling text strip
- **Responsive Design** — Fully mobile-friendly across all pages

### 📧 Engagement
- **Newsletter Signup** — Email subscription form with animated confirmation
- **Wishlist Button** — Heart icon on each product card
- **Customer Testimonials** — Reviews from real customer locations

---

## 📁 Project Structure

```
handloom-website/
│
├── index.html              # Homepage — Hero, Products, Gallery, Testimonials
├── about.html              # About Us — Brand story, values, team stats
├── shop.html               # Shop page — Full catalogue with filters & sort
├── categories.html         # Categories — Browse by product type
├── contact.html            # Contact — Business info, contact form
├── login.html              # Login / Register page
├── eshandlooms.html        # Reference page — East Star Handlooms catalog export
├── es_single_product.html  # Reference page — single product page export
│
├── style.css               # Global stylesheet — Design system + all components
├── app.js                  # Main application logic — Cart, wishlist, quick-view, UI
├── products.js             # Product data (27 items) with full specs & imagery
│
├── images/                 # 78 product photographs (JPEG/PNG)
└── README.md               # Project documentation (this file)
```

---

## 📄 Pages

### 🏠 `index.html` — Homepage
The landing page and primary entry point of the site.

| Section | Description |
|---|---|
| **Announce Bar** | Top banner: free shipping info + brand keywords |
| **Header** | Logo, nav links, search, theme toggle, cart icon, login button |
| **Hero** | Full-screen banner with headline, CTA buttons, fabric cards, stats |
| **Features Strip** | Fast Delivery · Easy Returns · 100% Handloom · 24/7 Support |
| **Category Band** | Grid of product categories with previews |
| **Marquee** | Animated scrolling keyword band |
| **Products Section** | Tabbed product grid (All / New / Featured / Premium / Trending) |
| **Featured Wall** | Dark editorial grid with top picks |
| **Testimonials** | Customer review cards |
| **Gallery** | CSS grid of fabric swatches |
| **Newsletter** | Email subscription form |
| **Footer** | Brand info, links, contact details, social icons |

---

### ℹ️ `about.html` — About Us
Tells the brand's story and communicates its values.

| Section | Description |
|---|---|
| **Page Banner** | Dark hero banner with page title |
| **Brand Story** | Alternating image + text panels: founding story and craftsmanship |
| **Values Grid** | Authentic Heritage · Shipped Worldwide · Artisan First |
| **Stats Grid** | 20+ Years · 500+ Patterns · 50+ Countries · 100% Pure Cotton |

---

### 🛍️ `shop.html` — Shop All
Full product catalogue with advanced filtering and sorting.

| Feature | Description |
|---|---|
| **Filter Sidebar** | Category checkboxes, pattern type checkboxes, price range, color swatches |
| **Sort Options** | Recommended · Price ↑ · Price ↓ · Highest Rated · Name A–Z |
| **Live Search** | Search by name, description, category, pattern, or SKU |
| **Product Grid** | All 27 products rendered dynamically with quick-view & wishlist |
| **Product Count** | Live count showing filtered vs. total products |
| **Pagination** | Page navigation buttons |

---

### 📂 `categories.html` — Categories
Browse by product type with category cards.

| Category | Products |
|---|---|
| Handloom Sarongs | 14 styles |
| Heritage Sarongs | 8 styles |
| Handloom Shirts | 3 styles |
| Handloom Sarees | 1 style |
| Handloom Dresses | 1 style |

---

### 📬 `contact.html` — Contact
Business contact information and a contact form.

| Info | Detail |
|---|---|
| **Phone** | +94 75 473 8475 |
| **Email** | info@siriushandloom.com |
| **Address** | No. 476, Mashoor Moulana Road, Maruthamunai 03, Sri Lanka |
| **Form** | Name, Email, Subject, Message fields |

---

### 🔐 `login.html` — Login / Register
Simple dual-panel login and registration form.

---

### 📋 `eshandlooms.html` & `es_single_product.html` — Reference Pages
Static exports of the East Star Handlooms WordPress product catalogue and a single product page, kept as design references for layout and SEO structure.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure for all 8 pages |
| **CSS3** | Vanilla CSS with custom properties (no frameworks) |
| **JavaScript (ES6+)** | Cart, wishlist, quick-view, filtering, rendering, UI interactions |
| **localStorage API** | Persistent cart & wishlist state across page navigations |
| **Real Photography** | 78 product images (JPEG/PNG) for authentic product display |
| **Google Fonts** | `Playfair Display` (headings) + `DM Sans` (body) |

> ⚡ No build tools, no npm, no frameworks. Open any `.html` file directly in a browser.

---

## 🧠 JavaScript Architecture

All interactivity is split across three script files: `app.js` (global logic), `products.js` (data), and inline scripts in `shop.html` (filtering).

### `products.js`
Holds the complete **product catalogue** as a `PRODUCTS` array of 27 richly detailed objects.

#### Product Schema

```js
{
  id: Number,            // Unique product ID (1–27)
  sku: String,           // Stock-keeping unit (e.g. "ICS-149349")
  name: String,          // Short product name
  fullName: String,      // Full descriptive name
  cat: String,           // Category (Handloom/Heritage Sarongs, Shirts, etc.)
  pattern: String,       // Weave & pattern type
  price: String,         // Display price (e.g. "LKR 4,850")
  rawPrice: Number,      // Numeric price for cart calculations
  installment: String,   // Koko / Mintpay installment option
  image: String,         // Primary image path
  secondaryImage: String,// Secondary/hover image path
  gallery: [String],     // Array of image paths for quick-view gallery
  badge: String,         // Badge label (e.g. "Limited Edition", "Bestseller")
  tag: String,           // Filter tag: "new" | "premium" | "bestseller" | "trending" | "popular"
  rating: Number,        // Star rating (e.g. 4.9)
  reviews: Number,       // Review count
  stock: String,         // Stock status text
  colors: [String],      // Array of hex color strings
  specs: {               // Detailed product specifications
    material, weave, dimensions, stitching, weight, origin, care
  },
  description: String    // Long-form product description
}
```

---

### `app.js`
Handles all **UI interactions**, **cart & wishlist state**, **quick-view modal**, and **dynamic rendering**.

#### Cart Functions

| Function | Description |
|---|---|
| `addToCart(id, qty, stitching)` | Adds a product by ID with quantity & stitching variant; increments if already in cart |
| `removeFromCart(id, cartKey)` | Removes a specific cart line item |
| `changeQty(id, delta, cartKey)` | Increases or decreases quantity; removes at 0 |
| `updateCartUI()` | Refreshes badge counts, cart drawer contents, and total |
| `saveCart()` | Serializes cart to `localStorage` (`sh_cart`) |

#### Wishlist Functions

| Function | Description |
|---|---|
| `toggleWishlist(id, btn)` | Toggles a product in/out of wishlist with animation |
| `saveWishlist()` | Serializes wishlist to `localStorage` (`sh_wishlist`) |

#### Quick View Functions

| Function | Description |
|---|---|
| `ensureQuickViewModal()` | Lazily creates the quick-view modal in the DOM |
| `openQuickView(id)` | Populates and opens the modal with full product data |
| `closeQuickView()` | Closes the modal |
| `selectQvImage(src, el)` | Switches the main gallery image |
| `handleZoom(e)` / `resetZoom()` | Mouse-hover magnification of the main image |
| `selectStitching(val, el)` | Selects a stitching option |
| `changeQvQty(delta)` | Adjusts quantity in the modal |
| `addQvToCart()` | Adds the current quick-view item to cart |
| `buyQvNow()` | Adds to cart and opens the cart drawer (checkout shortcut) |

#### UI Toggle Functions

| Function | Description |
|---|---|
| `toggleCart()` | Opens/closes the slide-in cart drawer |
| `toggleSearch()` | Shows/hides the header search bar |
| `toggleMenu()` | Toggles mobile hamburger navigation |
| `toggleTheme()` | Switches between light and dark themes (persisted) |
| `showToast(msg)` | Displays a floating notification message |

#### Render Functions

| Function | Renders To |
|---|---|
| `renderProducts(list, containerId)` | Any product grid — product card list with quick-view & wishlist buttons |
| `renderCategories()` | Category cards with previews |
| `renderFeaturedWall()` | Editorial dark grid of top picks |
| `renderHeroFabrics()` | Product cards in the hero section |
| `renderGallery()` | Fabric swatch photo grid |
| `productCard(p, animate)` | Individual product card with image, badge, price, actions |

#### Tab Filtering — `switchTab(el, filter)`

| Tab | Filter Logic |
|---|---|
| All Products | Shows all 27 products |
| New Arrivals | `tag === "new"` |
| Premium | `tag === "premium"` |
| Bestseller | `tag === "bestseller"` |
| Trending | `tag === "trending"` |

---

### `shop.html` (inline scripts)
Handles **filtering**, **sorting**, **search**, and **color swatch** logic.

| Function | Description |
|---|---|
| `applyFilters()` | Combines category, pattern, price, color, search & sort filters; re-renders grid |
| `clearFilters()` | Resets all filters, swatches, search, and sort to defaults |
| `handleSearch(val)` | Triggers `applyFilters()` on search input |
| `toggleColorSwatch(el, color)` | Toggles a color palette filter (single-select) |

---

## 🧶 Product Catalogue

**Total Products:** 27  
**Price Range:** LKR 3,450 – LKR 6,950

### By Category

| Category | Count |
|---|---|
| Handloom Sarongs | 14 |
| Heritage Sarongs | 8 |
| Handloom Shirts | 3 |
| Handloom Sarees | 1 |
| Handloom Dresses | 1 |

### By Tag

| Tag | Count |
|---|---|
| Popular | 9 |
| New Arrivals | 8 |
| Premium | 5 |
| Bestseller | 3 |
| Trending | 2 |

### Product Highlights

| ID | Name | Category | Price | Tag |
|---|---|---|---|---|
| 1 | Artisan Midnight Royal Puni Sarong | Heritage Sarongs | LKR 4,850 | premium |
| 2 | Aqua Blue Charcoal Stripe Sarong | Handloom Sarongs | LKR 3,450 | bestseller |
| 16 | Ikat Diamond Pattern Sarong | Heritage Sarongs | LKR 5,450 | premium |
| 25 | Ocean Blue Broad Stripe Sarong | Handloom Sarongs | LKR 3,450 | new |
| 27 | Forest Green Fine Stripe Sarong | Handloom Sarongs | LKR 3,450 | new |

> Full catalogue is in `products.js` — 27 entries with SKU, gallery, specs, ratings, and stock info.

---

## 🎨 Design System

The entire design is defined using **CSS custom properties** in `style.css`.

### Color Palette

| Variable | Value | Usage |
|---|---|---|
| `--ink` | `#1a2030` | Dark backgrounds, headings |
| `--gold` | `#c8a060` | Primary accent, prices |
| `--gold2` | `#d4b880` | Lighter gold for labels |
| `--linen` | `#f5f0e8` | Light section backgrounds |
| `--mid` | `#4a5568` | Body text |
| `--muted` | `#718096` | Secondary text |
| `--border` | `#e2d9cc` | Card borders |
| `--teal` | `#4ecdc4` | Accent for trending badges |

### Typography

| Font | Weight | Usage |
|---|---|---|
| **Playfair Display** | 400, 700, 900 | All headings (`var(--display)`) |
| **DM Sans** | 300, 400, 500 | All body text (`var(--body)`) |

### Key Components

- `.product-card` — Hover lift with image cross-fade to secondary image
- `.btn-primary` — Dark ink button with gold hover
- `.btn-ghost` — Outlined transparent button
- `.cart-drawer` — Slide-in right panel with overlay
- `.toast` — Fixed bottom-right notification pill
- `.marquee-track` — CSS `@keyframes marquee` animation
- `.tab-pill` — Rounded filter buttons with active state
- `.filter-sidebar` — Sticky filter column with checkbox groups & swatches
- `.qv-modal` — Quick-view modal with image gallery & zoom

---

## 🛒 Shopping Cart

The cart is fully functional and persistent across all pages.

### How it works:
1. Click **"Add to Cart"** on any product card, or use the **Quick View** modal
2. Cart badge on the 🛒 icon updates immediately
3. Click the cart icon to open the **slide-in drawer**
4. Adjust quantities using **−** / **+** buttons
5. Remove items with the **✕** button
6. Cart total updates in real-time (LKR)
7. Cart contents are **saved in `localStorage`** — refreshing the page keeps your cart
8. Items added with different stitching options are tracked as separate line items

> **Note:** Checkout is not yet connected to a payment gateway. The "Checkout →" button is a placeholder for future backend integration.

---

## ❤️ Wishlist

- Click the **heart icon** on any product card to add/remove it from your wishlist
- Wishlist state persists in `localStorage` (`sh_wishlist`)
- The heart animates and fills in when active

---

## 🔍 Quick View

Click any product card's **"Quick View"** to open a detailed modal:

- **Multi-image gallery** with thumbnail navigation
- **Hover-to-zoom** on the main product image
- **Stitching selector** (Tube Stitched / Open Unstitched)
- **Quantity selector**
- **Add to Cart** or **Buy Now** (adds + opens cart drawer)
- **Full product specs**: material, weave, dimensions, weight, origin, care
- **Stock status**, star rating, and review count

---

## 🛍️ Shop Filtering

The shop page (`shop.html`) includes a full-featured filtering sidebar:

| Filter | Type | Options |
|---|---|---|
| **Category** | Checkboxes | Handloom Sarongs, Heritage Sarongs, Shirts, Dresses, Sarees |
| **Weave & Pattern** | Checkboxes | Vertical Stripes, Horizontal Border, Check/Plaid, SAPTA, Puni, Textured, Solid |
| **Price Range** | Number inputs | Min / Max in LKR |
| **Color Palette** | Swatches | Blue, Green, Beige, Dark, Gold, Purple, Pink |
| **Search** | Text input | Matches name, description, category, pattern, SKU |
| **Sort** | Dropdown | Recommended · Price ↑ · Price ↓ · Highest Rated · Name A–Z |

All filters combine in real time. The product count updates live, and **Clear All** resets everything instantly.

---

## 💻 Local Development

No installation or build process needed. Just open the files:

### Option 1 — Open directly
```
Double-click index.html in File Explorer
```

### Option 2 — VS Code Live Server (Recommended)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Browser opens at `http://127.0.0.1:5500`

### Option 3 — Python HTTP Server
```bash
python -m http.server 8080
# Then open: http://localhost:8080
```

### Option 4 — Node.js serve
```bash
npx serve .
```

---

## 🌐 Deployment

This site is deployed via **GitHub Pages** — completely free with no server required.

### Current Deployment
The live site is automatically served from the repository at:

```
https://shajahanimdaad53.github.io/handloom-website/
```

### How it works
The `gh-pages` branch is kept in sync with `main`. Pushing to `main` and then updating `gh-pages` deploys the latest version.

### Updating the deployed site
```bash
# 1. Make your changes and commit
git add .
git commit -m "Your update message"

# 2. Push to main
git push origin main

# 3. Fast-forward gh-pages to deploy
git push origin main:gh-pages
```

The site updates within ~60 seconds of the push.

### Initial setup (already done)
If starting fresh, enable GitHub Pages from **Settings → Pages → Source: `gh-pages` branch / root**.

---

## 🌍 Browser Support

| Browser | Status |
|---|---|
| Chrome 80+ | ✅ Fully supported |
| Firefox 75+ | ✅ Fully supported |
| Safari 13+ | ✅ Fully supported |
| Edge 80+ | ✅ Fully supported |
| IE 11 | ❌ Not supported (uses ES6+) |

---

## 📞 Contact & Business Info

| Field | Detail |
|---|---|
| **Brand** | Sirius Handloom |
| **Established** | 2004 |
| **Location** | No. 476, Mashoor Moulana Road, Maruthamunai 03, Sri Lanka |
| **Phone** | [+94 75 473 8475](tel:+94754738475) |
| **Email** | [info@siriushandloom.com](mailto:info@siriushandloom.com) |
| **GitHub** | [@ShajahanImdaad53](https://github.com/ShajahanImdaad53) |

---

## 📝 License

© 2025 **Sirius Handloom**. All rights reserved.  
This codebase is the intellectual property of Sirius Handloom. Not open for redistribution without permission.

---

<div align="center">

Handcrafted in Sri Lanka 🇱🇰  
*Every thread, a story.*

**[🔴 View Live Demo](https://shajahanimdaad53.github.io/handloom-website/)**

</div>
