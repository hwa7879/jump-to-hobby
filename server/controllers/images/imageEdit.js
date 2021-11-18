const { posts_img } = require("../../models");

module.exports = async (req, res) => {
  const { img_url, content } = req.body;
  const editImage = await posts_img.update(
    {
      img_url,
      content,
      updated_at: new Date(),
    },
    {
      where: { id: req.params.id }, // or req.body.id?
    }
  );
  return res.status(200).send(editImage);
};
