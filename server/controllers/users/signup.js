const { user } = require("../../models");
const { generateAccessToken } = require("../tokenFunctions");

module.exports = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // 전달받은 유저 정보 중 하나라도 받지 않았을 경우
    if (!username || !email || !password) {
      return res.status(422).send("insufficient parameters supplied");
    }
    // 전달받은 유저 정보와 같은 이메일을 가진 유저 정보 조회 (비밀번호 제외)
    const userInfo = await user.findOne({
      where: { email },
    });
    // 해당 유저 정보가 존재할 경우
    if (userInfo) {
      return res.status(409).send("email exists");
    } else {
      // 해당 유저 정보가 존재하지 않을 경우
      // 유저 정보 생성
      const createUser = await user.create(req.body);
      // 생성한 유저 정보로 JWT 토큰 생성(generateAccessToken)
      const accessToken = generateAccessToken(createUser.dataValues);
      return res.status(201).cookie("jwt", accessToken).json({ message: "ok" });
    }
  } catch (err) {
    console.error;
  }
};

//   const { username, email, password } = req.body;
//   if (!username || !email || !password) {
//     return res.status(400).send({ message: "회원정보를 모두 입력해주세요." });
//   }

//   // 특정 요소를 검색하거나, 존재하지 않으면 새로 생성 (findOrCreate)
//   const [createUser, created] = await user.findOrCreate({
//     where: { email },
//     defaults: { username, email, password },
//   });

//   if (!created) {
//     return res.status(409).send({ message: "이미 가입된 이메일입니다." });
//   } else {
//     return res.status(201).send(createUser);
//   }
// };
