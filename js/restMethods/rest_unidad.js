var crud = require('../crud/crud_unidad');

exports.rest = function(app){
    app.post('/api/unidad', function (req, res) {
        res.send(crud.create('unId :b'));
    });

    app.get('/api/unidad', function (req, res) {
        res.send(crud.read('unId :b'));
    });

    app.put('/api/unidad', function (req, res) {
        res.send(crud.update('unId :b'));
    });

    app.delete('/api/unidad', function (req, res) {
        res.send(crud.delete('unId :b'));
    });
}