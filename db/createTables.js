let params = {
    TableName : "Author",
    KeySchema: [
        { AttributeName: "author_id", KeyType: "HASH"}

    ],
    AttributeDefinitions: [
        { AttributeName: "author_id", AttributeType: "N" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
};

exports.createAuthor = async (req,res,dynamodb) =>{
    let result = null;
    await new Promise((res,rej)=>{
        dynamodb.createTable(params, function(err, data) {
            if (err) {
                err = JSON.stringify(err, null, 2);
                result = err;
                console.error("Unable to create table. Error JSON:", err);
            } else {
                result = JSON.stringify(data, null, 2);
                console.log("Created table. Table description JSON:", result);
            }
            res(result);
        });
    })
    res.send(result);
}