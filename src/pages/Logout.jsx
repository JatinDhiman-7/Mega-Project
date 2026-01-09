
import { logoutUser } from "../api/auth";
function LogoutButton() {
  return (
    <button className="btn btn-danger" onClick={async () => { await logoutUser() }}>
      Logout
    </button>
  );
}

export default LogoutButton;
