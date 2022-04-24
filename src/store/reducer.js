const initailState= {
    age:21
}

const reducer=(state=initailState, action)=>{
    let newState={...state};
    if(action.type === "AGEUP"){
        newState.age++;
    }
    if(action.type === "AGEDOWN"){
        newState.age--;
    }
    // switch (action.type){
    //     case 'AGEUP':
    //         newState.age++;
    //         break;
    //     default :
    //     newState.age--;
    // }
    return newState
}

export default reducer;