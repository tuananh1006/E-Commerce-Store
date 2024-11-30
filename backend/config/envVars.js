import dotenv from "dotenv";

dotenv.config();

export const envVars = {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL,
};
