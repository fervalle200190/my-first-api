const express = require("express");
const mongoose = require("mongoose");
const infoRoutes = require("./routes/info");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
// Routes
app.use(`/info`, infoRoutes);

// mongodb connections
mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => {
    console.log("conectado a mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => console.log(`server levantado en ${port}`));
