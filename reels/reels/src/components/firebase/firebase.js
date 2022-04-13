import firebase from "firebase/app";
import { firebaseConfig } from "./config";
import "firebase/auth";
firebase.initializeApp(firebaseConfig);
export default firebase;