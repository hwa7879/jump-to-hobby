module.exports = (req, res) => {
  res.cookie("login", false);
  res.cookie("accessToken", null);
  res.status(200).send("성공적으로 로그아웃 되셨습니다.");
};
// res.cookie("login", false);
// res.cookie("accessToken", null);
// res.status(200).send("성공적으로 로그아웃 되셨습니다.");

// const { accessToken } = req.body;

// if(!accessToken) {
//     res.status(400).send('bad request')
// } else {
//     res.status(200).send('logout success')
// }
