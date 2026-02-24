import React, { useState } from "react";
import { PRODUCTS, FLOWER_IMAGES } from "../data";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

export default function ProductDetailPage({ product: p, onAddToCart, setPage, onProductChange }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      onAddToCart(p);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

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
