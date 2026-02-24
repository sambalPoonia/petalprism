import { useState, useRef, createContext, useContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import PersonalizationPage from "./components/PersonalizationPage";
import ProductDetailPage from "./components/ProductDetailPage";
import { PRODUCTS, FLOWER_IMAGES, FLOWER_MAP, FLOWER_LETTERS, TESTIMONIALS } from "./data";

// Data and large constants moved to src/data.js
const CartContext = createContext();
const useCart = () => useContext(CartContext);

// ===================== COMPONENTS =====================

// Navbar moved to src/components/Navbar.jsx

// HeroSection moved to src/components/HeroSection.jsx

function FeaturedSection({ onProductClick, onAddToCart }) {
  const seasons = [
    { id: "Vasant Pushp", name: "Vasant Pushp", flowers: ["Tulip", "Daffodil", "Anemone", "Lilac", "Aster"] },
    { id: "Grishma Prabha", name: "Grishma Prabha", flowers: ["Sunflower", "Hibiscus", "Marigold", "Zinnia", "Calendula"] },
    { id: "Varsha Sugandh", name: "Varsha Sugandh", flowers: ["Lotus", "Bluebell", "Foxglove", "Lupine", "Freesia"] },
    { id: "Sharad Abha", name: "Sharad Abha", flowers: ["Rose", "Chrysanthemum", "Ranunculus", "Dahlia", "Geranium"] },
    { id: "Hemant Sparsh", name: "Hemant Sparsh", flowers: ["Magnolia", "Gardenia", "Iris", "Camellia", "Lilac"] },
    { id: "Shishir Nishabd", name: "Shishir Nishabd", flowers: ["Lavender", "Orchid", "Peony", "Violet", "Protea"] },
  ];

  const [openSeason, setOpenSeason] = useState(seasons[0].id);

  return (
    <section className="section section-cream">
      <div className="section-header">
        <p className="section-eyebrow section-eyebrow-dark">THE COLLECTION</p>
        <h2 className="section-title">Six Seasons, Six Souls</h2>
        <p className="section-subtitle">Choose your seasonal bloom. Find your floral essence.</p>
      </div>

      <div className="season-tabs">
        {seasons.map((s) => {
          const count = PRODUCTS.filter((p) => s.flowers.includes(p.flower)).length;
          return (
            <button
              key={s.id}
              className={`filter-btn ${openSeason === s.id ? "active" : ""}`}
              onClick={() => setOpenSeason(s.id)}
            >
              {s.name} {count > 0 && `(${count})`}
            </button>
          );
        })}
      </div>

      <div>
        {seasons.map((s) => (
          openSeason === s.id && (
            <div key={s.id} className="products-grid">
              {PRODUCTS.filter((p) => s.flowers.includes(p.flower)).length === 0 ? (
                <p style={{ padding: "2rem", width: "100%", textAlign: "center" }}>ntg availabe </p>
              ) : (
                PRODUCTS.filter((p) => s.flowers.includes(p.flower)).map((p, i) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onProductClick={onProductClick}
                    onAddToCart={onAddToCart}
                    delay={i * 0.06}
                  />
                ))
              )}
            </div>
          )
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const flowerColors = { Rose: "#c0536a", Jasmine: "#c49a6c", Orchid: "#8b4a8b" };
  const flowerImages = { Rose: FLOWER_IMAGES[1], Jasmine: FLOWER_IMAGES[4], Orchid: FLOWER_IMAGES[5] };
  return (
    <section className="section section-dark">
      <div className="section-header">
        <p className="section-eyebrow">Stories</p>
        <h2 className="section-title section-title-light">Written in scent,<br /><em>remembered forever.</em></h2>
      </div>
      <div className="testimonials-grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="testimonial-card">
            <p className="testimonial-quote">"{t.text}"</p>
            <div className="testimonial-footer">
              <div
                className="testimonial-avatar"
                style={{ background: flowerColors[t.flower], backgroundSize: "cover", backgroundImage: `url(${flowerImages[t.flower]})`, backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
              >
              </div>
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-city">{t.city}</p>
              </div>
              <span className="testimonial-flower">{t.flower}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShopPage({ onProductClick, onAddToCart }) {
  const [filter, setFilter] = useState("All");
  const flowers = ["All", "Rose", "Jasmine", "Lavender", "Lily", "Orchid", "Peony"];
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.flower === filter);

  return (
    <>
      <div className="page-header">
        <p className="section-eyebrow">The Full Collection</p>
        <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", marginBottom: "0.5rem" }}>
          Shop <em>All Fragrances</em>
        </h1>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.05rem", fontWeight: 300,
          color: "rgba(255,255,255,0.5)"
        }}>
          Six blossoms. One for every soul.
        </p>
      </div>

      <section className="section section-cream" style={{ paddingTop: "4rem" }}>
        <div className="shop-filters">
          {flowers.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {filtered.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              onProductClick={onProductClick}
              onAddToCart={onAddToCart}
              delay={i * 0.07}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function ProductModal({ product: p, onClose, onAddToCart }) {
  const [added, setAdded] = useState(false);
  const handleAdd = () => {
    onAddToCart(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-hero" style={{ background: p.bg }}>
          <img src={FLOWER_IMAGES[p.id]} alt={p.flower} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <span
            className="modal-flower-tag"
            style={{ background: p.bg, color: p.color }}
          >
            {p.flower}
          </span>
          <h2 className="modal-name">{p.name}</h2>
          <p className="modal-desc">{p.description}</p>
          <div className="modal-footer">
            <p className="modal-price">₹{p.price.toLocaleString()}</p>
            <button
              className={`btn-primary ${added ? "" : ""}`}
              onClick={handleAdd}
              style={added ? { background: "#2e6b3e", color: "white", boxShadow: "none" } : {}}
            >
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>
            <button className="btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ cart, onClose, onUpdateQty, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-drawer">
        <div className="cart-header">
          <h2 className="cart-title">Your Bag</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="cart-empty">Your bag is empty.<br />Let your flower scent find you.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div
                  className="cart-item-emoji"
                  style={{ background: item.bg, overflow: "hidden" }}
                >
                  <img src={FLOWER_IMAGES[item.id]} alt={item.flower} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
                </div>
                <div className="cart-item-qty">
                  <button className="qty-btn" onClick={() => onUpdateQty(item.id, -1)}>−</button>
                  <span className="qty-num">{item.qty}</span>
                  <button className="qty-btn" onClick={() => onUpdateQty(item.id, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-row">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-amount">₹{total.toLocaleString()}</span>
            </div>
            <button className="btn-checkout" onClick={onCheckout}>
              Proceed to Checkout ✦
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function ProductDetailPages({ product: p, onAddToCart, setPage, onProductChange }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      onAddToCart(p);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Find similar products (same flower type or season)
  const similarProducts = PRODUCTS.filter(
    (prod) => prod.flower === p.flower && prod.id !== p.id
  ).slice(0, 4);

  return (
    <>
      <div className="product-detail-page">
        <div className="product-detail-breadcrumb">
          <button onClick={() => setPage("shop")} className="breadcrumb-link">Shop</button>
          <span className="breadcrumb-sep">/</span>
          <span className="breadcrumb-current">{p.name}</span>
        </div>

        <div className="product-detail-container">
          {/* Left: Product Image */}
          <div className="product-detail-image-section">
            <div 
              className="product-detail-image"
              style={{ background: p.bg }}
            >
              <img 
                src={FLOWER_IMAGES[p.id]} 
                alt={p.flower} 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="product-detail-info-section">
            <p className="product-detail-flower" style={{ color: p.color }}>
              {p.flower}
            </p>
            <h1 className="product-detail-name">{p.name}</h1>
            
            <p className="product-detail-price">
              ₹{p.price.toLocaleString()} <span className="price-unit">/ 50ml</span>
            </p>

            <div className="product-detail-description">
              <p>{p.description}</p>
            </div>

            <div className="product-detail-actions">
              <div className="qty-selector">
                <label>Quantity</label>
                <div className="qty-controls">
                  <button 
                    className="qty-btn-large"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                  >
                    −
                  </button>
                  <input 
                    type="number" 
                    className="qty-input"
                    value={qty}
                    onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                  />
                  <button 
                    className="qty-btn-large"
                    onClick={() => setQty(qty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className={`btn-primary btn-add-detail ${added ? "added" : ""}`}
                onClick={handleAdd}
                style={added ? { background: "#2e6b3e", color: "white", boxShadow: "none" } : {}}
              >
                {added ? "✓ Added to Cart" : "Add to Cart"}
              </button>
            </div>

            <div className="product-detail-features">
              <div className="feature-item">
                <span className="feature-icon">✦</span>
                <span className="feature-text">Luxury Floral Essence</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✦</span>
                <span className="feature-text">50ml Long-lasting Fragrance</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✦</span>
                <span className="feature-text">Handcrafted with Care</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✦</span>
                <span className="feature-text">Premium Packaging</span>
              </div>
            </div>

            <div className="product-detail-info-box">
              <h3>Why This Fragrance?</h3>
              <p>
                Each PetalPrism fragrance is crafted with meticulous attention to detail, blending 
                the essence of nature with the artistry of perfumery. This particular scent carries 
                the soul of the {p.flower}, a botanical treasure that speaks to the heart.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <section className="section section-cream">
          <div className="section-header">
            <h2 className="section-title">Similar Fragrances</h2>
            <p className="section-subtitle">Explore more from our {p.flower} collection</p>
          </div>
          <div className="products-grid">
            {similarProducts.map((sp, i) => (
              <ProductCard
                key={sp.id}
                product={sp}
                onProductClick={(prod) => {
                  if (onProductChange) {
                    onProductChange(prod);
                    window.scrollTo(0, 0);
                  }
                }}
                onAddToCart={onAddToCart}
                delay={i * 0.1}
              />
            ))}
          </div>
        </section>
      )}

      <Footer setPage={setPage} />
    </>
  );
}

function CheckoutPage({ cart, onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", pin: "", card: "" });
  const [confirmed, setConfirmed] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.address) return;
    setConfirmed(true);
    setTimeout(onSuccess, 3000);
  };

  if (confirmed) {
    return (
      <div className="checkout-page">
        <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
          <div className="order-confirmed">
            <div className="order-confirmed-icon" style={{ fontSize: "0" }}>
              <img src={flower6} alt="flower" style={{ width: "80px", height: "80px", objectFit: "cover" }} />
            </div>
            <h2 className="order-confirmed-title">Order Confirmed!</h2>
            <p className="order-confirmed-sub">
              Your fragrances are being lovingly wrapped.<br />
              Expect a very beautiful delivery soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-grid">
        <div>
          <h2 className="checkout-title">Shipping Details</h2>
          {[
            { key: "name", label: "Full Name", type: "text", placeholder: "Priya Sharma" },
            { key: "email", label: "Email Address", type: "email", placeholder: "priya@example.com" },
            { key: "address", label: "Street Address", type: "text", placeholder: "42, Rose Garden Lane" },
            { key: "city", label: "City", type: "text", placeholder: "Mumbai" },
            { key: "pin", label: "PIN Code", type: "text", placeholder: "400001" },
          ].map((f) => (
            <div className="form-group" key={f.key}>
              <label className="form-label">{f.label}</label>
              <input
                className="form-input"
                type={f.type}
                placeholder={f.placeholder}
                value={form[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
              />
            </div>
          ))}

          <h2 className="checkout-title" style={{ marginTop: "2rem" }}>Payment</h2>
          <div className="form-group">
            <label className="form-label">Card Number (Mock)</label>
            <input
              className="form-input"
              type="text"
              placeholder="•••• •••• •••• ••••"
              value={form.card}
              onChange={(e) => setForm({ ...form, card: e.target.value })}
            />
          </div>

          <button
            className="btn-primary"
            style={{ marginTop: "1.5rem", width: "100%", justifyContent: "center" }}
            onClick={handleSubmit}
          >
            ✦ Place Order
          </button>
        </div>

        <div>
          <div className="order-summary">
            <h3 className="order-summary-title">Order Summary</h3>
            {cart.map((item) => (
              <div className="summary-item" key={item.id}>
                <span className="summary-item-name" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <img src={FLOWER_IMAGES[item.id]} alt={item.flower} style={{ width: "24px", height: "24px", objectFit: "cover", borderRadius: "2px" }} />
                  {item.name} × {item.qty}
                </span>
                <span className="summary-item-price">₹{(item.price * item.qty).toLocaleString()}</span>
              </div>
            ))}
            <div className="summary-total">
              <span className="summary-total-label">Total</span>
              <span className="summary-total-amount">₹{total.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer moved to src/components/Footer.jsx

// ===================== APP =====================
export default function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter((i) => i.qty > 0)
    );
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const goCheckout = () => { setCartOpen(false); setPage("checkout"); };
  const onOrderSuccess = () => { setCart([]); setPage("home"); };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQty }}>
      <Navbar page={page} setPage={setPage} cartCount={cartCount} setCartOpen={setCartOpen} />

      {page === "home" && (
        <>
          <HeroSection setPage={setPage} />
          <FeaturedSection 
            onProductClick={(p) => { setSelectedProduct(p); setPage("product"); }}
            onAddToCart={addToCart} 
          />
          <TestimonialsSection />
          <section className="section section-blush" style={{ textAlign: "center" }}>
            <p className="section-eyebrow section-eyebrow-dark">Personalization</p>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Which flower carries <em>your soul?</em>
            </h2>
            <p className="section-subtitle" style={{ marginBottom: "2.5rem" }}>
              Enter your date of birth and receive a personalized letter from your flower.
            </p>
            <button className="btn-primary" onClick={() => setPage("discover")}>
              ✦ Begin Your Journey
            </button>
          </section>
          <Footer setPage={setPage} />
        </>
      )}

      {page === "discover" && (
        <>
          <PersonalizationPage onAddToCart={addToCart} />
          <Footer setPage={setPage} />
        </>
      )}

      {page === "shop" && (
        <>
          <ShopPage 
            onProductClick={(p) => { setSelectedProduct(p); setPage("product"); }}
            onAddToCart={addToCart} 
          />
          <Footer setPage={setPage} />
        </>
      )}

      {page === "product" && selectedProduct && (
        <ProductDetailPage 
          product={selectedProduct}
          onAddToCart={addToCart}
          setPage={setPage}
          onProductChange={setSelectedProduct}
        />
      )}

      {page === "checkout" && (
        <>
          <CheckoutPage cart={cart} onSuccess={onOrderSuccess} />
          <Footer setPage={setPage} />
        </>
      )}

      {cartOpen && (
        <CartDrawer
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onCheckout={goCheckout}
        />
      )}
    </CartContext.Provider>
  );
}

export { Navbar, Footer, HeroSection, FeaturedSection, TestimonialsSection, PersonalizationPage, ShopPage, ProductDetailPage, ProductModal, CartDrawer, CheckoutPage, ProductCard };
