var button = document.getElementById('counter');

button.onclick = function()
{
// REQUEST OBJECT
var request= new XMLHttpRequest();

//RESPONSE CATCH
request.onreadystatechange = function()
{
    if (request.readyState ===  XMLHttpRequest.DONE)
    {
    if (request.status === 500)
    {
    var counter = request.responseText;
    var span = document.getElementById('counter');
    span.InnerHTML = counter.toString();
    }
    }
    // not done
};

request.open('GET','http://vvinoda.imad.hasura-app.io/counter', true);
request.send(null);
};


var submit= document.getElementById('submit-btn');

submit.onclick = function()
   {
             var request= new XMLHttpRequest();
             
             request.onreadystatechange = function()
              {
          if (request.readyState ===  XMLHttpRequest.DONE)
             {
        //ACTION
            if (request.status === 200)
            {
        
               var names= request.responseText;
               names= JSON.parse(names);
   
               var list = ' ';
               for (var i=0; i< names.length; i++)
                       {
                        list += '<li>' + names[i] + '</li>';
                       }
               var ul = document.getElementById('namelist');
               ul.InnerHTML = list;
}
}

};

//make request 
var nameInput= document.getElementById('name');
var name= nameInput.value;
request.open('GET','http://vvinoda.imad.hasura-app.io/submit-name?name=' + name,true);
request.send(null);
};