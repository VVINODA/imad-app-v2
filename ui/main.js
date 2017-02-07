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
    var counter = request.responseText;
    var span = document.getElementById('counter');
    span.InnerHTML = counter.toString();
    }
    // not done
};

//make request 

request.open('GET','http://vvinoda.imad.hasura-app.io/counter',true)
request.send(null);
};