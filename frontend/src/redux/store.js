import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducers
import cartReducer from './reducers/cartReducer';
import { productsReducer, productDetailsReducer } from './reducers/productReducer';

const reducer = combineReducers({
    cart : cartReducer,
    products : productsReducer,
    product : productDetailsReducer,
});

const middleware = [
    thunk,
];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;