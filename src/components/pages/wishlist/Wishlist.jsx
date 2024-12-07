/* eslint-disable react/prop-types */

import WishlistItem from './WishlistItem';

export const Wishlist = ({ wishlist, onRemoveFromWishlist }) => {
  console.log('wishlist', wishlist);
  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto font-poppins">
        <h1 className="text-2xl font-semibold text-center mb-6">My Wishlist</h1>
        <div className="grid grid-cols-1 gap-6">
          <table className="w-full bg-white shadow-md rounded-lg font-poppins">
            <thead>
              <tr className="text-[#808080] text-sm font">
                <th className="p-4 text-left">PRODUCT</th>
                <th className="p-4 text-left">PRICE</th>
                <th className="p-4 text-right">STOCK STATUS</th>
                <th className="p-4 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8">
                    <h1 className="text-center font-semibold text-4xl">
                      No products found in wishlist
                    </h1>
                  </td>
                </tr>
              ) : (
                wishlist.map((product) => (
                  <WishlistItem
                    key={product.id}
                    product={product}
                    onRemoveFromWishlist={onRemoveFromWishlist}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
