/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('helpfile2', {
    constat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    curdir: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    editdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    menkey: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mensub: {
      type: DataTypes.STRING(100),
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
    tableName: 'helpfile2'
  });
};
