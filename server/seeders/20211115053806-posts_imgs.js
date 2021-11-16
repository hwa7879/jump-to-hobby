const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts_imgs",
      [
        {
          posts_id: 1,
          img_url:
            "https://cdn.discordapp.com/attachments/879259521619472414/909674414092713984/pexels-vladislav-murashko-6109993.jpg",
          content: "자전거 타는 중",
          hobby: "자전거",
          createdAt,
          updatedAt,
        },
        {
          posts_id: 2,
          img_url:
            "https://cdn.discordapp.com/attachments/879259521619472414/909674253337628672/pexels-porapak-apichodilok-346726.jpg",
          content: "기타 치는 중",
          hobby: "기타",
          createdAt,
          updatedAt,
        },
        {
          posts_id: 3,
          img_url:
            "https://cdn.discordapp.com/attachments/879259521619472414/909674780905599036/pexels-george-pak-7968331.jpg",
          content: "사진 찍는 중",
          hobby: "사진",
          createdAt,
          updatedAt,
        },
        {
          posts_id: 4,
          img_url:
            "https://cdn.discordapp.com/attachments/879259521619472414/909674629013073980/pexels-andrew-shelley-8454457.jpg",
          content: "암벽등반 하는 중",
          hobby: "암벽등반",
          createdAt,
          updatedAt,
        },
        {
          posts_id: 5,
          img_url:
            "https://cdn.discordapp.com/attachments/879259521619472414/909675430620061716/pexels-vladimir-kudinov-67386.jpg",
          content: "서핑 하는 중",
          hobby: "서팡",
          createdAt,
          updatedAt,
        },
        {
          posts_id: 6,
          img_url:
            "https://cdn.discordapp.com/attachments/879259521619472414/909676126383788112/pexels-jeandaniel-francoeur-4789457.jpg",
          content: "축구 하는 중",
          hobby: "축구",
          createdAt,
          updatedAt,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
