CREATE TEMP TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    department VARCHAR(50)
);
INSERT INTO employees (id, name, age, department) VALUES
(1, 'Alice', 28, 'IT'),
(2, 'Brian', 35, 'Marketing'),
(3, 'Clara', 28, 'HR'),
(4, 'David', 40, 'Finance'),
(5, 'Ethan', 22, 'Marketing');


-- Retrieve all rows from the employees table and sort them by name in ascending order.
select * from employees
order by name;

-- Sort the employees table by department in descending order.
select * from employees
order by department desc;

-- Combine sorting by age in ascending order and department in alphabetical order.
select * from employees
order by age,department;

-- Create a query to sort a new table products by price in descending order and stock_quantity in ascending order.
select * from products
order by price desc , stcok_quantity asc;