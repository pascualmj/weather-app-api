const express = require("express");
const morgan = require("morgan");
const app = express();

// Load dotenv module (ONLY IN DEVELOPMENT)
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API Routes
app.use("/hello", (req, res, next) => {
  res.status(200).json({
    message: "Hello world!",
  });
});

// Error handling
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

module.exports = app;
