var http = require('http');

var postHTML =
  '<html><head><meta charset="utf-8"></meta><title>Displaying five responses</title></head>' +
  '<body>' +
  '<form method="post">' +
  'First Name: <input name="FirstName"><br><br>' +
  'Last Name: <input name="LastName"><br><br>' +
  'Emailid: <input name="Emailid"><br><br>'+
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
var a=[];
var c=0;
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    if(body!=''){
    a[c]=body.split('&');
    //console.log(c);
    if(c==4)
        console.log(a);
    c++;    
    }
    
    res.writeHead(200);   
    res.end(postHTML);
     
  });
}).listen(8080);