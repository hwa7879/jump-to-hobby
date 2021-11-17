const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "data1",
          email: "data1@high4.com",
          password: "123456",
          users_image:
            "https://cdn.discordapp.com/attachments/907147691765674049/907910847534366730/logo_2.png",
          createdAt,
          updatedAt,
        },
        {
          username: "data2",
          email: "data2@high4.com",
          password: "123456",
          users_image:
            "https://cdn.discordapp.com/attachments/907147691765674049/907910847534366730/logo_2.png",
          createdAt,
          updatedAt,
        },
        {
          username: "data3",
          email: "data3@high4.com",
          password: "123456",
          users_image:
            "https://cdn.discordapp.com/attachments/907147691765674049/907910847534366730/logo_2.png",
          createdAt,
          updatedAt,
        },
        {
          username: "data4",
          email: "data4@high4.com",
          password: "123456",
          users_image:
            "https://cdn.discordapp.com/attachments/907147691765674049/907910847534366730/logo_2.png",
          createdAt,
          updatedAt,
        },
        {
          username: "deta5",
          email: "data5@high4.com",
          password: "123456",
          users_image:
            "https://cdn.discordapp.com/attachments/907147691765674049/907910847534366730/logo_2.png",
          createdAt,
          updatedAt,
        },
        {
          username: "data6",
          email: "data6@gmail.com",
          password: "123456",
          users_image:
            "https://cdn.discordapp.com/attachments/907147691765674049/907910847534366730/logo_2.png",
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
