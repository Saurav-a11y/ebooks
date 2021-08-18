import { addItemToCart } from "./CartFunction"
import { ADD_TO_CART, DELETE_CART_ITEM } from "./types"

const initialState = {
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            case DELETE_CART_ITEM: 
            return {
                ...state,
                cartItems: state.cartItems.filter(data => data.id !== action.payload)
            }
        default :
        return state
        
    }
}

export default cartReducer