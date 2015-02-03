var express = require('express')
var app = express()
var Firebase = require('firebase')
var fb = new Firebase('https://backbonereact.firebaseio.com/')

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
})
app.get('/:user', function (req, res) {
  fb.child(req.params.user).once('value', function(snapshot) {
    res.send(snapshot.val());
  });
  // console.log(req.params)
  res.send(req.params)
})
app.post('/', function (req, res) {
  fb.set('value', function(snapshot) {
    res.send(snapshot.val());
  });
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
});
