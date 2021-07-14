import * as actions from '../constants/productConstants';

const productsReducer = (state = { products : [] }, action) => {
    switch(action.type) {
        case actions.get_products_request:
            return {
                loading : true,
                products : [],
            }
        
        case actions.get_products_success:
            return {
                loading : false,
                products : action.payload,
            }

        case actions.get_products_fail:
            return {
                loading: false,
                error : action.payload
            }

        default:
            return state;
    }
}

const productDetailsReducer = (state = { product : {} }, action) => {
    switch(action.type) {
        case actions.get_product_details_request:
            return {
                loading : true,
                product : {}
            }
        
        case actions.get_product_details_success:
            return {
                loading: false,
                product : action.payload,
            }
        
        case actions.get_product_details_fail:
            return {
                loading: false,
                error : action.payload
            }

        case actions.get_product_details_reset:
            return {
                loading : false,
                product : {},
            }
        default:
            return state;
    }
}

export {productsReducer, productDetailsReducer}