// Import cheerio - a library for parsing and manipulating HTML/XML with a jQuery-like API
import * as cheerio from 'cheerio';

// Define the target URL for Hacker News where we'll scrape the latest stories
const URL = 'https://news.ycombinator.com';

// Main async function 
async function run() {
    // Fetch the HTML content from the Hacker News URL
    const res = await fetch(URL);

    // Convert the response body to plain text (HTML string)
    const html = await res.text();

    // Load the HTML into cheerio, which parses it and provides jQuery-like selectors
    // The $ variable is similar to $ in jQuery and allows DOM manipulation/querying
    const $ = cheerio.load(html);

    // Initialize an empty array to store the extracted story titles
    const titles = [];

    // Select all story titles using CSS selectors:
    // '.athing' - selects elements with class "athing" (story row)
    // '.titleline > a' - selects direct child <a> tags within elements with class "titleline"
    // .each() - iterates over each matched element
    // _i is the index (unused, so prefixed with _), el is the current DOM element
    $('.athing .titleline > a').each((_i, el) => {
        // Extract the text content from the current link element and add it to the titles array
        titles.push($(el).text());
    });

e
    console.log('Top HN titles: ');
    console.log(titles);
}

try {
    await run();
} catch (e) {
    console.error('Scraper failed: ', e);
}
