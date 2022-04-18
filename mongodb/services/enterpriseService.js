var {Enterprise} = require('../models/Enterprise')

var create = async (req,res) =>{
    let requestBody = req.body;
    let enterpriseObj = {
        geofence : requestBody.geofence,
        customFields : requestBody.customFields
    }
    var newEnterprise = new Enterprise(enterpriseObj);
    var result = await new Promise((resolve,reject)=>{
        newEnterprise.save().then((doc)=>{
            console.log("Saved ",doc);
            resolve(doc);
        },(e)=>{
            console.log("Unable to save ",e);
            reject(e);
        });

    })
    res.send(result);
}

module.exports = {
    create
}