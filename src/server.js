const app = require("./app");

// Set port number
app.set("port", process.env.PORT || 8080);

// Run server
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}...`);
});
