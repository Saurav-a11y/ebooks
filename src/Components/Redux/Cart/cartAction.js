import { ADD_TO_CART, DELETE_CART_ITEM, REMOVE_ITEM_CART } from "./types"

export const addToCart = (items) => ({
    
        type: ADD_TO_CART,
        payload: items

})

export const removeItemCart = (items) => ({
    type: REMOVE_ITEM_CART,
    payload: items
})

export const deleteCartItem = (itemId)  => ({
    
        type: DELETE_CART_ITEM,
        payload: itemId

})