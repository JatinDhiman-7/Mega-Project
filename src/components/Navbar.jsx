import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LogoutButton from "../pages/Logout";

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Zomato</Link>

        <ul className="navbar-nav ms-auto">
          {!isLoggedIn && (
            <>
              <li><Link className="nav-link" to="/login">Login</Link></li>
              <li><Link className="nav-link" to="/register">Register</Link></li>
            </>
          )}

          {isLoggedIn && (
            <>
              <li><Link className="nav-link" to="/cart">Cart</Link></li>
              <li><LogoutButton /></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
