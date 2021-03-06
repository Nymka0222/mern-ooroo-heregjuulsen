const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  process.env.ATLAS_URI ||
  "mongodb+srv://test123:test123@cluster0.bjmvh.mongodb.net/test123?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const informationRouter = require("./routes/information");

app.use("/inf", informationRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});