module.exports = {
  users: {
    login: require("./users/login"),
    logout: require("./users/logout"),
    signup: require("./users/signup"),
    userInfo: require("./users/userInfo"),
  },
  images: {
    imageInfo: require("./images/imageInfo"),
    imageUpload: require("./images/imageUpload"),
    imageEdit: require("./images/imageEdit"),
  },
};
