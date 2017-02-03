var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/',function (req,res){
    res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/wbpageone-v,',function (req,res){
    res.send('web page one-v is served');
});
app.get('/ui/madi.png',function (req,res){
    res.sendFile(path.join(__dirname,'ui','madi.png'));
});

var port = 8080;
app.listen(8080,function(){
    console.log('IMAD course app listenng on port ${port}!');
});