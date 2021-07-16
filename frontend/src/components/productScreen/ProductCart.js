import { useDispatch } from 'react-redux';

//actions
import { addToCart } from '../../redux/actions/cartActions';

const ProductCart = ({ product, cart }) => {

    //calling addToCart Redux Action
    const dispatch = useDispatch();
    const cartAdd = () => {
        dispatch(addToCart(product._id, 1));
    }

    //whether this item is in cart
    const isCart = () => cart.filter((x) => x._id === product._id)

    return (
        <div>
            <div className="border rounded-sm shadow-sm bg-white h-96">
                <div className="py-4 lg:py-4 border-b-2 border-gray-200 px-3 flex flex-row">
                    <div className="font-bold w-1/2">Cart Total: </div>
                    <div className="font-normal w-1/2">
                        ${isCart().length > 0 ? isCart()[0].price * isCart()[0].qty : product.price}
                    </div>
                </div>
                <div className="py-4 lg:py-4 border-b-2 border-gray-200 px-3 flex flex-row">
                    <div className="font-bold w-1/2">Status:</div>
                    <div className={`font-normal w-1/2 ${(product.countInStock <= 0) && 'text-red-700'}`}>
                        {(product.countInStock > 0) ? 'Available' : 'Out of Stock'}
                    </div>
                </div>
                <div className="py-4 lg:py-4 border-b-2 border-gray-200 px-3 flex flex-row">
                    <div className="font-bold w-1/2">Stock:</div>
                    <div className="font-normal w-1/2">{product.countInStock}</div>
                </div>
                <div className="py-4 lg:py-4 border-b-2 border-gray-200 px-3 flex flex-row">
                    <div className="font-bold w-1/2">Discount:</div>
                    <div className="font-normal w-1/2">N/A</div>
                </div>
                <div className="py-12 md:py-10 lg:py-12 px-3">
                    {(product.countInStock > 0) 
                    ?
                    <button onClick={isCart().length > 0 ? undefined : cartAdd}
                    className={`w-full py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-sm cursor-pointer
                     ${isCart().length > 0 && 'text-primary cursor-not-allowed'}`}>
                        {isCart().length > 0 ? 'Added to Cart' : 'Add to Cart'}
                    </button> 
                    :
                    <button 
                    className="w-full py-2 bg-gray-300 text-white cursor-not-allowed rounded-sm">
                        Out of Stock
                    </button>
                    }
                </div>
            </div>           
        </div>
    )
}

export default ProductCart
