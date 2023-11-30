import React from 'react';
import { Link } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

const DisplayProducts = () => {
  const { products } = useProductContext();

  return (
    <div className="products-container"> 
      <h1>Products</h1>
      <ul className="product-list"> 
        {products.map((product, index) => (
          <li key={index}>
            <Link to={`/product/${index}`} className="product-link">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayProducts;
