import React from 'react';
import Home from './Home'
import './App.css';
import actionType from './action';
import { connect } from "react-redux";



class App extends React.Component{
  state={
    name:"App com"
  }
  render(){
    return (
      <div className="App">
        <button onClick={()=>this.props.actionType("INC")}> Increament </button>
        <button onClick={()=>this.props.actionType("DEC")}> Decreament </button>

        <Home/>
      </div>
    );
  }
}

export default connect(
  null,{actionType}
)(App);
