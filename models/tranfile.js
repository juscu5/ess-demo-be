/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tranfile', {
    factor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modcde: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    trncde: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    trndsc: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    trntyp: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tranfile'
  });
};
