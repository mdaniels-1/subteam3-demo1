const dotenv = require("dotenv");
const path = require("path");

// Debug: Log the expected path of the .env file
const envPath = path.resolve(process.cwd(), '.env');
console.log(`Looking for .env file at: ${envPath}`);

// Attempt to load the .env file
const result = dotenv.config();

// Debug: Log the result of dotenv.config()
if (result.error) {
  console.error('Error loading .env file', result.error);
} else {
  console.log('.env file loaded successfully');
}

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

let reviewsCollection;
let usersCollection;
let partiesCollection;

// Connect to MongoDB and set up collections for use
exports.dbConnect = async () => {
  const db = mongoClient.db("dummy_db");
  reviewsCollection = db.collection("reviews_co");
  usersCollection = db.collection("users_co");
  partiesCollection = db.collection("parties_co");
};

exports.getOneReviewByID = async (req, res, review_id) => {
  // Validate the presence of the 'review_id' parameter
  if (!review_id) {
    res.writeHead(400, { "Content-Type": "application/json" });
    console.error('review_id parameter is missing');
    return res.end(JSON.stringify({ error: "review_id parameter is missing" }));
  }

  try {
    // Fetch the review details using the provided 'review_id'
    const review = await reviewsCollection.findOne({
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

exports.getNLatestReviewsOfParty = async (req, res, party_id, N) => {
  // Validate the presence of the 'party_id' parameter
  if (!party_id) {
    res.writeHead(400, { "Content-Type": "application/json" });
    console.error('party_id parameter is missing');
    return res.end(JSON.stringify({ error: "party_id parameter is missing" }));
  }

  // Validate the presence of the 'N' parameter. N is the number of reviews to return.
  if (!N) {
    res.writeHead(400, { "Content-Type": "application/json" });
    console.error('N parameter is missing');
    return res.end(JSON.stringify({ error: "N parameter is missing" }));
  }
  if (isNaN(N)) {
    res.writeHead(400, { "Content-Type": "application/json" });
    console.error('N is NaN.');
    return res.end(JSON.stringify({ error: "N is NaN" }));
  }
  if (N < 0 || N > 10) {
    res.writeHead(400, { "Content-Type": "application/json" });
    console.error('N is out of range [0, 10].');
    return res.end(JSON.stringify({ error: "N is out of range [0, 10]" }));
  }
  try {
    // Fetch the latest N reviews for the provided 'party_id'
    // For each review, fetch the username and party title from their respective collections
    const reviews = await reviewsCollection.aggregate([
      { $match: { party_id } },                             // Match the reviews by party_id
      { $sort: { date: -1 } },                              // Sort by date descending
      { $limit: N },                                        // Limit to N documents
      { $lookup: {                                          // Lookup to add username
          from: "users_co",                                 // Collection to join with
          localField: "user_id",                            // Field from the reviews collection
          foreignField: "_id",                              // Field from the users collection
          as: "user_info"                                   // Result as user_info
      }},
      { $lookup: {                                          // Lookup to add party title
          from: "parties_co",                               // Collection to join with
          localField: "party_id",                           // Field from the reviews collection
          foreignField: "_id",                              // Field from the parties collection
          as: "party_info"                                  // Result as party_info
      }},
      { $unwind: "$user_info" },                           // Unwind the results
      { $unwind: "$party_info" },                          // Unwind the results
      { $project: {                                        // Define the structure of the output documents
          review_id: 1,
          party_title: "$party_info.party_title",          // Add party title to the output
          username: "$user_info.username",                 // Add username to the output
      }}
    ]).toArray();
  
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(reviews));
  
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
  
  // try {
  //   // Fetch the latest N reviews for the provided 'party_id'
  //   const reviews = await reviewsCollection.find({ party_id })
  //                                          .sort({ date: -1 }) // Sort by date descending
  //                                          .limit(N)           // Limit to N documents
  //                                          .toArray();         // Convert to array
  
  //   // Send the reviews back in the response
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(reviews));
  
  // } catch (error) {
  //   console.error(error);
  //   res.writeHead(500, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify({ error: "Internal Server Error" }));
  // }
}
