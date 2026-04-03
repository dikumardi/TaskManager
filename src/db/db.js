const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Check if URI exists
    if (!process.env.MONGO_URI) {
      console.error("❌ MONGO_URI is missing in .env file");
      process.exit(1);
    }

    // Connect to DB
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Successfully Connected to DB");
  } catch (error) {
    console.error("❌ Failed to connect to DB", error);
    process.exit(1); // stop server if DB fails
  }
};

module.exports = connectDB;