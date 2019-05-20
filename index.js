var express = require('express');

var restVenta = require('./js/restMethods/rest_venta');
var restUnidad = require('./js/restMethods/rest_unidad');

var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

restVenta.rest(app);
restUnidad.rest(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
