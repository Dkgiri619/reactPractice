export const Modal = (props)=>{
    return <div className="modal">
        <button id='close' onClick={props.closeModal}>X</button>
        <div className="movieDetail"> 
            <h3>{props.selectMovie.title}</h3>
            <h3>{props.selectMovie.genre}</h3>
            <h3>{props.selectMovie.dailyRentalRate}</h3>
        </div>
    </div>
}
