var crud = require('../crud/crud_venta');

exports.rest= function(app){
    app.post('/api/venta', function (req, res) {
        res.send(crud.create(req.body));
    });

    app.get('/api/venta', function (req, res) {
        res.send(crud.read('unId :b'));
    });

    app.put('/api/venta', function (req, res) {
        res.send(crud.update('unId :b'));
    });

    app.delete('/api/venta', function (req, res) {
        res.send(crud.delete('unId :b'));
    });
}