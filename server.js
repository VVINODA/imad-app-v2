var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/',function (req,res){
    res.sendFile(path.join(__dirname,'ui','index.html'));
});


app.get('/mypage1',function (req,res){
   res.sendFile(path.join(__dirname,'ui','mypage1.html'));
});
app.get('/wbp1',function (req,res){
   res.sendFile(path.join(__dirname,'ui','wbp1.html'));
});
app.get('/ui/style.css',function (req,res){
    res.sendFile(path.join(__dirname,'ui','style.css'));
});
app.get('/ui/main.js',function (req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});
 app.get('/ui/madi.png',function (req,res){
    res.sendFile(path.join(__dirname,'ui','https://cloud.imad.hasura.io/rstatic/dist/53034ebcba2fcc0cbccf30fcd1b3bb14.png'));
});
var counter = 0;
app.get('/counter',function (req,res){
   counter= counter + 1;
   res.send(counter.toString());
});

var port = 8080;
app.listen(8080,function(){
    console.log('IMAD course app listenng on port ${port}!');
});