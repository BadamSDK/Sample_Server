var http = require('http');
var querystring = require('querystring');
 
var contents = querystring.stringify({
    appid:'', //此处填写游戏APPID
    token:''  //此处填写token
});
 
var options = {
    host:'open.badambiz.com',
    path:'/api/user/verify_token/',
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
