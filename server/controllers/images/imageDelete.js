const { posts_imgs } = require("../../models");

module.exports = async (req, res) => {
  const userinfo = req.params.id;

  if (!userinfo) {
    res.satus(404).send({ message: "Not found" });
  }
  await posts_imgs.destroy({
    where: { id: userinfo },
  });
  return res.status(200).send({ message: "successfully deleted img" });
};
