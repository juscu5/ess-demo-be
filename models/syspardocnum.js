/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('syspardocnum', {
    doccde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    docdesc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    islock: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    lastused_docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'syspardocnum'
  });
};
