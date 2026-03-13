import { useAuth } from "../Authentication/UseAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Welcome {user?.username}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}