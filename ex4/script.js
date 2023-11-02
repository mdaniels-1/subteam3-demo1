//script.js

// Applying schema validation
db.createCollection("reviews_co", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["review_id", "user_id", "host_id", "review_date", "rating", "review_title", "review_text"],
            properties: {
                review_id: {
                    bsonType: "int",
                    minimum: 0,
                    description: "review_id is required and must be an integer"
                },
                user_id: {
                    bsonType: "int",
                    minimum: 0,
                    description: "user_id is required and must be an integer"
                },
                host_id: {
                    bsonType: "int",
                    minimum: 0,
                    description: "host_id is required and must be an integer"
                },
                review_date: {
                    bsonType: "date",
                    description: "review_date is required and must be a date"
                },
                rating: {
                    bsonType: "int",
                    minimum: 0,
                    maximum: 10,
                    description: "rating is required and must be an integer"
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

// Inserting sample data
db.reviews_co.insertMany([
    {
        review_id: 1,
        user_id: 101,
        host_id: 201,
        review_date: new Date("2023-11-01T00:00:00Z"),
        rating: 8,
        review_title: "Great Stay!",
        review_text: "The host was very accommodating and the place was clean and comfortable."
    },
    {
        review_id: 2,
        user_id: 102,
        host_id: 202,
        review_date: new Date("2023-11-02T00:00:00Z"),
        rating: 7,
        review_title: "Nice Location",
        review_text: "Located close to public transport making it easy to travel around."
    },
    {
        review_id: 3,
        user_id: 103,
        host_id: 203,
        review_date: new Date("2023-11-03T00:00:00Z"),
        rating: 9,
        review_title: "Home Away From Home",
        review_text: "Felt very homely, had all the necessary amenities. Would recommend!"
    },
    {
        review_id: 4,
        user_id: 104,
        host_id: 204,
        review_date: new Date("2023-11-04T00:00:00Z"),
        rating: 6,
        review_title: "Good for Short Stay",
        review_text: "Good for a short stay, but lacked some basic amenities."
    },
    {
        review_id: 5,
        user_id: 105,
        host_id: 205,
        review_date: new Date("2023-11-05T00:00:00Z"),
        rating: 10,
        review_title: "Exceptional",
        review_text: "Absolutely loved staying here! The host went above and beyond."
    }
]);

