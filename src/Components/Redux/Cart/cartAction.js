import { ADD_TO_CART } from "./types"

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