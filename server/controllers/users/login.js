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

    if (!userInfo) {
      return res.status(404).send("invalid user");
    } else {
      // 데이터에 비밀번호 있는 거 삭제
      delete userInfo.dataValues.password;
      const accessToken = generateAccessToken(userInfo.dataValues);
      // console.log("여기 어세스 토큰");
      // console.log(accessToken);
      res.cookie("jwt", accessToken);
      sendAccessToken(res, accessToken);
    }
  } catch (err) {
    console.error;
  }
};
