module.exports = (req, res) => {
  res.cookie("login", false);
  res.cookie("accessToken", null);
  res.status(200).send("성공적으로 로그아웃 되셨습니다.");
};
