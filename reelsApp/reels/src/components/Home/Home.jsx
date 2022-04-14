import { auth, firestore, storage } from "../Firebase/Firebase";
import { authContext } from "../Auth/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { VideoCard } from "../VideoCard/VideoCard";
import { v4 as uuidv4 } from 'uuid';
import "./Home.css"
export const Home = () => {
    let [posts, setPost] = useState([]);
    const user = useContext(authContext);
    useEffect(() => {
        firestore.collection("posts").onSnapshot((querySnapshot) => {
            let docArr = querySnapshot.docs;
            let arr = [];
            for (let i = 0; i < docArr.length; i++) {
                arr.push({
                    id: docArr[i].id,
                    ...docArr[i].data()
                })
            }
            setPost(arr);
        })
    }, []);
    return <>
        {!user && <Navigate to="/login" />}
        <div className="mobView">
            {posts.map((post)=>{
                return <VideoCard key={post.postId} post={post} />
            })}
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
                        let displayName = user.displayName;
                        let userId = user.uid, postId = uuidv4().split("-")[0];
                        uploadtask.snapshot.ref.getDownloadURL().then(async (url) => {
                            let postRef = firestore.collection('posts').doc(postId);
                            await postRef.set({
                                displayName,
                                url,
                                userId,
                                postId,
                                comments: [],
                                likes: []
                            })
                            console.log("updated post");
                            let userRef = firestore.collection("users").doc(userId);
                            let userSnap = await userRef.get();
                            let lists = userSnap.data();
                            // console.log(lists);
                            let arr = [...lists["posts"]];
                            arr.push({
                                postId
                            });
                            await userRef.update({
                                posts: arr
                            }).then(() => { alert("Video uploded") });
                        });
                    })
                }}
                onClick={(e) => {
                    e.currentTarget.value = null;
                }}
            />

        </label>
    </>
}