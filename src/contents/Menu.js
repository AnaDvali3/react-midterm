import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Add Product</Link>
        </li>
        <li>
          <Link to="/display">Display Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
