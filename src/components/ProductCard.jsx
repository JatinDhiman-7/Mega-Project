// const  BASE_URL='http://127.0.0.1:8000/api/foods/'
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import FoodCard from "./FoodCard";
import CategoryFilter from "./CategoryFilter";

function ProductCard() {
  const [foods, setFoods] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/foodapp/food/")
      .then((res) => setFoods(res.data));
  }, []);
  const filteredItems =
    filter === "all" ? foods : foods.filter((item) => item.category === filter);
  return (
    <>
      <CategoryFilter setFilter={setFilter} />

      <div className="container">
        <div className="row">
          {filteredItems.map((food) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4">
            <FoodCard key={food.id} food={food} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
