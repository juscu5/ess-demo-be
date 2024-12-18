/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('baselinesecurityfile_ess', {
    recid: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    lockonduallog: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    minlenpw: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maxlenpw: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minnumlcl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minnumucl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minnumnc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    allowpu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pwlifetime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rpcbe: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    failedlog: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    autologout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    holdunusedacc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    minnumspec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pwlifetimeadmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    disacc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passwrdreuse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onminlenpw: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onmaxlenpw: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onminnumlcl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onminnumnc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onminnumucl: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onminnumspec: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onpwlifetimeadmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onpwlifetime: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onfailedlog: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onautologout: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onrpcbe: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ondisacc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onpasswrdreuse: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onallowname: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onallowrep: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onallowseq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    onduallog: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deldisacc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    subdrycde: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    onallowpu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    forgotpassexp_admin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 24
    },
    onforgotpassexp_admin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    forgotpassexp_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 24
    },
    onforgotpassexp_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    otpexp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 60
    },
    otpmax_resend: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 3
    },
    otpmax_entry: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 3
    }
  }, {
    sequelize,
    tableName: 'baselinesecurityfile_ess'
  });
};
