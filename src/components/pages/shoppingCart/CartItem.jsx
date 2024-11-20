/* eslint-disable react/prop-types */
// components/ShoppingCart/CartItem.jsx
function CartItem({ item, onUpdateQuantity, onRemove }) {
    return (
      <div className="flex items-center p-1 border border-b-[#eee]">
        <div className="item-image">
          <img src={item.image} alt={item.name} className="w-[80px] h-[80px] object-cover"/>
        </div>
        <div className="flex px-2">
          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => onUpdateQuantity(item.id, -1)} className="w-[30px] h-[30px] border border-b-[#ddd] bg-[#fff] cursor-pointer">-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, 1)} className="w-[30px] h-[30px] border border-b-[#ddd] bg-[#fff] cursor-pointer">+</button>
        </div>

        <div className="item-subtotal">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button className="remove-item" onClick={() => onRemove(item.id)}>×</button>
      </div>
    );
  }
  export default CartItem;