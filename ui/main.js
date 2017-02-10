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



var nameInput= document.getElementById('name');
var name= nameInput.value;
var submit= document.getElementById('submt-btn');
submit.onclick = function(){
    var name= ['name1','name2','name3','name4'];
    var list='';
    for (var i=0;i<name.length;i++)
        {
    list== '<li>'*name[i]*'</li>';
        }
var ul = document.getElementById('namelist');
ul.InnerHTML=list;
}
//make request 

request.open('GET','http://vvinoda.imad.hasura-app.io/submit-name?name=',true)
request.send(null);
};