CREATE TABLE student(
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    student_name VARCHAR(50),
    student_age INT
);


INSERT INTO student (student_name, student_age)
VALUES
("etu1", 20),
("etu2", 30);


SELECT * FROM student;

ALTER USER 'user1234' IDENTIFIED WITH mysql_native_password BY 'test1234';
flush PRIVILEGES;