import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";

function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1;
    return sum + price * qty;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {/* DESKTOP TABLE */}
      <table className="cart-table desktop-only">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td className="product">
                <img src={item.image} alt={item.name} />
                <span>{item.name}</span>
              </td>

              <td>₹{item.price}</td>

              <td>
                <input
                  type="number"
                  min="1"
                  value={item.quantity || 1}
                  onChange={e => updateQty(item.id, Number(e.target.value))}
                />
              </td>

              <td>
                ₹{(item.price * (item.quantity || 1)).toFixed(2)}
              </td>

              <td>
                <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MOBILE CARDS */}
      <div className="mobile-only">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-item-details">
              <div className="cart-item-title">{item.name}</div>
              <div className="cart-item-price">₹{item.price}</div>

              <div className="quantity-control">
                <button onClick={() => updateQty(item.id, (item.quantity || 1) - 1)}>-</button>
                <input
                  type="number"
                  value={item.quantity || 1}
                  min="1"
                  onChange={e => updateQty(item.id, Number(e.target.value))}
                />
                <button onClick={() => updateQty(item.id, (item.quantity || 1) + 1)}>+</button>
              </div>
            </div>

            <div className="cart-item-total">
              ₹{(item.price * (item.quantity || 1)).toFixed(2)}
            </div>

            <button
              className="remove-item"
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove item"
            >
              <FiTrash2 size={18} />
            </button>

          </div>
        ))}
      </div>

      <div className="cart-total">
        <span>Total Amount:</span>
        <span>₹{totalPrice.toFixed(2)}</span>
      </div>



      <div className="cart-actions">
        <button
          className="continue-btn"
          onClick={() => navigate("/")}
        >
          ← Continue Shopping
        </button>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
