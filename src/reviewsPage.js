const fs = require('fs');
const cheerio = require('cheerio'); //allows for me to append html elements to a specific element based on id

const path = './html/reviewsTemplate.html'; // the template page. need to look into how i can modify the current html
console.log(__dirname);


let data = [
    ["Jane", "11/1/2020", "This was fun!"],
    ["John", "1/2/2023", "Cool party"],
    ["Myra", "3/4/2019", "There were so many people!"]
];

fs.readFile(path, 'utf8', (err, htmlContent) => {
    if (err) {
        console.error('Error reading HTML file:', err);
        return;
    }


    // Process the HTML content and insert the custom elements

    // Load the HTML content into Cheerio
    const $ = cheerio.load(htmlContent);

    // Insert custom elements using the desired logic
    for (let i = 0; i < data.length; i++) {
        const customElement = `<user-review username="${data[i][0]}" date="${data[i][1]}" review="${data[i][2]}"></user-review>`;
        $('#customReviewsContainer').append(customElement);
    }

    // Get the modified HTML content
    const modifiedHtmlContent = $.html();

    // Write the modified HTML content back to the file or use it as needed
    const outputFilePath = './html/reviews.html';

    fs.writeFile(outputFilePath, modifiedHtmlContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing output file:', err);
            return;
        }

        console.log('Modified HTML file generated successfully!');
    });
});

