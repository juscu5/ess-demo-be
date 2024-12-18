/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagibig_mcrf_file1', {
    date1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date3: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateadded: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deptcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    linenum: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num1: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num10: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num2: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num3: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num4: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num5: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num6: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num7: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num8: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    num9: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    paygroup: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    periodkey: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    textnum1: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum10: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum3: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum4: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum5: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum6: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum7: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum8: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    textnum9: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pagibig_mcrf_file1'
  });
};
