let AWS = require("aws-sdk");

AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});

let createAuthorTable = require('./createTables');

let dynamodb = new AWS.DynamoDB();

let createTable = (req,res)=>{
    createAuthorTable.createAuthor(req,res,dynamodb);
}

module.exports = {
    createTable
}