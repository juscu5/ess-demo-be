/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('positionfile', {
    catcode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "positionfile_catcode_unique"
    },
    jobdsc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jobspecs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jobtitle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    poscode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "positionfile_poscode_unique"
    },
    posdesc: {
      type: DataTypes.STRING(30),
      allowNull: true,
      unique: "positionfile_posdesc_unique"
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
    tableName: 'positionfile'
  });
};
