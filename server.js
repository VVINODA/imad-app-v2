var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var app = express();
var crypto = require('crypto');
app.use(morgan('combined'));

function hash(input , salt){
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
}

app.get('/hash/:input',function(req,res){
var hashedString = hash(req.params.input, 'this-is-some-string');
res.send(hashedString);
});

app.get('/create-user',function (req,res){
var salt = crypto.getRandomBytes(128).toString('hex');
var dbString = hash(password, salt);
pool.query('INSERT into "user" (username, password) VALUES ($1 , $2)',[username, dbString])
})




var config = {
    user: 'vvinoda',
    database: 'vvinoda',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var pool = new Pool(config);
app.get('/test-db',function(req,res){
pool.query('SELECT * FROM test',function (err,result){

    if (err){
        res.status(500).send(err.toString());
    }
    else 
    {
     res.send(JSON.stringify(result));
    } 
});     
});


var articles=
{
'artcontent1' :{
    title: 'ARTICLE-ONE',
    heading: 'ARTICLE ONE',
    date:' 20 FEBRUARY 2017',
    content: `<p>This is VINODA'S first web page.</p>`
},
'artcontent2':{
     title: 'ARTICLE-TWO',
    heading: 'ARTICLE TWO',
    date:' 21 FEBRUARY 2017',
    content: `<p>This is VINODA'S second web page.</p>`
},
'artcontent3':{
     title: 'ARTICLE-THREE',
    heading: 'ARTICLE THREE',
    date:' 22 FEBRUARY 2017',
    content: `<p>This is VINODA'S third web page.</p>`
}
};
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate =`
    <html>
    <head>
        <title>
           ${title}
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
        
        <h3> ${date.toDateString()}   </h3>
        <div>
            <h1>${heading}  </h1>
        </div>
        <div>
               ${content} 
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/articles/:articleName',function (req,res){
pool.query("SELECT * FROM articles WHERE title = $1", [req.params.articleName], function (err,result){

    if (err){
        res.status(500).send(err.toString());
    }
    else {
       if(result.rows.length === 0) {
           res.status(404).send('ARTICLE NOT FOUND');
       }
     else 
    {
        var articleData = result.rows[0];
     res.send(createTemplate(articleData));
    } 
}
});
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