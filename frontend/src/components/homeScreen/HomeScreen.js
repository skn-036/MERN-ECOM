import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

//Components
import Product from "./Product"

//actions
import { getProducts as fetchProducts} from '../../redux/actions/productAction';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.products);
    const { loading, products, error } = getProducts;

    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch])

    if(loading) {
        return (
            <div className="mx-3 sm:mx-8">
                <div className="font-bold text-2xl sm:text-3xl mt-3 mb-5">Latest Products</div>
                <div className="products w-full flex flex-row flex-wrap">
                    <div className="w-1by2-mx-1 md:w-1by3-mx-1 lg:w-1by4-mx-1 rounded-xl border-2 
                    border-gray-200 shadow h-80 bg-white mx-1 mb-2">
                        <div className="m-2 rounded-xl flex h-full">
                            <div className="text-gray-500 m-auto"> loading ...</div>
                        </div>
                    </div>
                    <div className="w-1by2-mx-1 md:w-1by3-mx-1 lg:w-1by4-mx-1 rounded-xl border-2 
                    border-gray-200 shadow h-80 bg-white mx-1 mb-2">
                        <div className="m-2 rounded-xl flex h-full">
                            <div className="text-gray-500 m-auto"> loading ...</div>
                        </div>
                    </div>
                    <div className="w-1by2-mx-1 md:w-1by3-mx-1 lg:w-1by4-mx-1 rounded-xl border-2 
                    border-gray-200 shadow h-80 bg-white mx-1 mb-2">
                        <div className="m-2 rounded-xl flex h-full">
                            <div className="text-gray-500 m-auto"> loading ...</div>
                        </div>
                    </div>
                    <div className="w-1by2-mx-1 md:w-1by3-mx-1 lg:w-1by4-mx-1 rounded-xl border-2 
                    border-gray-200 shadow h-80 bg-white mx-1 mb-2">
                        <div className="m-2 rounded-xl flex h-full">
                            <div className="text-gray-500 m-auto"> loading ...</div>
                        </div>
                    </div>
                    <div className="w-1by2-mx-1 md:w-1by3-mx-1 lg:w-1by4-mx-1 rounded-xl border-2 
                    border-gray-200 shadow h-80 bg-white mx-1 mb-2">
                        <div className="m-2 rounded-xl flex h-full">
                            <div className="text-gray-500 m-auto"> loading ...</div>
                        </div>
                    </div>
                    <div className="w-1by2-mx-1 md:w-1by3-mx-1 lg:w-1by4-mx-1 rounded-xl border-2 
                    border-gray-200 shadow h-80 bg-white mx-1 mb-2">
                        <div className="m-2 rounded-xl flex h-full">
                            <div className="text-gray-500 m-auto"> loading ...</div>
                        </div>
                    </div>
                    <div className="w-1by2-mx-1 md:w-1by3-mx-1 lg:w-1by4-mx-1 rounded-xl border-2 
                    border-gray-200 shadow h-80 bg-white mx-1 mb-2">
                        <div className="m-2 rounded-xl flex h-full">
                            <div className="text-gray-500 m-auto"> loading ...</div>
                        </div>
                    </div>
                    <div className="w-1by2-mx-1 md:w-1by3-mx-1 lg:w-1by4-mx-1 rounded-xl border-2 
                    border-gray-200 shadow h-80 bg-white mx-1 mb-2">
                        <div className="m-2 rounded-xl flex h-full">
                            <div className="text-gray-500 m-auto"> loading ...</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    if(error) {
        return (
            <div className="screen-min-height w-full flex">
                <div className="m-auto text-3xl text-red-700 font-bold">{error}</div>
            </div>
        );
    }
    else {
        return (
            <div className="mx-3 sm:mx-8">
                <div className="font-bold text-2xl sm:text-3xl mt-3 mb-5">Latest Products</div>
                <div className="products w-full flex flex-row flex-wrap">
                    {products.map(item => (
                    <div className="w-1by2-mx-1 md:w-1by3-mx-1 lg:w-1by4-mx-1 rounded-xl border-2 
                    border-gray-200 shadow min-h-80 bg-white mx-1 mb-2" key={item._id}>
                        <div className="m-2 rounded-xl">
                            <Product product={item}/>
                        </div>
                    </div>
                    ))}
                </div>
            </div>            
        );
    }
}

export default HomeScreen
