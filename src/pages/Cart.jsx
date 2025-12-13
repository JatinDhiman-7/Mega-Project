import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Card } from "react-bootstrap";

function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(AuthContext);

  return (
    <>
      {" "}
      <div className="food-grid">
        <h2>Your Cart</h2>
        <Card className="food-card">
          {cart.length === 0 && <p>No items in cart</p>}

          {cart.map((item) => (
            <div key={item.id}>
              <div className="img-box">
                <img
                  src={`http://127.0.0.1:8000${item.image}`}
                  alt={item.name}
                  loading="lazy"
                  className="food-img"
                />
              </div>
              <Card.Body>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div>
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    disabled={item.qty === 1}
                  >
                    -
                  </button>

                  <span style={{ margin: "0 10px" }}>{item.qty}</span>

                  <button onClick={() => updateQty(item.id, item.qty +1)}>
                    +
                  </button>

                  <button
                    style={{ marginLeft: 20 }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </Card.Body>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}

export default Cart;
