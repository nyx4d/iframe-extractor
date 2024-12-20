#!/usr/bin/env node

const crawlAndLog = require('./index');
const config = require('./config');
const args = process.argv.slice(2);

if (args.length < 2) {
    console.error('Usage: iframe-extractor <url> <category> [maxDepth] [excludeStrings] [includeStrings]');
    process.exit(1);
}

const [url, category, maxDepth, excludeStrings, includeStrings] = args;

if (maxDepth) config.maxDepth = parseInt(maxDepth);
if (excludeStrings) config.excludeStrings = excludeStrings.split(',');
if (includeStrings) config.includeStrings = includeStrings.split(',');

crawlAndLog(url, category);
