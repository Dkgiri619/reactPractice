export function Functions(props){
    return <div className='funtionKeys'>
        <button onClick={props.change}>+</button>
        <button onClick={props.changeValue}>-</button>
        <button onClick={props.changeValue}>*</button>
        <button onClick={props.changeValue}>/</button>
        <button onClick={props.evaluate}>=</button>
        <button onClick={props.clearState}>C</button>
    </div>
};