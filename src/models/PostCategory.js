const BlogPost = require('./BlogPost');
module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory',
    {
    postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        },
        categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        },
    },
    {
    timestamps: false,
    underscored: true,
    tableName: "post_categories",
    }
    );

    PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
        as: "category",
        through: PostCategory,
        foreignKey: "post_id",
        otherKey: "category_id",
    });
    models.Category.belongsToMany(models.BlogPost, {
        as: "post",
        through: PostCategory,
        foreignKey: "category_id",
        otherKey: "post_id",
    });
    };
    
      return PostCategory;
    };