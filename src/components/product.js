import React from 'react';

const Product = ({ title, description, price, image }) => {
  return (
    <div className="card">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        R$
        <span className="bold">{price}</span>
      </p>
      <a href="index.html" className="btn">Comprar</a>
    </div>
  );
};

export default Product;