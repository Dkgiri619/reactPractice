import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from './components/Auth/Login';
import { Home } from "./components/Home/Home";
import AuthProvider from './components/Auth/AuthProvider';
let App = () => {
  
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/' element={<Home />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
