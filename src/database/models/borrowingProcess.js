'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class borrowingProcess extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.belongsTo(models.book, { as: 'books', foreignKey: 'bookId'});
      this.belongsTo(models.borrower, { as: 'borrowers', foreignKey: 'borrowerId'});
      // this.belongsToMany(models.book, { through: 'borrowing_processes', foreignKey: 'bookId'});
      // this.belongsToMany(models.borrower, { through: 'borrowing_processes', foreignKey: 'borrowerId'});
    }
  }
  borrowingProcess.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    bookId: {
      type: DataTypes.INTEGER,
      field: 'book_id'

    },
    borrowerId:{
      type: DataTypes.INTEGER,
      field: 'borrower_id'
    },
    checkoutDate: {
      type:DataTypes.DATE,
      field:'checkout_date'
    },
    dueDate: {
      type:DataTypes.DATE,
      field:'due_date'
    },
    returnedDate: {
      allowNull: true,
      type:DataTypes.DATE,
      field:'returned_date'
    },
    isOverDue: {
      allowNull: true,
      type:DataTypes.BOOLEAN,
      defaultValue:0,
      field:'is_over_due'
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
    modelName: 'borrowingProcess',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  })
  return borrowingProcess
}
