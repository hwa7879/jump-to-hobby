const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const controllers = require("./controllers");

const app = express();
const port = 80;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// router;
app.post("/login", controllers.login);
app.post("/logout", controllers.logout);
app.post("/signup", controllers.signup);
app.post("/userInfo", controllers.userInfo);

const server = app.listen(port, () => {
  console.log(`http server listening on ${port}`);
});

module.exports = server;
