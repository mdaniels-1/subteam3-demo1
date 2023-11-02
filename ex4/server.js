const express = require('express');
const mongodb = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

// MongoDB connection string
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@atlascluster.bvzvel0.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.get('/api/userinfo', async (req, res) => {
    const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect();
        const database = client.db('users_db');
        const users = database.collection('users_co');

        const username = req.query.username;
        const user = await users.findOne({ username: username });

        if (user) {
            res.status(200).json({ email: user.email, age: user.age, phone: user.phone });
        } else {
            res.status(404).json({ error: 'User not found' });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
});

app.post('/api/adduser', async (req, res) => {
    const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const { username, age, email, phone } = req.body;

    // Basic validation
    if (!username || !age || !email || !phone) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
        await client.connect();
        const database = client.db('users_db');
        const users = database.collection('users_co');

        const newUser = { username, age, email, phone };
        await users.insertOne(newUser);

        res.status(201).json({ message: 'User added successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
});

app.delete('/api/deleteuser/:username', async (req, res) => {
    const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const username = req.params.username; // Get the username from the URL parameter

    try {
        await client.connect();
        const database = client.db('users_db');
        const users = database.collection('users_co');

        // Deleting the user based on the username
        const result = await users.deleteOne({ username: username });

        if (result.deletedCount === 1) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
