// TS: Typed async function for fetching user names
// Description
// You are given an API that returns a list of users.
// GET /users
// Each user has the following shape:
// {id:number;name:string;
// }
// Implement the following function:
// asyncfunctiongetUserNames():Promise<string[]>
// The function should:
// 1. Fetch users from /users
// 2. Return only the list of user names
// Constraints
// Use TypeScript
// Define a User type
// Use async / await
// Do not use any

type User = {
    id: number;
    name: string;
};

async function getUserNames(): Promise<string[]> {

    const response = await fetch("/users");

    const users: User[] = await response.json();

    return users.map(user => user.name);

}
