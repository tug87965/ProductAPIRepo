function commentForWebmaster(){
    var content = ` 
            <h1> Comments for the Webmaster </h1>
    
            <h3> Leave a nice comment for the webmaster </h3>
    `;

       var ele = document.createElement("div");
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
       
       
       
       
       
       
       
       
       
       return ele;
}
