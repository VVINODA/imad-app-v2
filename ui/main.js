console.log('Loaded!');

var element= document.getElementById('main-text'
);

element.innerHTML='New data using JavaScript';

var img= document.getElementById('madi');
var leftmargin= 100;
function moveright()
{
    
    img.style.leftmargin = '100px';
}
img.onclick= function() 
{
    var interval=setInterval(moveright,10);
};