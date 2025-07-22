import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import connectDB from "./config/db.js";
import bookRoutes from './routes/bookRoutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT;

// CORS Middleware
const corsMiddleware = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://effective-funicular-q7wv5vvxvq92476p-5173.app.github.dev"
  ); // Allow your specific origin
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  ); // Allowed methods
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  ); // Allowed headers
  res.setHeader("Access-Control-Allow-Credentials", "true"); // Allow credentials
  next(); // Proceed to the next middleware or route handler
};
// Use the CORS middleware
app.use(corsMiddleware);
app.use(express.json())


connectDB();
app.use("/books", bookRoutes);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () =>
  console.log(`App listening on port ${port}!`.yellow.underline.bold)
);
