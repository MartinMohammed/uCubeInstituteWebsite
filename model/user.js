const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // specify the fields we want to have in a user document
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // TODO: RESET TOKEN FOR PASSWORD ß
  posts: [
    // can have populated post documents
    {
      postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
      },
    },
  ],
  publications: [
    // can have populated Publication documents
    {
      postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Publication",
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
