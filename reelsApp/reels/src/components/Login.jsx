
import { useContext } from "react"

import { signInWithGoogle } from "./Firebase"
import { authContext } from "./AuthProvider"
import { Navigate } from "react-router-dom";

export const Login = ()=>{
    let user = useContext(authContext);
    return <div className="loginPage">
        {user && <Navigate to='/'/>}
        <button onClick={()=>{
            signInWithGoogle();
        }}> Login</button>
    </div>
}