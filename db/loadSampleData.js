const fs = require('fs');
exports.loadData = async (req,res,docClient) => {
    try {
        var authorData = JSON.parse(fs.readFileSync(__dirname+'/author.json'), 'utf8');
        var result = await new Promise((resolve, rej) => {
            authorData.forEach(function (author) {
                var params = {
                    TableName: "Author",
                    Item: {
                        "author_id": author.id,
                        "name": author.name
                    }
                };
                docClient.put(params, function (err, data) {
                    if (err) {
                        resolve(err);
                        console.error("Unable to add data Error JSON:", err);
                    } else {
                        console.log("PutItem succeeded:");
                        resolve("Data loaded");
                    }
                });
            });
        })
        res.send(result);
    } catch (e) {
        console.log("error",JSON.stringify(e))
        res.send(await Promise.resolve("Error occurred"+e.code));
    }
}
