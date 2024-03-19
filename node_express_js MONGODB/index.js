const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const products_routes = require("./routes/products");

const app = express();


app.use(cors())
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/productProject")
  .then((result) => {
    console.log("server is listening on port 5000");
    app.listen(5000);
  })
  .catch((err) => console.log(Error));


  app.use("/api/products", products_routes);