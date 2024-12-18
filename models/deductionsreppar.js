/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deductionsreppar', {
    dedcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    deddesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dedtyp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    linenum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'deductionsreppar'
  });
};
