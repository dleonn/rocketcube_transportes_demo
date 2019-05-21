const databaseName = 'ERP_Cloud_Transportes';
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
const uri = "mongodb+srv://dev_user:password117@clusterfordevs-qzci0.mongodb.net/ERP_Cloud_Transportes?retryWrites=true";


exports.create = function(collection, document){

    const client = new MongoClient(uri, { useNewUrlParser: true });

    return client.connect()
    .then( conn => {
        return  conn.db(databaseName).collection(collection).insertOne(document);
    })
    .then( result => {
        //document._Id = result.insertedId;
        console.log('document result:', document);
        client.close();

        return document;
    })
    .catch(err => {
        console.log('err : ',err);
        client.close();
    })
    
}

exports.read = function(collection, queryParams){
    const client = new MongoClient(uri, { useNewUrlParser: true });

    var query = {};

    console.log('queryParams', queryParams);

    if(queryParams._id){
        query._id = new ObjectId(queryParams._id);
    }

    console.log('query',query);

    return client.connect()
    .then( conn => {
        return  conn.db(databaseName).collection(collection).find(query).toArray();
    })
    .then( result => {
        console.log('read result:', result);
        client.close();

        return result;
    })
    .catch(err => {
        console.log('err : ',err);
        client.close();
    })
}


