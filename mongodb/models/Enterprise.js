var {mongoose} = require('../connection').mongoose;

var {Schema} = mongoose;
var Enterprise = mongoose.model('Enterprise',{
    geofence:{
        type : Array
    },
    customFields:{
        type : Array
    }
});


module.exports = {
    Enterprise
}