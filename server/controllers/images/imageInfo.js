const { posts_imgs } = require("../../models");

module.exports = async (req, res) => {
  const imageInfo = await posts_imgs
    .findAll({
      attributes: ["id", "img_url"],
    })
    .then((result) => {
      if (!result) {
        return null;
      }
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
    });
  // const { posts_id } = req.body;
  // const imageInfo = await posts_imgs
  //   .findAll({
  //     where: { id: posts_id },
  //     attributes: ["id", "img_url"],
  //   })
  //   .then((result) => {
  //     if (!result) {
  //       return res
  //         .status(404)
  //         .send({ data: null, message: "이미지를 찾지 못했습니다." });
  //     } else {
  //       return res.status(200).send({
  //         data: imageInfo,
  //         message: "성공적으로 이미지를 가져왔습니다.",
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     res.status(500).send({ data: null, message: "서버 에러" });
  //   });
};
