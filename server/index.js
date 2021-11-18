require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

require("./models");
const controllers = require("./controllers");

const app = express();
const PORT = process.env.PORT || 80;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// router;
app.post("/login", controllers.users.login);
app.post("/logout", controllers.users.logout);
app.post("/signup", controllers.users.signup);
app.get("/userInfo", controllers.users.userInfo);

// app.get("/imageInfo", controllers.images.imageInfo);
// app.post("/imageEdit", controllers.images.imageEdit);
// app.post("/imageUpload", controllers.images.imageUpload);
// app.post("/imageDelete", controllers.images.imageDelete);
// app.get("/imageList", controllers.images.imageList);

app.get("/", (req, res) => {
  res.status(201).send("Hello World");
});

const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

module.exports = server;
