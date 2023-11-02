// script.js

// Connect to the database
conn = new Mongo();
db = conn.getDB("users_db");

// Creating a unique index on username
db.users.createIndex({ username: 1 }, { unique: true });

// Applying schema validation
db.createCollection("users_co", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["username", "age", "email", "phone"],
            properties: {
                username: {
                    bsonType: "string",
                    description: "username is required and must be a string"
                },
                age: {
                    bsonType: "int",
                    minimum: 0,
                    description: "age is required, must be an integer, and not less than 0"
                },
                email: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
                    description: "email is required and must be a string"
                },
                phone: {
                    bsonType: "string",
                    description: "phone is required and must be a string"
                }
            }
        }
    }
});
