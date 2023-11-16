// partyReviewsPage.views.js

//const { ObjectId } = require('mongodb');
const path = require('path'); 
const fs = require('fs').promises;
//const cheerio = require('cheerio');

//const reviewController = require('./../controllers/review.controller.js'); 

const servePage = async (req, res) => {
    try {
        // Read the HTML template
        const templatePath = path.join(__dirname, '../../public/html/reviewsTemplate.html');
        const htmlContent = await fs.readFile(templatePath, 'utf8');

        // Serve the HTML content
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(htmlContent);

        console.log('HTML template served successfully!');
        
    } catch (err) {
        console.error('Error: ', err);
        res.statusCode = 500;
        res.end('Error serving review page');
    }
};

// const servePage = async (req, res) => {
//     try {
//         // Get reviews 1, 4, and 5
//         reviewController.dbConnect();
//         const review_ids = ["65542251aa8c03ba44c3858f", "65542251aa8c03ba44c38590", "65542251aa8c03ba44c38591"];
//         const reviews = [];
//         for (const id of review_ids) {
//             const review = await reviewController.getReviewsForDisplay(id);
//             reviews.push(review);
//         }

//         // Read the HTML template
//         const templatePath = path.join(__dirname, '../../public/html/reviewsTemplate.html');
//         const htmlContent = await fs.readFile(templatePath, 'utf8');

//         // Load the HTML content into Cheerio
//         const $ = cheerio.load(htmlContent);

//         // Insert custom elements for each review
//         reviews.forEach((review) => {
//             const customElement = `<user-review user-id="${review.user_id}" review-date="${review.review_date}" review-text="${review.review_text}"></user-review>`;
//             $('#customReviewsContainer').append(customElement);
//         });

//         // Get the modified HTML content
//         const modifiedHtmlContent = $.html();

//         // Serve the modified HTML content directly without writing to a file
//         res.setHeader('Content-Type', 'text/html');
//         res.statusCode = 200;
//         res.end(modifiedHtmlContent);

//         console.log('Modified HTML content served successfully!');
        
//     } catch (err) {
//         console.error('Error: ', err);
//         res.statusCode = 500;
//         res.end('Error generating review page');
//     }
// };

module.exports = servePage;
