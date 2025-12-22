import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { addToCart, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const goToLogin = () => navigate("/login");

  return (
    <Card className="food-card h-100">
      <div className="img-box">
        <img src={`https://web-production-02919.up.railway.app/${food.image}`} alt={food.name} className="food-img" />
      </div>
      <Card.Body>
        <Card.Title>{food.name}</Card.Title>
        <Card.Title>₹{food.price}</Card.Title>
        <Card.Text>{food.description}</Card.Text>
        {isLoggedIn ? (
          <Button variant="success" onClick={() => addToCart(food)}>Add to Cart</Button>
        ) : (
          <Button variant="danger" onClick={goToLogin}>Login to Order</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
