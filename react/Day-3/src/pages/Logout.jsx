import { useAuth } from "../Authentication/UseAuth";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function exit(e) {
    e.preventDefault();

    logout();
    navigate("/login", { replace: true });
    
    }

  return (
  <div>
    <button className="btn" onClick={exit}>
      🚪 Logout
    </button>
  </div>
);
}