import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCartCreator } from "./redux/actions";
import "./preview.css";
let Preview = () => {
  let { id } = useParams();
  id = id.substring(1);
  let { products } = useSelector((state) => state);
  let prodObject = products[id - 1];
  let dispatch = useDispatch();
  return (
    <div className="preview-product">
      <div className="image-div">
        <img id="image-desc" src={prodObject.img} alt="" />
      </div>
      <div className="description">
        <h1 id="h1-name">{prodObject.name}</h1>
        <p id="text-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
          esse harum voluptatem sunt officiis. Ex dolores quo eveniet quidem.
          Aperiam deleniti eaque nihil repellendus accusantium non eligendi
          sequi officiis accusamus! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. A accusamus ullam consequatur temporibus
          consequuntur repellat. Magnam animi architecto temporibus nam eum
          voluptatum earum, cumque officia enim fuga vel. Quo, ullam? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Alias excepturi a
          quia hic, neque, voluptates molestias voluptatibus laboriosam eligendi
          tenetur quaerat, ut sequi. Repellat autem optio quos suscipit rerum
          natus.
        </p>
        <button
          id="add-cart"
          onClick={() => {
            dispatch(addToCartCreator(prodObject));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Preview;
