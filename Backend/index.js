const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const database = require("./Config/database");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

database.connect();

const app = express();

app.use(cors());

const mediaRoutes = require("./routes/media");

app.use("/api/v1/media", mediaRoutes);
app.use("/public", express.static(path.join(__dirname, "public")));



app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`)
});
