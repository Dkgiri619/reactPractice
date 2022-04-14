import { signInWithGoogle } from "./Firebase"
export const Login = ()=>{
    return <div className="loginPage">
        <button onClick={()=>{
            signInWithGoogle();
        }}> Login</button>
    </div>
}