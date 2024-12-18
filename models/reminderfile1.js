/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reminderfile1', {
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remcde: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "reminderfile1_remcde_subdrycde_unique"
    },
    remdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reminddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    remtable: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    remtypcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "reminderfile1_remcde_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'reminderfile1'
  });
};
