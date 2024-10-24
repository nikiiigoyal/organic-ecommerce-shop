/* eslint-disable react/prop-types */
 

const ProductsView = ({ products , heading}) => {

return(
  <>
   <div className="container mx-auto p-4 w-[80%]">
   <div className="flex justify-between items-center mb-6">
   <h2 className="text-2xl font-bold">{heading}</h2>
   <a href="/categories" className="text-green-500 hover:text-green-600 flex items-center">
          View All
          <img src="/src/components/images/arrow.svg" className="pl-1"></img>
        </a>
       </div>
                <div className="grid grid-cols-5 gap-4">
                    
               {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded shadow-md relative flex flex-col hover:border-green-500 transition duration-300">
                          <div className="relative group">
                            <img src={product.image} alt={product.name}className="mb-4 transition-transform duration-300 group-hover:scale-105" />

                            {/* heart and eye icons */}
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 flex flex-col justify-around pt-5 ">
                                    <img src="/src/components/images/Heart.png" alt="favorite" className="w-6 h-6" />
                                    <img src="/src/components/images/eye.png" alt="favorite" className="w-6 h-6" />
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
                                    <img src="/src/components/images/addToCart.png" alt="add to cart"className="w-8 h-8 group-hover:opacity-90" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
  
  
)
}
export default ProductsView;
