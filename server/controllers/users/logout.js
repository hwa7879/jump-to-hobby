module.exports = (req, res) => {
  // TODO: 로그아웃 로직을 작성합니다.
  res.clearCookie("jwt");
  res.status(205).send("Logged out successfully");
  // res.status(500).send();
};
