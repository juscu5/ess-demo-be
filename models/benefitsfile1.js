/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('benefitsfile1', {
    bencode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    bendesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ellig: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'benefitsfile1'
  });
};
