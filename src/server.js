const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://claudio:teste@cluster0-anwgm.mongodb.net/dropbox_clone?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000);