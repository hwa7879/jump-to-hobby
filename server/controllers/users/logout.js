const { user } = require("../../models");
const { verifyAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const token = verifyAccessToken(req);

  if (!token) {
    return res.status(400).json({
      data: null,
      message: "you are currently not logined",
    });
  }

  if (token === "err") {
    return res.status(500).json({
      data: null,
      message: "Sever Error",
    });
  }

  res.status(205).json({
    data: null,
    message: "Successfully signed out!",
  });
};
