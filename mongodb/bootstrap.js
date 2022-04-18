//bootstrapping data
var {User} = require('./models/User');
var {Enterprise} = require('./models/Enterprise');

var enterprise1 = new Enterprise({
    geofence : ['1','2','3'],
    customFields : ['Employee ID', 'Cost Center']
});

enterprise1.save().then((doc)=>{
    console.log("Saved ",doc)
},(e)=>{
    console.log("Unable to save ",e)
});

var user1 = new User({
    fname : 'prabin',
    lname : 'upreti',
    enterprise_id : enterprise1._id
});

user1.save().then((doc)=>{
    console.log("Saved ",doc)
},(e)=>{
    console.log("Unable to save ",e)
});