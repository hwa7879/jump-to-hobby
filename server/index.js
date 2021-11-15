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
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// router;
app.post("/login", controllers.users.login);
app.post("/logout", controllers.users.logout);
app.post("/signup", controllers.users.signup);
app.post("/userInfo", controllers.users.userInfo);

app.post("/imageInfo", controllers.images.imageInfo);
app.post("/imageEdit", controllers.images.imageEdit);
app.post("/imageUpload", controllers.images.imageUpload);
app.post("/imageDelete", controllers.images.imageDelete);
app.post("/imageList", controllers.images.imageList);

const server = app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

module.exports = server;
