
const router = require("express").Router();
const {models} = require('../database/database');
const { authMiddleware } = require("./auth");


const initDepartment = () => {

    

    router.get("/", authMiddleware, async(req,res) =>{
    // router.get("/", authMiddleware, async(req,res) =>{

        console.log(req.parsedToken.data.usrcde);


        const departmentFind = await models.departmentfile.findAll({include: [
            {
                model: models.employeefile,
                attributes: ['empcode', 'fullname', 'usrtyp', 'deptcode']
                
            }
        ]});

        res.status(200).json({status: 'Success', code: 200, payload: departmentFind});

    });

    // FOR TESTING IN POSTMAN
    router.get("/:deptcode", authMiddleware, async(req,res) =>{
    // router.get("/", authMiddleware, async(req,res) =>{

        console.log(req.parsedToken.data.usrcde);
        const {deptcode} = req.params;

        const departmentFind = await models.departmentfile.findOne({where : {deptcode: deptcode}, include: [
            {
                model: models.employeefile,
                attributes: ['empcode', 'fullname', 'usrtyp', 'deptcode']
                
            }
        ]});

        res.status(200).json({status: 'Success', code: 200, payload: departmentFind});

    });


    return router;

};

module.exports = {
    initDepartment
}