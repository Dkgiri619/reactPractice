import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../firebase";
import { useDispatch } from "react-redux";
import { setUserActionCreator } from "../redux/action";
import {LoadingSpinner} from "./spinner";

let Signup = () => {
  let navigate = useNavigate();
  let [userPassword, setPassword] = useState("");
  let [confirmPass, setConfirmPass] = useState("");
  let [email, setEmail] = useState("");
  let [loading, setLoading] = useState(false);
  let dispatch = useDispatch();
  
  useEffect(() => {
    let unsub = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setLoading(true);
        dispatch(setUserActionCreator(user));
        let { uid, email } = user;
        let docRef = firestore.collection("users").doc(uid);
        let docSnap = await docRef.get();
        if (!docSnap.exists) {
          docRef.set({ email, uid });
        }
        setLoading(false);
        navigate("/");
      }
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <>
    {loading ? <LoadingSpinner/>:
    <div className="signup-form">
      <form className="col-4 offset-4 mt-4">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.currentTarget.value);
            }}
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
            value={userPassword}
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.currentTarget.value);
            }}
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPass}
            onChange={(e) => {
              e.preventDefault();
              setConfirmPass(e.currentTarget.value);
            }}
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (userPassword === confirmPass) {
              try {
                auth.createUserWithEmailAndPassword(email, userPassword);
              } catch (e) {
                console.log(e);
              }
            } else {
              alert("Password does not match");
            }
          }}
        >
          Sign Up
        </button>

        <p className="mt-5"> Have an account?</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </form>
    </div>
  }
    </>
  );
};
export default Signup;
