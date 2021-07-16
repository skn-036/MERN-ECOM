import * as actions from '../constants/cartConstants';
import axios from 'axios';

const addToCart = (id, qty) => async (dispatch, getState) => {

    const { data } = await axios.get(`/api/products/${id}`);
    data.qty = qty;

    dispatch({
        type : actions.add_to_cart,
        payload : data,
    });

    sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

const updateCart = (cartItem) => (dispatch, getState) => {
    dispatch({
        type: actions.update_cart_qty,
        payload : cartItem,
    });

    sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type : actions.remove_from_cart,
        payload : id,
    });

    sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

const resetCart = () => (dispatch, getState) => {
    dispatch({
        type : actions.cart_reset,
    });

    sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export {
    addToCart, updateCart, removeFromCart, resetCart,
}