"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hashtag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hashtag.init(
    {
      tags: DataTypes.STRING,
      posts_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "hashtag",
    }
  );
  return hashtag;
};
