const reviewController = require("../controllers/review.controller.js");

function handleRequest(req, res) {
  reviewController.dbConnect();

  const parsedUrl = new URL(req.url, "http://localhost:8080");
  if (
    parsedUrl.pathname === "/api/reviews/get-one-review" &&
    req.method === "GET" &&
    parsedUrl.searchParams.has("review_id")
  ) {
    reviewController.getOneReviewByID(
      req,
      res,
      parsedUrl.searchParams.get("review_id")
    );
  } else if (
    parsedUrl.pathname === "/api/reviews/get-latest-reviews" &&
    req.method === "GET" &&
    parsedUrl.searchParams.has("party_id"),
    parsedUrl.searchParams.has("N")
  ) {
    reviewController.getNLatestReviewsOfParty(
      req,
      res,
      parsedUrl.searchParams.get("party_id"),
      parsedUrl.searchParams.get("N")
    );
  }
}

module.exports = handleRequest;
