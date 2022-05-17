import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/navbar";
import Signup from "./components/signup";
import Login from "./components/login";
let App = () => {
  return (
    <>
      <Router>
        <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element= {<Login/>}/>
      </Routes>
      </Router>
    </>
  );
};

export default App;
