const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // an image must not be included in a blog post
  imageUrl: {
    type: String,
    required: false,
  },
  // when the blogPost was created
  createdAt: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Publication", publicationSchema);
