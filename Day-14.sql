CREATE TABLE persons (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,  
    last_name VARCHAR(50) NOT NULL,   
    age INTEGER,                       
    email VARCHAR(100)
);

INSERT INTO persons (first_name, last_name, age, email) 
VALUES ('John', 'Doe', 20, 'john@school.com');

select * from persons

CREATE INDEX idx_persons_email on persons(email)

SELECT * FROM persons WHERE email = 'john@school.com';

CREATE INDEX idx_adults_age ON persons(age) WHERE age >= 18;

SELECT * FROM persons WHERE age >= 18 AND age < 30;


