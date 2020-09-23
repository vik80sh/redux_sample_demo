import React, { Component } from 'react'
import { connect } from "react-redux";


class Home extends Component {
   constructor(){
       super();
       this.state={
           name : "first comp"
       }
   }
    componentWillMount() {
        console.log("-----componentWillMount1-----------")
    }

    componentDidMount() {
        console.log("-----componentDidMount-----------")
    }

    componentWillReceiveProps(nextProps) {
        console.log("-----componentWillReceiveProps-----------")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("-----shouldComponentUpdate-----------")
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("-----componentWillUpdate-----------")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("-----componentDidUpdate-----------")
    }

    componentWillUnmount() {
        console.log("-----componentWillUnmount-----------")
        
    }
    xyz=()=>{
        this.setState({name:"ChangedXX comX"})
    }

    render() {
        console.log("Render--------------",this.props)
        return (
            <div>
               {/* <p> Hey state change {this.state.name} </p>
               <p> Hey props change {this.props.name} </p>
               <button onClick={this.xyz}>Change Name</button> */}
               {this.props.count.value}
            </div>
        )
    }
}

const mapStateToProps = (c)=>{
    return {
        count : c.counter
    };
}
export default connect(
    mapStateToProps,{}
  )(Home);