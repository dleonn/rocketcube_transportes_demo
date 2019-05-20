const databaseName = 'ERP_Cloud_Transportes';
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dev_user:password117@clusterfordevs-qzci0.mongodb.net/test?retryWrites=true";


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

exports.read = function(collection, query){
    const client = new MongoClient(uri, { useNewUrlParser: true });

    return client.connect()
    .then( conn => {
        return  conn.db(databaseName).collection(collection).find(query);
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


