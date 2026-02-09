-- Given a table orders and another table customers, find all orders with their customer names using an INNER JOIN.
SELECT o.order_id, c.customer_name, o.order_total
FROM orders o
INNER JOIN customers c ON o.customer_id = c.customer_id;
-- Use a LEFT JOIN to list all products and their orders from products and orders tables.
SELECT p.product_name, o.order_id, o.order_total
FROM products p
LEFT JOIN orders o ON p.product_id = o.product_id;
-- Create a query to find departments without any employees using a RIGHT JOIN.
SELECT d.department_name
FROM departments d
RIGHT JOIN employees e ON d.department_id = e.department_id
WHERE e.employee_id IS NULL;
-- Write a query to combine two tables authors and books to list all authors and the books they’ve written using a FULL OUTER JOIN.
SELECT a.author_name, b.book_id, b.rating
FROM authors a
FULL OUTER JOIN books b ON a.author_id = b.author_id;
-- Modify the employees and departments examples above to include additional columns.
SELECT e.employee_id, e.name, e.age, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id;