import { ADD_TO_CART, DELETE_CART_ITEM } from "./types"

export const addToCart = (items) => (dispatch, getState) => {
    const {cartItems} = getState().cartReducer
    let cartItemsData = items
    if(cartItems.map(item => item.id === items.id )) {
        cartItemsData = {
            ...cartItems,
            qty: 1
        }
    }
    console.log("show cart items", cartItemsData);

    dispatch({
        type: ADD_TO_CART,
        payload: items
    })
}

export const deleteCartItem = (itemId) => (dispatch) => {
    dispatch({
        type: DELETE_CART_ITEM,
        payload: itemId
    })
}