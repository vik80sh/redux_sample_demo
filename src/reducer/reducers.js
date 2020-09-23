

const inailValue = {
    value:0
}

const rootReducer = (state=inailValue,action) =>{
    console.log("=============",action)
    if(action.type==="INC"){
        state = {
            value:state.value + 1
        }
        return state;
    }else if(action.type==="DEC"){
        state = {
            value:state.value - 1
        }
        return state;
    }
    return state;
}


export default rootReducer;