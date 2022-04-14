import "./VideoCard.css";
import {useState} from 'react';
export const VideoCard = (props)=>{
    let [playing, setPlay] = useState(false)
    return <div className="videoCard">
        <video src={props.post.url} loop autoPlay={true} type="video/mp4" id="videoElem"
            on
            onClick={(e)=>{
                if(playing){
                    e.currentTarget.pause();
                    setPlay(false);
                }else{
                    e.currentTarget.play();
                    setPlay(true);
                }
            }}
        ></video>
        <div  className="infoBox"></div>
    </div>
}