import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./products.css";
import { addToCartCreator } from "./redux/actions";
let Products = () => {
  let { products } = useSelector((state) => state);
  // console.log(products);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            <div
              className="product-img-div"
              onClick={() => {
                navigate(`preview:${product.id}`);
              }}
            >
              <img src={product.img} id="product-img" alt="" />
            </div>
            <div className="add-button-div">
              <p>Rs. {product.price}</p>
              <button
                id="add-button"
                onClick={() => {
                  dispatch(addToCartCreator(product));
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Products;
