// components/ShoppingCart/CartItem.jsx
function CartItem({ item, onUpdateQuantity, onRemove }) {
    return (
      <div className="cart-item">
        <div className="item-image">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="item-details">
          <h3>{item.name}</h3>
          <p>${item.price.toFixed(2)}</p>
        </div>
        <div className="item-quantity">
          <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
        </div>
        <div className="item-subtotal">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button className="remove-item" onClick={() => onRemove(item.id)}>×</button>
      </div>
    );
  }
  export default CartItem;