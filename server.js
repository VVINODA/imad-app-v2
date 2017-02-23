var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles=
{
'artcontent1' :{
    title: 'ARTICLE ONE',
    heading: 'ARTICLE ONE',
    date:' 20 FEBRUARY 2017',
    content: `<p>This is VINODA'S first web page.</p>`
},
'artcontent2':{
     title: 'ARTICLE TWO',
    heading: 'ARTICLE TWO',
    date:' 21 FEBRUARY 2017',
    content: `<p>This is VINODA'S second web page.</p>`
},
'artcontent3':{
     title: 'ARTICLE THREE',
    heading: 'ARTICLE THREE',
    date:' 22 FEBRUARY 2017',
    content: `<p>This is VINODA'S third web page.</p>`
}
};
function htmlTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`
{
    <html>
    <head>
        <title>
           $(title)
        </title>
        <meta name="viiewport" content="width-device-width, initial scale=1">
        <link href="/ui/style.css" rel="styledheet /">
    
    </head>
    <body>
        <div class="container">
        <div>
            <o href="/">Home</o>
        </div>
        
        <hr>
        
        <h1> $(date)   </h1>
        
        <div>
            <h3>$(heading)  </h3>
        </div>
             <div>
               $(content) 
            </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/:articleName',function (req,res){
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

/*var counter = 0;
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
});*/


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