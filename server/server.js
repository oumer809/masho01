import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH"); // Allow these methods
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Allow these headers
  next();
});

app.use(express.json());

connectDB();
app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () =>
  console.log(`App listening on port ${port}!`.yellow.underline.bold)
);
