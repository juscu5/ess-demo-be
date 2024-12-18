/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('benefitsfile2', {
    bencode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "benefitsfile2_bencode_subdrycde_unique"
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
      allowNull: true,
      unique: "benefitsfile2_bencode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'benefitsfile2'
  });
};
