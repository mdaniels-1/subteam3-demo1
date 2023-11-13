require("dotenv").config();
const { ObjectId } = require("mongodb");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASSWORD}@atlascluster.bvzvel0.mongodb.net/?retryWrites=true&w=majority`;
const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
let partyReviewsCollection;

// Connect to MongoDB and set up collections for use
exports.dbConnect = async () => {
  const db = mongoClient.db("dummy_db");
  partyReviewsCollection = db.collection("reviews_co");
};

exports.getReviewDetails = async (req, res, review_id) => {
  // Validate the presence of the 'review_id' parameter
  if (!review_id) {
    res.writeHead(400, { "Content-Type": "application/json" });
    console.error('review_id parameter is missing');
    return res.end(JSON.stringify({ error: "review_id parameter is missing" }));
  }

  try {
    // Fetch the review details using the provided 'review_id'
    const review = await partyReviewsCollection.findOne({
      _id: new ObjectId(review_id),
    });

    // If review not found, return 404 error
    if (!review) {
      res.writeHead(404, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Review not found" }));
    }
    console.log(review);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(review));
  } catch (error) {
    console.log(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
};

exports.getReviewsForDisplay = async (review_id) => {
  if (!review_id) {
    throw new Error("review_id parameter is missing");
  }

  try {
    const review = await partyReviewsCollection.findOne({
      _id: new ObjectId(review_id),
    });

    if (!review) {
      throw new Error("Review not found");
    }
    return review; // Return the review object
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}