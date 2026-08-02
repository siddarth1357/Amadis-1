insert into main (id,name) values(1,'suvetha')
select * from main;
select * from main where name like 's%';
create view view1 as(select * from main where name like '%a');
select * from view1;
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,          
    first_name VARCHAR(50) NOT NULL,         
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,      
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
select * from customers;

INSERT INTO customers (customer_id, first_name) VALUES ('1', 'sidd');



