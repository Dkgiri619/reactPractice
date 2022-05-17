import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

let Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();
  return (
    <div className="login-form">
      <form className="col-4 offset-4 mt-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e)=>{
              e.preventDefault();
              setEmail(e.currentTarget.value);
            }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e)=>{
              e.preventDefault();
              setPassword(e.currentTarget.value);
            }}
          />
        </div>
        <button className="btn btn-primary"
          onClick={(e)=>{
            e.preventDefault();
            auth.signInWithEmailAndPassword(email,password);
          }}
        >Login</button>

        <p className="mt-5">New account?</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};
export default Login;
