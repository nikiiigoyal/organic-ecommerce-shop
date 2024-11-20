import { useState } from "react"
import CartItem from "./CartItem"

function ShoppingCart () {
    const [cartItems, setCartItems] = useState([])
    const updateQuantity = (itemId, change) => {
        setCartItems(items => items.map(item => {
            if (item.id === itemId) {
                const newQunatity = Math.max(1, item.quantity + change)
                return {...item , qunatity: newQunatity };
            }
            return item;
        })
    )
    }
    const removeItem = (itemId) => {
        setCartItems(items => items.filter(item => item.id !== itemId));
      };
      const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      };
    return (
        <>
        <div className="mx-w-[1200px] mx-auto p-2">
            <h1 className="text-2xl font-semibold text-center mb-6">My Shopping Cart</h1>
            <div> {cartItems.map(item => (
                <CartItem key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}/>
            ))}
            </div>
          <div className="mt-2 ml-auto p-2 border border-b-[#eee] w-[300px]">
        <div className="subtotal">
          <span>Subtotal:</span>
          <span>${calculateSubtotal().toFixed(2)}</span>
        </div>
        <div className="shipping">
          <span>Shipping:</span>
          <span>Free</span>
        </div>
        <div className="total">
          <span>Total:</span>
          <span>${calculateSubtotal().toFixed(2)}</span>
        </div>
      </div>
        </div>
        </>
    )
}
export default ShoppingCart