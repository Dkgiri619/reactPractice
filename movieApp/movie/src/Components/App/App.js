import { Component } from "react";
import Search from "../Search/Search";
import View from "../View/View";
import "./App.css";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      genres : [],
      allMovies : [],
      movies : [],
      search : ""
    };
  }
  componentDidMount(){
    const data = require("../../data/data.json");
    this.setState({movies:data});
    this.setState({allMovies:data});
    let set = new Set();
    let arr = [];
    
    data.map((el)=>{
      if(!set.has(el.genre.name)){
        set.add(el.genre.name);
        arr.push(el.genre);
      }
      return 0;
    })
    this.setState({genres:arr});
  }
  searchItems = (e)=>{
    let str = e.target.value;
    this.setState({search:str});
    if(str===""){
      this.setState({movies:this.state.allMovies});
    }
    let arr = this.state.allMovies.filter((el)=>{
      if(el.title.toLowerCase().includes(str.toLowerCase()))return true;
      else return false;
    })
    this.setState({movies:arr});
    // console.log( 
  }
  componentWillUnmount(){
    delete(this.state);
  }
  render(){
    return <div className="App">
    <Search search = {this.state.search} searchItems = {this.searchItems}/>
    <View movies = {this.state.movies}/>
    </div>
  }
}

export default App;
