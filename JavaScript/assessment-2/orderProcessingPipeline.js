// JS: Order Processing Pipeline (Promise + async/await + event loop
// awareness)
// Description
// You are given an array of order IDs.
// You must process orders in the following way:
// 1. Fetch order details for all order IDs /orders/{id} (this must happen in
// parallel)
// 2. After all orders are fetched, for each order:
// call /payments/{orderId} to get payment status
// 3. Build a final summary object containing:
// total orders
// total paid orders
// total unpaid orders
// Constraints:
// Fetching orders must be parallel.
// Payment checks must run after all orders are fetched.
// Use async / await
// Use Promise.all for parallel execution
// Do not use callbacks
// Handle partial failures (if one payment API fails, continue others)
// Return a summary object


async function processOrders(orderIds) {

    const orders = await Promise.all(
        orderIds.map(id =>
            fetch(`/orders/${id}`).then(res => res.json())
        )
    );

    const payments = await Promise.all(
        orders.map(order =>
            fetch(`/payments/${order.id}`)
                .then(res => res.json())
                .catch(() => ({ status: "unpaid" }))
        )
    );

    const summary = payments.reduce((acc, p) => {
        acc.totalOrders++;
        p.status === "paid"
            ? acc.totalPaidOrders++
            : acc.totalUnpaidOrders++;
        return acc;
    }, {
        totalOrders: 0,
        totalPaidOrders: 0,
        totalUnpaidOrders: 0
    });

    return summary;
}