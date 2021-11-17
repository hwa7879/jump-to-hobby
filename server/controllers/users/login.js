const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    // 전달받은 유저정보
    const { email, password } = req.body;
    // DB 유저 정보 조회
    const userInfo = await user.findOne({
      where: { email, password },
    });

    // 전달받은 유저 정보가 잘못된 경우
    if (!userInfo) {
      return res.status(404).send("invalid user");
    } else {
      // DB의 정보와 일치하는 유저 정보를 전달받은 경우
      // 조회한 유저 정보로 JWT 토큰 생성(generateAccessToken)
      const accessToken = generateAccessToken(userInfo.dataValues);
      // 응답 헤더 쿠키에 토큰 담기(sendAccessToken)
      sendAccessToken(res, accessToken);
      return res.status(200).json({ message: "ok" });
    }
  } catch (err) {
    console.error;
  }
};
