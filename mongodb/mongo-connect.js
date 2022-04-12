const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/nodemongo',(err,db)=>{
    if(err){
        console.log("Unable to connect mongodb",err)
    }else{
        console.log("Connected to mongodb. Database : nodemongo");
        db.close();
    }
})
