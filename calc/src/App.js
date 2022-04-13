import './App.css';
import React from 'react';
import { Functions } from './Functions';
import Screen from './Screen';
import Numpads from './Numpads';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {value:""};
  }
  clearState = ()=>{
    this.setState({value:""});
  }
  changeValue = (e)=>{
    this.setState(prevState=>({
      value:prevState.value+e.target.textContent
    }), ()=>console.log(this.state.value));
   }
   evaluate = () =>{
     try{
       const res = eval(this.state.value);
       this.setState({value:res});
     }catch(e){
       console.log(e);
       this.setState({value:NaN});
     }
   }
   render(){
     return <div className='App'>
       <Screen value = { this.state.value} />
       <Functions 
        changeValue = {this.changeValue} 
        evaluate = {this.evaluate} 
        clearState = {this.clearState} 
      />
      <Numpads changeValue = {this.changeValue}/>
     </div>
   }
}
export default App;
