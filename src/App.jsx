import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Layout } from "./components/layout/layout";
import { Faq } from "./components/pages/Faqs";
import { SignInForm } from "./components/pages/SignInform";
import { CreateForm } from "./components/pages/CreateAccount";
import { ErrorPage } from "./components/pages/ErrorPage";
import Homepage from "./components/pages/homepage/sections";
import { Layout } from "/src/components/layout/Layout.jsx"; 

import { ShopPage } from "./components/pages/shopPage";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
// import { ProductDetails } from "./components/pages/productDetailsPage";
import { QuickViewModal } from "./components/pages/shopPage/ProductQuickModal";
import { Products } from "./Products";
import { Wishlist } from "./components/pages/wishlist/Wishlist";
// import { BillingInfo } from "./components/pages/checkout/BillingInfo";
// import ShoppingCart from "./components/pages/shoppingCart/ShoppingCart";
// import Dashboard from "./components/pages/userDashboard";

import { OrderHistory } from "./components/pages/orderHistory";



// import Homepage from "./components/pages/homepage/sections";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen ,setIsQuickViewOpen] = useState(false);
  const [wishlist , setWishlist] = useState([])
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems , setCartItems] = useState([])

  const addToWishlist = (product) => {
    setWishlist([...wishlist,product])
  }
  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter((item) => item.id !== product.id))
  }
 const handleQuickView = (product) => {
        console.log("Quick View clicked for:", product); 
        setSelectedProduct(product)
        setIsQuickViewOpen(true)
        console.log("Modal open status:", isQuickViewOpen);
    }
    // const addToCart = (product) => {
    //   setCartItems
    // }
return (
  <BrowserRouter>
  
  {/* <Layout> */}
    <Routes>
      {/* public routes */}
      
   <Route path="/" element={<Layout />}>
   <Route index element={<Homepage onQuickView={handleQuickView} addToWishlist={addToWishlist}/>}></Route>
   <Route path="/shop" element={<ShopPage onQuickView={handleQuickView} addToWishlist={addToWishlist}/>}></Route>
   
   <Route path="/signin" element={<SignInForm />}></Route>
   <Route path="/about" element={<About />}></Route>
   <Route path="/contact" element={<Contact />}></Route>
   <Route path="/register" element={<CreateForm />}></Route>
   <Route path="/faq" element= {<Faq />}></Route>
   <Route path="/products" element= {<Products />}></Route>
   <Route path="*" element= {<ErrorPage />}></Route>
   <Route path="/pages" element={<Wishlist wishlist={wishlist} onRemoveFromWishlist={removeFromWishlist} />}></Route>
   {/* <Route path="/blog" element={<BillingInfo/>}></Route> */}
   <Route path="/blog" element={<OrderHistory />}></Route>
   </Route>
  </Routes>
   {isQuickViewOpen && (
          <QuickViewModal
            product={selectedProduct}
            isOpen={isQuickViewOpen}
            onClose={() => setIsQuickViewOpen(false)}
          />
        )}
  {/* </Layout> */}
  </BrowserRouter>
  )
}

export default App;
