import './App.css';
import {useSelector} from "react-redux";
import {incrementCreator } from"./redux/action";
import {useDispatch} from "react-redux";

let App = ()=> {
  let dispatch = useDispatch();
  let state = useSelector((state)=>state)
  return (
    <div className="App">
      <button onClick = {()=>{
        dispatch(incrementCreator())
      }}>+</button>
      <br></br>
     {state}
     <br></br>
     <button>-</button>
    </div>
  );
}

export default App;
