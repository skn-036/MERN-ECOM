import * as actions from '../constants/cartConstants'

const cart = JSON.parse(sessionStorage.getItem('cartItems')) ? JSON.parse(sessionStorage.getItem('cartItems')) : [];
const cartReducer = (state = { cartItems : cart }, action ) => {

    switch(action.type) {
        case actions.add_to_cart:
            const existsInCart = state.cartItems.find((x) => x._id === action.payload._id);

            if(existsInCart) {
                const updateQty = state.cartItems.map((x) => {
                    if(x._id === existsInCart._id) {
                        x.qty = action.payload.qty;
                    }
                    return x;
                });
                return {
                    ...state,
                    cartItems : updateQty
                }
            }
            else {
                return {
                    ...state, 
                    cartItems : [...state.cartItems, action.payload],
                };
            }

        case actions.update_cart_qty:
            const updateQty = state.cartItems.map((x) => {
                if(x._id === action.payload._id) {
                    x.qty = action.payload.qty;
                }
                return x;
            });
            return {
                ...state, 
                cartItems : updateQty
            }
        
        case actions.remove_from_cart:
            return {
                ...state,
                cartItems : state.cartItems.filter((x) => x._id !== action.payload)
            }
        
        case actions.cart_reset:
            return {
                ...state,
                cartItems : []
            }

        default:
            return state;
    }
}

export default cartReducer;