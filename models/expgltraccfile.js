/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expgltraccfile', {
    allowcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    allowcrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    allowdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    allowdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    basiccr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    basiccrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    basicdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    basicdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    dedcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    dedcrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    deddb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    deddbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    docnum: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    docnumold1xtmp: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    earcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    earcrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    eardb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    eardbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    genfilename: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    netpaycr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    netpaycrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    netpaydb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    netpaydbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    otcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    otcrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    otdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    otdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagcrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagercr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagercrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagerdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagerdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    philcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    philcrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    phildb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    phildbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    philercr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    philercrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    philerdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    philerdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    remarks: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ssscr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ssscrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sssdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sssdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ssseccr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ssseccrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sssecdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sssecdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sssercr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sssercrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ssserdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ssserdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxcrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxercr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxercrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxerdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxerdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tot13thcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tot13thcrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tot13thdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tot13thdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    trndte: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    abcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    abcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    abdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    abdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    basiccr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    basicdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ltcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ltcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ltdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ltdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    otcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    otcrdep2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    otdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    otdbdep2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagercr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagercrdep2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pagerdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    philcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    phildb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    philercr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    philercrdep2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    philerdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ssscr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sssdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ssseccr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ssseccrdep2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sssecdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sssercr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    sssercrdep2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    ssserdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxexpcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxexpcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxexpcrdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxexpcrdep2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxexpdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxexpdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxexpdbdep: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxexpdbdep2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tot13thcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tot13thdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    utcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    utcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    utdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    utdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxrefcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxrefcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxrefdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxrefdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxrefexpcr: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxrefexpcr2: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxrefexpdb: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    taxrefexpdb2: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'expgltraccfile'
  });
};
