const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env
const mongoURI = process.env.MONGO_URI; // Access the mongoURI from process.env

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Additional options if needed, e.g., useCreateIndex, useFindAndModify (though these are deprecated in recent versions)
    });
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectToMongo;
