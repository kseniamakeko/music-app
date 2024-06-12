DROP TABLE IF EXISTS Song;
DROP TABLE IF EXISTS Album;

CREATE TABLE Album (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    authorName VARCHAR(255) NOT NULL,
    createdAt DATE NOT NULL,
    description VARCHAR(10000),
    image_url VARCHAR(255)
);

CREATE TABLE Song (
    id INT AUTO_INCREMENT PRIMARY KEY,
    albumId INT,
    name VARCHAR(255) NOT NULL,
    duration TIME NOT NULL,
    FOREIGN KEY (albumId) REFERENCES Album(id)
);