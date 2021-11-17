const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          title: "riding bike",
          user_id: 1,
          createdAt,
          updatedAt,
        },
        {
          title: "playing guital",
          user_id: 2,
          createdAt,
          updatedAt,
        },
        {
          title: "take a picture",
          user_id: 3,
          createdAt,
          updatedAt,
        },
        {
          title: "climbing",
          user_id: 4,
          createdAt,
          updatedAt,
        },
        {
          title: "take surfing",
          user_id: 5,
          createdAt,
          updatedAt,
        },
        {
          title: "playing soccer",
          user_id: 6,
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
