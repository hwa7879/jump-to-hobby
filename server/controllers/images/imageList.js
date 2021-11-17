const { posts_imgs, posts } = require("../../models");
//const { isAuthorized } = require("../tokenFunctions");
module.exports = async (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).send({ message: "닉네임을 확인해주세요" });
  }
  const userImg = await posts.findOne({
    where: {
      users_id: username,
    },
  });
  if (!userImg) {
    return res.status(404).send({ message: "Not found" });
  } else {
    const img = await posts_imgs.findOne({
      where: {
        img_url,
      },
    });
    return res.status(200).send(img);
  }
};
// const userImg = isAuthorized(req);
//   const img = await posts_imgs.findOne({
//     where: {
//       img_url,
//     },
//   });
//   if (!userImg) {
//     return res.status(403).send({ message: "존재하지 않는 유저입니다" });
//   }
//   await users.findOne({
//     where: { username },
//   });
//   return res.status(200).send(img);
