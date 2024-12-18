/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hrapproverfile2', {
    appempcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    appfullname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trntyp: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hrapproverfile2'
  });
};
