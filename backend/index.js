const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const connectDB = require("./db/db");
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
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server started on port ${port}`.italic.underline)
);
