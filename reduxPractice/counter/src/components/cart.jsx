import { useDispatch, useSelector } from "react-redux";
import { deleteFromCartCreator, addToCartCreator } from "./redux/actions";
let Cart = () => {
  let cart  = useSelector((state) => state.cart);
  console.log("rendering");
  let products = Array.from(cart);
  let dispatch = useDispatch();
  let total = 0;
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SNo.</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {products.map(([prod, quantity], idx) => {
            total+=prod.price * quantity;
            return (
              <tr key={prod.id}>
                <th scope="row">{idx + 1}.</th>
                <td>{prod.name}</td>
                <td>{prod.category}</td>
                <td>{quantity}</td>
                <td>{prod.price * quantity}</td>
                <td>
                  <button onClick={()=>{
                    dispatch(addToCartCreator(prod))
                  }}>+</button>
                  <button onClick={()=>{
                    dispatch(deleteFromCartCreator(prod));
                  }}>-</button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td><h5>Total</h5></td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Cart;
