import React, { useState, useRef } from "react";
import { PRODUCTS, FLOWER_MAP, FLOWER_LETTERS, FLOWER_IMAGES } from "../data";

export default function PersonalizationPage({ onAddToCart }) {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const resultRef = useRef(null);

  const getFlower = (dateStr) => {
    const d = new Date(dateStr);
    if (isNaN(d)) return null;
    const start = new Date(d.getFullYear(), 0, 0);
    const diff = d - start;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const index = ((dayOfYear - 1) % 50) + 1; // maps to 1..50
    return FLOWER_MAP[index];
  };

  const handleReveal = () => {
    if (!dob) return;
    const flower = getFlower(dob);
    setResult(flower);
    setRevealed(false);
    setTimeout(() => {
      setRevealed(true);
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const matchedProduct = result ? PRODUCTS.find((p) => p.flower === result) : null;
  const flowerData = result ? FLOWER_LETTERS[result] : null;

  return (
    <div className="personal-page">
      <div className="personal-bg" />
      <div className="personal-content">
        <p className="section-eyebrow" style={{ color: "rgba(231,211,168,0.65)", marginBottom: "0.8rem" }}>
          ✦ Your Scent Awaits ✦
        </p>
        <h1 className="hero-title" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.8rem" }}>
          Discover your<br /><em>flower story.</em>
        </h1>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1rem", fontWeight: 300,
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.8, marginBottom: "0.5rem"
        }}>
          Enter your date of birth and let the universe reveal the fragrance that was made for your soul.
        </p>

        <div className="personal-form-card">
          <label className="dob-label">Your Date of Birth</label>
          <input
            type="date"
            className="dob-input"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <button
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={handleReveal}
            disabled={!dob}
          >
            ✦ Reveal My Scent
          </button>
        </div>

        {revealed && result && flowerData && (
          <div className="flower-reveal" ref={resultRef}>
            <div
              className="flower-reveal-card"
              style={{ background: flowerData.gradient }}
            >
              <img src={FLOWER_IMAGES[matchedProduct?.id]} alt={result} style={{ width: "120px", height: "120px", objectFit: "cover" }} className="float-anim" />
              <p className="flower-reveal-subtitle">Your flower is</p>
              <h2 className="flower-reveal-name">{result}</h2>
            </div>

            <div className="letter-card">
              <p className="letter-text">{flowerData.letter}</p>
              <p className="letter-sig">— PetalPrism</p>
            </div>

            {matchedProduct && (
              <div style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(231,211,168,0.18)",
                borderRadius: 20, padding: "2rem",
                display: "flex", gap: "1.5rem",
                alignItems: "center"
              }}>
                <div style={{
                  width: 80, height: 80, borderRadius: 14,
                  background: matchedProduct.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2.2rem", flexShrink: 0, overflow: "hidden"
                }}>
                  <img src={FLOWER_IMAGES[matchedProduct.id]} alt={matchedProduct.flower} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.65rem", letterSpacing: "0.25em",
                    textTransform: "uppercase", color: "rgba(231,211,168,0.6)",
                    marginBottom: "0.4rem"
                  }}>Your Perfect Match</p>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem", color: "white",
                    marginBottom: "0.3rem"
                  }}>{matchedProduct.name}</p>
                  <p style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "0.85rem", fontWeight: 300,
                    color: "var(--gold)"
                  }}>₹{matchedProduct.price.toLocaleString()}</p>
                </div>
                <button
                  className="btn-primary"
                  style={{ flexShrink: 0 }}
                  onClick={() => onAddToCart(matchedProduct)}
                >
                  Add to Cart
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
