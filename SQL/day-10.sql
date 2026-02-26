-- Write a query to find the highest-paid employee in each department using subqueries.
SELECT department_id, name, salary
FROM employees e1
WHERE salary = (SELECT MAX(salary) FROM employees e2 WHERE e2.department_id = e1.department_id);
-- Use a subquery to identify customers who have placed more orders than the average number of orders.
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
HAVING COUNT(*) > (SELECT AVG(order_count) FROM (SELECT COUNT(*) AS order_count FROM orders GROUP BY customer_id) AS avg_orders);
-- Find the name and salary of employees whose salary is greater than the department’s average salary.
SELECT name, salary
FROM employees e1
WHERE salary > (SELECT AVG(salary) FROM employees e2 WHERE e2.department_id = e1.department_id);
-- Create a query to determine which products have a price higher than the average product price.
SELECT product_name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);
-- Write a query to find all orders with a total value greater than the average order value.
SELECT order_id, order_total
FROM orders
WHERE order_total > (SELECT AVG(order_total) FROM orders);