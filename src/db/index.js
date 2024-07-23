import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
   

    // Construct the URI
    const uri = `${process.env.MONGODB_URL}/${DB_NAME}`;
    if (!process.env.MONGODB_URL || !DB_NAME) {
      throw new Error("MONGODB_URL or DB_NAME environment variable is not defined.");
    }

    // Connect to MongoDB
    const connectionInstance = await mongoose.connect(uri);

    // Log connection information
    console.log(`Connected to Database: ${connectionInstance.connection.host}`);
  } catch (error) {
    // Log errors and exit process with failure code
    console.error(`Error while connecting to DB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
