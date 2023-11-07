require("dotenv").config(); // Require dotenv to load the .env file
const { MongoClient } = require("mongodb");

// Define your MongoDB URI and database name
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASSWORD}@atlascluster.bvzvel0.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

// Function to connect to the MongoDB server
async function connectToMongoDB() {
  try {
    await client.connect(); // Connect the client to the MongoDB server

    return client; // Return the connected client
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err; // Handle the error as needed
  }
}

module.exports = connectToMongoDB;