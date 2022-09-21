CREATE DATABASE aotw;

CREATE TABLE aotw.archives (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE aotw.topics (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  type VARCHAR(45) NOT NULL,
  archiveId INT,
  topicId INT,
  FOREIGN KEY (archiveId) REFERENCES aotw.archives(id),
  FOREIGN KEY (topicId) REFERENCES topics(id),
  PRIMARY KEY (`id`)
);
