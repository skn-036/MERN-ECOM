import { useState } from 'react';
import { useDispatch } from 'react-redux';

//actions
import { addToCart } from '../../redux/actions/cartActions';

const ProductCart = ({ product }) => {
    const [qty, setQty] = useState(1);
    const getQty = (e) => setQty(e.target.value);

    //a array of numbers [0, 1, 2] up to count of stock
    const stockArray = (stock) => {
        if(stock <= 0) {
            return [0];
        }
        let output = [];
        for(let i = 1; i <= stock; i++) {
            output.push(i);
        }
        return output;
    }

    const dispatch = useDispatch();

    const cartAdd = () => {
        dispatch(addToCart(product._id, qty));
    }

    

    return (
        <div>
            <div className="border rounded-sm shadow-sm bg-white h-96">
                <div className="py-4 lg:py-4 border-b-2 border-gray-200 px-3 flex flex-row">
                    <div className="font-bold w-1/2">Cart Total: </div>
                    <div className="font-normal w-1/2"> ${product.price * qty}</div>
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
                    <div className="font-bold w-1/2">Qty:</div>
                    <select className="border w-16 rounded-sm focus:outline-none" onChange={getQty}>
                        {stockArray(product.countInStock).map((x, index) => 
                            <option value={x} key={index}>{x}</option>
                        )}
                    </select>
                </div>
                <div className="py-12 md:py-10 lg:py-12 px-3">
                    {(product.countInStock > 0) 
                    ?
                    <button onClick={cartAdd}
                    className="w-full py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-sm cursor-pointer">
                        Add to Cart
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
