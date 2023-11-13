const reviewController = require("../controllers/review.controller.js");

function handleRequest(req, res) {
  reviewController.dbConnect();

  const parsedUrl = new URL(req.url, "http://localhost:8080");
  if (
    parsedUrl.pathname === "/api/getreview" &&
    req.method === "GET" &&
    parsedUrl.searchParams.has("review_id")
  ) {
    console.log("handling request");
    if (!res) {
      console.error('Response object is undefined');
      return;
    }
    
    reviewController.getReviewDetails(
      req,
      res,
      parsedUrl.searchParams.get("review_id")
    );
  }
}

module.exports = handleRequest;
