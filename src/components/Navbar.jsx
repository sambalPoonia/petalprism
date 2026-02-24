import React from "react";

export default function Navbar({ page, setPage, cartCount, setCartOpen }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "discover", label: "Discover" },
    { id: "shop", label: "Shop" },
  ];
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <div className="nav-logo" onClick={() => setPage("home")}>
          <div className="logo-name">PETALPRISM</div>
          <div className="logo-subtag">Floral Collection</div>
        </div>

        <div className="nav-links">
          {links.map((l) => (
            <button
              key={l.id}
              className={`nav-link ${page === l.id ? "active" : ""}`}
              onClick={() => setPage(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="nav-right">
          <button className="nav-profile">Profile</button>
          <button className="nav-cart" onClick={() => setCartOpen(true)}>
            Cart
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
}
