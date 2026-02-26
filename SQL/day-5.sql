-- Write a query to find the total number of students in each course from a students table.
SELECT course, COUNT(*) AS total_students
FROM students
GROUP BY course;
-- Calculate the average salary of employees in each department from an employees table.
SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department;
-- Find the minimum and maximum price of products in each category from a products table.
SELECT category, MIN(price) AS min_price, MAX(price) AS max_price
FROM products
GROUP BY category;
-- Count the number of orders placed by each customer from an orders table.
SELECT customer_id, COUNT(*) AS total_orders
FROM orders
GROUP BY customer_id;