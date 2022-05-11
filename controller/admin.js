// --------------------- CONTROLLER FOR /admin ---------------------
// Models
const User = require("../model/user");
const BlogPost = require("../model/blogPost");

// ! ---------------- RELATING TO BLOG POST
exports.getAddBlogPost = (req, res, next) => {
  // use editBlogPost both for editing a blog Post and adding one depening on editing value
  res.render("admin/edit-post", {
    pageTitle: "Add blogPost",
    path: "/admin/add-blogPost",
    editing: false,
    addPostAddress: "add-blogPost",
    actionPath: "add-blogPost",
  });
};
// --------- CREATE A NEW BLOG POST ------------
exports.postAddBlogPost = async (req, res, next) => {
  const { title, content } = req.body;
  console.log(`From Add Post Blog: `);
  // TODO: SHOULD BE VALIDATED
  const blogPost = new BlogPost({
    title: title,
    content: content,
    imageUrl: "jasdjadjsf",
    createdAt: new Date(),
  });
  const savedBlogPost = blogPost.save();
  if (!savedBlogPost) {
    console.log("a error occured");
  }
  console.log("Blog was saved succesfully");

  res.redirect("/");
};

exports.getEditBlogPost = (req, res, next) => {
  const publicationId = req.params.publicationId;
  const post = { title: "My post", content: "first post", id: publicationId };
  const blogId = req.params.postId;
  // PROVIDE THE APPROPRIATE POST TO EDIT
  res.render("admin/edit-post", {
    pageTitle: "Edit blogPost",
    actionPath: "edit-blogPost",
    path: "/edit-post",
    editing: true,
    // pass a BlogPost if editing
    post,
  });
};

exports.postEditBlogPost = (req, res, next) => {
  // title & content of blogPost
  // now replace old data with new data in db
  const { title, content, id: postId } = req.body;
  console.log("FROM postEditBlogPost: ", title, content);
  res.redirect("/");
};

// ! ---------------- RELATING TO PUBLICATION
exports.getAddPublication = (req, res, next) => {
  res.render("admin/edit-post", {
    pageTitle: "Add publication",
    path: "/admin/add-publication",
    editing: false,
    addPostAddress: "add-publication",
    actionPath: "/admin/add-publication",
  });
};

exports.postAddPublication = (req, res, next) => {
  const { title, content } = req.body;
  console.log("From postAddPublication: ", title, content);
  res.redirect("/");
};

exports.getEditPublication = (req, res, next) => {
  const publicationId = req.params.publicationId;
  const post = { title: "Hi", content: "first publication", id: publicationId };
  res.render("admin/edit-post", {
    pageTitle: "Edit publication",
    actionPath: "edit-publication",
    path: "/admin/edit-post",
    editing: true,
    post: post,
  });
};

exports.postEditPublication = (req, res, next) => {
  // title & content of Publication
  // now replace old data with new data in db
  const { title, content, id: publicationId } = req.body;
  console.log("FROM postEditPublication: ", title, content);
  res.redirect("/");
};
