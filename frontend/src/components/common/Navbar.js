import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Navbar = ({ onToggle, side }) => {
    const cart4mRedux = useSelector(state => state.cart.cartItems);
    const sessionCart = JSON.parse(sessionStorage.getItem('cartItems'));
    const cart4mSession = (sessionCart !== undefined && sessionCart !== null ) ? sessionCart : [];

    //set cartitems if redux output available else from session storage
    const cartItems = () => (cart4mRedux.length > 0) ? cart4mRedux : cart4mSession;

    return (
        <>
        <div className="w-full bg-gray-900 h-16 px-3 sm:px-8">
            <div className="flex flex-row justify-between text-purple-100 h-full z-50">
                <div className="logo text-2xl sm:text-3xl font-bold flex h-max-content my-auto hover:text-primary">
                    <Link className="m-auto" to="/">Mern Store</Link>
                </div>
                <ul className="navlinks h-max-content my-auto md:flex flex-row hidden">
                    <li className="shop flex flex-row group cursor-pointer mx-1 sm:mx-2">
                        <div className="my-auto">
                            <Link to="/" className="font-bold p-0 m-0 tracking-tighter text-base sm:text-2xl group-hover:text-primary">ShopPage</Link>
                        </div>
                    </li>
                    <li className="cart flex flex-row cursor-pointer mx-1 sm:mx-2">
                        <Link to="/cart"  className="my-auto text-2xl mx-1 hover:text-primary"><FaShoppingCart /></Link>
                        <div className="my-auto">
                            <span className="font-bold p-0 m-0 tracking-tighter">
                                {cartItems().length > 1 ? 
                                `${cartItems().length} products` : `${cartItems().length} product`}
                            </span>
                        </div>
                    </li>
                </ul>
                <div className="harburger my-auto cursor-pointer md:hidden z-50" onClick={onToggle}>
                    { 
                    side ? 
                    <FaTimes className="text-3xl sm:text-4xl pl-3 transition-sm text-white hover:text-primary"/> 
                    :
                    <div className="my-auto w-5 sm:w-7 h-5 sm:h-7 flex flex-col justify-between transition-sm group">
                        <div className="w-full h-1 bg-white group-hover:bg-primary"></div>
                        <div className="w-full h-1 bg-white group-hover:bg-primary"></div>
                        <div className="w-full h-1 bg-white group-hover:bg-primary"></div>
                    </div> 
                    }                  
                </div>
            </div>
        </div> 
        </>
    )
}

export default Navbar
