const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema({
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
  // TODO: A SPECIFIC BLOG POST COULD HAVE SOME COMMENTS
});

module.exports = mongoose.model("blogPost", blogPostSchema);
