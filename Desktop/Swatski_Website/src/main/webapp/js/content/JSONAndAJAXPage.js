function JSONAndAJAXPage(){
    
    var content = ` 
            <h1> AJAX and JSON Page will be worked on. THIS WILL BE TITLED USERS OF AJAX AND JSON </h1>

            <p> will be working on this page and making sure it fits the necessary standards and then I will be figuring out a wy to do the other parts I have missed from the previous assignments </p>
            <p> Objects below </p>

            
              
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;
       
       
    var userList = document.getElementById("container");
    var call = 'json/users.json';
    ajax(call, handleResponse, userList);
    
    ele.innerHTML += userList;
       
// remember that obj is what was on the page gotten by the AJAX call, run through JSON.parse()
    // RENAME THIS FUNCITON LATER
    function handleResponse(obj) {
        

               // WHY DOESNT THE OBJECTRESULTS NOT WORK THIS IS SO WEIRD TO ME
               // It weirldy appends everything on the top of the page
               // I will be working on getting in in the right place later on
               
               // Will add this to a table later on but I am happy that my ajax call works and I will be implementing this same thing over in my addedBooks section
               // Will need to get this into a slideshow like format later on just result
               
            for (var i = 0; i < obj.length; i++) {
                
                var user = document.createElement("div");
                user.classList.add("user");
                userList.appendChild(user);
                
                var userID = document.createElement("p");
                userID.innerHTML = "userID: " + obj[i].webUserId;
                user.appendChild(userID);
                
                var email = document.createElement("p");
                email.innerHTML = "Email: " + obj[i].userEmail;
                user.appendChild(email); 
                
                var image = document.createElement("img");
                image.src = obj[i].image;
                user.appendChild(image);
                
                var birthday = document.createElement("p");
                birthday.innerHTMl = "Birthday: " + obj[i].birthday;
                user.appendChild(birthday);
                
                var membershipFee = document.createElement("p");
                membershipFee.innerHTML = "Fee: " + obj[i].membershipFee;
                user.appendChild(membershipFee);
                
                var userRoleID = document.createElement("p");
                userRoleID.innerHTML = "UserRole ID: " + obj[i].userRoleId;
                user.appendChild(userRoleID);
                
                var userRoleType = document.createElement("p");
                userRoleType.innerHTML = "UserRole Type: " + obj[i].userRoleType;
                user.appendChild(userRoleType); 
            
            }

    } // end handleResponse   



     return ele;

}
