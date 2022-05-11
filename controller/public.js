// --------------------- CONTROLLER FOR / ---------------------
const BlogPost = require("../model/blogPost");

exports.getHomepage = async (req, res, next) => {
  res.render("public/home", {
    // let it empty because homepage has already a h1 in the header
    pageTitle: "Homepage",
    backgroundUrl: "/images/ghs_img/uCubeFavicon.png",
    path: "/",
  });
};

exports.getAbout = (req, res, next) => {
  res.render("public/about", {
    pageTitle: "Über uns",
    path: "/about",
  });
};

// exports.getBlogPosts = async (req, res, next) => {
//   const blogPosts = await BlogPost.find();
//   if (!blogPosts) {
//     console.log("An error occured while fetching for blogPosts");
//   }

//   // TODO: FETCH BLOG POSTS AND PASS THEM INTO THE EJS FILE AS ARGS
//   res.render("public/blog", {
//     pageTitle: "Blog",
//     path: "/blog",
//     blogPosts: blogPosts,
//   });
// };

// TODO: singular
// exports.getBlogPost = (req, res, next) => {
//   const blogId = req.params.blogId;
//   console.log(blogId);
//   // TODO: FETCH SINGLE BLOG POST FROM DATBASE
//   // TODO: IMPLEMENT BLOG HANDLING (ARGS: blogPost, path > /blog, pageTitle = BlogPostTitle, existingDetails > true, flase, )
//   res.render("public/blog-detail", {
//     pageTitle: "Blog-detail",
//   });
// };

// FROM BLOG POST
// exports.postBlogComment = (req, res, next) => {
//   // TODO PUT THE USER COMMENT IN DATABASE AND PUT THE LAST 5 COMMENTS
//   const { name, email, comment } = req.body;
//   console.log(`From Blog: `, name, email, comment);
//   res.redirect("/");
// };

exports.getPublications = (req, res, next) => {
  // TODO: FETCH PUBLICATION POSTS AND PASS THEM INTO THE EJS FILE AS ARGS
  // TODO: IMPLEMENT PUBLICATION HANDLING (ARGS: publicationPost, path > /publications, pageTitle = PublicationPostTitle, existingDetails > true, flase, )
  res.render("public/publications", {
    pageTitle: "Publikationen",
    path: "/publications",
  });
};
// TODO singular
// exports.getPublication = (req, res, next) => {
//   const publicationId = req.params.publicationId;
//   // TODO: FETCH SINGLE PUBLICATION POST FROM DATBASE
//   res.render("public/publication-detail", {
//     pageTitle: "Publication-detail",
//   });
// };

exports.getContact = (req, res, next) => {
  res.render("public/contact", {
    pageTitle: "Kontakt",
    path: "/contact",
  });
};
// CONTACT FORM
exports.postContact = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  //  TODO: ------------- IMPLEMENT EMAIL SERVER CONFIG TO SEND THE EMAIL ------
  console.log(`From Contact: `, name, email, subject, message);
  res.redirect("/");
};
