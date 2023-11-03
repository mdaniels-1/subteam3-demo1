const fs = require('fs').promises;
const cheerio = require('cheerio'); //allows for me to append html elements to a specific element based on id
const fetchReviewById = require('./../fetchReviewById.js');

const path = './html/reviewsTemplate.html'; // the template page. need to look into how i can modify the current html
console.log(__dirname);

const generateReviewsPage = async () => {
    try {
        
        // const reviewIds = [1, 2, 3]
        // //const review = await fetchReviewById(1);
        // //Fetch all reviews in parallel
        // const reviewsPromises = reviewIds.map(id => fetchReviewById(id));
        // const reviews = await Promise.all(reviewsPromises);

        const reviewIds = [5];
        const reviews = [];
        for (const id of reviewIds) {
            const review = await fetchReviewById(id);
            reviews.push(review);
        }
        
        // Read the HTML template
        const htmlContent = await fs.readFile(path, 'utf8');

        // Load the HTML content into Cheerio
        const $ = cheerio.load(htmlContent);

        // Insert custom elements for each review
        reviews.forEach((review) => {
            const customElement = `<user-review user-id="${review.user_id}" review-date="${review.review_date}" review-text="${review.review_text}"></user-review>`;
            $('#customReviewsContainer').append(customElement);
        });

        // Get the modified HTML content
        const modifiedHtmlContent = $.html();

        // Output file path
        const outputFilePath = './html/reviews.html';

        // Write the modified HTML content back to the file
        await fs.writeFile(outputFilePath, modifiedHtmlContent, 'utf8')

        console.log('Modified HTML file generated successfully!');

    } catch (err) {
        console.error('Error: ', err);
    }
};

// Call the function to generate the page
generateReviewsPage();

