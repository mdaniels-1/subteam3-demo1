const rsvpController = require("../controllers/rsvp.controller.js");

function handleRequest(req, res) {
  reviewController.dbConnect();

  const parsedUrl = new URL(req.url, "http://localhost:8080");
  if (
    // GET
    parsedUrl.pathname === "/api/reviews/get-one" &&
    req.method === "GET" &&
    parsedUrl.searchParams.has("review_id")
  ) {
    reviewController.getOneReviewByID(req, res,
      parsedUrl.searchParams.get("review_id")
    );
  } else {
    // NOT FOUND
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Endpoint not found" }));
  }
}

module.exports = handleRsvpRequest;
