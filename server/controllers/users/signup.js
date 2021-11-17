const { user } = require("../../models");

module.exports = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).send({ message: "회원정보를 모두 입력해주세요." });
  }

  // 특정 요소를 검색하거나, 존재하지 않으면 새로 생성 (findOrCreate)
  const [createUser, created] = await user.findOrCreate({
    where: { email },
    defaults: { username, email, password },
  });

  if (!created) {
    return res.status(409).send({ message: "이미 가입된 이메일입니다." });
  } else {
    return res.status(201).send(createUser);
  }
};
