import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from "./context/ProductContext";
import Menu from "./contents/Menu";
import AddProduct from "./contents/AddProduct";
import DisplayProducts from "./contents/DisplayProducts";
import ProductDetails from "./contents/ProductDetails";
import "./App.css"

function App() {
  return (
    <ProductProvider>
      <Router>
        <div>
          < Menu />
          <Routes>
            <Route path="/" element={<AddProduct />} />
            <Route path="/display" element={<DisplayProducts />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </ProductProvider>
  );
}


export default App;
