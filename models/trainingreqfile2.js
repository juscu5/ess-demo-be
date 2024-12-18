/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trainingreqfile2', {
    duedte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    filedsc: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    filename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    filesize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trndte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    trngdocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'trainingreqfile2'
  });
};
