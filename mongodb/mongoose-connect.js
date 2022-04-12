var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/nodemongo');

var Books = mongoose.model('Books',{
    name: {
        type : String,
        required : true
    },
    info:{
        type : Object
    },
    createdAt : {
        type : Number,
        default : null
    }
});

var newBook = new Books({
    name : 'Word Power',
    info : {
        author : 'Norman lewis'
    }
});

newBook.save().then((doc)=>{
    console.log("Saved ",doc)
},(e)=>{
    console.log("Unable to save ",e)
});

var book = Books.find({
    name : 'Word Power'
}).then((docs)=>{
    console.log("docs",docs)
})
var id = '6251559aa3a0db90fb3adc66';
var sameBook = Books.findById(id).then((book)=>{
    console.log("Books name is",book.name)
})