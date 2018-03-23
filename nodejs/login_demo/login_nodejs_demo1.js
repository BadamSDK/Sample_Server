var http = require('http');
var querystring = require('querystring');
 
var contents = querystring.stringify({
    appid:'00ab21dc40b382db0603411c7d50a899',
    openid:'1034535',
    token:'ca122872ba136b988923c0288642d7a3'
});
 
var options = {
    host:'pay2.badambiz.com',
    path:'/api/auth/verify_token/',
    method:'POST',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Length':contents.length
    }
}
 
var req = http.request(options, function(res){
    res.setEncoding('utf8');
    res.on('data',function(data){
        console.log("data:",data);
    });
});
 
req.write(contents);
req.end;
