import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const { id } = useParams(); 
  const { products } = useProductContext();

  const product = products[Number(id)];

  if (!product) {
    return <div className="product-not-found">Product not found!</div>;
  }

  return (
    <div className="product-details-container">
      <h2 className="product-details-heading">Product Details</h2>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
