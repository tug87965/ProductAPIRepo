// Was not able to figure out a way to implement each link with javascript as of this moment. I probably will need to in the end so as it is not static

function displaySocial(){
    var content = ` 
            <h1> Social Media Sites </h1>
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

            
            <!-- These are the social media sites that are common that I figured I would use I might add more later on -->
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href ="#" class="fa fa-reddit"></a>
            <a href ="#" class="fa fa-tumblr"></a>
            <a href ="#" class="fa fa-youtube"></a>
            <p><br><br><br<</p>
    `;

       var ele = document.createElement("div");
       ele.innerHTML = content;
       
       // May need to make a stylesheet like the one in the comments
       
       
       
       
       
       return ele;

}
