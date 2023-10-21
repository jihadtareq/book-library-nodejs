'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class borrowingProcess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.book, { as: 'books', foreignKey: 'book_id'});
      this.belongsTo(models.borrower, { as: 'borrowers', foreignKey: 'borrower_id'});

    }
  }
  borrowingProcess.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    book_id: DataTypes.BIGINT,
    borrower_id: DataTypes.BIGINT,
    checkout_date: DataTypes.DATE,
    due_date: DataTypes.DATE,
    returned_date: DataTypes.DATE,
    is_over_due: DataTypes.DATE,
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'borrowingProcess',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return borrowingProcess;
};