var express = require('express');
var address = require('address');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {

  var ip = address.ip();
  var obj = {
  	ipaddress : ip,
  	software : request.headers["user-agent"].split('(')[1],
    language : request.headers["accept-language"].split(',')[0]
  }
  response.setHeader("content-type","application/json");
  response.send(JSON.stringify(obj,null,6));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


