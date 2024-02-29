const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const { auth, requiresAuth } = require('express-openid-connect');

const postRoutes = require("./routes/Post");

const userRoutes = require("./routes/User");

dotenv.config();

const app = express();

app.use(express.json());

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: `https://${process.env.ISSUER_BASE_URL}`,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.use("/posts", postRoutes);
app.use("/users", userRoutes);

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));


// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

mongoose.connect(process.env.MONGO_URI).then(() => {
  // Listen for requests using Port number from .env file
  const server = app.listen(4040, () => {
    console.log("connected to db and listening on port", 4040);
  });
});
