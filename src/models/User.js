'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      type: DataTypes.STRING,
      field: 'display_name'
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING
    },
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: "users"
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as:'posts',
      foreignKey: 'user_id'
    })
  }
  return User;
};