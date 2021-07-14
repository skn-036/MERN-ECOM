import {FaTimes} from 'react-icons/fa'
const CartItem = ({ item }) => {
    return (
        <div className="w-full bg-white py-2 px-2 flex flex-row border-b-4 border-gray-200">
            <div className="w-1/12 sm:w-2/12 flex">
                <img src={item.imageUrl} alt={item.name} className="rounded-sm h-6 sm:h-12 w-6 sm:w-12 m-auto"/>
            </div>
            <div className="w-6/12 sm:w-5/12 flex">
                <div className=" text-sm sm:text-xl font-bold my-auto">{item.name}</div>
            </div>
            <div className="w-2/12 flex">
                <div className="text-sm sm:text-base font-bold my-auto">${item.price}</div>
            </div>
            <div className="w-2/12 flex">
                <select className="font-bold my-auto w-10/12 sm:w-3/5 border-2 border-gray-400 focus:outline-none rounded-sm">
                    <option value="1" defaultValue>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div className="w-1/12 flex">
                <div className="font-bold my-auto cursor-pointer p-1 border border-gray-300 
                rounded-sm hover:text-primary"><FaTimes /></div>
            </div>
        </div>
    )
}

export default CartItem
