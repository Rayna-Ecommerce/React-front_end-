import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f4f4f4' }}>
      <h2>Brewality Coffee ☕</h2>
      <div>
        <Link to="/" style={{ margin: '0 1rem' }}>About</Link>
        <Link to="/" style={{ margin: '0 1rem' }}>Product</Link>
        <Link to="/" style={{ margin: '0 1rem' }}>Contact</Link>
        <Link to="/cart" style={{ margin: '0 1rem' }}>Keranjang</Link>
      </div>
    </nav>
  );
}

export default Navbar;
