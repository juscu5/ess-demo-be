/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expsimplyaccfile', {
    allowcr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    allowdb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    dedcr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    deddb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "expsimplyaccfile_docnum_unique"
    },
    earcr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    eardb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    genfilename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    netpaycr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    netpaydb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    pagcr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    pagdb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    pagercr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    pagerdb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    philcr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    phildb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    philercr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    philerdb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(39),
      allowNull: true
    },
    ssscr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sssdb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sssercr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ssserdb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    taxcr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    taxdb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    taxercr: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    taxerdb: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    trndte: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'expsimplyaccfile'
  });
};
