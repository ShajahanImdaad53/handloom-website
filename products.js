// ===========================
//  SIRIUS HANDLOOM — products.js
//  All product fabric patterns as inline SVGs
// ===========================

function makeSVGPattern(type, colors) {
  const [c1, c2, c3, c4] = colors;
  const svgs = {
    // Vertical stripes
    vstripe: `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='280'>
      <defs><pattern id='p' x='0' y='0' width='40' height='280' patternUnits='userSpaceOnUse'>
        <rect width='10' height='280' fill='${c1}'/>
        <rect x='10' width='8' height='280' fill='${c2}'/>
        <rect x='18' width='14' height='280' fill='${c3}'/>
        <rect x='32' width='8' height='280' fill='${c4}'/>
      </pattern></defs>
      <rect width='200' height='280' fill='url(#p)'/>
      <rect y='240' width='200' height='40' fill='${c2}' opacity='0.6'/>
      <rect y='240' width='200' height='3' fill='${c4}'/>
      <rect y='277' width='200' height='3' fill='${c4}'/>
    </svg>`,

    // Horizontal stripes
    hstripe: `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='280'>
      <defs><pattern id='p' x='0' y='0' width='200' height='30' patternUnits='userSpaceOnUse'>
        <rect width='200' height='12' fill='${c1}'/>
        <rect y='12' width='200' height='6' fill='${c2}'/>
        <rect y='18' width='200' height='8' fill='${c3}'/>
        <rect y='26' width='200' height='4' fill='${c4}'/>
      </pattern></defs>
      <rect width='200' height='280' fill='url(#p)'/>
      <rect x='0' width='4' height='280' fill='${c4}' opacity='0.5'/>
      <rect x='196' width='4' height='280' fill='${c4}' opacity='0.5'/>
    </svg>`,

    // Check / plaid
    check: `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='280'>
      <rect width='200' height='280' fill='${c1}'/>
      <defs>
        <pattern id='hlines' x='0' y='0' width='200' height='20' patternUnits='userSpaceOnUse'>
          <rect width='200' height='10' fill='${c2}' opacity='0.5'/>
        </pattern>
        <pattern id='vlines' x='0' y='0' width='20' height='280' patternUnits='userSpaceOnUse'>
          <rect width='10' height='280' fill='${c3}' opacity='0.5'/>
        </pattern>
      </defs>
      <rect width='200' height='280' fill='url(#hlines)'/>
      <rect width='200' height='280' fill='url(#vlines)'/>
      <rect y='250' width='200' height='30' fill='${c4}' opacity='0.4'/>
      <line x1='0' y1='250' x2='200' y2='250' stroke='${c4}' stroke-width='2'/>
    </svg>`,

    // Diamond / ikat
    diamond: `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='280'>
      <rect width='200' height='280' fill='${c1}'/>
      <defs><pattern id='d' x='0' y='0' width='40' height='40' patternUnits='userSpaceOnUse'>
        <polygon points='20,0 40,20 20,40 0,20' fill='${c2}' opacity='0.7'/>
        <polygon points='20,5 35,20 20,35 5,20' fill='${c3}' opacity='0.5'/>
        <rect x='18' y='18' width='4' height='4' fill='${c4}'/>
      </pattern></defs>
      <rect width='200' height='280' fill='url(#d)'/>
    </svg>`,

    // Woven / textile weave
    weave: `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='280'>
      <rect width='200' height='280' fill='${c1}'/>
      <defs><pattern id='w' x='0' y='0' width='16' height='16' patternUnits='userSpaceOnUse'>
        <rect width='8' height='8' fill='${c2}' opacity='0.8'/>
        <rect x='8' y='8' width='8' height='8' fill='${c2}' opacity='0.8'/>
        <rect x='8' width='8' height='8' fill='${c3}' opacity='0.6'/>
        <rect y='8' width='8' height='8' fill='${c3}' opacity='0.6'/>
      </pattern></defs>
      <rect width='200' height='280' fill='url(#w)'/>
      <rect y='255' width='200' height='25' fill='${c4}' opacity='0.35'/>
      <rect y='254' width='200' height='2' fill='${c4}'/>
    </svg>`,

    // Broad stripes with border
    boldstripe: `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='280'>
      <defs><pattern id='p' x='0' y='0' width='50' height='280' patternUnits='userSpaceOnUse'>
        <rect width='25' height='280' fill='${c1}'/>
        <rect x='25' width='25' height='280' fill='${c2}'/>
      </pattern></defs>
      <rect width='200' height='280' fill='url(#p)'/>
      <rect y='0' width='200' height='15' fill='${c3}'/>
      <rect y='265' width='200' height='15' fill='${c3}'/>
      <rect y='15' width='200' height='3' fill='${c4}'/>
      <rect y='262' width='200' height='3' fill='${c4}'/>
    </svg>`,

    // Fine lines / pin stripe
    pinstripe: `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='280'>
      <rect width='200' height='280' fill='${c1}'/>
      <defs><pattern id='p' x='0' y='0' width='10' height='280' patternUnits='userSpaceOnUse'>
        <rect x='4' width='1' height='280' fill='${c2}' opacity='0.6'/>
        <rect x='8' width='1' height='280' fill='${c3}' opacity='0.4'/>
      </pattern></defs>
      <rect width='200' height='280' fill='url(#p)'/>
      <rect y='255' width='200' height='25' fill='${c4}' opacity='0.25'/>
      <rect y='253' width='200' height='3' fill='${c4}' opacity='0.8'/>
      <rect y='274' width='200' height='3' fill='${c4}' opacity='0.8'/>
    </svg>`,

    // Multicolor check
    multicheck: `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='280'>
      <rect width='200' height='280' fill='${c1}'/>
      <defs>
        <pattern id='mc' x='0' y='0' width='60' height='60' patternUnits='userSpaceOnUse'>
          <rect width='20' height='20' fill='${c2}' opacity='0.8'/>
          <rect x='20' width='20' height='20' fill='${c3}' opacity='0.7'/>
          <rect x='40' width='20' height='20' fill='${c4}' opacity='0.8'/>
          <rect y='20' width='20' height='20' fill='${c3}' opacity='0.7'/>
          <rect x='20' y='20' width='20' height='20' fill='${c4}' opacity='0.8'/>
          <rect x='40' y='20' width='20' height='20' fill='${c2}' opacity='0.7'/>
          <rect y='40' width='20' height='20' fill='${c4}' opacity='0.8'/>
          <rect x='20' y='40' width='20' height='20' fill='${c2}' opacity='0.7'/>
          <rect x='40' y='40' width='20' height='20' fill='${c3}' opacity='0.8'/>
        </pattern>
      </defs>
      <rect width='200' height='280' fill='url(#mc)'/>
    </svg>`,
  };
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgs[type] || svgs.vstripe);
}

const PRODUCTS = [
  {
    id: 1,
    name: "Light Grey & White Stripe Sarong",
    fullName: "Handloom Cotton Sarong — Light Grey with White Stripes",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "vstripe",
    colors: ["#c0c8d0","#f0f0f0","#a8b4be","#e8e8e8"],
    badge: "New Arrival",
    tag: "bestseller"
  },
  {
    id: 2,
    name: "Slate, Green & Charcoal Sarong",
    fullName: "Handloom Cotton Sarong — Slate, Light Green & Charcoal with Teal",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "vstripe",
    colors: ["#5a6e78","#7a9e8a","#3a4a50","#4ecdc4"],
    badge: "New Arrival",
    tag: "new"
  },
  {
    id: 3,
    name: "Sky Blue & Peach Pink Sarong",
    fullName: "Handloom Cotton Sarong — Sky Blue and White with Peach Pink",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "hstripe",
    colors: ["#87ceeb","#ffffff","#ffb5a7","#70a8d0"],
    badge: "New Arrival",
    tag: "new"
  },
  {
    id: 4,
    name: "Beige, Navy & Silver Sarong",
    fullName: "Handloom Cotton Sarong — Beige, Dark Blue and Silver",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "vstripe",
    colors: ["#d4c8a8","#1a2a4a","#c0c8d8","#f5f0e8"],
    badge: "New Arrival",
    tag: "new"
  },
  {
    id: 5,
    name: "Bluish Grey & Off White Sarong",
    fullName: "Handloom Cotton Sarong — Bluish Grey with Off White Bottom Border",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "pinstripe",
    colors: ["#8fa3b1","#f5f0e8","#6e8898","#d0ccc0"],
    badge: "New",
    tag: "new"
  },
  {
    id: 6,
    name: "Dark Navy & Golden Yellow Sarong",
    fullName: "Handloom Cotton Sarong — Dark Navy Blue and Golden Yellow Stripes with Cream",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "boldstripe",
    colors: ["#1a2a4a","#c8a060","#f5f0e8","#d4aa44"],
    badge: "Popular",
    tag: "popular"
  },
  {
    id: 7,
    name: "Black & Beige Classic Sarong",
    fullName: "Handloom Cotton Sarong — Black with Beige",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "vstripe",
    colors: ["#1a1a1a","#d4c8a8","#333333","#e8e0cc"],
    badge: "Classic",
    tag: "bestseller"
  },
  {
    id: 8,
    name: "Mosaic Sands Sarong",
    fullName: "Handloom Cotton Sarong — The Mosaic Sands",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "weave",
    colors: ["#c4a882","#e8d5b0","#a08060","#d4b880"],
    badge: "Unique",
    tag: "featured"
  },
  {
    id: 9,
    name: "Charcoal Grey & Teal Sarong",
    fullName: "Handloom Cotton Sarong — Charcoal Grey and White Stripes with Teal",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "hstripe",
    colors: ["#4a4a4a","#ffffff","#4ecdc4","#333333"],
    badge: "New",
    tag: "new"
  },
  {
    id: 10,
    name: "Sky Blue, Silver & Black Sarong",
    fullName: "Handloom Cotton Sarong — Sky Blue, Silver and Black with Horizontal Stripes",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "hstripe",
    colors: ["#87ceeb","#c8d8e8","#1a1a1a","#a0b8cc"],
    badge: "New",
    tag: "new"
  },
  {
    id: 11,
    name: "Dark Green & Silver Sarong",
    fullName: "Handloom Cotton Sarong — Dark Green and Silver with Cream Bottom Border",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "vstripe",
    colors: ["#2d5a3d","#c8d4c0","#1a3a28","#f5f0e8"],
    badge: "Elegant",
    tag: "featured"
  },
  {
    id: 12,
    name: "Brown & Beige Sarong",
    fullName: "Handloom Cotton Sarong — Brown and Beige with Cream Bottom Border",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "boldstripe",
    colors: ["#8b6347","#d4c8a8","#6a4a30","#f5f0e8"],
    badge: "Classic",
    tag: "bestseller"
  },
  {
    id: 13,
    name: "Deep Purple & Emerald Check",
    fullName: "Handloom Cotton Sarong — Deep Purple, Emerald Green, Turquoise Blue Check Pattern",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,850",
    rawPrice: 2850,
    pattern: "check",
    colors: ["#4a1a6b","#1a7a4a","#1a7a7a","#2d5a8a"],
    badge: "Featured",
    tag: "featured"
  },
  {
    id: 14,
    name: "Magenta Pink & Turquoise Check",
    fullName: "Handloom Cotton Sarong — Sky Blue, Magenta Pink & Deep Turquoise Bold Check",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,850",
    rawPrice: 2850,
    pattern: "multicheck",
    colors: ["#87ceeb","#e040a0","#00a0a0","#4080c0"],
    badge: "Featured",
    tag: "featured"
  },
  {
    id: 15,
    name: "Multicolored Bold Check Sarong",
    fullName: "Handloom Cotton Sarong — Multicolored Bold Vertical & Horizontal Check Patterns",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,850",
    rawPrice: 2850,
    pattern: "multicheck",
    colors: ["#c8a040","#2d5a8a","#8a2d5a","#2d8a5a"],
    badge: "Trending",
    tag: "trending"
  },
  {
    id: 16,
    name: "Ikat Diamond Pattern Sarong",
    fullName: "Handloom Cotton Sarong — Traditional Ikat Diamond Woven Pattern",
    cat: "Sarong Premium",
    price: "LKR 3,450",
    rawPrice: 3450,
    pattern: "diamond",
    colors: ["#3a1a5a","#c8a060","#7a3a9a","#f0d090"],
    badge: "Premium",
    tag: "premium"
  },
  {
    id: 17,
    name: "Indigo & White Weave Sarong",
    fullName: "Handloom Cotton Sarong — Deep Indigo and White Traditional Weave",
    cat: "Sarong Premium",
    price: "LKR 3,250",
    rawPrice: 3250,
    pattern: "weave",
    colors: ["#1a2a6a","#f0f0f8","#2a3a8a","#d0d8f0"],
    badge: "Premium",
    tag: "premium"
  },
  {
    id: 18,
    name: "Crimson & Gold Festive Sarong",
    fullName: "Handloom Cotton Sarong — Crimson Red and Gold Festive Edition",
    cat: "Sarong Premium",
    price: "LKR 3,650",
    rawPrice: 3650,
    pattern: "vstripe",
    colors: ["#8b1a1a","#c8a040","#6a1010","#f0d080"],
    badge: "Festive",
    tag: "featured"
  },
  {
    id: 19,
    name: "Ocean Blue Broad Stripe Sarong",
    fullName: "Handloom Cotton Sarong — Ocean Blue & Cream Bold Broad Stripes",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "boldstripe",
    colors: ["#1a5a8a","#f5f0e8","#0a3a6a","#d0e4f0"],
    badge: "New",
    tag: "new"
  },
  {
    id: 20,
    name: "Forest Green Fine Stripe Sarong",
    fullName: "Handloom Cotton Sarong — Forest Green Fine Pin Stripe",
    cat: "Sarong Cotton Standard",
    price: "LKR 2,950",
    rawPrice: 2950,
    pattern: "pinstripe",
    colors: ["#2a5a2a","#8abe8a","#1a3a1a","#c0e0c0"],
    badge: "New",
    tag: "new"
  },
];
