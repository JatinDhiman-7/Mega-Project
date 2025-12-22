import { useContext } from "react";
import { Link, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LogoutButton from "../pages/Logout";
function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          APNA KITCHEN
        </Link>
        <ul className="navbar-nav ms-auto">
          {!isLoggedIn && (
            <>
              <li>
                <Link className="btn btn-danger " to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="btn btn-danger " to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="btn btn-danger " to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li className="cart" >
                <button className="btn btn-danger " >
                  <Link to="/" className="nav-btn">
                    Home
                  </Link>
                </button>
                <button className="btn btn-danger">
                  <Link to="/cart" className="nav-btn">
                    Cart
                  </Link>
                </button>
                <button className="btn btn-danger">
                  <Link to="/orders" className="nav-btn">
                    My Orders
                  </Link>
                </button>
                <button className="btn btn-danger">
                  <Link to="/Profile" className="nav-btn">
                    Profile</Link>
                </button>
              </li>
              <li>
                <LogoutButton />
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
