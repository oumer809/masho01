import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleWare/errorMiddleware.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://reimagined-space-meme-7vw5v94gw4wjhrvwv-5173.app.github.dev"); // Allow requests from any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, PATCH"); // Allow these methods
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, XMLHttpRequest"
  ); // Allow these headers
  res.header("Access-Control-Allow-Credentials", 'true')
  next();
});


app.use(express.json());
// app.use(notFound)
// app.use(errorHandler)


connectDB();
app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () =>
  console.log(`App listening on port ${port}!`.yellow.underline.bold)
);
