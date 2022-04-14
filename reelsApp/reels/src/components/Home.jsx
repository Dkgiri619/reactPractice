import { auth } from "./Firebase";
import { authContext } from "./AuthProvider";
import { useContext } from "react";
import { Navigate } from 'react-router-dom'; 
export const Home = ()=>{
    let user = useContext(authContext);
    return <>
        {!user && <Navigate to="/login"/>}
        <button onClick={()=>{
            auth.signOut();
        }}>Logout</button>
    </>
}