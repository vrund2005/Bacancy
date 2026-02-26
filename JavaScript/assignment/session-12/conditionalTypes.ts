// Create a type IsNumber<T>
type IsNumber<T> = T extends Number ? true : false

type A = IsNumber<123>
type B = IsNumber<"abc">



// Create a type ExtractEmail<T> that extracts email type if present.
interface users {
    name : string,
    email : string
}

type ExtractEmail<T> = T extends { email : infer U } ? U : never

type user = ExtractEmail<users>         // infers string