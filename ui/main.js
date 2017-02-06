console.log('Loaded!');

var button= document.getElementById('count');
var counter = 0;

button.onclick = function() 
{
    counter = cunter + 1;
var span = document.getElementById('count');
span.innerHTML=counter.toString();
};