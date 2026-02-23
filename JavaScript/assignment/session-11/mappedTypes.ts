// Create a type ReadOnlyUser where all properties are readonly.
type ReadOnlyUser = {
    readonly name: string;
    readonly age: number;
}

const user1: ReadOnlyUser = { name: "Alice", age: 30 };
user1.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.



// Create a type StringifiedUser where all properties become string.
interface User {
    id: number
    name: string
    isActive: boolean
}
type edited = {
    [K in keyof User] : String
}
const user2 : edited = { id : "1" , name : "abc", isActive : "anc"}



// Create a type OptionalAndNullableUser where all properties are optional and nullable.
type OptionalAndNullableUser = {
    [K in keyof User]? : User[K] | null
}