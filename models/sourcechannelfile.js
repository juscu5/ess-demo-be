/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sourcechannelfile', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sccode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "sourcechannelfile_sccode_subdrycde_unique"
    },
    scdesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sc_appcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sc_empcount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "sourcechannelfile_sccode_subdrycde_unique"
    }
  }, {
    sequelize,
    tableName: 'sourcechannelfile'
  });
};
