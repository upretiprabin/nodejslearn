exports.addItem = async (req,res,docClient) => {
    let requestBody = req.body;
    var params = {
        TableName: "Author",
        Item: {
            "author_id": requestBody.author_id,
            "author_name": requestBody['author_name']
        }
    };
    var result = await new Promise((resolve,reject)=>{
        docClient.put(params, function (err, data) {
            if (err) {
                resolve(err);
                console.error("Unable to add data Error JSON:", err);
            } else {
                console.log("PutItem succeeded:");
                resolve(params.Item);
            }
        });
    })
    res.send(result);
}
