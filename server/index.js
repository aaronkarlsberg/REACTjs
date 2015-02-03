var express = require('express')
var app = express()
var Firebase = require('firebase')
var fb = new Firebase('https://backbonereact.firebaseio.com/')
var bodyParser = require('body-parser')

app.use(bodyParser());

app.set('view engine', 'jade');


app.get('/', function (req, res) {
  res.render('index');
})
app.get('/laters', function (req, res) {
  fb.once('value', function(snapshot) {
    res.send(snapshot.val());
  });
})
app.post('/laters', function (req, res) {
  var data = {};
  data[req.body.name] = {
    url: req.body.url
  };
  fb.update(data, function(error) {
    if (error) {
      res.send('Failure');
    } else {
      res.send('Success');
    }
  });
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
});
