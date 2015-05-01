var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/secret', function(req, res) {
  res.status(200).sendFile(__dirname + '/public/secret.html');
});
app.get('/*', function(req,res) {
  res.status(404).send('404 Page Not Here!');
});
app.listen(process.env.PORT || 5000, function() {
  console.log('server operational!');
});
