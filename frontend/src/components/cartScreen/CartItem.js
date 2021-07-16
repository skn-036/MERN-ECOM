import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

//actions
import { updateCart, removeFromCart } from '../../redux/actions/cartActions';

const CartItem = ({ item }) => {

    // an array of increament 1 upto count of stock
    const stockArray = (stock) => {
        let output = [];
        for(let i = 1; i <= stock; i++) {
            output.push(i)
        }
        return output;
    }

    //update cart Quantity
    const dispatch = useDispatch();
    const changeQty = (e) => {
        item.qty = e.target.value;
        dispatch(updateCart(item))
    }

    //remove from cart
    const removeCart = () => {
        dispatch(removeFromCart(item._id))
    }



    return (
        <div className="w-full bg-white py-2 px-2 flex flex-row border-b-4 border-gray-200">
            <div className="w-1/12 sm:w-2/12 flex">
                <Link to={`/products/${item._id}`} className="block text-center">
                    <img src={item.imageUrl} alt={item.name} className="rounded-sm h-6 sm:h-12 w-6 sm:w-12 m-auto"/>
                </Link>
            </div>
            <div className="w-6/12 sm:w-5/12 flex">
                <div className=" text-sm sm:text-xl font-bold my-auto">{item.name}</div>
            </div>
            <div className="w-2/12 flex">
                <div className="text-sm sm:text-base font-bold my-auto">${item.price * item.qty}</div>
            </div>
            <div className="w-2/12 flex">
                <select className="font-bold my-auto w-10/12 sm:w-3/5 border-2 border-gray-400 focus:outline-none rounded-sm"
                defaultValue={item.qty} onChange={changeQty}>
                    {stockArray(item.countInStock).map((x, index) => 
                        <option value={x} key={index}>{x}</option>
                    )}
                </select>
            </div>
            <div className="w-1/12 flex">
                <div className="font-bold my-auto cursor-pointer p-1 border border-gray-300 
                rounded-sm hover:text-primary"><FaTimes onClick={ removeCart }/></div>
            </div>
        </div>
    )
}

export default CartItem
