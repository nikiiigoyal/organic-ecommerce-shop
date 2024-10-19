import { products } from "../../constants";


const HotDeals = () => {
    const featuredProduct = products.find(product => product.featured);
    const otherProducts = products.filter(product => !product.featured);
    return (
            <div className="container mx-auto p-4 w-[80%]">
   <div className="flex justify-between items-center mb-6">
   <h2 className="text-2xl font-bold">Hot Deals</h2>
   <a href="/categories" className="text-green-500 hover:text-green-600 flex items-center">
          View All
          <img src="/src/components/images/arrow.svg" className="pl-1"></img>
        </a>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Featured Product Card */}
        {featuredProduct && (
          <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 border border-green-200 rounded-lg p-4">
            <div className="relative">
              <img src={featuredProduct.image} alt={featuredProduct.name} className="h-64 object-cover rounded-lg" />
              <div className="absolute top-2 left-2 flex gap-2">
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">Sale 50%</span>
                <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Best Sold</span>
              </div>
            </div>
            {/* button */}
            <div className="mt-4 flex justify-around">
            <img src="/src/components/images/Heart.png"className=""></img>
                <button className="bg-[#00B207] text-white py-2 w-[60%] rounded-full flex items-center justify-center">
                  Add to Cart <img src="/src/components/images/addToCart.png" className="pl-6"></img>
          </button>
          <img src="/src/components/images/eye.png"></img>
              </div>
              {/*name  */}
            <div className="mt-4 flex flex-col items-center">
              <h3 className="text-[18px] text-[#2C742F] font-semibold">{featuredProduct.name}</h3>
              <div className="flex flex-col mt-2">
                <div>
                  <span className="text-lg font-bold text-[#1A1A1A]">${featuredProduct.price}</span>
                  <span className="text-gray-500 line-through ml-2">${featuredProduct.oldPrice}</span>
                </div>
                <div className="flex items-center mt-2">
                     <span className="text-yellow-500">{'★'.repeat(featuredProduct.rating)}</span>
                     <span className="text-sm text-gray-500">(524 feedback)</span>
                 </div>
                  
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-500 text-center">Hurry up! Offer ends in:</p>
                <div className="flex justify-around items-center mt-2">
                  {['01', '23', '34', '57'].map((time, index) => (
                    <div key={index} className="text-center">
                      <span className="block text-sm font-bold">{time}</span>
                      <span className="text-xs text-gray-500">{['DAYS', 'HOURS', 'MINS', 'SECS'][index]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          
        )}

        {/* Other Product Cards */}
        {otherProducts.map((product) => (
           <div key={product.id} className="border p-4 rounded shadow-md relative flex flex-col hover:border-green-500 transition duration-300 h-fit">
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
     

    )
} 
export default HotDeals;