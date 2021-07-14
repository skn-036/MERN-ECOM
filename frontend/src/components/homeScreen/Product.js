import { Link } from 'react-router-dom'
const Product = ({product}) => {
    return (
        <>
            <div className="p-0 m-0 mb-1">
                <img src={product.imageUrl} 
                alt="" className="rounded-t-xl object-cover h-56" />
            </div>
            <div className="p-0 m-0 mb-2 text-center font-bold">
                <div className="text-base text-primary">{product.name}</div>
                <div className="">$ {product.price}</div>
            </div>
            <div className="p-0 m-0">
                <Link to={`/products/${product._id}`} 
                className=" w-full block text-center py-1 bg-gray-800 text-white rounded-b-lg hover:bg-gray-900">
                    View
                </Link>
            </div>
        </>
    )
}

export default Product
