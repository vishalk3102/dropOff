const express = require("express");
const dotenv = require("dotenv");
const connectPassport = require("./utils/Provider");
const session = require("express-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middlewares/errorMiddleware");

dotenv.config({ path: "backend/config/config.env" });
const app = express();

// USING MIDDLEWARE
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

// IMPORTING ROUTES
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");

app.use("/api/v1", user);
app.use("/api/v1", order);

connectPassport();

//USING ERROR MIDDLEWARES
// app.use(errorMiddleware);
module.exports = app;
