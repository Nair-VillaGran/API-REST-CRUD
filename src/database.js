import mongoose from "mongoose"; //import {connect} from "mongoose";
import { MONGODB_URI } from "./config.js";

(async () => {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("DB connection to:", db.connection.name);
  } catch (error) {
    console.error(">>Error: ", error);
  }
})();