import mongoose from "mongoose";

import { envVars } from "./envVars.js";

export const connectDB = async () => {
  const MONGO_URL = envVars.MONGO_URL;
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
