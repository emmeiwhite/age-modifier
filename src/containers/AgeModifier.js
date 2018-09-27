import React,{Component} from 'react';
// to connet the Component with the store
import {connect} from 'react-redux';


class AgeModifier extends Component{
    // State will come from store.So No need of Constructor
    render(){
        return(
            <div>
                <div className="jumbotron"><h3>0000</h3></div>
                <button className="btn btn-primary ">Increase Age</button>
                <button className="btn btn-primary">Decrease Age</button>
            </div>
        )
    }
}


mapDispatchToProps = (dispatch)=>{ // We get our actions as props in this Container. Dispacthing Action Mechanism
    return{
        increaseAge: ()=>dispatch({type:'INCREASE'}),
        decreaseAge: ()=>dispatch({type:'DECREASE'})
    }
}

export default AgeModifier;