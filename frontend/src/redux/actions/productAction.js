import axios from 'axios';
import * as actions from '../constants/productConstants';

const getProducts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type : actions.get_products_request
        }); 
    
        const response = await axios.get('/api/products/');
        dispatch({
            type : actions.get_products_success,
            payload : response.data
        });
        localStorage.setItem('products', JSON.stringify(getState().products.products));
    } catch (error) {
        console.log(error)
        dispatch({
            type : actions.get_products_fail, 
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

const getProductDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type : actions.get_product_details_request,
        });

        const response = await axios.get(`/api/products/${id}`);
        dispatch({
            type : actions.get_product_details_success,
            payload : response.data
        });
        localStorage.setItem('product', JSON.stringify(getState().product.product));

    } catch(error) {
        dispatch({
            type : actions.get_product_details_fail,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message          
        });
    }
}

const resetProduct = () => (dispatch, getState) => {
    dispatch({
        type : actions.get_product_details_reset
    });
    localStorage.setItem('products', JSON.stringify(getState().product.product));
}

export { getProducts, getProductDetails, resetProduct };