/* eslint-disable react/prop-types */

import WishlistItem from "./WishlistItem"



export const Wishlist = ({wishlist , onRemoveFromWishlist}) => {
    return (
        <>
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((product) => (
                    <WishlistItem key={product.id}
                    product={product}
                    onRemoveFromWishlist={onRemoveFromWishlist} />
                ))}
            </div>
        </div>
        </>
    )
}