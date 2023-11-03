const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// MongoDB connection string
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASSWORD}@atlascluster.bvzvel0.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Create a server object
const server = http.createServer( async (req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Serve the HTML file
    if (req.url === '/') {
        fs.readFile('./html/landingPage.html', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading HTML file');
            }else{
                res.statusCode = 200;
                res.end(data);
            }
        });
    }else if (req.url === '/partyReviews') {
        try {
          // execute file to populate comments into html
          exec('node ./src/reviewsPage.js', (error, stdout, stderr) => {
            if (error) {
              console.error(`Error executing Node.js file: ${error.message}`);
              res.statusCode = 500;
              res.end('Error executing Node.js file');
            } else {
              console.log('Node.js file executed successfully');
              console.log(stderr);
              res.end('Node.js file executed successfully');
            }
          });

          // serve html page
          fs.readFile('./html/reviews.html', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading HTML file');
            } else { //update reviews page to have right content by executing reviewsPage.js script
                res.statusCode = 200;
                res.end(data);
            }
          });
        } catch (error) {
          res.statusCode = 500;
          res.end('Error loading page');
        }
        
    }else if (req.url === '/partyMap') { // load party map page
        // serve html page
        fs.readFile('./html/map.html', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading HTML file');
            } else { //update reviews page to have right content by executing reviewsPage.js script
                res.statusCode = 200;
                res.end(data);
            }
        });
    }else if (req.url.endsWith('.js')) { //execute javascript files (now <script> tags work)
      // Read the JS file
      fs.readFile(`.${req.url}`, 'utf8', (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.end('Page not found');
        } else {
          // Set the appropriate headers
          res.setHeader('Content-Type', 'application/javascript');
          // Send the JS file content as the response
          res.end(data);
        }
      });
    }else if (req.url.endsWith('.css')) { // execute css files (now custom style files work)
      // Read the css file
      fs.readFile(`.${req.url}`, 'utf8', (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.end('Page not found');
        } else {
          // Set the css headers
          res.setHeader('Content-Type', 'text/css');
          // Send the css file content as the response
          res.end(data);
        }
      });
    } else if (req.url.startsWith('/api/reviews/')) {
      // Extract the review_id from the URL
      const reviewId = parseInt(req.url.split('/').pop(), 10);
      try {
        //await client.connect();
        const database = client.db('dummy_db');
        const reviews = database.collection('reviews_co');
        const query = { 'review_id': reviewId };
        const review = await reviews.findOne(query);
  
        if (review) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(review));
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            error: 'Review not found',
            message: `No review with ID ${reviewId} exists in the database. Please check the ID and try again.`,
            reviewIdRequested: reviewId
          }));
        }
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          error: 'Internal Server Error',
          message: 'An error occurred while processing your request. Please try again later.'
        }));
      } finally {
        //await client.close();
      }
    } else {
      // Handle 404 for other routes
      res.statusCode = 404;
      res.end('Page not found');
    }
});


const port = 8080;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});


// // Listen on a specific port
// const port = 8080;
// const host = 'localhost';


// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });