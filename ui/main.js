console.log('Loaded!');

var element= document.getElementById('main-text'
);

element.innerHTML='New data using JavaScript';

var img = document.getElementById('madi');
var  marginLeft=0;
function moveright()
{
 marginLeft= marginLeft+'px';
 img.style.marginLeft = '100px';   
}
img.onclick = function() 
{

var interval = setInterval(moveright,10)
};