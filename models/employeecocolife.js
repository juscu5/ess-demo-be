/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeecocolife', {
    benage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    benname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    benrelationship: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cocopolicyno: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cocosumassured: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeecocolife'
  });
};
