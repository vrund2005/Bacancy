interface UserType {
    id: number
    name: string
    email: string | null
    Activeness: boolean | undefined
}

// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.

type ReadonlyByKeys < T , K extends keyof T > = Omit<T,K> & Readonly<Pick<T,K>>

// Create a utility NonNullableFields<T> that removes null and undefined from all properties.

type NonNullableFields<T> = {[K in keyof T] : NonNullable<T[K]>}

// Apply both to User and test different scenarios.

type ReadonlyNameUser = ReadonlyByKeys<UserType,"name">
const user1 : ReadonlyNameUser = { id: 1, name: "Alice", email: null, Activeness: undefined }
user1.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.

type NonNullableUser = NonNullableFields<UserType>
const user : NonNullableUser = { id: 2, name: "Bob", email: "bob@example.com", Activeness: true }