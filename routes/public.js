// ------------ PUBLIC = FOR EVERY REGULAR VISITOR  ----------
const path = require("path");
const express = require("express");

// --------- IMPORT CONTROLLERS ---------
const publicController = require("../controller/public.js");
const res = require("express/lib/response");

// New Router object - gets plugged in the main router
const router = express.Router();

router.get("/", publicController.getHomepage);
router.get("/about", publicController.getAbout);

router.get("/contact", publicController.getContact);
// * for contact form
router.post("/contact", publicController.postContact);

router.get("/blog", publicController.getBlogPosts);
router.post("/blog/add-comment", publicController.postBlogComment);

router.get("/publications", publicController.getPublications);
// * TO HAVE A CLOSE LOOK AT A POST OR PUBLICATION POST: USE DYNAMIC ROUTE PARAMETERS
router.get("/blog/:blogId", publicController.getBlogPost);
router.get("/publications/:publicationId", publicController.getPublication);

// minirouter can also apply middleware
// router.use((req, res, next) => {
//   res.redirect("/");
// });

module.exports = router;
