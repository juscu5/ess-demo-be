/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payrequestfile2', {
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    levelnum: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usrapprver: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usrapprverdte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payrequestfile2'
  });
};
