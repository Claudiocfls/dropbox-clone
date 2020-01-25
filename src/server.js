const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

dotenv.config()

const app = express();
app.use(cors());
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('ok');
  socket.on('connectRoom', box => {
    socket.join(box);
  });
});

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-anwgm.mongodb.net/dropbox_clone?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});

const routes = require('./routes');

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(routes);

server.listen(process.env.PORT, () => { console.log(` > Application is running on port ${process.env.PORT}`) });