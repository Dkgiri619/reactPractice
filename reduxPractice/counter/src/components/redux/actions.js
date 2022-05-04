export const addToCartCreator = (object)=>{
    return {
        type: "ADD_TO_CART",
        payload: object
    }
}
export const deleteFromCartCreator = (object)=>{
    return {
        type: "DELETE_FROM_CART",
        payload: object
    }
}