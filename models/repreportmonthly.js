/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repreportmonthly', {
    amt1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    amt2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "repreportmonthly_deptcode_unique"
    },
    des1: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "repreportmonthly_des1_unique"
    },
    des2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    headingkey: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "repreportmonthly_headingkey_unique"
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
    tableName: 'repreportmonthly'
  });
};
