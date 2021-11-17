const { user } = require("../../models");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../tokenFunctions");

module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "이메일이나 비밀번호를 확인해주세요." });
  }

  const loginUser = await user.findOne({ where: { email, password } });
  if (!loginUser) {
    return res.status(404).json({ message: "일치하는 유저가 없습니다." });
  }

  return res.status(200).json({
    data: {
      accessToken: generateAccessToken,
      refreshToken: generateRefreshToken,
      message: "로그인이 되었습니다.",
    },
  });
};
