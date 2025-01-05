const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://shanto:12345@cluster0.yc26y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas", error);
    process.exit(1);
  }
};

module.exports = connectDB;
