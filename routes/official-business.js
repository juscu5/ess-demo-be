
const router = require("express").Router();
const {models} = require('../database/database');
const { getOfficialBusinessApprovalRequest, getOfficialBusinessRequest, postSingleRequest, postBulkRequest } = require("../services/official-business");
const { authMiddleware } = require("./auth");
const { Op } = require('sequelize');


const initOfficialBusiness = () => {

    router.get("/me", authMiddleware, async(req,res) =>{
        const {query} = req;
        
        const obRequest = await getOfficialBusinessRequest(req.parsedToken.data.usrcde, query);
        res.status(200).json({status: 'Success', code: 200, payload: obRequest});
    });

    router.get("/ob-request", authMiddleware, async(req,res) => {

        const {query} = req;
        
        const obRequest = await getOfficialBusinessApprovalRequest(req.parsedToken.data.usrcde, query);
        res.status(200).json({status: 'Success', code: 200, payload: obRequest})

    });

    router.post("/single-ob", authMiddleware, async(req,res) => {
        try {
            const data = req.body;
            const empcode = req.parsedToken.data.usrcde;
    
            await postSingleRequest(data, empcode);
            res.status(200).json({status: 'Success', code: 200, payload: {msg : 'Data has been added successfully'}})
            
        } catch (error) {
            res.status(200).json({status: 'Error', code: 500, payload: error})
        }
    });

    
    router.post("/bulk-ob", authMiddleware, async(req,res) => {
        const data = req.body;
        const obRequest = await postBulkRequest(data);
        res.status(200).json({status: 'Success', code: 200, payload: obRequest})
    });

    return router;

};

module.exports = {
    initOfficialBusiness
}