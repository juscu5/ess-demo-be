/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('philhealthfile2013', {
    medbracketno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    medee: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    meder: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    medrangefrom: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    medrangeto: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    phtyp: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    salarycredit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'philhealthfile2013'
  });
};
