require('rootpath')();
const express = require("express");
const app = express();
const cors = require('cors');
// const bodyParser = require('body-parser');
const errorHandler = require('./_helpers/error-handler');
const mongoose = require("mongoose");
// const routes = require("./routes");

const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/createProject', require('./newproject/newProjects.controller'));
app.use('/createTask', require('./projectTask/newTasks.controller'));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// global error handler
app.use(errorHandler);
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "public", "index.html"));
// });

// Add routes, both API and view
// app.use(routes);
var mongourl = "mongodb://kevin:kevin123@ds155313.mlab.com:55313/heroku_nrzrr5t8";
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || mongourl 
);
// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
