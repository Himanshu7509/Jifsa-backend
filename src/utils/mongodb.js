import mongoose from "mongoose";
import { MONGODB_URI } from "../config/config.js";

// Global variable to cache the connection across requests in serverless environments
global.mongoose = {
  conn: null,
  promise: null,
};

const dbConnect = async () => {
  // In serverless environments, connection pooling is key
  // We'll cache the connection to avoid repeated connection attempts
  
  if (global.mongoose.conn) {
    console.log("Using existing MongoDB connection");
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    const opts = {
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0,   // and MongoDB driver buffering
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    };

    global.mongoose.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Connected to MongoDB");
      return mongoose;
    }).catch((error) => {
      console.error("MongoDB connection error:", error);
      throw new Error("Failed to connect to MongoDB");
    });
  }
  
  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
};

// Add a disconnect function for cleaning up connections in serverless environments
const dbDisconnect = async () => {
  if (global.mongoose.conn) {
    await mongoose.disconnect();
    global.mongoose.conn = null;
    global.mongoose.promise = null;
    console.log("Disconnected from MongoDB");
  }
};

export { dbConnect, dbDisconnect };