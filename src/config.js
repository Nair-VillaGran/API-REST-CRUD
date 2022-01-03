import { config } from "dotenv";

config();

//Database
export const MONGODB_URI = process.env.MONGODB_URI || 3000;

//PORT
export const PORT = process.env.PORT || 3000;