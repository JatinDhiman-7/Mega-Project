import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, Link } from "react-router-dom";
import { logoutUser } from "../api/auth";
function NavbarComponent() {
  const { isLoggedIn } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/')// updates Navbar automatically
  };
  return (
    <Navbar expand="lg" bg="danger" data-bs-theme="dark">
      <Container >
        <Navbar.Brand href="#home" to="/">Apna Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!isLoggedIn && (<><Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/login" >Login</Nav.Link>
              <Nav.Link as={Link} to="/register" >Register</Nav.Link></>)}
            {isLoggedIn && (<><Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/cart" > Cart</Nav.Link>
              <Nav.Link as={Link} to="/orders" >My Orders</Nav.Link>
              <Nav.Link as={Link} to="/Profile" >Profile</Nav.Link>
              <Nav.Link onClick={handleLogout} >Logout</Nav.Link>
            </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarComponent;
