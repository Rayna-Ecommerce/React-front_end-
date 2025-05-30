import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.jpg} alt={product} className="product-image" />
            <h3 className="product-title">Latte Caramel</h3>
            <p className="product-description">Creamy dengan sentuhan caramel yang menggoda.</p>
            <p className="product-price">20.000</p>
            <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>Tambah ke keranjang</button>
        </div>
        
    )
}

export default ProductCard;