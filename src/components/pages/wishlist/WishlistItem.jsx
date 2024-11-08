/* eslint-disable react/prop-types */
const WishlistItem = ({product , onRemoveFromWishlist}) => {
    return(
<>
 <div className="bg-white shadow-md rounded-lg pg-4 flex flex-col">
  <div className="relative">
  <img src={product.image} alt={product.name} className="rounded-lg mb-4 h-48 object-cover"></img>
  <button className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white py-1 rounded-full"
  onClick={() => onRemoveFromWishlist(product)}
  >
     <img src="/images/close.png" alt="Remove" className="w-4 h-4" />
  </button>

  </div>
  <h2 className="text-gray-800 font-semibold text-lg mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-auto">
        Add to Cart
      </button>
 </div>
</>
    )
}
export default WishlistItem