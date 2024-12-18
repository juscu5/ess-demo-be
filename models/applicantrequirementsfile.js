/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applicantrequirementsfile', {
    appcode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    comcde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dateexpire: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dateissue: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    from_standalone_req: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remark: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    requirement: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'applicantrequirementsfile'
  });
};
