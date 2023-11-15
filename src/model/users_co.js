db.createCollection("users_co", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["username"],
        properties: {
          username: {
            bsonType: "string",
            description: "username is required and must be a string"
          }
        }
      }
    }
  });
  