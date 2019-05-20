const mongoDB = require('../database/databaseHandler');

exports.create = function(newItem){
    var response = mongoDB.create('Venta',newItem);
    console.log('create response : ',response);
    return response;
}

exports.read = function(idItem){

    var item = {};
    item.name = 'Venta de Mayo';

    return item;
}

exports.update = function(itemToUpdate){
    return itemToUpdate;
}

exports.delete = function(itemToDelete){
    return itemToDelete;
}