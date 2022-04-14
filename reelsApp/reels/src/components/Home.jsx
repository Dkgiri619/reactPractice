import { auth } from "./Firebase";
import { authContext } from "./AuthProvider";
import { useContext } from "react";
import { Redirect } from 'react-router'; 
export const Home = ()=>{
    let user = useContext(authContext);
    return <>
        {!user && <Redirect to="/login"/>}
        <button></button>
    </>
}