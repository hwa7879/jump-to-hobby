"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasMany(models.posts_imgs, {
      //   foreignkey: posts_id,
      // });
      // this.hasMany(models.hashtags, {
      //   foreignkey: posts_id,
      // });
      // this.hasMany(models.comments, {
      //   foreignkey: posts_id,
      // });
    }
  }
  post.init(
    {
      title: DataTypes.STRING,
      users_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "post",
    }
  );
  return post;
};
