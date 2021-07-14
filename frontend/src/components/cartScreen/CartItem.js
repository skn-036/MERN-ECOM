import {FaTimes} from 'react-icons/fa'
const CartItem = () => {
    return (
        <div className="w-full bg-white py-2 px-2 flex flex-row border-b-4 border-gray-200">
            <div className="w-1/12 sm:w-2/12 flex">
                <img src="https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D
                &ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" alt="cart_item" className="rounded-sm h-6 sm:h-12 w-6 sm:w-12 m-auto"/>
            </div>
            <div className="w-6/12 sm:w-5/12 flex">
                <div className=" text-sm sm:text-xl font-bold my-auto">Cart Product 1</div>
            </div>
            <div className="w-2/12 flex">
                <div className="text-sm sm:text-base font-bold my-auto">$499</div>
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
