import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";

function CategoryFilter({ setFilter }) {
  return (
    <div className="CategorCss center d-flex justify-content-center mb-5">
      <Link>
        <Button variant="danger" onClick={() => setFilter("all")}>
          All Catogory
        </Button>
      </Link>
      <Link>
        <Button variant="danger" onClick={() => setFilter("Beverages")}>
          Beverages
        </Button>
      </Link>
      <Link>
        <Button variant="danger" onClick={() => setFilter("Burgers")}>
          Burger
        </Button>
      </Link>
      <Link>
        <Button variant="danger" onClick={() => setFilter("Desserts")}>
          Desserts
        </Button>
      </Link>
      <Link>
        <Button variant="danger" onClick={() => setFilter("Pizza")}>
          Pizza
        </Button>
      </Link>
      <Link>
        <Button variant="danger" onClick={() => setFilter("Sushi")}>
          Sushi
        </Button>
      </Link>
    </div>
  );
}
export default CategoryFilter;
