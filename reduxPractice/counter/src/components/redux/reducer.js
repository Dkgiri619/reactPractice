export const cartReducer = (state = new Map(), action) =>{
    let newMap;
    switch(action.type){
        case "ADD_TO_CART":
            // important note -> useSlelector wil only run if the previous state reference hasChanged
            newMap = new Map();
            for(let [key,value] of state)newMap.set(key, value);
            if(newMap.has(action.payload)){
                 newMap.set(action.payload, newMap.get(action.payload)+1);
            }else newMap.set(action.payload, 1);
            // alert("added");
            return newMap;
        case "DELETE_FROM_CART":
            newMap = new Map();
            for(let [obj, quant] of state){
                if(action.payload===obj){
                    if(state.get(obj)>1)newMap.set(obj, quant-1);
                }else newMap.set(obj, quant);
            }
            return newMap;

        default: return state;
    }
}
let initialState = require("../../data.json");
export const shopReducer = (state = initialState, action)=>{
    return state;
}
