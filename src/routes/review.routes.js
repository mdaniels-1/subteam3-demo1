const reviewController = require("../controllers/review.controller.js");

function handleRequest(req, res) {
  reviewController.dbConnect();

  const parsedUrl = new URL(req.url, "http://localhost:8080");
  if (
    parsedUrl.pathname === "/api/reviews/get-one" &&
    req.method === "GET" &&
    parsedUrl.searchParams.has("review_id")
  ) {
    reviewController.getOneReviewByID(
      req,
      res,
      parsedUrl.searchParams.get("review_id")
    );
  } else if (
    parsedUrl.pathname === "/api/reviews/get-latest-n" &&
    req.method === "GET" &&
    parsedUrl.searchParams.has("party_id"),
    parsedUrl.searchParams.has("N")
  ) {
    reviewController.getNLatestReviewsOfParty(
      req,
      res,
      parsedUrl.searchParams.get("party_id"),
      parseInt(parsedUrl.searchParams.get("N"), 10)
    );
  } else if (
    parsedUrl.pathname === "/api/reviews/create" &&
    req.method === "POST" &&
    parsedUrl.searchParams.has("user_id") &&
    parsedUrl.searchParams.has("party_id") &&
    parsedUrl.searchParams.has("review_date") &&
    parsedUrl.searchParams.has("rating") &&
    parsedUrl.searchParams.has("review_title") &&
    parsedUrl.searchParams.has("review_text")
  ) {
    reviewController.createReview(
      req,
      res,
      parsedUrl.searchParams.get("user_id"),
      parsedUrl.searchParams.get("party_id"),
      parsedUrl.searchParams.get("review_date"),
      parsedUrl.searchParams.get("rating"),
      parsedUrl.searchParams.get("review_title"),
      parsedUrl.searchParams.get("review_text")
    );
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Endpoint not found" }));
  }
}

module.exports = handleRequest;
