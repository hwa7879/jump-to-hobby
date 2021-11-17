const { posts_img } = require("../../models");
module.exports = async (req, res) => {
  //const id = { id } =req.params
  const img = await posts_img.findOne({
    where: { id, img_url },
  });
  if (!imageInfo) {
    res.status(404).json({
      data: null,
      message: "이미지를 찾을 수 없습니다.",
    });
  } else {
    res.status(200).json({
      data: imageInfo,
      message: "ok",
    });
  }
};
