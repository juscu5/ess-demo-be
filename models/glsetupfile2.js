/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('glsetupfile2', {
    creact: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    debact: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    glcategory: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    government: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    mascde: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
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
    tableName: 'glsetupfile2'
  });
};
