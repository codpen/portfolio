const express = require("express");
const path = require("path");
const app = express();
//use build
app
  .use(express.static(path.resolve(__dirname, "build")))
  .get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });

app.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`🚀  Server is ready port: ${process.env.PORT || 4000}`);
});
