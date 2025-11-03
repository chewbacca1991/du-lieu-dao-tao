const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  progress: { type: Object, default: {} }
});

module.exports = mongoose.model('User', userSchema);