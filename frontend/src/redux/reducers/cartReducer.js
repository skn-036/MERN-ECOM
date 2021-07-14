import * as actions from '../constants/cartConstants'

const cartReducer = (state = { cartitems : [], cartNotifications : [] }, action ) => {
    const existsInCart = state.cartitems.find((x) => x._id === action.payload._id);
    const payload = action.payload;

    switch(action.type) {
        case actions.add_to_cart:
            if(existsInCart) {
                return {
                    ...state, 
                    cartNotifications : [
                        {
                            type : 'error',
                            message : 'Item already exists in cart'
                        }
                    ]
                };
            }
            else {
                return {
                    ...state, 
                    cartItems : [...state.cartItems, payload],
                    cartNotifications : [
                        {
                            type : 'success',
                            message : 'Item added successfully to cart'
                        }
                    ]
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