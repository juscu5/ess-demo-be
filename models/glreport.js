/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('glreport', {
    creamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    debamt: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    glactcde: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    glactdsc: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    glcategory: {
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
    },
    repgroup: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    repsort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sumperaccnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'glreport'
  });
};
