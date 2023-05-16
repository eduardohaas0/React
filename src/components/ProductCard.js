import React from 'react';

const ProductCard = () => {
  return (
    <div className="card">
      <div className="product-image" id="img-1"></div>
      <h3>Pc Positivo</h3>
      <p>Esse pc é muito Bom</p>
      <p>
        R$
        <span className="bold">5000,99</span>
      </p>
     Comprar
    </div>
  );
}

export default ProductCard;