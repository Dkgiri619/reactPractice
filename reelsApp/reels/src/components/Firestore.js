import { firestore } from "./Firebase";
export const searchByUid =async (user)=>{
    let { displayName, email, uid, photoURL } = user;
    let docRef = firestore.collection("users").doc(uid);
    let docSnap = await docRef.get();
    if(!docSnap.exists){
        await docRef.set({
            displayName,
            email,
            photoURL
        })
        console.log("updated firebase");
    }
}