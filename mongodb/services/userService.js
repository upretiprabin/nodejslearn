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

var getAllUsers = async (req,res) =>{
    var result = await new Promise((resolve,reject)=>{
        User.find().then((results)=>{
            console.log("results ",results);
            resolve(results);
        },(e)=>{
            console.log("Unable to find results ",e);
            resolve(e);
        });

    })
    res.send(result);
}

var getUser = async (req,res) =>{
    var requestBody = req.body;
    var findParams = {};
    if(requestBody.firstName)
        findParams['fname'] = requestBody.firstName
    if(requestBody.lastName)
        findParams['lname'] = requestBody.lastName
    if(requestBody.enterpriseId)
        findParams['enterprise_id'] = requestBody.enterpriseId;

    var result = await new Promise((resolve,reject)=>{
        User.find(findParams).then((results)=>{
            console.log("results ",results);
            resolve(results);
        },(e)=>{
            console.log("Unable to find results ",e);
            resolve(e);
        });

    })
    res.send(result);
}

var update = async (req,res) =>{
    var requestBody = req.body;
    var updateParams = {};
    if(requestBody.firstName)
        updateParams['fname'] = requestBody.firstName
    if(requestBody.lastName)
        updateParams['lname'] = requestBody.lastName
    if(requestBody.enterpriseId)
        updateParams['enterprise_id'] = requestBody.enterpriseId;

    var result = await new Promise((resolve,reject)=>{
        User.where({_id:requestBody.id}).update(updateParams).then((results)=>{
            console.log("results ",results);
            User.find({_id:requestBody.id}).then((doc)=>{
                resolve(doc);
            },(e)=>{
                console.log("Unable to find results ",e);
                resolve(e);
            });
        },(e)=>{
            console.log("Unable to find results ",e);
            resolve(e);
        });

    })
    res.send(result);
}

var deleteUser = async (req,res) =>{
    var requestBody = req.body;
    var findParams = {};
    if(requestBody.id)
        findParams['_id'] = requestBody.id
    if(requestBody.firstName)
        findParams['fname'] = requestBody.firstName
    if(requestBody.lastName)
        findParams['lname'] = requestBody.lastName
    if(requestBody.enterpriseId)
        findParams['enterprise_id'] = requestBody.enterpriseId;
    console.log("params",findParams)

    var result = await new Promise((resolve,reject)=>{
        User.deleteMany(findParams).then((results)=>{
            console.log("results ",results);
            resolve(results);
        },(e)=>{
            console.log("Unable to find results ",e);
            resolve(e);
        });

    })
    res.send(result);
}

module.exports = {
    create,
    getAllUsers,
    getUser,
    update,
    deleteUser
}