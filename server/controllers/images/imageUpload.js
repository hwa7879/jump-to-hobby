const { posts_img } = require("../../models");

module.exports = async (req, res) => {
  const { img_url, content, hobby } = req.body;
  if (!img_url || !content || !hobby) {
    res.status(401).send({ message: "Not authorized" });
  }
  await posts_img.findOne({ where: { img_url, content, hobby } });
  res.status(200).send({ message: "successfully uploaded image" });
};
