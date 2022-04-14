import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from './components/Login';
import { Home } from "./components/Home";
import AuthProvider from './components/AuthProvider';
let App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
