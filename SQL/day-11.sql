-- Given orders_2023 and orders_2024, find all unique customers who placed orders in either year.
SELECT customer_id
FROM orders_2023
UNION
SELECT customer_id
FROM orders_2024;
-- Find customers who placed orders in both orders_2023 and orders_2024.
SELECT customer_id
FROM orders_2023
INTERSECT
SELECT customer_id
FROM orders_2024;
-- Retrieve products listed in products_2023 but not in products_2024.
SELECT product_name
FROM products_2023
EXCEPT
SELECT product_name
FROM products_2024;
-- Combine two sales tables and include duplicate entries.
SELECT * FROM sales_2023
UNION ALL
SELECT * FROM sales_2024;
-- Write a query to find employees who work in two specific projects using INTERSECT.
SELECT employee_id
FROM employee_projects ep1
WHERE project_id = 1
INTERSECT
SELECT employee_id
FROM employee_projects ep2
WHERE project_id = 2;