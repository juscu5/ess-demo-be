/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teacher_loadfile', {
    apptype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lvlcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    period: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    schyr: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    seccde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'teacher_loadfile'
  });
};
