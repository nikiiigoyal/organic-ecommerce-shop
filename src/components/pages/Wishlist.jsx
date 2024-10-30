// import { useState } from "react"

// const Wishlist = () => {
//     // stores wishlist items
//     const [wishlistItems , setwishlistItems] = useState(false);
//     // controls notification visiblity
//     const [showAlert , setShowAlert] = useState(false)

// const addToWishlist = (product) => {
//     // check if item exists in wishlist 
//     if (!wishlistItems.find(item => item.id === product.id)) {
//         // add new product to wishlist
//         setwishlistItems([...wishlistItems,product]);
//         // show success notification
//         setShowAlert(true);
//         // hide notification after 2 sec
//         setTimeout(() => setShowAlert(false),2000)
//     }
// }
// const removeFromWishlist = (productId) => {
//     // filter out product with matching id
//     setwishlistItems(wishlistItems.filter(item => item.id !== productId))
// }
// const isInWishlist = (productId) => {
//     // Check if product exists in wishlist
//     return wishlistItems.some(item => item.id === productId);
//   };
//     return (
//         <>
          
//         </>
//     )
// }
