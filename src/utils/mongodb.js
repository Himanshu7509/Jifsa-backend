import mongoose from "mongoose";
import { MONGODB_URI } from "../config/config.js";

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("connected to the mongodb");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnect;