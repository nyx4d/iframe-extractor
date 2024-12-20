const axios = require('axios');
const { delay } = require('./throttler');
const { logError, logInfo } = require('./logger');
const config = require('./config');

async function fetchPage(url) {
    try {
        logInfo(`Fetching URL: ${url}`);
        await delay(config.requestDelay);
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        logError(`Error fetching ${url}: ${error.message}`);
        throw error;
    }
}

module.exports = fetchPage;
