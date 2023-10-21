'use strict';
const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class book extends Model {

    static associate (models) {
      // define association here
      this.belongsToMany(models.borrower, { through: 'borrowing_processes', foreignKey: 'borrowerId'});
    }
  }
  
  book.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ISBN: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      field:'isbn'

    },
    shelfLocation: {
      type: DataTypes.STRING,
      allowNull: false,
      field:'shelf_location'
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue:1,
      field:'is_available'
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field:'created_at'
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field:'updated_at'

    }
  }, {
    sequelize,
    modelName: 'book',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });
  return book;
};