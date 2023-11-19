//reviews_co.js
db.createCollection("reviews_co", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["user_id", "party_id", "review_date", "rating", "review_title", "review_text"],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "_id is the primary key and must be an ObjectId"
                },
                user_id: {
                    bsonType: "objectId",
                    description: "user_id is required and must be an ObjectId"
                },
                party_id: {
                    bsonType: "objectId",
                    description: "party_id is required and must be an ObjectId"
                },
                review_date: {
                    bsonType: "date",
                    description: "review_date is required and must be a date"
                },
                rating: {
                    bsonType: "int",
                    minimum: 0,
                    maximum: 10,
                    description: "rating is required and must be an integer between 0 and 10"
                },
                review_title: {
                    bsonType: "string",
                    description: "review_title is required and must be a string"
                },
                review_text: {
                    bsonType: "string",
                    description: "review_text is required and must be a string"
                }
            }
        }
    }
});
