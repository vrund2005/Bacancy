CREATE TEMP TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    salary DECIMAL(8,2)
);
INSERT INTO employees (id, name, age, department, salary) VALUES
(1, 'Alice', 28, 'IT', 60000.00),
(2, 'Brian', 34, 'Marketing', 55000.00),
(3, 'Catherine', 29, 'HR', 50000.00),
(4, 'Daniel', 40, 'IT', 80000.00),
(5, 'Ethan', 22, 'Marketing', 45000.00),
(6, 'Megan', NULL, 'Finance', 70000.00);

-- Retrieve all employees whose age is less than 30.
select * from employees
where age < 30;

-- Find employees in the Marketing department or aged 35 and above.
select * from employees
where department = 'Marketing' OR age >= 35;

-- Retrieve employees whose names end with the letter 'n'.
select * from employees
where name like '%n';

-- List employees who do not belong to the IT department.
select * from employees
where department <> 'IT';

-- Retrieve employees with non-NULL age values.
select * from employees
where age is not null;

-- select * from employees;