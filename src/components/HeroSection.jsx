import React from "react";

export default function HeroSection({ setPage }) {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-grain" />
      <div className="hero-deco hero-deco-1" />
      <div className="hero-deco hero-deco-2" />
      <div className="hero-deco hero-deco-3" />
      <div className="hero-content">
        <div className="hero-title-outline">A fragrance</div>
        <p className="hero-eyebrow">✦ Luxury Floral Perfumery ✦</p>
        <h1 className="hero-title">
          A fragrance
          <br />
          <em>written for you.</em>
        </h1>
        <p className="hero-sub">
          Every soul carries a signature bloom. Let the stars of your birth
          <br />
          reveal the scent that has always been yours.
        </p>
        <div className="hero-cta" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn-primary" onClick={() => setPage("discover")}>✦ Find Your Flower Scent</button>
          <button className="btn-secondary" onClick={() => setPage("shop")}>Explore Collection</button>
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
