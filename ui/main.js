console.log('Loaded!');

var button= document.getElementById('count'
);

element.innerHTML='New data using JavaScript';

var img = document.getElementById('madi');
var  marginLeft=0;
function moveRight()
{
 marginLeft= marginLeft + 5;
 img.style.marginLeft = marginLeft + 'px';   
}

img.onclick = function() 
{
var interval = setInterval(moveRight,1)
};