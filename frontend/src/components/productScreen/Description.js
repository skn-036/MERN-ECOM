const Description = ({ product }) => {
    return (
        <div className="border rounded-sm shadow-sm bg-white h-96 overflow-hidden">
            <div className="py-4 border-b-2 border-gray-200 px-3">
                <div className="font-bold text-3xl">{product.name}</div>
            </div>
            <div className="py-4 border-b-2 border-gray-200 px-3">
                <div className="font-bold">Price: <span className="font-normal">$ {product.price}</span></div>
            </div>
            <div className="py-2 px-3">
                <div className="text-sm"><span className="font-bold">Description: </span>{product.description}</div>
            </div>
        </div>
    )
}

export default Description
