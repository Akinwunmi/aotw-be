CREATE USER 'aotw'@'localhost' IDENTIFIED BY 'aotw22!';

GRANT ALL PRIVILEGES ON aotw.archives TO 'aotw'@'localhost';
GRANT ALL PRIVILEGES ON aotw.topics TO 'aotw'@'localhost';

flush privileges;
