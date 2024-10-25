/* eslint-disable react/prop-types */

const ProductCard = ({ product,onQuickView }) => {
    return (
        <div key={product.id} className="border p-4 rounded shadow-md relative flex flex-col hover:border-green-500 transition duration-300">
            <div className="relative group">
                <img src={product.image} alt={product.name} className="mb-4 transition-transform duration-300 group-hover:scale-105" />

                {/* Heart and eye icons */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex flex-col justify-around pt-5">
                    <img src="/src/components/images/Heart.png" alt="favorite" className="w-6 h-6" />
                    <img src="/src/components/images/eye.png" alt="view" className="w-6 h-6" />

                    <button 
                        onClick={() => onQuickView(product)} 
                        className="bg-green-500 text-white px-2 py-1 rounded text-xs hover:bg-green-600 transition duration-200"
                    >
                        Quick View
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-[14px] text-gray-700 font-semibold mt-2">{product.name}</h2>
                    <div className="flex items-center space-x-2">
                        <p className="text-[#1A1A1A]">${product.price.toFixed(2)}</p>
                        {product.oldPrice && (
                            <p className="line-through text-gray-400">${product.oldPrice.toFixed(2)}</p>
                        )}
                    </div>
                    {product.sale && (
                        <span className="text-white text-center absolute top-2 left-2 bg-[#EA4B48] p-1">{product.sale}% OFF</span>
                    )}
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500">{'★'.repeat(product.rating)}</span>
                    </div>
                </div>
                
                <div className="relative group-hover:bg-green-500 p-1 rounded-full transition-all duration-300">
                    <img src="/src/components/images/addToCart.png" alt="add to cart" className="w-8 h-8 group-hover:opacity-90" />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
