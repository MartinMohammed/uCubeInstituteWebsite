// PACKAGES
const { check, body } = require("express-validator/check");
const path = require("path");
const express = require("express");

const adminController = require("../controller/admin");

const router = express.Router();

// --------- TO GET THE PAGE TO ADD A POST AND THE ROUTE TO DO IT
router.get("/add-blogPost", adminController.getAddBlogPost);
router.post("/add-blogPost", adminController.postAddBlogPost);

router.get("/add-publication", adminController.getAddPublication);
router.post("/add-publication", adminController.postAddPublication);

// ----------- FOR GETING EDITING PAGE WITH EDIT OPTION
// post & blog id in the req.body
router.get("/edit-blogPost/:postId", adminController.getEditBlogPost);
router.post("/edit-blogPost", adminController.postEditBlogPost);

router.get(
  "/edit-publication/:publicationId",
  adminController.getEditPublication
);
router.post("/edit-publication", adminController.postEditPublication);

module.exports = router;
