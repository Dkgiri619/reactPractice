import { auth, firestore, storage } from "../Firebase/Firebase";
import { authContext } from "../Auth/AuthProvider";
import { useContext, useState } from "react";
import { Navigate } from 'react-router-dom';
import { VideoCard } from "../VideoCard/VideoCard";
import { v4 as uuidv4 } from 'uuid';
import "./Home.css"
export const Home = () => {
    let [posts, setPost] = useState([]);
    let user = useContext(authContext);
    
    return <>
        {!user && <Navigate to="/login" />}
        <div className="mobView">
            <VideoCard />
            <button id="logout" onClick={() => {
                auth.signOut();
            }}>Logout</button>
        </div>
        <label className="upload" htmlFor="fileInput">
            Upload
            <input type="file" id='fileInput' placeholder="Upload"
                onChange={(e) => {
                    let file = e.target.files[0];
                    let { size, type, name } = file;

                    if (type.split("/")[0] !== "video") {
                        alert("Video file expected");
                        return;
                    }

                    if (size / 2000000 > 20) {
                        alert("File size should be < 20mb");
                        return;
                    }
                    
                    let uploadtask = storage.ref(`/posts/${user.uid}/${Date.now() + '-' + name}`).put(file);

                    uploadtask.on("state_changed", null, null, () => {
                        uploadtask.snapshot.ref.getDownloadURL().then((url)=>{
                            firestore.collection('posts').add({
                                displayName:user.displayName, 
                                url,
                                comments:[],
                                likes:[],
                                postId:uuidv4().split("-")[0],
                                userId: user.uid                                      
                            });
                            firestore.collection(`users/${user.uid}/posts`).
                        });
                    })
                }}
                onClick = {(e)=>{
                    e.currentTarget.value=null;
                }}
            />

        </label>
    </>
}