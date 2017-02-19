var button = document.getElementById('counter');

button.onclick = function()
{
// REQUEST OBJECT
var request = new XMLHttpRequest();

//RESPONSE CATCH
request.onreadystatechange = function()
{
    if (request.readyState ===  request.DONE)
    {
    if (request.status === 200)
    {
    var counter = request.responseText;
    var span = document.getElementById('count');
   span.innerHTML = counter.toString(); 
   
    }
    }
    // not done
};
var counter1 = counter.toString();
counter1 = counter1 + 1;
request.open('GET','http://vvinoda.imad.hasura-app.io/counter', true);
request.send(null);
};


var submit= document.getElementById('submit-btn');

submit.onclick = function()
   {
             var request1 = new XMLHttpRequest();
             
             request1.onreadystatechange = function()
              {
          if (request1.readyState ===  request1.DONE)
             {
        //ACTION
            if (request1.status === 200)
            {
        
               var names= request1.responseText;
               names= JSON.parse(names);
   
               var list = '';
               for (var i=0; i< 10; i++)
                       {
                        list += '<li>' + names[i] + '</li>';
                       }
               var ul = document.getElementById('namelist');
               ul.innerHTML = list;
}
}

};

//make request 
var nameInput= document.getElementById('name');
var name= nameInput.value;
request1.open('GET','http://vvinoda.imad.hasura-app.io/submit-name?name=' + name,true);
request1.send(null);
};