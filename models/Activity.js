const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: Number,
    required: true,
  },
  ImageUrl: {
    type: String,
    required: true,
  },
  isPopular: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
