var express = require('express');
var address = require('address');
var os = require('os');
var osName = require('os-name');
var getBrowserLanguage = require('get-browser-language');
var lang = getBrowserLanguage();
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {

  var ip = address.ip();
  var osname = osName(os.platform(),os.release());
  var langu = lang();

  var obj = {
  	ipaddress : ip,
  	language : langu,
  	software : osname
  }

  response.send(JSON.strigify(obj));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


