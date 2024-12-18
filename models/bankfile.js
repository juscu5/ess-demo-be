/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bankfile', {
    bankcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "bankfile_subdrycde_bankcode_unique"
    },
    bankdescription: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    newbankcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oldbankcode: {
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
      allowNull: true,
      unique: "bankfile_subdrycde_bankcode_unique"
    }
  }, {
    sequelize,
    tableName: 'bankfile'
  });
};
