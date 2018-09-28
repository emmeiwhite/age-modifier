import React,{Component} from 'react';
// to connet the Component with the store
import {connect} from 'react-redux';


class AgeModifier extends Component{
    // State will come from store.So No need of Constructor
    render(){
        return(
            <div>
                <div className="jumbotron"><h3>{this.props.age}</h3></div>
                <button className="btn btn-primary" onClick={this.props.increaseAge}>Increase Age</button> 
                <button className="btn btn-primary" onClick={this.props.decreaseAge}>Decrease Age</button>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{ // We get our actions as props in this Container. Dispacthing Action Mechanism
    return{
        increaseAge: ()=>dispatch({type:'INCREASE'}), // Later we will see how to use action creators, by using bindActionCreator
        decreaseAge: ()=>dispatch({type:'DECREASE'})
    }
}

const mapStateToProps = (state)=>{
    return {
        age:state.age
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AgeModifier);