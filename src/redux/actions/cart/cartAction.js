export const addToCart = (pid,number) => {
    return {
        type:"CART_ITEM_ADD",
        payload:{
            plateId:pid,
            quantity:number
        }
    }
}
export const removeInCart = (pid) => {
    return {
        type:"CART_ITEM_ADD",
        payload:{
            plateId:pid,
        }
    }
}