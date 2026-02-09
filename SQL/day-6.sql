-- Given a table orders with columns customer_id, order_date, and order_total, write a query to find customers whose total order value exceeds $5000.
SELECT customer_id, SUM(order_total) AS total_order_value
FROM orders
GROUP BY customer_id
HAVING SUM(order_total) > 5000;
-- Use the HAVING clause to filter products from a products table where the average price is greater than $50.
SELECT category, AVG(price) AS average_price
FROM products
GROUP BY category
HAVING AVG(price) > 50;
-- Modify the examples above to include additional conditions or aggregate functions.
-- Create a query for a library table to find authors with more than 3 published books and an average rating above 4.5.
SELECT author_id, COUNT(*) AS book_count, AVG(rating) AS average_rating
FROM books
GROUP BY author_id
HAVING COUNT(*) > 3 AND AVG(rating) > 4.5;
-- Write a query to find departments in a company table where the total salary of employees exceeds $100,000.
SELECT department_id, SUM(salary) AS total_salary
FROM employees
GROUP BY department_id
HAVING SUM(salary) > 100000;