import { useState } from "react";
import { useAuth } from "../Authentication/UseAuth";
import { replace, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [role, setRole] = useState("user");

  function handleSubmit(e) {
    e.preventDefault(); // stop page refresh

    login(username, role);

    if (role === "admin") {
      navigate("/admin" , { replace : true});
    } else {
      navigate("/profile" , {replace:true});
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>``
<br />
        <div>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
<br />
        <button type="submit">
          Login
        </button>

      </form>
    </div>
  );
}