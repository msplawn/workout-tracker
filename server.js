//importing npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const compression = require("compression");

//creating app
const app = express();
const PORT = process.env.PORT || 5000;

//routes
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

//compression and middleware
// app.use(compression());

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(htmlRoutes);
app.use("/api", apiRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
console.log(`App running on port ${PORT}!`);
});