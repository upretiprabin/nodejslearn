var {mongoose} = require('../connection').mongoose;

var {Schema} = mongoose;
console.log("mongoose",mongoose)
console.log("Schema",JSON.stringify(Schema))
var User = mongoose.model('User',{
    fname:{
        type : String,
        required : true
    },
    lname:{
        type : String,
        required : true
    },
    enterprise_id:{
        type : Schema.Types.ObjectId,
        ref : 'Enterprise'
    }
});

module.exports = {
    User
}