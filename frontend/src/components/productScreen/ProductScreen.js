import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//actions
import { getProductDetails } from '../../redux/actions/productAction';

//components
import Description from './Description'
import ProductCart from './ProductCart'

const ProductScreen = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { loading, product, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getProductDetails(id));    
    },[dispatch, id]);

    const cart4mRedux = useSelector( state => state.cart.cartItems);
    const sessionCart = JSON.parse(sessionStorage.getItem('cartItems'));
    const cart4mSession = (sessionCart === undefined || sessionCart == null ) ? [] : sessionCart;

    const cartItems = () => (cart4mRedux.length > 0) ? cart4mRedux : cart4mSession;

    if(error) {
        return (
            <div className="screen-min-height w-full flex">
                <div className="m-auto text-3xl text-red-700 font-bold">{error}</div>
            </div>
        );
    }
    if(loading) {
        return (
            <div className="mx-3 sm:mx-6 lg:mx-12 flex flex-row flex-wrap">
                <div className="w-full md:w-5/12 h-80">
                    <div className="m-2 w-full h-full flex border-2 border-gray-300 shadow-sm bg-white">
                        <div className="m-auto">Loading Image...</div>
                    </div>
                </div>
                <div className="w-full sm:w-7/12 md:w-4/12 h-80">
                    <div className="m-2 w-full h-full flex border-2 border-gray-300 shadow-sm bg-white">
                        <div className="m-auto">Loading...</div>
                    </div>
                </div>
                <div className="w-full sm:w-5/12 md:w-3/12 h-80">
                    <div className="m-2 w-full h-full flex border-2 border-gray-300 shadow-sm bg-white">
                        <div className="m-auto">Loading...</div>
                    </div>
                </div>
            </div>            
        )
    }
    if(product === {}) {
        return (
            <div className="screen-min-height w-full flex">
                <div className="m-auto text-3xl text-red-700 font-bold">404 Not Found</div>
            </div>
        );       
    }
    else {
        return (
            <div className="mx-3 sm:mx-6 lg:mx-12 flex flex-row flex-wrap">
                <div className="w-full md:w-5/12">
                    <div className="m-2">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-96 rounded-sm" />
                    </div>
                </div>
                <div className="w-full sm:w-7/12 md:w-4/12">
                    <div className="m-2">
                        <Description product={product}/>
                    </div>
                </div>
                <div className="w-full sm:w-5/12 md:w-3/12">
                    <div className="m-2">
                        <ProductCart product={product} cart={cartItems()}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductScreen
