const mongoose = requier('mongoose');

const Box = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  files: [],
}, {
  timestamps: true,
});