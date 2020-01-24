const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const app = express();
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-anwgm.mongodb.net/dropbox_clone?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});

const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000);