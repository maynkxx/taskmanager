// backend/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // This line is correct, it uses an environment variable for the connection string
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected"); // <-- Added semicolon
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

module.exports = connectDB; // <-- Added semicolon