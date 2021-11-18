const { posts_img, posts } = require("../../models");
//const { isAuthorized } = require("../tokenFunctions");
module.exports = async (req, res) => {
  const { username } = req.body;
  // if (!username) {
  //   return res.status(400).send({ message: "닉네임을 확인해주세요" });
  // }
  const userImg = await posts.findOne({
    where: {
      user_id,
    },
    attributes: [username],
  });
  if (!userImg) {
    return res.status(404).send({ message: "Not found" });
  } else {
    const img = await posts_img.findOne({
      where: {
        img_url,
      },
    });
    return res.status(200).send(img);
  }
};
