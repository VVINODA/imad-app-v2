console.log('Loaded!');

var button= document.getElementById('counter');
var counter = 0;
// REQUEST OBJECT
var request= new XMLHttprequest();
//RESPONSE CATCH

button.onclick = function() 
{
    counter = counter + 1;
var span = document.getElementById('count');
span.innerHTML=counter.toString();
};