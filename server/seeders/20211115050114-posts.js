const createdAt = new Date();
const updatedAt = new Date();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          title: "riding bike",
          users_id: 1,
          username: "data1",
          createdAt,
          updatedAt,
        },
        {
          title: "playing guital",
          users_id: 2,
          username: "data2",
          createdAt,
          updatedAt,
        },
        {
          title: "take a picture",
          users_id: 3,
          username: "data3",
          createdAt,
          updatedAt,
        },
        {
          title: "climbing",
          users_id: 4,
          username: "deta4",
          createdAt,
          updatedAt,
        },
        {
          title: "take surfing",
          users_id: 5,
          username: "deta5",
          createdAt,
          updatedAt,
        },
        {
          title: "playing soccer",
          users_id: 6,
          username: "deta6",
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
