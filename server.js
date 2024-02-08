const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const postRoutes = require("./routes/Post");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/posts", postRoutes);

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

mongoose.connect(process.env.MONGO_URI).then(() => {
  // Listen for requests using Port number from .env file
  const server = app.listen(4040, () => {
    console.log("connected to db and listening on port", 4040);
  });
});
