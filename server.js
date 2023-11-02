const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');


// Create a server object
const server = http.createServer((req, res) => {
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
    }else {
      // Handle other requests
      res.statusCode = 404;
      res.end('Page not found');
    }
});

// Listen on a specific port
const port = 8080;
const host = 'localhost';


server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});