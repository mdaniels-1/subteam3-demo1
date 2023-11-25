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

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASSWORD}@atlascluster.bvzvel0.mongodb.net/?retryWrites=true&w=majority`;
const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let usersCollection;

// Connect to MongoDB and set up collections for use
exports.dbConnect = async () => {
    const db = mongoClient.db("dummy_db");
    usersCollection = db.collection("users_co");
  };
  
  exports.login = async (req, res, username, password) => {
    // Validate the presence of the 'username' parameter
    if (!username) {
      res.writeHead(400, { "Content-Type": "application/json" });
      console.error('username parameter is missing');
      return res.end(JSON.stringify({ error: "username parameter is missing" }));
    }
    // Validate the presence of the 'password' parameter
    if (!password) {
      res.writeHead(400, { "Content-Type": "application/json" });
      console.error('password parameter is missing');
      return res.end(JSON.stringify({ error: "password parameter is missing" }));
    }
  
    try {
        
    } catch (error) {
      // NOT FOUND
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Endpoint not found" }));
    }
  };