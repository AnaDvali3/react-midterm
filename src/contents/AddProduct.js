import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';

const AddProduct = () => {
  const { addProduct } = useProductContext();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(name, description);
    setName('');
    setDescription('');
  };

  return (
    <div className="add-product-container">
      <h1>Add Product</h1>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;
