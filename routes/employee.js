
const router = require("express").Router();
const { raw } = require("mysql2");
const {models} = require('../database/database');
const { authMiddleware } = require("./auth");


const initEmployee = () => {

    router.get("/:deptcode", authMiddleware, async(req,res) =>{

        const {deptcode} = req.params;
        const employeeFind = await models.employeefile.findAll({where:{deptcode: deptcode}, attributes: ['empcode', 'fullname', 'usrtyp', 'deptcode']});

        res.status(200).json({status: 'Success', code: 200, payload: employeeFind});

    });

    return router;

};

module.exports = {
    initEmployee
}