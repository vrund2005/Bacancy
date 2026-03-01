// Alternative Approaches For Exhaustive Checking
// ans = "In TypeScript, we can achieve exhaustive checking using various approaches. 
// One common method is to use a discriminated union, where each type in the union has 
// a common property (often called 'type') that distinguishes it from the others. 
// This allows us to use a switch statement to handle each case explicitly, and if we forget to handle a case, 
// TypeScript will throw an error at compile time. Another approach is to use a type guard function that 
// checks for specific properties or values to narrow down the type. Additionally, 
// we can leverage the 'never' type in the default case of a switch statement to ensure that all cases are handled, 
// providing an extra layer of safety against unhandled cases."


// Why we should use x is y only and not boolean for return type when creating a custom guard.
// ans = "Using 'x is y' in a type guard allows TypeScript to narrow the type of 'x' within the scope of the guard, 
// providing better type safety and autocompletion. If we return a boolean instead, TypeScript cannot infer 
// the specific type of 'x', which can lead to less accurate type checking and potential runtime errors. 
// The 'x is y' syntax explicitly tells TypeScript that when the function returns true, 'x' should be 
// treated as type 'y', enabling more precise type inference and safer code."


// Create a PaymentState discriminated union.
type PaymentState =
    | { type: 'pending'; amount: number }
    | { type: 'completed'; amount: number; transactionId: string }
    | { type: 'failed'; amount: number; error: string };


// Add exhaustive checking to handle all states.
function handlePayment(state: PaymentState) {
    switch (state.type) {
        case 'pending':
            console.log(`Payment of ${state.amount} is pending.`);
            break;
        case 'completed':
            console.log(
                `Payment of ${state.amount} completed with transaction ID ${state.transactionId}.`
            );
            break;
        case 'failed':
            console.log(`Payment of ${state.amount} failed with error: ${state.error}.`);
            break;
        default:
            const _exhaustiveCheck: never = state;
            throw new Error(`Unhandled payment state: ${_exhaustiveCheck}`);
    }
}


// Create a generic ApiResponse<T> for products.
interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}


// Write a type guard to check if response is success.
function isSuccess<T>(response: ApiResponse<T>): response is { success: true; data: T } {
    return response.success === true;
}

// Example usage:
const response: ApiResponse<{ id: number; name: string }> = {
    success: true,
    data: { id: 1, name: 'Product A' },
};

if (isSuccess(response)) {
    console.log(`Product ID: ${response.data.id}, Name: ${response.data.name}`);
} else {
    console.error(`Error: ${response.error}`);
}