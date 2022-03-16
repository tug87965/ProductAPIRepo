function home(){
    var content = ` 
      
        <h1> Hello </h1>
            
        <p> I have more information on the about section with information about my experience with the design so far </p>


        <p> The purpose of this website is to list bad books that users can see and look at the rating of it. I am also planning on adding another feature to search for boos in the search section.</p>

    `;

       var ele = document.createElement("div");
       ele.innerHTML = content;
       return ele;

}