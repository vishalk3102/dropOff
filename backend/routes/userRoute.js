const express = require("express");
const passport = require("passport");
const { myProfile, logout } = require("../controllers/userController");
const { isAuthenticated } = require("../middlewares/auth");

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// router.get(
//   "/login",
//   passport.authenticate("google", {
//     successRedirect: process.env.FRONTEND_URL,
//   })
// );

router.get("/login", passport.authenticate("google"), (req, res, next) => {
  res.send("logged in");
});
router.get("/me", isAuthenticated, myProfile);
router.get("/logout", logout);

module.exports = router;
