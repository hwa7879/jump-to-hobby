const { posts_img } = require("../../models");

module.exports = async (req, res) => {
  const imageInfo = req.params.id;
  if (!imageInfo) {
    res.status(404).send({ message: "NOT FOUND" });
  } else {
    const img = await posts_img.findOne({
      where: { id: post_img },
      attributes: ["id", "img_url"],
    });
    res
      .status(200)
      .send({ data: img, message: "성공적으로 이미지를 가져왔습니다." });
  }
};

// const { posts_id } = req.params;
//   const imageInfo = await posts_imgs
//     .findAll({
//       where: { id: posts_id },
//       attributes: ["id", "img_url"],
//     })
//     .then((result) => {
//       if (!result) {
//         return res
//           .status(404)
//           .send({ data: null, message: "이미지를 찾지 못했습니다." });
//       } else {
//         return res.status(200).send({
//           data: imageInfo,
//           message: "성공적으로 이미지를 가져왔습니다.",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({ data: null, message: "서버 에러" });
//     });
