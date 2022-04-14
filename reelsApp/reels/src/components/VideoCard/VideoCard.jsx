import "./VideoCard.css"
export const VideoCard = ()=>{
    return <div className="videoCard">
        <video src="http://techslides.com/demos/sample-videos/small.mp4" autoPlay={true} type="video/mp4" id="videoElem"></video>
        <div  className="infoBox"></div>
    </div>
}