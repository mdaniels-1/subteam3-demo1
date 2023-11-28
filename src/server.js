const http = require ("http");
const url = require("url");
const ip = require("ip");

// Import the route handlers
const serveLandingPage = require('./views/landingPage.views.js');
const servePartyReviewsPage = require('./views/partyReviewsPage.views.js');
//const servePartyMapPage = require('./views/partyMapPage.views.js');
const serveStaticFile = require('./views/staticFile.views.js');
const handleReviewRequests = require('./routes/review.routes.js');
const serveScanTicketsPage = require('./views/scan-tickets.view.js');
const handleScanTicketsRequests = require('./routes/scan-tickets.routes.js');



const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
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
    }else if(pathname.startsWith('/scan-tickets')){
        serveScanTicketsPage(req, res);
    } else if (pathname.startsWith('/api/scan-tickets')){
        handleScanTicketsRequests(req, res);
    }else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

const port = 8080;
const host = 'localhost';
// const ipv4 = ip.address(); // makes this accessible on other devices connected to the same internet
const ipv4 = 'localhost';
server.listen(port, ipv4, () => {
    console.log(`Server is running on http://${ipv4}:${port}`);
});



module.exports = server;

