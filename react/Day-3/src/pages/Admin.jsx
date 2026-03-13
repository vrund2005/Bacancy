import { useAuth } from "../Authentication/UseAuth";

export default function Admin() {

    const { user } = useAuth();

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome {user?.username}</p>
            <p>Role: {user?.role}</p>
        </div>
    )
}