require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");
const ACCESS_SECRET = process.env.ACCESS_SECRET;
const REFRESH_SECRET = process.env.REFRESH_SECRET;

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "60s" });
  },

  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: "5d" });
  },

  sendRefreshToken: (res, refresh_token) => {
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
    });
  },

  sendAccessToken: (res, access_token) => {
    return res.status(200).send({ data: { access_token } });
  },

  verifyAccessToken: (req) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return null;
    }
    const token = authorization.split(" ")[1];
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  },

  verifyRefreshToken: (req) => {
    const refreshToken = req.cookies.refreshToken;
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
      return null;
    }
  },
};
