import ProductAdd from "./ProductAdd";
import { useState } from "react";
import SingleProducts from "./SingleProduct";
import './product.css'
const Product = () => {
  const [active, setActive] = useState('ProductAdd');

  const handleTabChange = (tab) => {
    setActive(tab);
  };

  return (
    <div className="product col-md-10">
      <h1>Product Management</h1>
      <div className="product-tabs d-flex gap-3">
        <button
          className={active === "ProductAdd" ? "activeProduct" : "nonActive"}
          onClick={() => handleTabChange("ProductAdd")}
        >
          Add Product
        </button>
        <button
          className={active === "SingleProduct" ? "activeProduct" : "nonActive"}
          onClick={() => handleTabChange("SingleProduct")}
        >
          Single Product
        </button>
      </div>
      <div>
      {active === "ProductAdd" && (
        <ProductAdd/>
      )}
      {active === "SingleProduct" && (
        <SingleProducts/>
      )}
      </div>
    </div>
  );
};

export default Product;
