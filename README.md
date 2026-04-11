<div align="center">

# 🧵 SIRIUS HANDLOOM
### Pure Sri Lankan Handloom Textiles — E-Commerce Website

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://ShajahanImdaad53.github.io/handloom-website/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

*Woven from tradition, crafted for the modern world.*

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
- [Local Development](#-local-development)
- [Deployment](#-deployment)
- [Browser Support](#-browser-support)
- [Contact & Business Info](#-contact--business-info)

---

## 🌟 Overview

**Sirius Handloom** is a fully responsive, multi-page e-commerce front-end website built for a real Sri Lankan handloom textile business founded in 2004 in Maruthamunai, Sri Lanka.

The site showcases an authentic collection of 100% cotton handloom sarongs — including stripe patterns, check designs, premium weaves, and ikat diamond prints — all rendered dynamically using inline SVG fabric patterns generated entirely with JavaScript. No external product images are required.

This is a **pure static website** (HTML + CSS + JavaScript) with no backend, no frameworks, and no build tools required.

---

## 🚀 Live Demo

🌐 **Website:** [https://ShajahanImdaad53.github.io/handloom-website/](https://ShajahanImdaad53.github.io/handloom-website/)

> **Note:** Enable GitHub Pages from the repository **Settings → Pages → Source: main / root** to activate the live URL.

---

## ✨ Features

### 🛒 Shopping Experience
- **Add to Cart** — Add any product to a persistent shopping cart
- **Cart Drawer** — Slide-in cart panel with item list, quantities, and total
- **Quantity Control** — Increase / decrease / remove items directly in the cart
- **Persistent Cart** — Cart data saved in `localStorage` (survives page refresh)
- **Toast Notifications** — Visual confirmation when items are added

### 🏪 Product Display
- **20 Unique Products** — All with dynamically generated SVG fabric patterns
- **Product Tabs** — Filter by All / New Arrivals / Featured / Premium
- **Featured Wall** — Editorial grid of hand-picked top products
- **Category Grid** — Quick browse by fabric type (Cotton, Check, Stripe, Premium)
- **Gallery Section** — Visual fabric gallery inspired by social media grid layouts

### 🔍 Navigation & UX
- **Sticky Header** with scroll shadow effect
- **Mobile Navigation** — Hamburger menu for small screens
- **Search Bar** — Toggle-able search input in the header
- **Announcement Bar** — Scrolling promotional banner at the top
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
├── index.html          # Homepage — Hero, Products, Gallery, Testimonials
├── about.html          # About Us — Brand story, values, team stats
├── shop.html           # Shop page — Full product catalogue with filters
├── categories.html     # Categories — Browse by fabric type
├── contact.html        # Contact — Business info, contact form
├── login.html          # Login / Register page
│
├── style.css           # Global stylesheet — Design system + all components
├── app.js              # Main application logic — Cart, UI, rendering
├── products.js         # Product data + SVG fabric pattern generator
│
└── README.md           # Project documentation (this file)
```

---

## 📄 Pages

### 🏠 `index.html` — Homepage
The landing page and primary entry point of the site.

| Section | Description |
|---|---|
| **Announce Bar** | Top banner: free shipping info + brand keywords |
| **Header** | Logo, nav links, search, cart icon, login button |
| **Hero** | Full-screen banner with headline, CTA buttons, fabric cards, stats |
| **Features Strip** | Fast Delivery · Easy Returns · 100% Handloom · 24/7 Support |
| **Category Band** | 4-column grid of product categories with SVG previews |
| **Marquee** | Animated scrolling keyword band |
| **Products Section** | Tabbed product grid (All / New / Featured / Premium) |
| **Featured Wall** | Dark editorial grid with top 5 picks |
| **Testimonials** | 3 customer review cards |
| **Gallery** | CSS grid of 10 fabric swatches |
| **Newsletter** | Email subscription form |
| **Footer** | Brand info, links, contact details, social icons |

---

### ℹ️ `about.html` — About Us
Tells the brand's story and communicates its values.

| Section | Description |
|---|---|
| **Page Banner** | Dark hero banner with page title |
| **Brand Story** | Two alternating image + text panels: founding story and craftsmanship |
| **Values Grid** | 3 cards — Authentic Heritage · Shipped Worldwide · Artisan First |
| **Stats Grid** | 20+ Years · 500+ Patterns · 50+ Countries · 100% Pure Cotton |

---

### 🛍️ `shop.html` — Shop All
Full product catalogue with filtering and sorting.

| Section | Description |
|---|---|
| **Filter Bar** | Dropdowns for Category, Pattern, Price Range |
| **Sort Options** | Sort by price or newness |
| **Product Grid** | All 20 products rendered dynamically |
| **Add to Cart** | Directly purchasable from the shop grid |

---

### 📂 `categories.html` — Categories
Browse by fabric type with category cards.

| Category | Styles |
|---|---|
| Cotton Sarongs | 40+ styles |
| Check Patterns | 15+ styles |
| Stripe Collection | 25+ styles |
| Premium Weaves | 10+ styles |

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

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure for all 6 pages |
| **CSS3** | Vanilla CSS with custom properties (no frameworks) |
| **JavaScript (ES6+)** | Cart logic, product rendering, UI interactions |
| **SVG** | Inline-generated fabric pattern images |
| **localStorage API** | Persistent cart state across page navigations |
| **Google Fonts** | `Playfair Display` (headings) + `DM Sans` (body) |

> ⚡ No build tools, no npm, no frameworks. Open any `.html` file directly in a browser.

---

## 🧠 JavaScript Architecture

All interactivity is split across two script files loaded at the bottom of each page.

### `products.js`
Handles **product data** and **SVG pattern generation**.

#### `makeSVGPattern(type, colors)`
Generates a fabric swatch as an inline SVG data URI. Supports 7 pattern types:

| Pattern Key | Visual Style | Used For |
|---|---|---|
| `vstripe` | Vertical stripes with border band | Classic cotton sarongs |
| `hstripe` | Horizontal stripe rows | Mid-weight sarongs |
| `check` | Overlapping horizontal + vertical grids | Check pattern sarongs |
| `diamond` | Tiled ikat diamond motif | Traditional ikat prints |
| `weave` | Basket-weave checkerboard | Woven texture sarongs |
| `boldstripe` | Wide alternating color blocks | Bold statement sarongs |
| `pinstripe` | Fine vertical hairlines | Subtle luxury sarongs |
| `multicheck` | 3×3 multicolor block grid | Colorful festive checks |

Each pattern accepts 4 colors: `[c1, c2, c3, c4]` applied as fill colors to SVG elements.

#### `PRODUCTS` Array
Array of 20 product objects with the following schema:

```js
{
  id: Number,          // Unique product ID
  name: String,        // Short product name
  fullName: String,    // Full descriptive name
  cat: String,         // Category label
  price: String,       // Display price (e.g. "LKR 2,950")
  rawPrice: Number,    // Numeric price for cart calculation
  pattern: String,     // SVG pattern key (see above)
  colors: [String],    // Array of 4 hex color strings
  badge: String,       // Badge label (e.g. "New Arrival", "Premium")
  tag: String          // Filter tag: "new" | "featured" | "premium" | "trending" | "bestseller"
}
```

---

### `app.js`
Handles all **UI interactions**, **cart state**, and **dynamic rendering**.

#### Cart Functions

| Function | Description |
|---|---|
| `addToCart(id)` | Adds a product by ID; increments quantity if already in cart |
| `removeFromCart(id)` | Removes a product from cart entirely |
| `changeQty(id, delta)` | Increases or decreases quantity; removes at 0 |
| `updateCartUI()` | Refreshes badge counts, cart drawer contents, and total |
| `saveCart()` | Serializes cart to `localStorage` |

#### UI Toggle Functions

| Function | Description |
|---|---|
| `toggleCart()` | Opens/closes the slide-in cart drawer |
| `toggleSearch()` | Shows/hides the header search bar |
| `toggleMenu()` | Toggles mobile hamburger navigation |
| `showToast(msg)` | Displays a floating notification message |

#### Render Functions

| Function | Renders To |
|---|---|
| `renderHeroFabrics()` | `#heroFabrics` — 3 product cards in the hero section |
| `renderCategories()` | `#catGrid` — 4 category cards with SVG previews |
| `renderProducts(list, id)` | `#productsGrid` or any grid — product card list |
| `renderFeaturedWall()` | `#featuredWall` — editorial dark grid |
| `renderGallery()` | `#galleryGrid` — fabric swatch photo grid |

#### Tab Filtering
The `switchTab(el, filter)` function filters the product list by tag:

| Tab | Filter Logic |
|---|---|
| All Products | Shows all 20 products |
| New Arrivals | `tag === "new"` or `"bestseller"` |
| Featured | `tag === "featured"` |
| Premium | `tag === "premium"` or `"trending"` |

---

## 🧶 Product Catalogue

| ID | Name | Pattern | Price | Tag |
|---|---|---|---|---|
| 1 | Light Grey & White Stripe Sarong | vstripe | LKR 2,950 | bestseller |
| 2 | Slate, Green & Charcoal Sarong | vstripe | LKR 2,950 | new |
| 3 | Sky Blue & Peach Pink Sarong | hstripe | LKR 2,950 | new |
| 4 | Beige, Navy & Silver Sarong | vstripe | LKR 2,950 | new |
| 5 | Bluish Grey & Off White Sarong | pinstripe | LKR 2,950 | new |
| 6 | Dark Navy & Golden Yellow Sarong | boldstripe | LKR 2,950 | popular |
| 7 | Black & Beige Classic Sarong | vstripe | LKR 2,950 | bestseller |
| 8 | Mosaic Sands Sarong | weave | LKR 2,950 | featured |
| 9 | Charcoal Grey & Teal Sarong | hstripe | LKR 2,950 | new |
| 10 | Sky Blue, Silver & Black Sarong | hstripe | LKR 2,950 | new |
| 11 | Dark Green & Silver Sarong | vstripe | LKR 2,950 | featured |
| 12 | Brown & Beige Sarong | boldstripe | LKR 2,950 | bestseller |
| 13 | Deep Purple & Emerald Check | check | LKR 2,850 | featured |
| 14 | Magenta Pink & Turquoise Check | multicheck | LKR 2,850 | featured |
| 15 | Multicolored Bold Check Sarong | multicheck | LKR 2,850 | trending |
| 16 | Ikat Diamond Pattern Sarong | diamond | LKR 3,450 | premium |
| 17 | Indigo & White Weave Sarong | weave | LKR 3,250 | premium |
| 18 | Crimson & Gold Festive Sarong | vstripe | LKR 3,650 | featured |
| 19 | Ocean Blue Broad Stripe Sarong | boldstripe | LKR 2,950 | new |
| 20 | Forest Green Fine Stripe Sarong | pinstripe | LKR 2,950 | new |

**Price Range:** LKR 2,850 – LKR 3,650  
**Total Products:** 20  
**Categories:** Sarong Cotton Standard (17) · Sarong Premium (3)

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

- `.product-card` — Hover lift with image zoom
- `.btn-primary` — Dark ink button with gold hover
- `.btn-ghost` — Outlined transparent button
- `.cart-drawer` — Slide-in right panel with overlay
- `.toast` — Fixed bottom-right notification pill
- `.marquee-track` — CSS `@keyframes marquee` animation
- `.tab-pill` — Rounded filter buttons with active state

---

## 🛒 Shopping Cart

The cart is fully functional and persistent across all pages.

### How it works:
1. Click **"Add to Cart"** on any product card
2. Cart badge on the 🛒 icon updates immediately
3. Click the cart icon to open the **slide-in drawer**
4. Adjust quantities using **−** / **+** buttons
5. Remove items with the **✕** button
6. Cart total updates in real-time (LKR)
7. Cart contents are **saved in `localStorage`** — refreshing the page keeps your cart

> **Note:** Checkout is not yet connected to a payment gateway. The "Checkout →" button is a placeholder for future backend integration.

---

## 💻 Local Development

No installation or build process needed. Just open the files:

### Option 1 — Open directly
```
Double-click index.html in File Explorer
```

### Option 2 — Use VS Code Live Server (Recommended)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Browser opens at `http://127.0.0.1:5500`

### Option 3 — Python HTTP Server
```bash
# Python 3
python -m http.server 8080

# Then open:
# http://localhost:8080
```

### Option 4 — Node.js serve
```bash
npx serve .
```

---

## 🌐 Deployment

This site is deployed via **GitHub Pages** — completely free with no server required.

### Steps to deploy:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Stage all files
git add .

# 3. Commit
git commit -m "Initial commit - Handloom website"

# 4. Set main branch
git branch -M main

# 5. Add remote origin
git remote add origin https://github.com/ShajahanImdaad53/handloom-website.git

# 6. Push to GitHub
git push -u origin main
```

### Enable GitHub Pages:
1. Go to the repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Branch: main** / **Folder: / (root)**
4. Click **Save**
5. Wait ~60 seconds — your site goes live at:

```
https://ShajahanImdaad53.github.io/handloom-website/
```

### Future Pushes (after initial setup):
```bash
git add .
git commit -m "Your update message"
git push
```

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

</div>