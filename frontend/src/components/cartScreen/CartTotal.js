const CartTotal = () => {
    return (
        <div className="border rounded-sm shadow-sm bg-white h-max-content">
            <div className="py-4 lg:py-4 border-b-2 border-gray-200 px-3">
                <div className="font-bold w-full text-lg">Subtotal (0) Items</div>
                <div className="font-bold w-full">$450</div>
            </div>
            <div className="py-4 md:py-4 lg:py-4 px-3">
                <button className="w-full py-2 bg-gray-800 text-white hover:bg-gray-900 rounded-sm cursor-pointer">Checkout</button>
            </div>
        </div>           
    )
}

export default CartTotal
