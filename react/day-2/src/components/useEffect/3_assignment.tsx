// Build a small “user by ID” viewer: one state for `userId`,
// one for `user`. Use `useEffect` to fetch when `userId`
// changes. Include cleanup so that if the request finishes
// after `userId` changed or the component unmounted,
// you don’t call `setUser`.

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const Ass3 = () => {
  const [userId, setUserId] = useState<number>(1);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data = await response.json();
        setUser(data);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    fetchUser();

    // cleanup
    return () => {
      controller.abort();
    };
  }, [userId]);

  return (
    <div>
      <h2>User Viewer</h2>
      <button onClick={() => setUserId((prev) => prev - 1)}>Previous</button>
      <button onClick={() => setUserId((prev) => prev + 1)}>Next</button>

      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Ass3;
