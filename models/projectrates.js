/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectrates', {
    cuscde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cusgrpcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cusgrpdsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dailyrate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dailyrate_bill: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    defprj: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "projectrates_empcode_prjcde_unique"
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    prjcde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "projectrates_empcode_prjcde_unique"
    },
    prjdsc: {
      type: DataTypes.STRING(50),
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
    tableName: 'projectrates'
  });
};
