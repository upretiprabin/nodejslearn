exports.AuthorParams = {
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
    }
};