-- Write a CREATE TABLE statement to create a new table named products with the following structure:
-- product_id (integer, primary key)
-- product_name (string, maximum 50 characters, cannot be null)
-- price (decimal with 2 decimal places)
-- stock_quantity (integer)
CREATE TEMP TABLE products(
	product_id INT primary key,
	product_name varchar(50) not null,
	price decimal(8,2),
	stcok_quantity int
);
-- Insert some sample data into the students table you created.
insert into products
values (1,'Gaming PC',70000.65,2);
-- Write a SELECT query to retrieve only the product_name and price columns from the employees table.
select product_name,price from products;
-- Use SELECT to retrieve all rows from your students table.
select * from products;