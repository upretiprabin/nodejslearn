exports.deleteItem = async (req,res,docClient) => {
    let requestBody = req.body;
    var params = {
        TableName:"Author",
        Key:{
            "author_id": requestBody.author_id
        },
        ConditionExpression: "author_name = :n",
        ExpressionAttributeValues:{
            ":n":requestBody['author_name']
        }
    };

    var result = await new Promise((resolve,reject)=>{
        docClient.delete(params, function (err, data) {
            if (err) {
                err = JSON.stringify(err, null, 2)
                resolve(err);
                console.error("Unable to get data Error JSON:", err);
            } else {
                result = JSON.stringify(data, null, 2)
                console.log("data added",result);
                resolve(result);
            }
        });
    })
    res.send(result);
}
