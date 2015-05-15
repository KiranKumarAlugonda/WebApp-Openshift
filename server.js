var express = require('express');
var app = express();
var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data

var developer = [
    {
        firstName: 'Alice', lastName: 'kumar', apps: [
            {name : 'Word'},{name : 'PowerPoint'},{name:'Excel'}
        ]
    },

    {
        firstName: 'alugonda', lastName: 'kumar', apps: [
              { name: 'Word' }, { name: 'PowerPoint' }, { name: 'Excel' }
        ]
    },

    {
        firstName: 'chris', lastName: 'kumar', apps: [
              { name: 'Word' }, { name: 'PowerPoint' }, { name: 'Excel' }
        ]
    },

    {
        firstName: 'jason', lastName: 'kumar', apps: [
              { name: 'Word' }, { name: 'PowerPoint' }, { name: 'Excel' }
        ]
    }
]


app.get('/api/developer', function (req, res) {
    res.json(developer);
})

app.delete('/api/developer/:index', function (req, res) {
    developer.splice(req.params.index, 1);
    res.json(developer);
})

app.post('/api/developer', function (req, res) {
    var newDeveloper = req.body;
    developer.push(newDeveloper);
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