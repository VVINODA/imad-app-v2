console.log('Loaded!');

var element= document.getElementById('main-text'
);

element.innerHTML='New data using JavaScript';

var image= document.getElementById('image');
var leftmargin= 0;
function moveright()
{
    leftmargin+= 'px';
}
image.onclick= function()
{
    var interval=setInterval(moveright,10);
}