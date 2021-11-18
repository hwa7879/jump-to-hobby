const { posts_img } = require("../../models");
//const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userImg = req.params.id;

  if (!userImg) {
    return res.status(404).send({ message: "Not found" });
  } else {
    await posts_img.destroy({
      where: { id: userImg },
    });
    return res.status(200).send({ message: "successfully deleted img" });
  }
};
