export const incrementCreator = (payload) =>{
    return {
        type:"INCREMENT",
        payload:payload
    }
}
export const decrementCreator = (dec)=>{
    return {
        type:"DECREMENT",
        payload:dec
    }
}
