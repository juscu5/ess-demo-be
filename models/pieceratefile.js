/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pieceratefile', {
    cmnpct: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    cmnquo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
    cmnrat: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00
    },
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
    inactive: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inc13: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inc1601c_15: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inc1601c_16: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded3: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded4: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incded5: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incnt: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incph: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incpi: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incsss: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    inctax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incytdgropay: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    newpiececode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oldpiececode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    piececode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pieceratefile_piececode_subdrycde_unique"
    },
    piecedesc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    piecerate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.00000
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    setup1601c: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "pieceratefile_piececode_subdrycde_unique"
    },
    taxclass: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    w2num: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    w2num08: {
      type: DataTypes.STRING(20),
      allowNull: true
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
    w2num08_new: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    incgsis: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'pieceratefile'
  });
};
