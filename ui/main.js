console.log('Loaded!');

var element= document.getElementById('main-text'
);

element.innerHTML='New data using JavaScript';

var img= document.getElementById('madi');
var leftmargin= 100;
function moveright()
{
    leftmargin= leftmargin + 10;
    img.style.leftmargin= leftmargin + '10px';
}
img.onclick= function() 
{
    var interval=setInterval(moveright,10);
};