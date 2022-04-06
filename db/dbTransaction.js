let AWS = require("aws-sdk");

AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});

let createAuthorTable = require('./createTables');
let loadAuthorTable = require('./loadSampleData');
let addItemToAuthor = require('./addItemToAuthorTable');
let getAuthorItem = require('./getItemToAuthorTable');
let scanAuthorTable = require('./scanAuthorTable');
let updateItemFromAuthor = require('./updateItem');
let deleteItemFromAuthor = require('./deleteItem');

let dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

let createTable = (req,res)=>{
    createAuthorTable.createAuthor(req,res,dynamodb);
}

let loadSampleData = (req,res)=>{
    loadAuthorTable.loadData(req,res,docClient);
}

let addItem = (req,res)=>{
    addItemToAuthor.addItem(req,res,docClient);
}

let getItem = (req,res)=>{
    getAuthorItem.getItem(req,res,docClient);
}

let scan = (req,res)=>{
    scanAuthorTable.scan(req,res,docClient);
}

let updateItem = (req,res)=>{
    updateItemFromAuthor.updateItem(req,res,docClient);
}

let deleteItem = (req,res)=>{
    deleteItemFromAuthor.deleteItem(req,res,docClient);
}

module.exports = {
    createTable,
    loadSampleData,
    addItem,
    getItem,
    scan,
    updateItem,
    deleteItem
}