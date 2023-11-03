const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// MongoDB connection string
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASSWORD}@atlascluster.bvzvel0.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.get('/api/reviews/:review_id', async (req, res) => {
    try {
        // This should be outside of the request handler, typically connected when the app starts
        await client.connect(); 

        const database = client.db('dummy_db');
        const reviews = database.collection('reviews_co');

        const reviewId = parseInt(req.params.review_id);
        const query = { 'review_id' : reviewId };
        const review = await reviews.findOne(query);

        // Check if the review was found
        if (review) {
            console.log(`Review with ID ${reviewId} found:`, review);
            res.json(review);
        } else {
            // Log detailed error message on server side for debugging
            console.error(`Review with ID ${reviewId} not found.`);
            // Send a detailed error message back to the client
            res.status(404).json({
                error: 'Review not found',
                message: `No review with ID ${reviewId} exists in the database. Please check the ID and try again.`,
                reviewIdRequested: reviewId
            });
        }
    } catch (error) {
        // Log the error stack for more detailed debugging information
        console.error('An error occurred while fetching the review:', error.stack);
        // Send back a general error message to the client
        res.status(500).json({
            error: 'Internal Server Error',
            message: 'An error occurred while processing your request. Please try again later.'
        });
    }
    // Do not close the client here; it should remain connected for the lifetime of the application
    finally {
        await client.close();
    }
});

// app.post('/api/adduser', async (req, res) => {
//     const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     const { username, age, email, phone } = req.body;

//     // Basic validation
//     if (!username || !age || !email || !phone) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//     if (!emailPattern.test(email)) {
//         return res.status(400).json({ error: 'Invalid email format' });
//     }

//     try {
//         await client.connect();
//         const database = client.db('users_db');
//         const users = database.collection('users_co');

//         const newUser = { username, age, email, phone };
//         await users.insertOne(newUser);

//         res.status(201).json({ message: 'User added successfully' });

//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     } finally {
//         await client.close();
//     }
// });

// app.delete('/api/deleteuser/:username', async (req, res) => {
//     const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     const username = req.params.username; // Get the username from the URL parameter

//     try {
//         await client.connect();
//         const database = client.db('users_db');
//         const users = database.collection('users_co');

//         // Deleting the user based on the username
//         const result = await users.deleteOne({ username: username });

//         if (result.deletedCount === 1) {
//             res.status(200).json({ message: 'User deleted successfully' });
//         } else {
//             res.status(404).json({ message: 'User not found' });
//         }

//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     } finally {
//         await client.close();
//     }
// });


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
