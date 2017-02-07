console.log('Loaded!');

var button= document.getElementById('counter');
var counter = 0;
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

request.open('GET',)