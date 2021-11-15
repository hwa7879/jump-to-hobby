const { users } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userInfo = isAuthorized(req);
  if (!userInfo) {
    return res.status(403).send({ message: "존재하지 않는 유저입니다." });
  }
  await users.findOne({
    where: { username: userInfo.username, email: userInfo.email },
  });
  return res.status(200).send(userInfo);
};
