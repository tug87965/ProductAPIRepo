
function poc(){
    /*
    var content = ` 
        <h1> Proof of Concept Page </h1>
        
        <h3>Sign Up for a Bad Books account </h3>
    
        <p> There are 3 sections of my code if you look at the pdf. poc, comment, and social. Currently, they are all being injected into the poc.html document. I will have comment and social appear after the submit button is pressed </p>
        <br>
    `;

       var ele = document.createElement("div");
       ele.innerHTML = content;
       */
      
        var ele = document.createElement("div");
        ele.innerHTML += "<h2> login here </h2>";
       
       // All of this section deals with display how to enter in information
       
       var emailValue;
       ele.innerHTML += "Email ";
       var email = document.createElement("input");
       email.setAttribute("type", "text");
       ele.appendChild(email);
       
       var passValue;
       ele.innerHTML += " Password ";
       var pass = document.createElement("input");
       pass.setAttribute("type", "text");
       ele.appendChild(pass);
       
       var submit = document.createElement("button");
       submit.innerHTML = " Submit";
       ele.appendChild(submit);
       
       var clear = document.createElement("button");
       clear.innerHTML = " Clear Password";
       ele.appendChild(clear);
       
       var notesForTester = document.createElement("p");
       notesForTester.innerHTML = "If you hit submit, it will submit the info and open up the comment page and social sites. If you hit clear, it clears everything.";
       ele.appendChild(notesForTester);
       
       submit.onclick = function(){
           emailValue = email.value;
           passValue = pass.value;
           
           ele.appendChild(displaySocial());
       
           ele.appendChild(commentForWebmaster());
           
           
          
       };
       
       clear.onclick = function(){
            email.value = "";
            pass.value = "";
            
            
       };
       //var comment = document.createElement("h1");
       //comment.innerHTML = "Will add the function to actually have these display when I finish entering in the informaton properly for it."
       //ele.appendChild(comment);
       
       
       // Adds in the social and comment page
       
       //ele.appendChild(displaySocial());
       
       //ele.appendChild(commentForWebmaster());

       return ele;

}
