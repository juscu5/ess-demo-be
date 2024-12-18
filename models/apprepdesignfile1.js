/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('apprepdesignfile1', {
    columnsavedid: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    menid: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    repalign: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    repbottom: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    repcode: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    repfont: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    replayo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    repleft: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    replistdata: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    reptitle: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    reptop: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    submenid: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'apprepdesignfile1'
  });
};
