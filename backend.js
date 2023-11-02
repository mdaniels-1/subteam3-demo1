const connectToMongoDB = require("./mongo-connect");
const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

//Create the server
const server = http.createServer();
const port = 8000;

//Handle requests
server.on("request", async (req, res) => {
  try {
    //May need to fix URL to match the current page
    if (req.url === "/") {
      const client = await connectToMongoDB();
      //May not need to retrieve the partyID from db depending on how party page code is implemented
      let partyName = "Best Halloween Party"; // Retrieve the party name from the URL
      const party = await client
        .db("Map")
        .collection("Parties")
        .findOne({ Name: partyName });

      let partyID = party._id; // Retrieve the partyID

      //Read the template file inside views folder
      fs.readFile("./template.ejs", "utf8", (err, data) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end("Error reading template file");
        } else {
          //Render the template with the partyID
          let html = ejs.render(data, { partyID });
          res.setHeader("Content-Type", "text/html");
          res.end(html);
        }
      });
    } else {
      //Handle other requests
      res.statusCode = 404; // Set the status code to 404, blame user
      res.end("Not found"); // Send the response
    }
  } catch (error) {
    console.error(error);
    res.statusCode = 500; // Set the status code to 500, blame server
    res.end("Error fetching partyID"); // Send the response
  }
});

//Start listening on the port
server.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Log the port; for testing purposes
});
