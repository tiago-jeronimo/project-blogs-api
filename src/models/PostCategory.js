const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    }, {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    });
  
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        through: PostCategory,
        foreignKey: "categoryId",
        as: "categories",
        otherKey: "postId",
      });
      models.Category.belongsToMany(models.BlogPost, {
        through: PostCategory,
        foreignKey: "postId",
        as: "posts",
        otherKey: "categoryId",
      });
    }
  
    return PostCategory;
  }
  
  module.exports = PostCategoryModel;