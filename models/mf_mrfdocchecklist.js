/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mf_mrfdocchecklist', {
    attachmentfile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dirfile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    doccode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    docdesc: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    required: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mf_mrfdocchecklist'
  });
};
