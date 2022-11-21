module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define("BlogPost", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            field: 'user_id',
        },
        published: {
            type: DataTypes.DATE
        },
        updated: {
            type: DataTypes.DATE
        }
    },
        {
        timestamps: false,
        underscored: true,
        tableName: "blog_posts",
        }
    );
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
          as:'user',
          foreignKey: 'user_id'
        })
      }

    return BlogPost;
}