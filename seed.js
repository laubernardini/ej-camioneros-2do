const { Camionero } = require("./database/models/models");

Camionero.findAll().then(camionerosList => {
    Camion.findAll().then(camionesList => {
        camionerosList[0].addCamion(camionesList[0]).then(obj => {
            console.log(obj);
        }).catch(err => {
            console.log(err);
        })
    })
})