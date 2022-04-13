const Numpads = (props) => {
    return <div className="Numpads">
        <button onClick={props.changeValue} id="0">0</button>
        <button onClick={props.changeValue} id="1">1</button>
        <button onClick={props.changeValue} id="2">2</button>
        <button onClick={props.changeValue} id="3">3</button>
        <button onClick={props.changeValue} id="4">4</button>
        <button onClick={props.changeValue} id="5">5</button>
        <button onClick={props.changeValue} id="6">6</button>
        <button onClick={props.changeValue} id="7">7</button>
        <button onClick={props.changeValue} id="8">8</button>
        <button onClick={props.changeValue} id="9">9</button>
    </div>
}
export default Numpads;