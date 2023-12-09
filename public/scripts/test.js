const dotenv = require("dotenv");
const path = require("path");

// Debug: Log the expected path of the .env file
const envPath = path.resolve(process.cwd(), '.env');
// console.log(`Looking for .env file at: ${envPath}`);
// // Attempt to load the .env file
// const result = dotenv.config();
// // Debug: Log the result of dotenv.config()
// if (result.error) {
//   console.error('Error loading .env file', result.error);
// } else {
//   console.log('.env file loaded successfully');
// }

const pword = 'L2nCWX3Z7de57hdN';
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://myra:${pword}@atlascluster.bvzvel0.mongodb.net/?retryWrites=true&w=majority`;
const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let partiesCollection;

// Connect to MongoDB and set up collections for use
async function dbConnect(){
    const db = mongoClient.db("dummy_db");
    partiesCollection = db.collection("parties_co");
    console.log("connected to db");
};

async function pbh(i){
  //check if host_id exists
  if(!i){
    console.log("no id")
  }
  try {
    await dbConnect();
    const query = {host_id: i};

    // const p = partiesCollection.find(query).toArray();
    await partiesCollection.find(query).toArray(function(err, documents) {
      if (err) {
        console.error('Error retrieving documents:', err);
        return;
      }
  
      console.log('Documents:', documents);
    });
  } catch (error) {
    console.log(error);
  }

}
const id = "5d4dd653-c7a1-4fd0-a7a3-f871467756ad";

async function gogo(){
  await dbConnect();
  await pbh(id);
  await console.log('done');
}

gogo();


