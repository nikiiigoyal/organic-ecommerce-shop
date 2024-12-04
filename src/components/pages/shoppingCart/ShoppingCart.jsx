import { useState } from 'react';
import CartItem from './CartItem';
import CouponCode from './CouponCode';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const updateQuantity = (itemId, change) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === itemId) {
          const newQunatity = Math.max(1, item.quantity + change);
          return { ...item, qunatity: newQunatity };
        }
        return item;
      })
    );
  };
  const removeItem = (itemId) => {
    setCartItems((items) => items.filter((item) => item.id !== itemId));
  };
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
  return (
    <>
      <div className="mx-w-[1200px] mx-auto p-2 ">
        <h1 className="text-2xl font-semibold text-center mb-6">
          My Shopping Cart
        </h1>
        <div>
          {' '}
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>
        <div className="mt-2 ml-auto p-2 border border-b-[#eee] rounded-lg w-[300px]">
          <h1 className="text-[#1A1A1A] text-[20px] mb-2">Cart Total</h1>
          <div className="subtotal flex flex-row justify-between my-3 border-b-2 pb-1">
            <span className="text-[#4D4D4D] text-sm">Subtotal:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div className="shipping flex flex-row justify-between my-3 border-b-2 pb-1">
            <span className="text-[#4D4D4D]text-sm">Shipping:</span>
            <span>Free</span>
          </div>
          <div className="total flex flex-row justify-between my-3 border-b-2 pb-1">
            <span className="text-[#4D4D4D]text-sm">Total:</span>
            <span>${calculateSubtotal().toFixed(2)}</span>
          </div>
          <div>
            <button className="bg-[#00B207] text-white px-4 py-2 rounded-full w-full">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
      <CouponCode />
    </>
  );
}
export default ShoppingCart;
