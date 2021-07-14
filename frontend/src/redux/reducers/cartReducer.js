import * as actions from '../constants/cartConstants'

const cartReducer = (state = { cartItems : [] }, action ) => {


    switch(action.type) {
        case actions.add_to_cart:
            const existsInCart = state.cartItems.find((x) => x._id === action.payload._id);

            if(existsInCart) {
                const filtered = state.cartItems.map((x) => {
                    if(x._id === existsInCart._id) {
                        x.qty = action.payload.qty;
                    }
                    return x;
                });
                return {
                    ...state,
                    cartItems : filtered,
                }
            }
            else {
                return {
                    ...state, 
                    cartItems : [...state.cartItems, action.payload],
                };
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