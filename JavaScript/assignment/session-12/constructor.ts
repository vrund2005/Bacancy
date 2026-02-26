// Create a constructor type for UserRepository.

type UserRepository<T> = new (...args: any[]) => T

function CreateRepo<T>(ctor: UserRepository<T>): T {
    return new ctor()
}

const repo = CreateRepo(class {
    constructor() {
        console.log("UserRepository created");
    }
});



// Create a callable type that formats User name.

type FormatUser = {
    (user: string): string
    name : string
}

const userFromat: FormatUser = (user: string) => `User: ${user}`
userFromat.name = "User Formatter"

console.log(userFromat("Alice")); // O/P : "User: Alice"
console.log(userFromat.name); // O/P : "User Formatter"