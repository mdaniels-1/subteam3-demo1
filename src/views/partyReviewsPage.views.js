// partyReviewsPage.controller.js

const { ObjectId } = require('mongodb');
const path = require('path'); 
const fs = require('fs').promises;
const cheerio = require('cheerio');

const reviewController = require('./../controllers/review.controller.js'); 

const servePage = async (req, res) => {
    try {
        // Get reviews 1, 4, and 5
        reviewController.dbConnect();
        const review_ids = ["6542f051bf8ba063f1321f73", "6542f051bf8ba063f1321f74", "6542f051bf8ba063f1321f75"];
        const reviews = [];
        for (const id of review_ids) {
            const review = await reviewController.getReviewsForDisplay(id);
            reviews.push(review);
        }

        // Read the HTML template
        const htmlContent = await fs.readFile('./../html/reviewsTemplate.html', 'utf8');

        // Load the HTML content into Cheerio
        const $ = cheerio.load(htmlContent);

        // Insert custom elements for each review
        reviews.forEach((review) => {
            const customElement = `<user-review user-id="${review.user_id}" review-date="${review.review_date}" review-text="${review.review_text}"></user-review>`;
            $('#customReviewsContainer').append(customElement);
        });

        // Get the modified HTML content
        const modifiedHtmlContent = $.html();

        // Serve the modified HTML content directly without writing to a file
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(modifiedHtmlContent);

        console.log('Modified HTML content served successfully!');
        
    } catch (err) {
        console.error('Error: ', err);
        res.statusCode = 500;
        res.end('Error generating review page');
    }
};

module.exports = servePage;
