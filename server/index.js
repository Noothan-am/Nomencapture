const express = require("express");
const app = express();
const port = 8000;
// import the router
// const router = require("./router.js");

// middleware
app.use(express.json());
// app.use("/api", router);
app.get("/", () => {
  console.log("ram");
});
// start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
