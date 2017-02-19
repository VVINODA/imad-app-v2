var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var counter = 0;
app.get('/counter',function (req,res)
{
   counter = counter + 1;
    res.send(counter.toString());
});

var names =[];
app.get('/submit-name',function(req,res)//submit-name?name=
{
    var name =req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

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
    res.sendFile(path.join(__dirname,'ui','madi.png'));
});



var port = 8080;
app.listen(8080,function(){
    console.log('IMAD course app listenng on port ${port}!');
});