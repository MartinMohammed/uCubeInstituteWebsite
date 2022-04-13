// ---------- IMPORT/REQUIRE MODULES ----------
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
// ------------- REGISTER MIDDLEWARE -------------
// --- TO PARSE LATER REQUEST BODIES = REGISTER MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// --------------- REQUIRE FUNCTION FROM SELF MADE MODULES -------
const publicRoutes = require("./routes/public");
const adminRoutes = require("./routes/admin");

// ---------- CONSTANTS ----------
const LOCAL_PORT = 3000;

// ---------- APP ---------- > USE MODEL VIEW CONTROLLER
// ! register routes
// ROUTE FILTERING
// app.use("/admin", adminRoutes);
app.use("/admin", adminRoutes);
app.use("/", publicRoutes);

// app.route("/about").get((req, res) => res.render("about.ejs"));
// app.route("/publications").get((req, res) => {
//   res.render("publications.ejs");
// });
// app.route("/blog").get((req, res) => res.render("blog"));
// app.route("/contact").get((req, res) => {
//   res.render("contact");
// });

// TODO: IMPLEMENT sequelize.sync().then(() => {app.listen}) | so that the server only starts when the sync was successfully
app.listen(LOCAL_PORT, () =>
  console.log(`SERVER IS SUCCESSFULLY LISTENING AT PORT: ${LOCAL_PORT}`)
);
