interface newUser {
    id: string
    name: string
    email: string
    role: "ADMIN" | "CUSTOMER"
    isActive: boolean
}


// Create a type UserPublicProfile without email and isActive.
type UserPublicProfile = Omit<newUser, "email" | "isActive">;


// Create a Record that maps user IDs (string) to User objects.
const userProfiles: Record<newUser["id"], UserPublicProfile> = {
    "user1": { id: "1", name: "Alice", role: "ADMIN" },
    "user2": { id: "2", name: "Bob", role: "CUSTOMER" },
};