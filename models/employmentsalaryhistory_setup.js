/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employmentsalaryhistory_setup', {
    auto_esh: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    disp_colno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 100
    },
    disp_esh: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    esh_typename_code: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    inc_esh: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'employmentsalaryhistory_setup'
  });
};
