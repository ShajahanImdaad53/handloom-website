// ===========================
//  SIRIUS HANDLOOM — products.js
//  Realistic Product Catalog (New ICS Collection)
// ===========================

const PRODUCTS = [
  // ── FEATURED HERO — PREMIUM GENERATED ──
  {
    id: 1, name: "Premium Artisan Midnight Royal Sarong", fullName: "Premium Hand Made Sarong — Midnight Royal Burgundy",
    cat: "Handloom Sarongs", price: "LKR 4,850", rawPrice: 4850, image: "images/premium_hero_sarong.png",
    badge: "Limited Edition", tag: "premium"
  },

  // ── SARONGS (ICS COLLECTION) ──
  {
    id: 2, name: "Aqua Blue Charcoal Stripe Sarong", fullName: "Handloom Cotton Sarong — Aqua Blue & Charcoal Grey",
    cat: "Handloom Sarongs", price: "LKR 3,450", rawPrice: 3450, image: "images/Handloom Cotton Sarong - Aqua Blue Dark Charcoal Grey and White with Black Stripes - ICS 830011.jpeg",
    badge: "Bestseller", tag: "bestseller"
  },
  {
    id: 3, name: "Beige & Black Horizontal Stripe Sarong", fullName: "Handloom Cotton Sarong — Beige & Black Stripes",
    cat: "Handloom Sarongs", price: "LKR 2,950", rawPrice: 2950, image: "images/Handloom Cotton Sarong - Beige and Black Horizontal Stripes Bottom Border - ICS 744981.jpeg",
    badge: "New Arrival", tag: "new"
  },
  {
    id: 4, name: "Charcoal Slate & Peach Teal Sarong", fullName: "Artisan Textured Sarong — Charcoal Grey Slate",
    cat: "Handloom Sarongs", price: "LKR 3,100", rawPrice: 3100, image: "images/Handloom Cotton Sarong - Charcoal Grey Slate and Light Peach with Teal - ICS 471658.jpeg",
    badge: "Premium", tag: "premium"
  },
  {
    id: 5, name: "Black & Golden Yellow Silver Border Sarong", fullName: "Authentic Hand Loomed Sarong — Golden Yellow",
    cat: "Handloom Sarongs", price: "LKR 3,250", rawPrice: 3250, image: "images/Handloom Cotton Sarong - Black and Golden Yellow with Silver Bottom Border - ICS 959168.jpeg",
    badge: "Trending", tag: "trending"
  },
  {
    id: 6, name: "Citron Yellow & Charcoal Teal Sarong", fullName: "Handloom Cotton Sarong — Citron Yellow & Teal",
    cat: "Handloom Sarongs", price: "LKR 3,450", rawPrice: 3450, image: "images/Handloom Cotton Sarong - Citron Yellow and Charcoal Grey with Teal - ICS 340801.jpeg",
    badge: "Classic", tag: "popular"
  },
  {
    id: 7, name: "The City Harbour — Special Edition", fullName: "Handloom Cotton Sarong — The City Harbour Blue",
    cat: "Handloom Sarongs", price: "LKR 4,200", rawPrice: 4200, image: "images/Handloom Cotton Sarong - The City Harbour - ICS 535658.jpeg",
    badge: "Designer", tag: "premium"
  },
  {
    id: 8, name: "The Galle Fort Dusk — Heritage Weave", fullName: "Handloom Cotton Sarong — Galle Fort Dusk",
    cat: "Handloom Sarongs", price: "LKR 4,200", rawPrice: 4200, image: "images/Handloom Cotton Sarong - The Galle Fort Dusk - ICS 548546.jpeg",
    badge: "Heritage", tag: "bestseller"
  },
  {
    id: 9, name: "Deep Teal Cream Border Sarong", fullName: "Handloom Cotton Sarong — Deep Teal & Cream",
    cat: "Handloom Sarongs", price: "LKR 3,100", rawPrice: 3100, image: "images/Handloom Cotton Sarong - Deep Teal with Cream Bottom Border - ICS 641242.jpeg",
    badge: "Popular", tag: "popular"
  },
  {
    id: 10, name: "Peacock Blue Silver & Black Sarong", fullName: "Handloom Cotton Sarong — Peacock Blue Silver",
    cat: "Handloom Sarongs", price: "LKR 3,450", rawPrice: 3450, image: "images/Handloom Cotton Sarong - Peacock Blue Silver and Black with Cream Bottom Border - ICS 279187.jpeg",
    badge: "Bestseller", tag: "bestseller"
  },
  {
    id: 11, name: "Dark Sky Blue Beige Maroon Sarong", fullName: "Handloom Cotton Sarong — Sky Blue Maroon",
    cat: "Handloom Sarongs", price: "LKR 3,250", rawPrice: 3250, image: "images/Handloom Cotton Sarong - Dark Sky Blue Beige and Charcoal Grey with Maroon - ICS 574872.jpeg",
    badge: "Premium", tag: "premium"
  },
  {
    id: 12, name: "Golden Yellow & Black Weave Sarong", fullName: "Handloom Cotton Sarong — Golden Yellow Weave",
    cat: "Handloom Sarongs", price: "LKR 3,450", rawPrice: 3450, image: "images/Handloom Cotton Sarong - Golden Yellow and Black with Beige - ICS 112981.jpeg",
    badge: "New", tag: "new"
  },

  // ── SHIRTS ──
  {
    id: 13, name: "Premium Hand Made Beige Check Shirt", fullName: "Premium Hand Made Shirt — Beige Check Casual",
    cat: "Handloom Shirts", price: "LKR 3,850", rawPrice: 3850, image: "images/shirt_1.png",
    badge: "New", tag: "new"
  },
  {
    id: 14, name: "Authentic Emerald Stripe Shirt", fullName: "Authentic Hand Woven Shirt — Emerald Stripe",
    cat: "Handloom Shirts", price: "LKR 4,250", rawPrice: 4250, image: "images/shirt_2.png",
    badge: "Trending", tag: "trending"
  },

  // ── DRESSES & SAREES placeholders (Using clean Unsplash until next generation) ──
  {
    id: 15, name: "Magenta Boho Handloom Dress", fullName: "Premium Hand Made Dress — Magenta Boho",
    cat: "Handloom Dresses", price: "LKR 6,450", rawPrice: 6450, image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "New Arrival", tag: "new"
  },
  {
    id: 16, name: "Ruby Red Silk Artisan Saree", fullName: "Premium Hand Made Saree — Ruby Red Silk",
    cat: "Handloom Sarees", price: "LKR 12,450", rawPrice: 12450, image: "https://images.unsplash.com/photo-1610189014605-e47852deeb44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    badge: "Premium", tag: "premium"
  }
];

