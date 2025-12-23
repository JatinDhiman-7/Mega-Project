import { useContext } from "react";
import { Link, Route } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LogoutButton from "../pages/Logout";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from "react-router-dom";
function NavbarComponent() {
  const { isLoggedIn } = useContext(AuthContext);

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // updates Navbar automatically
    navigate("/login");
  };
  return (
    // <nav classNameName="navbar navbar-expand-lg navbar-dark bg-danger sticky-top">
    //   <div classNameName="container">
    //     <Link classNameName="navbar-brand" to="/">
    //       APNA KITCHEN
    //     </Link>
    //     <ul classNameName="navbar-nav ms-auto">
    //       {!isLoggedIn && (
    //         <>
    //           <li>
    //             <Link classNameName="btn btn-danger " to="/">
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link classNameName="btn btn-danger " to="/login">
    //               Login
    //             </Link>
    //           </li>
    //           <li>
    //             <Link classNameName="btn btn-danger " to="/register">
    //               Register
    //             </Link>
    //           </li>
    //         </>
    //       )}
    //       {isLoggedIn && (
    //         <>
    //           <li classNameName="cart" >
    //             <button classNameName="btn btn-danger " >
    //               <Link to="/" classNameName="nav-btn">
    //                 Home
    //               </Link>
    //             </button>
    //             <button classNameName="btn btn-danger">
    //               <Link to="/cart" classNameName="nav-btn">
    //                 Cart
    //               </Link>
    //             </button>
    //             <button classNameName="btn btn-danger">
    //               <Link to="/orders" classNameName="nav-btn">
    //                 My Orders
    //               </Link>
    //             </button>
    //             <button classNameName="btn btn-danger">
    //               <Link to="/Profile" classNameName="nav-btn">
    //                 Profile</Link>
    //             </button>
    //           </li>
    //           <li>
    //             <LogoutButton />
    //           </li>
    //         </>
    //       )}
    //     </ul>
    //   </div>
    // </nav>

    <Navbar expand="lg" bg="danger" data-bs-theme="dark">
      <Container >
        <Navbar.Brand href="#home" to="/">Apna Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isLoggedIn &&  (<><Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
            <Nav.Link as={Link} to="/register" >Register</Nav.Link></>)}
           {isLoggedIn &&  (<><Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart" > Cart</Nav.Link>
            <Nav.Link as={Link} to="/orders" >My Orders</Nav.Link>
             <Nav.Link as={Link} to="/Profile" >Profile</Nav.Link>
             <Nav.Link onClick={()=>{handleLogout()}} >Logout</Nav.Link>
            </>
          )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarComponent;
