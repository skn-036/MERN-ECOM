import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

//action
import { resetCart } from '../../redux/actions/cartActions';

//components
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const CartScreen = () => {

    const cart4mRedux = useSelector(state => state.cart.cartItems);
    const sessionCart = JSON.parse(sessionStorage.getItem('cartItems'));
    const cart4mSession = (sessionCart !== undefined && sessionCart !== null ) ? sessionCart : [];

    //set cartitems if redux output available else from session storage
    const cartItems = () => (cart4mRedux.length > 0) ? cart4mRedux : cart4mSession;

    const dispatch = useDispatch();
    const reset = () => {
        window.confirm('Are You Sure To Reset Cart Items') && dispatch(resetCart());
    }

    return (
        <div className="mx-3 sm:mx-8">
            <div className="flex flex-row justify-between h-full">
                <div className="font-bold text-2xl sm:text-3xl mt-3 mb-7">Shopping Cart</div>
                <button className="px-3 h-max-content text-white bg-gray-800 hover:bg-gray-900 
                focus:outline-none rounded-sm my-auto" onClick={reset}>
                    Reset Cart
                </button>
            </div>

            <div className="flex flex-row flex-wrap w-full">
                <div className="w-full md:w-9/12">
                    <div className="mx-1">
                        {cartItems().map((item, index) => 
                            <CartItem item={item} key={index}/>
                        )}
                    </div>
                </div>
                <div className="w-full md:w-3/12">
                    <div className="mx-1">
                        <CartTotal cart = { cartItems() }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
