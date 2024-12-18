/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('loanrequestfile1', {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    approve: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    late: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    loanscode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    reqloandocnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    request_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    trndte: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'loanrequestfile1'
  });
};
