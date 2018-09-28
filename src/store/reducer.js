
const initialState = {
    age:21
}

const reducer = (state = initialState,action)=>{
    const newState = {...state}; // Must we not mutate the state

    switch(action.type){
        case 'INCREASE':
            newState.age+=1;
            break;
        case 'DECREASE':
            newState.age-=1; 
            break;
    }
    return newState;
}

export default reducer;