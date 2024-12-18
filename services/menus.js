
const {models} = require('../database/database');
const { titleBuilder } = require('../utilities/string-helper');

const findAndGroupRoutes = async () => {

    try {

        const findMenus = await models.menus.findAll({where : {
            modcde: "ESS",
            is_active: 1
        }, raw: true, order: ['menidx']});

        const modifiedFindMenus = findMenus.map(menu => {
            return {...menu, menprg:titleBuilder(menu.mencap || "")}
        });

        const mainMenus = modifiedFindMenus.filter(data => data.mengrp == "01");
        const mainWithSubmenus = mainMenus.map(data => {
            
            let subMenus = []

            if(data.mensub)
                subMenus = modifiedFindMenus.filter(d=> d.mengrp == data.mensub);

            return {...data, subMenus}
        });

        return mainWithSubmenus;

    } catch (error) {
        console.log("errror", error);
    }
}

module.exports = {findAndGroupRoutes}