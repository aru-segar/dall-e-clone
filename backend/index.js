import express from "express"; // import tools
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config(); // load .env file

const app = express(); // create express app
app.use(cors()); // enable CORS
app.use(express.json({ limit: "50mb" })); // enable JSON body parsing

app.use("/api/v1/post", postRoutes); // use post routes
app.use("/api/v1/dalle", dalleRoutes); // use dalle routes

app.get("/", async (req, res) => {
  // define a route handler for the default home page
  res.send("Hello World!"); // send a response to the client
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL); // connect to MongoDB
    app.listen(8000, () =>
      console.log("Server is running on http://localhost:8000")
    );
  } catch (err) {
    console.log(err);
  }
};

startServer(); // start the server
