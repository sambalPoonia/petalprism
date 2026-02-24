import React, { useState } from "react";
import { FLOWER_IMAGES } from "../data";

export default function ProductCard({ product: p, onProductClick, onAddToCart, delay = 0 }) {
  const [added, setAdded] = useState(false);
  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(p);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };
  return (
    <div
      className="product-card"
      style={{ animationDelay: `${delay}s` }}
      onClick={() => onProductClick(p)}
    >
      <div className="product-card-image" style={{ background: p.bg }}>
        <img src={FLOWER_IMAGES[p.id]} alt={p.flower} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div className="product-card-body">
        <p className="product-card-flower" style={{ color: p.color }}>{p.flower}</p>
        <h3 className="product-card-name">{p.name}</h3>
        <p className="product-card-desc">{p.description}</p>
        <div className="product-card-footer">
          <div className="product-card-price">
            ₹{p.price.toLocaleString()}
            <span> / 50ml</span>
          </div>
          <button
            className={`btn-add-cart ${added ? "added" : ""}`}
            onClick={handleAdd}
          >
            {added ? "✓ Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
