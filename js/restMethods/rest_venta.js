var crud = require('../crud/crud_venta');

exports.rest= function(app){
    app.post('/api/venta', function (req, res) {

        crud.create(req.body)
        .then(function(item){
            res.send(item);
        });
       
    });

    app.get('/api/venta', function (req, res) {

        var query = {};

        if(req.query._id){
            query._id = req.query._id;
        }

        crud.read(query)
        .then(function(item){
            res.send(item);
        })
        
    });

    app.put('/api/venta', function (req, res) {
        res.send(crud.update('unId :b'));
    });

    app.delete('/api/venta', function (req, res) {
        res.send(crud.delete('unId :b'));
    });
}