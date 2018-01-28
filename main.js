var express = require('express');
var app = express();
var map = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/map', function(req, res){
  res.sendFile(__dirname + "/map.html");
})

//app.use('/map', map);
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://localhost:%s", port)
})
