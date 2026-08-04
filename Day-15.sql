CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(30),
    salary INT
);

INSERT INTO Employee VALUES
(1, 'Rahul', 'IT', 50000),
(2, 'Anu', 'HR', 40000),
(3, 'Kiran', 'IT', 60000),
(4, 'Meena', 'HR', 45000),
(5, 'Arun', 'IT', 70000);

select * from Employee;

SELECT COUNT(*) FROM Employee;

SELECT SUM(salary) FROM Employee;

SELECT AVG(salary) FROM Employee;

SELECT MAX(salary) FROM Employee;

SELECT department, COUNT(*)
FROM Employee
GROUP BY department;

SELECT department, SUM(salary)
FROM Employee
GROUP BY department;

SELECT department, AVG(salary)
FROM Employee
GROUP BY department;

SELECT department, COUNT(*)
FROM Employee
GROUP BY department
HAVING COUNT(*) > 2;

SELECT department, AVG(salary)
FROM Employee
GROUP BY department
HAVING AVG(salary) > 50000;

