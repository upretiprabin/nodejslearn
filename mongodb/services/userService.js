var {User} = require('../models/User')

var create = async (req,res) =>{
    let requestBody = req.body;
    let userObject = {
        fname : requestBody.firstName,
        lname : requestBody.lastName,
        enterprise_id : requestBody.enterpriseId
    }
    var newUser = new User(userObject);
    var result = await new Promise((resolve,reject)=>{
        newUser.save().then((doc)=>{
            console.log("Saved ",doc);
            resolve(doc);
        },(e)=>{
            console.log("Unable to save ",e);
            resolve(e);
        });

    })
    res.send(result);
}

module.exports = {
    create
}