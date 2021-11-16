const { posts_imgs } = require("../../models");

module.exports = async (req, res) => {
  const userInfo = req.params.id;

  if (!userInfo) {
    res.status(404).send({ message: "Not found" });
  }
  await posts_imgs.destroy({
    where: { id: userInfo },
  });
  return res.status(200).send({ message: "successfully deleted img" });
};
