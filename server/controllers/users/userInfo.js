const { user } = require("../../models");
const { verifyAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  // 전달받은 JWT 토큰의 유저정보
  const accessTokenData = verifyAccessToken(req);
  // console.log("여기 서버 userinfo.js에서 accessTokenData");
  // console.log(accessTokenData);
  // JWT 토큰을 전달받지 못했거나 유효하지 않은 JWT 토큰을 전달받은 경우
  if (!accessTokenData) {
    res.status(401).send({ data: null, message: "not authorized" });
  } else {
    res
      .status(200)
      .json({ data: { userInfo: accessTokenData }, message: "ok" });
  }
};
