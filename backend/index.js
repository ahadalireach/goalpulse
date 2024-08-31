// server.js or index.js
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const path = require("path");

connectDB();

const app = express();

const corsOptions = {
  origin: ["https://goalpulse.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/goals", require("./routes/GoalRoutes"));
app.use("/api/users", require("./routes/UserRoutes"));

app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server started on port ${port}`.italic.underline)
);
