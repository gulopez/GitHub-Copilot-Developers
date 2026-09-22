// Product catalog
const products = [
  {
    id: 1,
    name: "Classic Runner",
    brand: "StepUp",
    price: 89.99,
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["White/Black", "Black/Red", "Navy/White"],
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    description:
      "Lightweight and breathable, the Classic Runner is built for everyday training. Features a cushioned midsole and durable rubber outsole.",
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: "Urban Street",
    brand: "MetroFit",
    price: 119.99,
    category: "Casual",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["White", "Black", "Tan"],
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&q=80",
    description:
      "Clean, modern design that transitions effortlessly from the gym to the street. Premium leather upper with memory foam insole.",
    rating: 4.7,
    reviews: 214,
  },
  {
    id: 3,
    name: "Trail Blazer",
    brand: "WildPath",
    price: 149.99,
    category: "Trail",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Olive/Orange", "Grey/Blue", "Black/Yellow"],
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    description:
      "Conquer any terrain with the Trail Blazer. Aggressive lug outsole, waterproof upper, and rock-plate protection.",
    rating: 4.8,
    reviews: 97,
  },
  {
    id: 4,
    name: "Court Classic",
    brand: "AceWear",
    price: 74.99,
    category: "Court",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["White/Blue", "White/Red", "All White"],
    image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&q=80",
    description:
      "Inspired by classic tennis silhouettes, the Court Classic delivers timeless style and all-day comfort.",
    rating: 4.4,
    reviews: 183,
  },
  {
    id: 5,
    name: "Speed Boost",
    brand: "StepUp",
    price: 129.99,
    category: "Running",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Neon Green/Black", "Orange/White", "Blue/White"],
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80",
    description:
      "Engineered for speed. The Speed Boost features a carbon-fiber plate and responsive foam for race-day performance.",
    rating: 4.9,
    reviews: 62,
  },
  {
    id: 6,
    name: "Everyday Comfort",
    brand: "EasyStep",
    price: 59.99,
    category: "Casual",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: ["Grey", "Black", "White"],
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&q=80",
    description:
      "Your go-to daily sneaker. Ultra-soft foam cushioning and a flexible outsole keep you comfortable all day long.",
    rating: 4.3,
    reviews: 305,
  },
];

// ─── Cart Utilities ──────────────────────────────────────────────────────────

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, size, color, quantity = 1) {
  const cart = getCart();
  const existing = cart.find(
    (i) => i.productId === productId && i.size === size && i.color === color
  );
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, size, color, quantity });
  }
  saveCart(cart);
}

function removeFromCart(productId, size, color) {
  let cart = getCart();
  cart = cart.filter(
    (i) => !(i.productId === productId && i.size === size && i.color === color)
  );
  saveCart(cart);
}

function updateQuantity(productId, size, color, quantity) {
  const cart = getCart();
  const item = cart.find(
    (i) => i.productId === productId && i.size === size && i.color === color
  );
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId, size, color);
      return;
    }
    item.quantity = quantity;
    saveCart(cart);
  }
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

function getCartCount() {
  return getCart().reduce((count, item) => count + item.quantity, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (badge) {
    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }
}

// ─── Star Rating Helper ──────────────────────────────────────────────────────

function renderStars(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      html += '<span class="star filled">★</span>';
    } else if (rating >= i - 0.5) {
      html += '<span class="star half">★</span>';
    } else {
      html += '<span class="star">★</span>';
    }
  }
  return html;
}

// ─── Toast Notification ──────────────────────────────────────────────────────

function showToast(message, type = "success") {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Initialise badge on every page load
document.addEventListener("DOMContentLoaded", updateCartBadge);
