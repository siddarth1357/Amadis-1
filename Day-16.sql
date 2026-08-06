CREATE TABLE sellers (
    customer_id INT PRIMARY KEY,
    name TEXT
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    amount DECIMAL
);

INSERT INTO sellers VALUES
    (1, 'Alice'),
    (2, 'Bob'),
    (3, 'Carol');

INSERT INTO orders VALUES
    (101, 1, 250.00),   
    (102, 1, 120.00),  
    (103, 2, 500.00);

select * from sellers,orders

select * from sellers
select * from orders

select s.name, o.order_id, o.amount from sellers s LEFT JOIN orders o ON s.customer_id = o.customer_id

SELECT s.name, o.order_id, o.amount
FROM sellers s
RIGHT JOIN orders o ON s.customer_id = o.customer_id;

SELECT s.name, o.order_id, o.amount
FROM sellers s
FULL JOIN orders o ON s.customer_id = o.customer_id;