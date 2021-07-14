import { useSelector } from 'react-redux';

//components
import CartItem from "./CartItem"
import CartTotal from "./CartTotal"

const CartScreen = () => {

    const cart4mRedux = useSelector( state => state.cart.cartItems);
    const localCart = JSON.parse(localStorage.getItem('cartItems'));
    const cart4mLocal = (localCart !== undefined && localCart !== null ) ? localCart : [];

    //set cartitems if redux output available else from local storage
    const cartItems = () => (cart4mRedux.length > 0) ? cart4mRedux : cart4mLocal;

    return (
        <div className="mx-3 sm:mx-8">
            <div className="font-bold text-2xl sm:text-3xl mt-3 mb-7">Shopping Cart</div>
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
                        <CartTotal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
