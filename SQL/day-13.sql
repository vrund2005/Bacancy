-- Write a query to find the day of the week for the date 2024-12-25.
SELECT TO_CHAR(DATE '2024-12-25', 'Day') AS day_of_week;
-- Calculate the number of days between your birthday and today.
SELECT EXTRACT(DAY FROM (CURRENT_DATE - DATE '1990-01-01')) AS days_difference;
-- Add 3 months to the current date and display the result.
SELECT CURRENT_DATE + INTERVAL '3 months' AS result_date;
-- Extract the year, month, and day from the timestamp 2023-11-15 08:45:30.
SELECT 
    EXTRACT(YEAR FROM TIMESTAMP '2023-11-15 08:45:30') AS year,
    EXTRACT(MONTH FROM TIMESTAMP '2023-11-15 08:45:30') AS month,
    EXTRACT(DAY FROM TIMESTAMP '2023-11-15 08:45:30') AS day;
-- Format the current date in the pattern: DD-MM-YYYY.
SELECT TO_CHAR(CURRENT_DATE, 'DD-MM-YYYY') AS formatted_date;