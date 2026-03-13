import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/users`)
            .then((e) => e.json())
            .then(e => setUsers(e.users || []))
            .catch(console.error);
    }
        , [])

    return (
        <>
            <div className="set">
                {users.map((u) => (
                    <div className="userdiv" key={u.id}>
                    <img src={u.image} alt={u.firstName} />
                    <p>{u.firstName}</p>
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default Users;