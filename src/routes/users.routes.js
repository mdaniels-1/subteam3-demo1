const rsvpController = require("../controllers/users.controller.js");

function handleUserRequest(req, res) {
  console.log(`users.routes started`);
  rsvpController.dbConnect();
  console.log(`users.routes dbconnect`);

  const parsedUrl = new URL(req.url, "http://localhost:8080");
  if (
    parsedUrl.pathname === "/api/rsvp" &&
    req.method === "POST" &&
    parsedUrl.searchParams.has("party_id") &&
    parsedUrl.searchParams.has("user_id")
  ) {
    console.log(`parses passed.`);
    rsvpController.rsvpToParty(
      req,
      res,
      parsedUrl.searchParams.get("party_id"),
      parsedUrl.searchParams.get("user_id")
    );
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Endpoint not found" }));
  }
}

module.exports = handleUserRequest;
