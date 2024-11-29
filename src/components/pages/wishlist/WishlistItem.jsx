/* eslint-disable react/prop-types */
const WishlistItem = ({product , onRemoveFromWishlist}) => {
    return(
<>
<tr>
          <td className="p-4">
            <div className="flex items-center">
              <img src={product.image} alt={product.name} className="rounded-lg w-12 h-12 mr-4" />
              <h2 className="text-[#1A1A1A] text-sm">{product.name}</h2>
            </div>
          </td>
          <td className="p-4 text-[#1A1A1A] font-semibold text-sm">
            ${product.price.toFixed(2)}
            {product.oldPrice && (
              <span className="line-through text-gray-400 ml-1">${product.oldPrice.toFixed(2)}</span>
            )}
          </td>
          <td className="p-4 text-right">
            <span className={`bg-${product.stockStatus === 'In Stock' ? 'green' : 'red'}-500 text-white py-1 px-2 rounded-lg`}>
              {product.stockStatus === 'Available' ? 'in stock': 'out of stock'}
            </span>
          </td>
          <td className="p-4 text-right">
            <button className="bg-[#00B207] hover:bg-green-600 text-white text-sm py-2 px-5 rounded-full mr-2">
              Add to Cart
            </button>
            <button
              className=" hover:bg-red-600 text-white py-1 bg-black px-2 rounded-full"
              onClick={() => onRemoveFromWishlist(product)}
            >
              <img src="/images/closeicon.svg" alt="Remove" className="w-5 h-5" />
            </button>
          </td>
        </tr>
     

 {/* <div className="bg-white shadow-md rounded-lg pg-4 flex">
  <div className="relative">
  <img src={product.image} alt={product.name} className="rounded-lg p-5 mb-4"></img>
  

  </div>
  <h2 className="text-gray-800 font-semibold text-lg mb-2">{product.name}</h2>
      <p className="text-[#1A1A1A] mb-4">${product.price.toFixed(2)}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-auto">
        Add to Cart
      </button>
      <button className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white py-1 rounded-full"
  onClick={() => onRemoveFromWishlist(product)}
  >
 <img src="/images/close.png" alt="Remove" className="w-4 h-4" />
  </button>
 </div> */}
</>


    )
}
export default WishlistItem