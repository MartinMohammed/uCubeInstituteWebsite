exports.getHomepage = (req, res, next) => {
  res.render("public/home", {
    // let it empty because homepage has already a h1 in the header
    pageTitle: "",
    backgroundUrl: "/images/ghs_img/uCubeFavicon.png",
    path: "/",
  });
};

exports.getAbout = (req, res, next) => {
  res.render("public/about", {
    pageTitle: "About",
    path: "/about",
  });
};

exports.getBlogPosts = (req, res, next) => {
  //   next();
  // TODO: FETCH BLOG POSTS AND PASS THEM INTO THE EJS FILE AS ARGS
  res.render("public/blog", {
    pageTitle: "Blog",
    path: "/blog",
  });
};

// singular

exports.getBlogPost = (req, res, next) => {
  const blogId = req.params.blogId;
  // TODO: FETCH SINGLE BLOG POST FROM DATBASE
  // TODO: IMPLEMENT BLOG HANDLING (ARGS: blogPost, path > /blog, pageTitle = BlogPostTitle, existingDetails > true, flase, )
  res.render("public/blog-detail", {
    pageTitle: "Blog-detail",
  });
};

// FROM BLOG POST
exports.postBlogComment = (req, res, next) => {
  // TODO PUT THE USER COMMENT IN DATABASE AND PUT THE LAST 5 COMMENTS
  const { name, email, comment } = req.body;
  console.log(`From Blog: `, name, email, comment);
  res.redirect("/");
};

exports.getPublications = (req, res, next) => {
  // TODO: FETCH PUBLICATION POSTS AND PASS THEM INTO THE EJS FILE AS ARGS
  // TODO: IMPLEMENT PUBLICATION HANDLING (ARGS: publicationPost, path > /publications, pageTitle = PublicationPostTitle, existingDetails > true, flase, )
  res.render("public/publications", {
    pageTitle: "Publications",
    path: "/publications",
  });
};
// singular
exports.getPublication = (req, res, next) => {
  const publicationId = req.params.publicationId;
  // TODO: FETCH SINGLE PUBLICATION POST FROM DATBASE
  res.render("public/publication-detail", {
    pageTitle: "Publication-detail",
  });
};

exports.getContact = (req, res, next) => {
  res.render("public/contact", {
    pageTitle: "Contact",
    path: "/contact",
  });
};
// CONTACT FORM
exports.postContact = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  //  TODO: ------------- IMPLEMENT EMAIL SERVER CONFIG TO SEND THE EMAIL ------
  console.log(`From Conteact: `, name, email, subject, message);
  res.redirect("/");
};
