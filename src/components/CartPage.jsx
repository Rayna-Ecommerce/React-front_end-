import React, { useState } from 'react';
import './CartPage.css'; 
import '../asset/cold_brew_coffe.jpg';
import '../asset/es_kopi_gula_aren.jpg';
import '../asset/latte_caramel.jpg';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Latte Caramel', price: 25000, quantity: 1, },
    { id: 2, name: 'Es Kopi gula are', price: 20000, quantity: 1, },
    { id: 3, name: 'Cold Brew Coffee', price: 35000, quantity: 1, }
  ]);

  const handleIncrement = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const handleDecrement = (id) => {
    const updated = cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updated);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>🛒 Keranjang Belanja</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h4>{item.name}</h4>
              <p>Harga: Rp {item.price.toLocaleString()}</p>
              <div className="quantity-control">
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <p>Total: Rp {(item.price * item.quantity).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      <h3>Total Belanja: Rp {totalPrice.toLocaleString()}</h3>
    </div>
  );
};

export default CartPage;
