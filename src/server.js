const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

dotenv.config()

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-anwgm.mongodb.net/dropbox_clone?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});

const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(routes);

server.listen(process.env.PORT, () => { console.log(` > Application is running on port ${process.env.PORT}`) });