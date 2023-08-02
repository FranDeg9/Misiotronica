import React from 'react';

const Producto = ({ name, price, description, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>{description}</p>
    </div>
  );
};

export default Producto;
