import CartItem from "./CartItem"
import CartTotal from "./CartTotal"

const CartScreen = () => {
    return (
        <div className="mx-3 sm:mx-8">
            <div className="font-bold text-2xl sm:text-3xl mt-3 mb-7">Shopping Cart</div>
            <div className="flex flex-row flex-wrap w-full">
                <div className="w-full md:w-9/12">
                    <div className="mx-1">
                        <CartItem />
                        <CartItem />
                        <CartItem />
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
