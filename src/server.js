const http = require ("http");
const url = require("url");

// Import the route handlers
const serveLandingPage = require('./views/landingPage.views.js');
const servePartyReviewsPage = require('./views/partyReviewsPage.views.js');
//const servePartyMapPage = require('./views/partyMapPage.views.js');
const serveStaticFile = require('./views/staticFile.views.js');
const handleReviewRequests = require('./routes/review.routes.js');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;

    // Route the request to the appropriate handler
    if (pathname === "/") {
        serveLandingPage(req, res);
    } else if (pathname === "/partyReviews") {
        servePartyReviewsPage(req, res);
    } else if (pathname.endsWith('.js') || pathname.endsWith('.css')) {
        serveStaticFile(req, res);
    } else if (pathname.startsWith('/api/reviews')) {
        handleReviewRequests(req, res);
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

const port = 8080;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

module.exports = server;

