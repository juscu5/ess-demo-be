/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ssspayment', {
    amtpaid: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    cremon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    creyer: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    datepaid: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    paynum: {
      type: DataTypes.STRING(10),
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
    }
  }, {
    sequelize,
    tableName: 'ssspayment'
  });
};
