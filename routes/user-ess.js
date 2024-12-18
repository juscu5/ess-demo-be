
const router = require("express").Router();
const {models} = require('../database/database');
const { login, getMe } = require("../services/user-ess");
const { authMiddleware } = require("./auth");


const initUserEss = () => {
    router.get("/", authMiddleware, async(req,res) =>{

        const users = await models.users_ess.findAll();
        res.status(200).json({status: 'Success', code: 200, payload: users});

    });

    router.get("/me", authMiddleware, async(req,res) =>{

        const myself = await getMe(req.parsedToken.data.usrcde);
        res.status(200).json({status: 'Your profile', code: 200, payload: myself });

    });

    router.post("/login", async(req,res) => {

        const {err, data} = await login(req.body);

        if(err){
            return res.status(err.code).json(err)
        }

        res.status(data.code).json(data);

    });

    return router;

};

module.exports = {
    initUserEss
}