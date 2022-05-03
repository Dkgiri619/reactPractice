import { useEffect, useState } from "react";
import "./products.css";
let Products = () => {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    
    let data = require("../data.json");
    setProducts(data);
  }, []);
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            <div className="product-img-div">
              <img src={product.img} id="product-img" alt="" />
            </div>
            <div className="add-button-div">
                <p>Rs. {product.price}</p>
              <button id="add-button">Add to cart</button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Products;
