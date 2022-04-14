import { useState, createContext, useEffect } from "react"

import { auth } from "./Firebase";
import { searchByUid } from "./Firestore";

export const authContext = createContext();

let AuthProvider = (props) => {
    let [user, setUser] = useState(null);
    let [loading, setLoad] = useState(true);
    useEffect(() => {
        let unsub = auth.onAuthStateChanged(async (user) => {
            if(user){
                let { displayName, email, uid, photoURL } = user;
                setUser({ displayName, email, uid, photoURL});
                // console.log(user);
                await searchByUid(user);
            }else{
                setUser(null);
            }
        });
        setLoad(false);

        return ()=>{
            unsub();
        }

    }, []);
    return (
        <>
            <authContext.Provider value = {user}>
                {!loading && props.children}
            </authContext.Provider>
        </>
    );
}
export default AuthProvider;