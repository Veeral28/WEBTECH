const { MongoClient } = require('mongodb');

const DATABASE_NAME = 'eng-dict';
const MONGO_URL = "mongodb://localhost:27017/${DATABASE_NAME}";
let db = null;

async function main() {
    try {
        db = await MongoClient.connect(MONGO_URL);
        console.log("Connected to MongoDB successfully!");
        // You can perform further operations with the 'db' object here
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

main();