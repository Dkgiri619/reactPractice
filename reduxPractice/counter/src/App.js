import "./App.css";
import { useSelector } from "react-redux";
import { decrementCreator, incrementCreator } from "./redux/action";
import { useDispatch } from "react-redux";

let App = () => {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(incrementCreator(5));
        }}
      >
        +
      </button>
      <br></br>
      {state}
      <br></br>
      <button onClick={()=>{
        dispatch(decrementCreator(4));
      }}>-</button>
    </div>
  );
};

export default App;
