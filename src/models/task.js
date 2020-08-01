const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  status: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('tasks', TaskSchema);
