const { JSDOM } = require('jsdom');

function extractIframes(html) {
    const dom = new JSDOM(html);
    const iframes = dom.window.document.getElementsByTagName('iframe');
    const sources = [];

    for (let iframe of iframes) {
        const src = iframe.getAttribute('src');
        if (src) {
            sources.push(src);
        }
    }

    return sources;
}

module.exports = extractIframes;
