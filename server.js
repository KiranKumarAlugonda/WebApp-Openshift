var express = require('express');
var app = express();

var developer = [
    { firstName: 'Alice', lastName: 'kumar' },

    { firstName: 'alugonda', lastName: 'kumar' },

    { firstName: 'chris', lastName: 'kumar' },

    { firstName: 'jason', lastName: 'kumar' }
]


app.get('/api/developer', function (req, res) {
    res.json(developer);
})

app.delete('/api/developer/:index', function (req, res) {
    developer.splice(req.params.index, 1);
    res.json(developer);
})

app.use(express.static(__dirname + '/public'));

//app.get('/', function (req, res) {
//    res.send('Hello World!');
//});

//var server = app.listen(3000, function () {

//    var host = server.address().address;
//    var port = server.address().port;

//    console.log('Example app listening at http://%s:%s', host, port);

//});

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'; 
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000 ;
app.listen(port, ip);