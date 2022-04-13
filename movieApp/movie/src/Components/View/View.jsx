import { Component } from "react";
import {Modal} from "../Modal/Modal";
import "./View.css";

class View extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies:[],
            selectMovie:null
        };
    }
    componentDidMount(){
        let f = async ()=>{
            this.setState(()=>({movies:this.props.movies}))
            this.setState({selectMovie:null})
        }
        f();
    }
    selectTitle = (movieId) =>{
        // console.log(this.state.movies);
        let movie = null;
        console.log(this.state.movies);
        for(let obj of this.state.movies){
            if(obj._id===movieId){
                movie = obj;
                break;
            }
        }
        this.setState({selectMovie:movie}, ()=>console.log(this.state.selectMovie));
        console.log(movie);
    }
    closeModal = () =>{
        this.setState({selectMovie:null});
    }
    viewComponent = ()=>{
        return (<div className="viewTable">
            {this.props.movies.map((el)=>{
                return <div className='items' key={el._id} id={el._id} onClick={()=>this.selectTitle(el._id)}> {el.title} </div>
            })}
        </div>)
    }
    render(){
        if(this.state.selectMovie!=null)
            return <Modal selectMovie = {this.state.selectMovie} closeModal = {this.closeModal}/>
        else return this.viewComponent();
    }
} 

export default View;