function commentForWebmaster(ele){
        var content = ` 
                <h1> Comments for the Webmaster </h1>

                <h3> Leave a nice comment for the webmaster </h3>
   
        `;

        
        ele.innerHTML = content;
        
        
        
    
        ele.innerHTML += "First name<br>";
        var first = document.createElement("input");
        first.setAttribute("type", "text");
        ele.appendChild(first);


        ele.innerHTML += "<br> <br> Last name<br>";
        var last = document.createElement("input");
        first.setAttribute("type", "text");
        ele.appendChild(last);


        ele.innerHTML += "<br> <br> Subject line <br>";
        var subject = document.createElement("input");
        ele.setAttribute("type", "text");
        ele.appendChild(subject);


        // Adjust the size of this later on
        ele.innerHTML += "<br> <br> Comment <br>";
        var comment = document.createElement("input");
        comment.setAttribute("type", "text");
        ele.appendChild(comment);

        ele.innerHTML += "<br>";
        
        // The submit and clear button similar to what is found in poc.js
            // THese will result that when pressed they will either send the information along or clear everything on the page using a display like function()
       var submit = document.createElement("button");
       submit.innerHTML = "Submit";
       ele.appendChild(submit);
       
       var clear = document.createElement("button");
       clear.innerHTML = " Clear info";
       ele.appendChild(clear);
       
       // Both of the submission things work but it doesnt play great so far
       
       // clears everything in the value page
       clear.onclick = function(){
           console.log("Inside the clear onclick");
           first.value= "";
           last.value = "";
           subject.value = "";
           comment.value = "";
           
       };
       
       
       
       // If you want to have the message display multiple times put message and append inside submit.onclick
       var message = document.createElement("p");
       submit.onclick = function(){
           message.innerHTML = "Thank you, the message has been recieved.";
           firstValue = first.value;
           lastValue = last.value;
           subjectValue = subject.value;
           commentValue = comment.value;
       };
       

       ele.appendChild(message);
       
       return ele;
}
