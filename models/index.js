
const associationDefiner = async (sequelize) => {
    const {models} = sequelize;

    const departmentfile = models.departmentfile;
    const employeefile = models.employeefile;


    departmentfile.hasMany(employeefile, {foreignKey: 'deptcode', sourceKey: 'deptcode'});
    employeefile.belongsTo(departmentfile, {foreignKey: 'deptcode', targetKey: 'deptcode'});

}

module.exports = {associationDefiner}