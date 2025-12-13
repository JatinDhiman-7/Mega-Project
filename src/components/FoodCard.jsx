import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../context/AuthContext";

const FoodCard = React.memo(({ food }) => {
  const { addToCart } = useContext(AuthContext);

  return (
    <Card className="food-card h-100">
      <div className="img-box">
        <img
          src={`http://127.0.0.1:8000${food.image}`}
          alt={food.name}
          loading="lazy"
          className="food-img"
        />
      </div>

      <Card.Body>
        <Card.Title className="price">{food.name}</Card.Title>
        <Card.Title className="price">₹{food.price}</Card.Title>
        <Card.Text className="desc">{food.description}</Card.Text>
        <Button
          className="add-btn"
          variant="success"
          onClick={() => addToCart(food)}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
});

export default FoodCard;
