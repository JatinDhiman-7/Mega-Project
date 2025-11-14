import { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);

  // Fetch products and categories
  useEffect(() => {
    axios
      .get("http://localhost/backend/getProducts.php")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost/backend/getCategories.php")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = async (id) => {
    await axios.post("http://localhost/backend/add_to_cart.php", {
      product_id: id,
    });
    alert("Product added to cart!");
  };

  const filtered = selectedCat
    ? products.filter((p) => p.category_id === selectedCat)
    : products;

  return (
    <>
      <HeroSection />
      <div className="container text-center mb-4">
        <button
          onClick={() => setSelectedCat(null)}
          className={`btn btn-danger m-2 ${!selectedCat ? "active" : ""}`}
        >
          All Categories
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCat(cat.id)}
            className={`btn btn-danger m-2 ${
              selectedCat === cat.id ? "active" : ""
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="container">
        <div className="row">
          {filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={handleAddToCart}
              isLoggedIn={true} // You’ll connect this later
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
