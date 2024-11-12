/* eslint-disable react/prop-types */

import WishlistItem from "./WishlistItem"



export const Wishlist = ({wishlist , onRemoveFromWishlist}) => {
    return (
        <>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold text-center mb-6">My Wishlist</h1>
            <div className="grid grid-cols-1 gap-6">
                
            <table className="w-full bg-white shadow-md rounded-lg font-poppins">
      <thead>
        <tr className="text-[#808080] text-sm">
          <th className="p-4 text-left">PRODUCT</th>
          <th className="p-4 text-left">PRICE</th>
          <th className="p-4 text-right">STOCK STATUS</th>
          <th className="p-4 text-right"></th>
        </tr>
      </thead>
      <tbody>
        {wishlist.map((product) => (
          <WishlistItem key={product.id} product={product} onRemoveFromWishlist={onRemoveFromWishlist} />
        ))}
      </tbody>
    </table>
  
            </div>
        </div>
        </>
    )
}