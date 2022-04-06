exports.scan = async (req,res,docClient) => {
    var params = {
        TableName: "Author"
    };
    var result = await new Promise((resolve,reject)=>{
        docClient.scan(params, function (err, data) {
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