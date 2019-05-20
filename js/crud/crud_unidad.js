exports.create = function(newItem){
    var itemToInsert = {};
    itemToInsert.numeroEconomico = newItem.numeroEconomico;
    itemToInsert.numeroChasis = newItem.numeroChasis;
    itemToInsert.modelo = newItem.modelo;
    itemToInsert.marca = newItem.marca;
    itemToInsert.anioModelo = newItem.anioModelo;
    itemToInsert.tipo = newItem.tipo;
    itemToInsert.fechaCompra = newItem.fechaCompra;

    return itemToInsert;
}

exports.read = function(idItem){

    var item = {};
    item.numeroEconomico = '#209098';
    item.numeroChasis = '190983872';
    item.modelo = '1998';
    item.marca = 'Kenworth';
    item.anioModelo = '2019';
    item.tipo = 'Camión';
    item.fechaCompra = '20-05-2019';

    return item;
}

exports.update = function(itemToUpdate){
    return itemToUpdate;
}

exports.delete = function(itemToDelete){
    return itemToDelete;
}