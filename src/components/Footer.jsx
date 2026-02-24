import React from "react";

export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand-name">PetalPrism</p>
          <p className="footer-brand-desc">
            Luxury fragrances born from the wisdom of nature and the poetry of birth. Every scent is a story — yours.
          </p>
        </div>
        <div>
          <p className="footer-col-title">Navigation</p>
          <div className="footer-links">
            {[["Home", "home"], ["Discover Your Scent", "discover"], ["Shop All", "shop"]].map(([l, p]) => (
              <button key={p} className="footer-link" onClick={() => setPage(p)}>{l}</button>
            ))}
          </div>
        </div>
        <div>
          <p className="footer-col-title">Collections</p>
          <div className="footer-links">
            {["Rose", "Jasmine", "Lavender", "Lily", "Orchid", "Peony"].map((f) => (
              <span key={f} className="footer-link" style={{ cursor: "default" }}>{f}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2025 PetalPrism. A fragrance written for you.</p>
        <p className="footer-copy">Made with love & petals ✦</p>
      </div>
    </footer>
  );
}
