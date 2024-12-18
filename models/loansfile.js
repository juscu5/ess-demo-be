/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loansfile', {
    defsta: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    glcrecde: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    glcredep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    gldebcde: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    gldebdep: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    govtloan: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inactive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    loanscode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "loansfile_loanscode_subdrycde_unique"
    },
    loansdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    newloanscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oldloanscode: {
      type: DataTypes.STRING(20),
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
      allowNull: true,
      unique: "loansfile_loanscode_subdrycde_unique"
    },
    glcrecde2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    glcredep2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    gldebcde2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    gldebdep2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    loantyp: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'loansfile'
  });
};
