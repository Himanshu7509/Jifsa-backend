import { config } from "dotenv";

config();

// Set default values for environment variables
export const PORT = process.env.PORT || 3000;
export const MONGODB_URI = process.env.MONGODB_URI;

// Validate required environment variables
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is required");
}