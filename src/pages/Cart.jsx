import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(AuthContext);
  const navigate = useNavigate();

  //  console.log("cart",typeof(cart[0].price))
  const totalPrice = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1;
    return sum + price * qty;
  }, 0);
  // console.log(typeof(totalPrice))
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
                <img src={`https://web-production-02919.up.railway.app${item.image}`} alt={item.name} />
                <span>{item.name}</span>
              </td>

              <td>₹{item.price}</td>

              <td>
                <input
                  type="number"
                  defaultValue={1}
                  min={1}
                  value={item.quantity || 1}
                  onChange={e => updateQty(item.id, Number(e.target.value))}
                />
              </td>

              <td>₹{Number(item.price)* Number(item.quantity||1).toFixed(2)}</td>

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
        <button className="btn dark" onClick={() => navigate("/")}>← Continue Shopping</button>
        <button className="btn light">⟳ Update Cart</button>
        <button className="btn danger">🛒 Proceed to Checkout</button>
      </div>
    </div>
  );
}
export default Cart;
