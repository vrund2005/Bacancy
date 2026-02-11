// Write a function with required and optional parameters
// Define return types explicitly
function req(message:string , level?: "GET" | "POST"):string{
    const finalLevel = level ?? "NONE";
    return `[${finalLevel}] : message`;
}


// Create a small utility function that would exist in a real project
function currecy(amount : number,symbol ?: string):string{
    const currencySymbol = symbol ?? "$";
    return `${currencySymbol}${amount.toFixed(2)}`;
}


// Call it with and without the optional argument
currecy(1000);         // $1000.00
currecy(1000, "₹");    // ₹1000.00


// How does TypeScript enforce correctness here?
Required parameters must be provided.
Optional parameters are automatically T | undefined.
You cannot use possibly undefined values without checking.
Return types must match declared type.