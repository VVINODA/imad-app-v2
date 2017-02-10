console.log('Loaded!');

var button= document.getElementById('counter');
button.onclick = function()
{
// REQUEST OBJECT
var request= new XMLHttpRequest();

//RESPONSE CATCH
request.onreadystatechange = function()
{
    if (request.readyState ===  XMLHttpRequest.DONE)
    {
        //ACTION
    }
    if (request.readyState === 200)
    {
    var counter = counter + 1;
    var span = document.getElementById('count');
    span.InnerHTML = counter.toString();
    }
    // not done
};




var submit= document.getElementById('submt-btn');
submit.onclick = function()
{
    if (request.readyState ===  XMLHttpRequest.DONE)
    {
        //ACTION
 if (request.readyState === 200)
    {
        var name= request.responseText;
    names= JSON.parse(names);
    var list='';
    for (var i=0;i<name.length;i++)
        {
    list+= '<li>'+ name[i] +'</li>';
        }
var ul = document.getElementById('namelist');
ul.InnerHTML=list;
}
}
}
//make request 
var nameInput= document.getElementById('name');
var name= nameInput.value;
request.open('GET','http://vvinoda.imad.hasura-app.io/submit-name?name=' + name,true)
request.send(null);
};