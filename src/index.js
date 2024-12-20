const fetchPage = require('./fetchPage');
const extractIframes = require('./extractIframes');
const db = require('./db');
const { shouldCrawl, cleanUrl } = require('./utils');
const { logInfo, logError } = require('./logger');
const config = require('./config');

async function crawlAndLog(url, category, depth = 0) {
    if (depth > config.maxDepth) return;

    try {
        const html = await fetchPage(url);
        const iframeSources = extractIframes(html);

        for (const src of iframeSources) {
            try {
                const connection = await db.getConnection();
                await connection.query('INSERT INTO iframe_srcs (category, src) VALUES (?, ?)', [
                    category,
                    src,
                ]);
                connection.release();
                logInfo(`Logged iframe src: ${src}`);
            } catch (err) {
                logError(`Error logging src (${src}): ${err.message}`);
            }
        }

        const dom = new JSDOM(html);
        const links = dom.window.document.getElementsByTagName('a');
        for (let link of links) {
            const href = link.getAttribute('href');
            if (href && shouldCrawl(href)) {
                await crawlAndLog(cleanUrl(url, href), category, depth + 1);
            }
        }
    } catch (error) {
        logError(`Crawl failed for ${url}: ${error.message}`);
    }
}

module.exports = crawlAndLog;
