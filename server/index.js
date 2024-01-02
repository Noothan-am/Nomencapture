require("dotenv").config();
import("./connection/db-connections.js");
const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
