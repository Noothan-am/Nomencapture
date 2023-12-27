const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://localhost:27017/nomen")
  .then(() => {
    console.log("mongoose connected succesfully");
  })
  .catch((error) => {
    console.error("connection error:", error.message);
  });
