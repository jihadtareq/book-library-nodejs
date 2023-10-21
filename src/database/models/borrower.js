'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class borrower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  borrower.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        set (value) {
          this.setDataValue('email', value?.trim())
        }
    },
    phone: {
        type: DataTypes.STRING
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
  },{
    sequelize,
    modelName: 'borrower',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  })
  return borrower
}
