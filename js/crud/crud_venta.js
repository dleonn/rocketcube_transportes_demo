const mongoDB = require('../database/databaseHandler');

exports.create = function(newItem){
    return mongoDB.create('Venta',newItem)
    .then(function(item){
        return item;
    });
    //console.log('create response : ',response);
    //return response;
}

exports.read = function(query){

    return mongoDB.read('Venta',query)
    .then(function(item){
        return item;
    });
}

exports.update = function(itemToUpdate){
    return itemToUpdate;
}

exports.delete = function(itemToDelete){
    return itemToDelete;
}