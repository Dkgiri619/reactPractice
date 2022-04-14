import { useState, createContext, useEffect } from "react"
import { auth } from "./Firebase";
export const authContext = createContext();
let AuthProvider = (props) => {
    let [user, setUser] = useState(null);
    let [loading, setLoad] = useState(true);
    useEffect(() => {
        let unsub = auth.onAuthStateChange((user) => {
            if(user){
                let { displayName, email, uid, photoUrl } = user;
                setUser({ displayName, email, uid, photoUrl});
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