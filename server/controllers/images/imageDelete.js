const { posts_imgs } = require("../../models");
//const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const userImg = req.params.id;

  if (!userImg) {
    return res.status(404).send({ message: "Not found" });
  } else {
    await posts_imgs.destroy({
      where: { id: userImg },
    });
    return res.status(200).send({ message: "successfully deleted img" });
  }
};

// const userImg = req.params.id;

// if (!isAuthorized) {
//   return res.status(404).send({ message: "Not found" });
// } else {
//   await posts_imgs.destroy({
//     where: { id: userImg },
//   });
//   return res.status(200).send({ message: "successfully deleted img" });
// }
