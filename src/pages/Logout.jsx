import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LogoutButton() {
  

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;
