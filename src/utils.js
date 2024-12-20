const config = require('./config');

function shouldCrawl(href) {
    const exclude = config.excludeStrings.some((str) => href.includes(str));
    const include =
        config.includeStrings.length === 0 || config.includeStrings.some((str) => href.includes(str));
    return !exclude && include;
}

function cleanUrl(base, relative) {
    try {
        return new URL(relative, base).href;
    } catch {
        return relative;
    }
}

module.exports = { shouldCrawl, cleanUrl };
