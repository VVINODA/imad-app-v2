var button= document.getElementById('counter');

button.onclick = function()
{
// REQUEST OBJECT
var request1= new XMLHttpRequest();

//RESPONSE CATCH
request1.onreadystatechange = function()
{
    if (request1.readyState ===  XMLHttpRequest.DONE)
    {
    if (request1.status === 200)
    {
    var counter = request1.responseText;
    var span = document.getElementById('count');
    span.InnerHTML = counter.toString();
    }
    }
    // not done
};

request1.open('GET','http://vvinoda.imad.hasura-app.io/counter', true);
request1.send(null);
};


var submit= document.getElementById('submit-btn');
submit.onclick = function()
{
    var request= new XMLHttpRequest();
    request.onreadystatechange = function()
{
    if (request.readyState ===  XMLHttpRequest.DONE)
    {
        //ACTION
    if (request.status === 200)
    {
        
    var names= request.responseText;
    names= JSON.parse(names);
   
    var list='';
    for (var i=0;i<names.length;i++)
        {
    list+= '<li>'+ names[i] +'</li>';
        }
var ul = document.getElementById('namelist');
ul.InnerHTML= list;
}
}

};

//make request 
var nameInput= document.getElementById('name');
var name= nameInput.value;
request.open('GET','http://vvinoda.imad.hasura-app.io/submit-name?name='+ name,true);
request.send(null);
};