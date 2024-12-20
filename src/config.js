const config = {
    maxDepth: 3, // Maximum crawl depth
    requestDelay: 1000, // Default delay in milliseconds
    excludeStrings: [], // Links containing these strings are excluded
    includeStrings: [], // Only links containing these strings are included
    logging: true, // Enable or disable detailed logs
};

module.exports = config;
