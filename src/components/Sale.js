import React from 'react';
import Producto from './Producto';
import productImage1 from './image/cargadorusb.png';
import productImage2 from './image/detectordemovimientos.png';
import productImage3 from './image/estabilizador.png';
import productImage4 from './image/listonled.png';
import productImage5 from './image/tomared.png';
import productImage6 from './image/transformador.png';
import './Sale.css';

const products = [
  {
    id: 1,
    name: 'Cargador USB',
    price: 10.99,
    description: 'Descripción del Producto 1',
    image: productImage1,
  },
  {
    id: 2,
    name: 'Detector de movimientos',
    price: 15.99,
    description: 'Descripción del Producto 2',
    image: productImage2,
  },
  {
    id: 3,
    name: 'Estabilizador',
    price: 20.99,
    description: 'Descripción del Producto 1',
    image: productImage3,
  },
  {
    id: 4,
    name: 'Liston Led',
    price: 15.99,
    description: 'Descripción del Producto 1',
    image: productImage4,
  },
  {
    id: 5,
    name: 'Toma Cable de Red',
    price: 5.99,
    description: 'Descripción del Producto 1',
    image: productImage5,
  },
  {
    id: 6,
    name: 'Transformador',
    price: 8.99,
    description: 'Descripción del Producto 1',
    image: productImage6,
  },
];

const Sale = () => {
  return (
    <div className="sale-container">
      <h1 className="tittle-venta">Productos en Venta</h1>
      <div className="products-list">
        {products.slice(0, 6).map((product) => (
          <Producto
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Sale;
