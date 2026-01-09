import { useContext, memo, useCallback } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const FoodCard = memo(({ food }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate();

  const goToLogin = () => { navigate("/login") };
  const handleAddToCart = useCallback(() => { addToCart(food) }, [addToCart, food]);

  return (
    <Card className="food-card h-100">
      <div className="img-box">
        <img
          src={food.image}
          alt={food.name}
          className="food-img"
          loading="lazy"
        />
      </div>
      <Card.Body>
        <Card.Title>{food.name}</Card.Title>
        <Card.Title>₹{food.price}</Card.Title>
        <Card.Text>{food.description}</Card.Text>

        {isLoggedIn ? (
          <Button variant="success" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        ) : (
          <Button variant="danger" onClick={goToLogin}>
            Login to Order
          </Button>
        )}
      </Card.Body>
    </Card>
  );
});

export default FoodCard;
