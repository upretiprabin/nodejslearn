var {mongoose} = require('../connection').mongoose;

var {Schema} = mongoose;
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