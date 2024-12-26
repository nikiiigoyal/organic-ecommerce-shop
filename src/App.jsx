import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Faq } from './components/pages/Faqs';
import { SignInForm } from './components/pages/SignInform';
import { CreateForm } from './components/pages/CreateAccount';
import { ErrorPage } from './components/pages/ErrorPage';
import Homepage from './components/pages/homepage/sections';
import { Layout } from './components/layout/Layout.jsx';
import { ShopPage } from './components/pages/shopPage';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { QuickViewModal } from './components/pages/shopPage/ProductQuickModal';
import { Products } from './Products';
import { Wishlist } from './components/pages/wishlist/Wishlist';
import { OrderHistory } from './components/pages/orderHistory';
import Navigation from './components/pages/Navigation';
import Dashboard from './components/pages/userDashboard';
import ShoppingCart from './components/pages/shoppingCart/ShoppingCart';
import { Settings } from './components/pages/settings';
import { AuthProvider } from './components/AuthProvider';
import { CartPayment } from './components/pages/cartPayment';
import { ForgotPassword } from './components/pages/ForgotPassword';
import { ResetPassword } from './components/pages/ResetPassword';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };
  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  };
  const handleQuickView = (product) => {
    console.log('Quick View clicked for:', product);
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
    console.log('Modal open status:', isQuickViewOpen);
  };
  // const addToCart = (product) => {
  //   setCartItems
  // }

  return (
    <BrowserRouter>
      <AuthProvider>
        {/* <Layout> */}
        <Routes>
          {/* public routes */}

          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Homepage
                  onQuickView={handleQuickView}
                  addToWishlist={addToWishlist}
                />
              }
            ></Route>
            <Route
              path="/shop"
              element={
                <ShopPage
                  onQuickView={handleQuickView}
                  addToWishlist={addToWishlist}
                />
              }
            ></Route>

            <Route path="/signin" element={<SignInForm />}></Route>
            <Route path="/CreateForm" element={<CreateForm />} />

            <Route path="/forgot-password" element={<ForgotPassword />}></Route>
            <Route path="/reset-password" element={<ResetPassword />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/register" element={<CreateForm />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>

            <Route path="/blog" element={<CartPayment />}></Route>
            <Route path="/pages" element={<Navigation />}>
              <Route index element={<Dashboard />} />
              <Route path="orderHistory" element={<OrderHistory />} />
              <Route
                path="wishlist"
                element={
                  <Wishlist
                    wishlist={wishlist}
                    onRemoveFromWishlist={removeFromWishlist}
                  />
                }
              />
              <Route path="cart" element={<ShoppingCart />} />
              <Route path="settings" element={<Settings />} />
              <Route path="LogOut" element={<ErrorPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
      {isQuickViewOpen && (
        <QuickViewModal
          product={selectedProduct}
          isOpen={isQuickViewOpen}
          onClose={() => setIsQuickViewOpen(false)}
        />
      )}
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
