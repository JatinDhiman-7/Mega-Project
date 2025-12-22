import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(AuthContext);
   const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cart.map(item => (
            <tr>
              <td className="product">
                <img src={`http://127.0.0.1:8000${item.image}`} alt={item.name} />
                <span>{item.name}</span>
              </td>

              <td>${item.price}</td>

              <td>
                <input
                  type="number"
                  defaultValue={1}
                  min="1"

                  value={item.quantity||''}
                  onChange={e=>updateQty(item.id, e.target.value)}
                />
              </td>

              <td>₹{(item.price * item.quantity).toFixed(2)}</td>

              <td>
                <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                  🗑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-total">
        <strong>Total: ₹{totalPrice.toFixed(2)}</strong>
      </div>

      <div className="cart-buttons">
        <button className="btn dark" onClick={()=>navigate("/")}>← Continue Shopping</button>
        <button className="btn light">⟳ Update Cart</button>
        <button className="btn danger">🛒 Proceed to Checkout</button>
      </div>
    </div>
  );
}
export default Cart;
