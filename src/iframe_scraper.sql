CREATE DATABASE iframe_scraper;
USE iframe_scraper;

CREATE TABLE iframe_srcs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255),
    src TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
