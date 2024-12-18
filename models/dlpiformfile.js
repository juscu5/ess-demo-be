/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dlpiformfile', {
    piformdsc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    piformfile: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    piformpath: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    piformtitle: {
      type: DataTypes.STRING(200),
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
    tableName: 'dlpiformfile'
  });
};
