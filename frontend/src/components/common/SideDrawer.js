import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SideDrawer = ( {side, onToggle} ) => {
    const cart4mRedux = useSelector(state => state.cart.cartItems);
    const sessionCart = JSON.parse(sessionStorage.getItem('cartItems'));
    const cart4mSession = (sessionCart !== undefined && sessionCart !== null ) ? sessionCart : [];

    //set cartitems if redux output available else from session storage
    const cartItems = () => (cart4mRedux.length > 0) ? cart4mRedux : cart4mSession;

    return (
        <div className={`w-3/5 h-screen border shadow-sm fixed top-0 bg-white 
        z-30 transition-sm transform-x-minus-full flex ${side && 'transform-x-0'}`}>
            <ul className="m-auto">
                <li onClick={onToggle}>
                    <Link to="/" className="text-2xl font-bold my-1 text-gray-900 hover:text-primary">Mern Store</Link>                  
                </li>
                <li onClick={onToggle}>
                    <Link to="/" className="text-base font-bold my-1 text-gray-700 hover:text-primary mx-auto">Shop Page</Link>                    
                </li>
                <li onClick={onToggle}>
                    <Link to="/cart" className="text-base font-bold my-1 text-gray-700 hover:text-primary mx-auto">
                        {cartItems().length > 1 ? `Cart(${cartItems().length} products)` : `Cart(${cartItems().length} product)`}
                    </Link>                    
                </li>
            </ul>
        </div>
    )
}
export default SideDrawer
