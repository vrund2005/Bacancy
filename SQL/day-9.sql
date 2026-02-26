-- Write a query using a self join to find pairs of employees who share the same manager.
SELECT e1.name AS employee_name, e2.name AS manager_name
FROM employees e1
JOIN employees e2 ON e1.manager_id = e2.id;
-- Use a full outer join to list all products and their orders, including products without orders.
SELECT p.product_name, o.order_id, o.order_total
FROM products p
FULL OUTER JOIN orders o ON p.product_id = o.product_id;
-- Write a cross join query to generate all possible pairs of customers and regions from a customers and regions table.
SELECT c.customer_name, r.region_name
FROM customers c
CROSS JOIN regions r;
-- Combine joins with aggregates to calculate average order amounts for each product.
SELECT p.product_name, AVG(o.order_total) AS average_order_amount
FROM products p
JOIN orders o ON p.product_id = o.product_id
GROUP BY p.product_name;
-- Write a query joining three tables to find detailed order summaries (e.g., customer name, product name, and total amount).
SELECT c.customer_name, p.product_name, o.order_total
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
JOIN products p ON o.product_id = p.product_id;