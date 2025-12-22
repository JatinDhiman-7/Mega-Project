import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import { useState } from "react";
import Cart from "./pages/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("token"))
  );

  return (
    <Router>
      <div className="app">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <main className="main">
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Login Page */}
            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />

            {/* Register Page */}
            <Route path="/register" element={<Register />} />

            {/* Orders Page */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
