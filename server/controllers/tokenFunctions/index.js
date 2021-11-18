require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

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
    console.log("여기 샌드어세스토큰");
    return res.cookie("jwt", access_token);
  },

  verifyAccessToken: (req) => {
    console.log("여기 버리파이인증");
    // const authorization = req.headers["cookie"];
    // console.log(authorization);

    try {
      if (!req.cookies["jwt"]) {
        return null;
      }
      // const token = authorization.split(" ")[1];
      const token = req.cookies["jwt"];
      const decoded = verify(token, process.env.ACCESS_SECRET);
      return decoded;
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
