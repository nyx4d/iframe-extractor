iframe-extractor

A powerful and feature-rich Node.js package designed to extract, categorize, and log iframe sources from web pages, with built-in support for multi-level crawling, request throttling, and robust error handling.
Features

    🕸️ Recursive Crawling: Crawl pages up to a configurable depth.
    🎯 Customizable Filters: Exclude or include specific links using keywords.
    🛠️ Database Logging: Log iframe src values to a MySQL database for analytics or later use.
    ⏳ Request Throttling: Prevent server overload by delaying requests.
    🔍 Trace Cleanup: Ensure efficient crawling by cleaning and normalizing URLs.
    📊 Real-Time Logs: Enable detailed logging for debugging and insights.

Installation

Install the package globally using NPM:

npm install -g iframe-extractor

Usage
Command Syntax

iframe-extractor <url> <category> [maxDepth] [excludeStrings] [includeStrings]

Parameters
Parameter	Description
<url>	The starting URL for iframe extraction and crawling.
<category>	A category to associate with the iframe sources (e.g., "tutorial", "resources").
[maxDepth]	(Optional) Maximum depth of recursive crawling. Default: 3.
[excludeStrings]	(Optional) Comma-separated keywords to exclude from crawling.
[includeStrings]	(Optional) Comma-separated keywords to exclusively include in crawling.
Example Commands
Basic Extraction

iframe-extractor https://example.com tutorials

Advanced Crawling

iframe-extractor https://example.com tutorials 5 "exclude1,exclude2" "include1,include2"

Configuration

Edit src/config.js to customize crawling behavior:

const config = {
    maxDepth: 3, // Maximum number of pages to crawl
    requestDelay: 1000, // Delay between requests (in milliseconds)
    excludeStrings: [], // Keywords to exclude from crawling
    includeStrings: [], // Keywords to exclusively include in crawling
    logging: true, // Enable or disable logging
};

module.exports = config;

Setup
Database Setup

Create a MySQL database and table for iframe source logging:

CREATE DATABASE iframe_scraper;
USE iframe_scraper;

CREATE TABLE iframe_srcs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255),
    src TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Update database credentials in src/db.js:

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'iframe_scraper',
});

Project Structure

iframe-extractor/
├── src/
│   ├── cli.js              # Command-line interface
│   ├── index.js            # Main module
│   ├── fetchPage.js        # Fetch HTML content
│   ├── db.js               # MySQL database connection
│   ├── extractIframes.js   # Extract iframe sources
│   ├── throttler.js        # Throttling logic
│   ├── logger.js           # Logging utility
│   ├── utils.js            # Helper functions
│   └── config.js           # Configuration file
├── .gitignore
├── package.json
└── README.md

Features in Depth
Request Throttling

Prevents overwhelming servers by introducing delays between requests.
Recursive Crawling

Handles multi-level links with custom depth control.
Custom Filters

    Exclude Strings: Skip links containing specific keywords.
    Include Strings: Only crawl links matching specific keywords.

Contributing

Contributions are welcome! If you have ideas for enhancements or spot any issues, feel free to:

    Fork this repository
    Submit a pull request
    Open an issue with your suggestions

Let’s build this together! 💡
License

This project is licensed under the MIT License.
Connect

Follow my journey and explore more projects:

    GitHub: nyx4d
    Twitter: @nyx4d
